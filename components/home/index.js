import Image from "next/image";

export default function GettingStarted() {
  return (
    <>
      <div className="flex justify-center  w-full mt-20">
        <Image
          alt="img-getting-started"
          src={"/note-img.png"}
          width={300}
          height={300}
          className="w-[300px] md:w-[400px]"
        />
      </div>

      <div className="relative text-center w-[80%] left-[10%]">
        <p className="font-bold text-xl">Taking notes has never been easier!</p>
        <p className="text-sm text-gray-400">
          Spare yourself the hasle of making a dozen of notes on paper and
          losing them over and over.
        </p>

        <button className="text-white bg-blue-600 w-[150px] py-3 rounded-lg mt-4 hover:shadow-lg hover:bg-blue-700">
          Start
        </button>
      </div>
    </>
  );
}
