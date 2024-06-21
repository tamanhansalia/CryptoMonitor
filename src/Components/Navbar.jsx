import { React, useState } from "react";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";

const Navbar = () => {
  const [nav, SetNav] = useState(true);

  const HandleNav = () => {
    SetNav(!nav);
  };

  return (
    <div>
      <div className=" md:hidden sticky top-0 items-center p-4 w-full flex justify-between">
        <div>
          <h1 className="text-[var(--primary)] hover:text-[var(--secondary)] ">
            Cryptomonitor
          </h1>
        </div>
        <div className="cursor-pointer" onClick={HandleNav}>
          {!nav ? (
            <CgClose size={35} className="text-[var(--primary)]" />
          ) : (
            <CgMenuRightAlt size={35} className="text-[var(--primary)]" />
          )}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-16 w-[65%] h-full text-2xl uppercase p-5 border-r-[1px] border-[var(--primary)] ease-in-out duration-500 md:hidden bg-[var(--bg)]"
              : "fixed left-[-100%] "
          }
        >
          <div>
            <ul className="text-[var(--primary)]  md:hidden">
              <li className="p-4 border-b border-[-var(--primary)]">Home</li>
              <li className="p-4 border-b border-[-var(--primary)]">Feature</li>
              <li className="p-4 border-b border-[-var(--primary)]">Pricing</li>
              <li className="p-4 border-b border-[-var(--primary)]">
                About US
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="hidden md:flex sticky top-0 items-center p-4 w-full justify-between  border-b-[1px] border-gray-500">
        <h1 className="text-[var(--primary)] hover:text-[var(--secondary)] ">
          Cryptomonitor
        </h1>
        <div>
          <ul className="flex items-center ">
            <li className="mx-4 hover:text-[var(--secondary)]">Home</li>
            <li className="mx-4 hover:text-[var(--secondary)]">Feature</li>
            <li className="mx-4 hover:text-[var(--secondary)]">Pricing</li>
            <li className="mx-4 hover:text-[var(--secondary)]">About US</li>
          </ul>
        </div>
        <select className=" bg-black border rounded-lg p-1">
          <option selected>USD</option>
          <option>INR</option>
          <option>EURO</option>
        </select>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
