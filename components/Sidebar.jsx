"use client"
import Link from "next/link";
import logo from "../src/app/images/urobach-logo.jpg";
import Image from "next/image";
import { IoMenuSharp } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export default function Sidebar() {
    const [open, setOpen] = useState(false);

    const showSideBar = () => setOpen(!open);

    return (
      <div class="lg:hidden">
          <div class="flex justify-between">
            <Link href='/'>
              <Image class="w-28 p-50 pt-3 pb-10 ml-5" src={logo} alt="logo" />
             </Link>
            {open ?
              (<Link href="#" class="mr-5 pt-6"> <AiOutlineClose class=" w-10 h-10 "  onClick={showSideBar}/> </Link>)
            :
              (  <Link href="#" class="mr-5 pt-6 "> <IoMenuSharp class=" w-10 h-10 "  onClick={showSideBar}/> </Link>)
            }
          </div>
         {open && (
            <div>
             <ul class=" pl- pt-8 pb-8 space-y-5 divide-y divide-slate-400 bg-white">
               <li class="pl-5">
               <Link href='/' class="hover:text-red-600 text-sm font-bold"> HOME </Link>
               </li>
               <li class="pl-5 pt-5">
               <Link href='/about' class="hover:text-red-600 text-sm font-bold"> ABOUT </Link>
               </li>
               <li class="pl-5 pt-5">
               <Link href='/services' class="hover:text-red-600 text-sm font-bold"> SERVICES </Link>
               </li>
               <li class="pl-5 pt-5">
               <Link href='/projects' class="hover:text-red-600 text-sm font-bold"> PROJECTS </Link>
               </li>
               <li class="pl-5 pt-5">
               <Link href='/clients' class="hover:text-red-600 text-sm font-bold"> CLIENTS </Link>
               </li>
               <li class="pl-5 pt-5">
               <Link href='/contact' class="hover:text-red-600 text-sm font-bold"> CONTACT </Link>
               </li>
             </ul>
            </div>
         )}
      </div>
    )
}