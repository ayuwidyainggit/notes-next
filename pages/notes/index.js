import Modal from "@/components/ModalConfirmation";
import NotesModal from "@/components/NotesModal";
import Layout from "@/layout";
import { useEffect, useState } from "react";
import { useMutation } from "@/hooks/useMutation";
import { useRouter } from "next/router";

export default function Notes({ note }) {
  const router = useRouter();
  const { mutate } = useMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [myNote, setMyNote] = useState([]);
  const [deleteNoteId, setDeleteNoteId] = useState(null);
  const [editNoteId, setEditNoteId] = useState(null);
  const [notesInput, setNotesInput] = useState({
    title: "",
    description: "",
  });
  const [notesEdit, setNotesEdit] = useState();

  console.log("getstaticprops", notesEdit);

  const openModal = (id) => {
    setIsModalOpen(true);
    setDeleteNoteId(id);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openEditModal = (id) => {
    setIsModalEditOpen(true);
    notesById(id);
    setEditNoteId(id);
  };

  const closeEditModal = () => {
    setIsModalEditOpen(false);
  };

  const openAddModal = () => {
    setIsModalAddOpen(true);
  };

  const closeAddModal = () => {
    setIsModalAddOpen(false);
  };

  const handleSubmit = async () => {
    const response = await mutate({
      url: "https://paace-f178cafcae7b.nevacloud.io/api/notes",
      payload: notesInput,
    });

    console.log("response ", response);

    if (response.success) {
      closeAddModal();
      router.reload();
    } else {
      console.error("Failed to add data");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/deleteNotes?id=${id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      if (result?.success) {
        router.reload();
      }
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const notesById = async (id) => {
    try {
      const res = await fetch(
        `https://paace-f178cafcae7b.nevacloud.io/api/notes/${id}`
      );
      const listNotes = await res.json();
      setNotesEdit(listNotes?.data);
    } catch (error) {}
  };

  const handleEditSubmit = async () => {
    try {
      const response = await fetch(`/api/editNotes?editNoteId=${editNoteId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: notesEdit?.title,
          description: notesEdit?.description,
        }),
      });
      const result = await response.json();
      if (result?.success) {
        closeEditModal();
        router.reload();
      }
      console.log("result ", result);
    } catch (error) {
      console.error("Error submitting edit:", error);
    }
  };

  return (
    <Layout metaTitle="list-notes" title="List Notes">
      <div className="relative w-[80%] left-[10%]  grid grid-cols-12  md:gap-4 gap-3 md:mt-20 mt-60">
        <div className="col-span-12 border-b-2 border-gray-300 pb-2">
          <p className="font-bold text-2xl">My Note</p>
        </div>
        <div className=" col-span-12  relative">
          <button
            className="bg-blue-400 hover:bg-blue-500 hover:shadow-md p-2 rounded-md text-white"
            onClick={openAddModal}
          >
            Add Notes
          </button>
        </div>
        {note.data.length === 0 ? (
          <div>No data </div>
        ) : (
          <>
            {note.data.map((item) => (
              <div
                key={item.id}
                className="relative col-span-12 md:col-span-4 border p-8 h-[400px] hover:shadow-lg rounded-md"
              >
                <p className="font-bold text-xl text">{item.title}</p>
                <p className="text-gray-500">{item.description}</p>
                <div className="absolute bottom-4 right-4 gap-4">
                  <button
                    className="bg-orange-400 w-[80px] py-2 rounded-md hover:shadow-md hover:bg-orange-500 text-white"
                    onClick={() => openEditModal(item?.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 w-[80px] py-2 rounded-md ml-4 hover:shadow-md hover:bg-red-600 text-white"
                    onClick={() => openModal(item?.id)}
                  >
                    Hapus
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      {isModalOpen && (
        <Modal
          title="Are you sure to delete this data?"
          content="If you delete you cannot restore your notes"
          onclickNo={closeModal}
          onclickYes={() => {
            closeModal();
            if (deleteNoteId) {
              handleDelete(deleteNoteId);
            }
          }}
        />
      )}

      {isModalEditOpen && (
        <NotesModal
          valueTitle={notesEdit?.title || ""}
          valueDesc={notesEdit?.description || ""}
          onChangeTitle={(event) =>
            setNotesEdit({ ...notesEdit, title: event.target.value })
          }
          onChangeDesc={(event) =>
            setNotesEdit({ ...notesEdit, description: event.target.value })
          }
          title="Edit Data"
          onclickCancel={closeEditModal}
          onclickSave={() => handleEditSubmit()}
        />
      )}

      {isModalAddOpen && (
        <NotesModal
          title="Add Data"
          onclickCancel={closeAddModal}
          onclickSave={() => handleSubmit()}
          onChangeTitle={(event) =>
            setNotesInput({ ...notesInput, title: event.target.value })
          }
          onChangeDesc={(event) =>
            setNotesInput({ ...notesInput, description: event.target.value })
          }
        />
      )}
    </Layout>
  );
}

// export async function getStaticProps() {
//   const res = await fetch("http://localhost:3000/api/notes");
//   const note = await res.json();
//   return { props: { note } };
// }

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("http://localhost:3000/api/notes");
  const note = await res.json();
  // Pass data to the page via props
  return { props: { note } };
}
