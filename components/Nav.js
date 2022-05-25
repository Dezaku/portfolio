import React from 'react'
import Link from "next/link";
import { useState } from "react";

function Nav() {
    let [open,setOpen] = useState(false);

  return (
    <div>
    <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
            <div className="hidden md:flex flex space-x-6">
                <Link href='/about'> About</Link>
                <Link href='/about'> Contact</Link>
            </div>
        </div>

        <div onClick={() => setOpen(!open)}className="md:hidden">
        <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

    <div className="md:hidden">
        <div onClick={() => setOpen(!open)} className={open ? "hidden flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-transparent sm:w-auto sm:self-center left-6 right-6 drop-shadow md": "absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-transparent sm:w-auto sm:self-center left-6 right-6 drop-shadow md"}>
        <Link href='/about'> About</Link>
        <Link href='/about'> Contact</Link>
        </div>
    </div>
    </nav>
    </div>
  )
}

export default Nav