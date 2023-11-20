import Link from "next/link";
import React from "react";
import { IoIosHome } from "react-icons/io";
import { FaTicketAlt } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/" className="icon">
          <IoIosHome />
        </Link>
        <Link href="/TicketPage/new" className="icon">
          <FaTicketAlt />
        </Link>
      </div>
      <div>
        <p className="text-white">godfred@gmail.com</p>
      </div>
    </nav>
  );
};

export default Nav;
