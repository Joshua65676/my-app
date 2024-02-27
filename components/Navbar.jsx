import Link from "next/link";
import logo from "../src/app/images/urobach-logo.jpg";
import Image from "next/image";

export default function Navbar() {
    return (
      <main class="">
        <nav class="flex justify-between relative mx-14  p-3 ">
            <Link href='/' class="hidden lg:flex w-28 p-50 pt-3"> 
              <Image src={logo} alt="logo" />
             </Link>
            <ul class="hidden lg:flex space-x-14 p-8 ">
               <li>
               <Link href='/' class="hover:text-red-600 text-sm font-normal"> HOME </Link>
               </li>
               <li>
               <Link href='/about' class="hover:text-red-600 text-sm font-normal"> ABOUT </Link>
               </li>
               <li>
               <Link href='/services' class="hover:text-red-600 text-sm font-normal"> SERVICES </Link>
               </li>
               <li>
               <Link href='/projects' class="hover:text-red-600 text-sm font-normal"> PROJECTS </Link>
               </li>
               <li>
               <Link href='/clients' class="hover:text-red-600 text-sm font-normal"> CLIENTS </Link>
               </li>
               <li>
               <Link href='/contact' class="hover:text-red-600 text-sm font-normal"> CONTACT </Link>
               </li>
            </ul>
        </nav>
      </main>
    )
  }