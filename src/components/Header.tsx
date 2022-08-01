import React from "react";
import "./Header.component.css";

const Header = () => {
  return (
    <>
      <header className="fixed w-full top-0 z-[2]">
        <nav className="flex h-20 items-center justify-between py-2.5 px-4 bg-[#031325]">
          <div className="logo cursor-pointer text-[40px] font-bold text-[#188ede]">
            Booky &#128049;
          </div>
          <div className="search flex-[1] ml-[20px] mr-[20px] duration-300   ">
            <input
              className="p-2.5 rounded-xl w-full duration-300 bg-[#062b46] hover:scale-[1.03] focus:scale-[1.03]"
              type="text"
              placeholder="Search Booky Guide"
            />
          </div>
          <div className="goto cursor-pointer text-[#188ede]">
            Go To Booky {`->`}
          </div>
        </nav>
        <div className="sub-nav py-2 px-4 bg-[#062b46]">
          <ul className="flex">
            <li className="text-sm mr-5">FOOD</li>
            <li className="text-sm mr-5">BEAUTY</li>
            <li className="text-sm mr-5">FITNESS</li>
            <li className="text-sm mr-5">ACTIVITIES</li>
            <li className="text-sm mr-5">WELLNESS</li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
