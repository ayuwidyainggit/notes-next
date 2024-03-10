import Layout from "@/layout";

export default function notes() {
  return (
    <Layout metaTitle="list-notes">
      <div className="relative w-[80%] left-[10%]  grid grid-cols-12  md:gap-4 gap-0">
        <div className="col-span-12 md:col-span-4 border p-8 h-[400px] hover:shadow-lg rounded-md">
          <div className=" font-bold  relative">
            <p className="text-3xl absolute  top-0 right-0  text-gray-400 hover:text-black cursor-pointer">
              {" "}
              +
            </p>
          </div>
          <p className="font-bold text-xl text">Title</p>
          <p className="text-gray-500">desc</p>
          <div className="absolute bottom-4   gap-4">
            <button className="bg-orange-400 w-[80px] py-2 rounded-md hover:shadow-md hover:bg-orange-500">
              Edit
            </button>
            <button className="bg-red-500 w-[80px] py-2 rounded-md ml-4 hover:shadow-md hover:bg-red-600">
              Hapus
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
