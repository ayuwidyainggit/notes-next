import Modal from "@/components/ModalConfirmation";
import NotesModal from "@/components/NotesModal";
import Layout from "@/layout";
import { useEffect, useState } from "react";

export default function Notes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [note, setNote] = useState("");

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openEditModal = () => {
    setIsModalEditOpen(true);
  };

  // Function to close the modal
  const closeEditModal = () => {
    setIsModalEditOpen(false);
  };

  const openAddModal = () => {
    setIsModalAddOpen(true);
  };

  // Function to close the modal
  const closeAddModal = () => {
    setIsModalAddOpen(false);
  };

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((res) => console.log("response", res))
      .catch((err) => console.log("err", err));
  });
  return (
    <Layout metaTitle="list-notes">
      <div className="relative w-[80%] left-[10%]  grid grid-cols-12  md:gap-4 gap-0">
        <div className="col-span-12 md:col-span-4 border p-8 h-[400px] hover:shadow-lg rounded-md">
          <div className=" font-bold  relative">
            <p
              className="text-3xl absolute  top-0 right-0  text-gray-400 hover:text-black cursor-pointer"
              onClick={openAddModal}
            >
              +
            </p>
          </div>
          <p className="font-bold text-xl text">Title</p>
          <p className="text-gray-500">desc</p>
          <div className="absolute bottom-4   gap-4">
            <button
              className="bg-orange-400 w-[80px] py-2 rounded-md hover:shadow-md hover:bg-orange-500"
              onClick={openEditModal}
            >
              Edit
            </button>
            <button
              className="bg-red-500 w-[80px] py-2 rounded-md ml-4 hover:shadow-md hover:bg-red-600"
              onClick={openModal}
            >
              Hapus
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal
          title="Are you sure to delete this data?"
          content="If you delete you cannot restore your notes"
          onclickNo={closeModal}
        />
      )}

      {isModalEditOpen && (
        <NotesModal
          title="Edit Data"
          onclickCancel={closeEditModal}
          onclickSave={closeEditModal}
        />
      )}

      {isModalAddOpen && (
        <NotesModal
          title="Add Data"
          onclickCancel={closeAddModal}
          onclickSave={closeAddModal}
        />
      )}
    </Layout>
  );
}
