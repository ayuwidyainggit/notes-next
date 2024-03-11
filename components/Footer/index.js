import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className=" relative bg-blue-100 text-center py-4 mt-[300px]">
      <div>
        <p className="font-bold text-xs">Notes | Portofolio</p>
      </div>
      <div>
        <p className="font-normal text-xs">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore odio
        </p>
      </div>
      <div className=" flex gap-2  justify-center p-4">
        <AiFillInstagram />
        <FaTwitter />
        <FaYoutube />
      </div>
    </div>
  );
}
