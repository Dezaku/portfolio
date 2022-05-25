import Link from "next/link";
import { useRef } from 'react';
import { useState } from "react";
import Button from "./Button";

const Navbar = () => {

let [open,setOpen] = useState(false);

  return (
<div className="shadow-md w-full fixed top-0 left-0">
<div className="md:flex py-3">
    <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
        <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
    </div>
    <ul className={`sm:self-center  md:items-center md:pb-0 pb-12 absolute flex-col md:static bg-transparent md:z-auto 
                    z-[-999] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacitiy-100' : 'md:opacity-100 opacity-0 top-[-490px]' }`}>
        <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link className="text-gray-800 hover:text-gray-400 duration-500" href='/about'>About</Link>
        </li>
        <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link className="text-gray-800 hover:text-gray-400 duration-500" href='/contact'>Contact</Link>
        </li>
    </ul>
</div>
</div>

  )
}

export default Navbar