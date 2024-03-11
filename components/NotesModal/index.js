export default function NotesModal({
  title,
  onclickCancel,
  onclickSave,
  value,
  onChange,
}) {
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 ">
        <div className="bg-white p-8 w-[600px] mx-auto rounded-md">
          <h2 className="text-xl font-bold mb-4">{title}</h2>
          <div className="">
            <input
              type="text"
              value={value}
              onChange={onChange}
              placeholder="Input title here"
              className="w-full px-4 py-2 bg-gray-100  rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>
          <div className="mt-2">
            <textarea
              type="text"
              value={value}
              onChange={onChange}
              placeholder="Input description here"
              className="w-full px-4 py-2 bg-gray-100  rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>
          <div className=" flex gap-2 mt-4">
            <button
              className="bg-green-400 py-2 px-4 rounded-md hover:bg-green-500"
              onClick={onclickCancel}
            >
              Cancel
            </button>
            <button
              className="bg-red-400 py-2 px-4 rounded-md hover:bg-red-500"
              onClick={onclickSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
