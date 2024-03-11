import { useState } from "react";
import Search from "../Search";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const [activeLink, setActiveLink] = useState("");
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div className="fixed top-0 w-full bg-white z-10 shadow-sm  ">
      <div className=" md:flex flex-row justify-end md:justify-between md:p-3 p-10 max-w-6xl mx-auto ">
        <div className="hidden md:flex items-center gap-4 font-bold">
          <div
            className={
              activeLink == "Home"
                ? "text-black cursor-pointer"
                : "text-gray-500 hover:text-black cursor-pointer"
            }
            onClick={() => handleLinkClick("Home")}
          >
            Home
          </div>
          <div
            className={
              activeLink == "About"
                ? "text-black cursor-pointer"
                : "text-gray-500 hover:text-black cursor-pointer"
            }
            onClick={() => handleLinkClick("About")}
          >
            About
          </div>
          <Search />
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-blue-500 font-bold w-[100px] text-center py-2 rounded-md">
            MyNotes
          </div>
          <div className="">Welcome Inggit !</div>
        </div>
        {/* mobile version */}
        <div className="md:hidden flex items-center justify-between font-bold mt-4">
          <Search />
        </div>
        <div className="md:hidden flex items-center gap-4 font-bold  mt-2  ">
          <div
            className={
              activeLink == "Home"
                ? "text-black  underline "
                : "text-gray-500 hover:text-black"
            }
            onClick={() => handleLinkClick("Home")}
          >
            Home
          </div>
          <div
            className={
              activeLink == "About"
                ? "text-black  underline "
                : "text-gray-500 hover:text-black"
            }
            onClick={() => handleLinkClick("About")}
          >
            About
          </div>
        </div>
      </div>
    </div>
  );
}
