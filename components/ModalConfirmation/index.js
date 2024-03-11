export default function Modal({ title, onclickYes, onclickNo, content }) {
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
        <div className="bg-white p-8 max-w-md mx-auto rounded-md">
          <h2 className="text-xl font-bold mb-4">{title}</h2>
          <p className="text-sm font-thin text-gray">{content}</p>
          <div className=" flex gap-2 mt-4">
            <button
              className="bg-green-400 py-2 px-4 rounded-md hover:bg-green-500"
              onClick={onclickYes}
            >
              Ya
            </button>
            <button
              className="bg-red-400 py-2 px-4 rounded-md hover:bg-red-500"
              onClick={onclickNo}
            >
              Tidak
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
