import Input from "antd/lib/input/Input";
import React from "react";
import "./navbar.css";

export const Navbar = ({ setSearch }) => {
  const handleChange = (e) => {
    setSearch((prev) => (prev = e.target.value));
  };
  return (
    <div>
      <div className="navbarWrapper">
        <div className="text-3xl bg-transparent font-bold text-black">SOCIALBOAT</div>
        <div className="flex flex-grow border rounded-full invisible md:visible lg:visible
             px-6 py-3 ml-10 mr-5 shadow-lg max-w-3xl text-xl text-black items-center ">
          <input 
            className="flex-grow w-full focus:outline-none placeholder-black"
            placeholder="Search for video"
            type="text"
            onChange={handleChange}
          />
          <div className="searchIcon"></div>
        </div>
        <div className="bg-transparent ">
        <img
        loading="lazy"
        src={"https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"}
        alt="profile pic"
        className={`h-10 rounded-full 
        cursor-pointer transition 
        duration-150 transform hover:scale-110 `}
        />
        </div>
      </div>
    </div>
  );
};
