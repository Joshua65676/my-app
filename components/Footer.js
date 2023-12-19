import Link  from 'next/link';
import Image from 'next/image';
import logo from "../src/app/images/urobach-logo.jpg";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGoogleSquare } from "react-icons/ai";

export default function Footer() {
    return (
         <main class="">
          <div class="bg-[url('./images/abstract-background.jpg')] -mt-44 md:p-24 w-screen mr-1 md:space-x-20">
            <div class="md:ml-16 md:mb-10 mb-5 pt-6">
              <Link href='/'> 
                <Image class="w-28 p-50 pt-3 pb-10 ml-5" src={logo} alt="logo" />
              </Link>
            </div>
          {/* mainContent */}
          <div class="md:space-x-44 md:flex md:justify-between mr-5 ml-5 space-y-6">
            <div>
                <div class="mb-5">
                  <h3 class="font-bold text-xl">About Us</h3>
                </div>
                <div>
                  <p class="font-normal ">
                   Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet.
                   Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis.
                  </p>
                </div>
              </div>
              
              <div class="md:ml-96">
                <div class="">
                 <h3 class="font-bold text-xl">Links</h3>
                </div>
                <div class="mt-4 font-normal ">
                 <Link href=""><p class=" hover:text-red-600">Home</p></Link>
                 <Link href=""><p class=" hover:text-red-600">About</p></Link>
                 <Link href=""><p class=" hover:text-red-600">Services</p></Link>
                 <Link href=""><p class=" hover:text-red-600">Projects</p></Link>
                 <Link href=""><p class=" hover:text-red-600">Clients</p></Link>
                 <Link href=""><p class=" hover:text-red-600">Contact</p></Link>
                </div>
             </div>
             
             <div>
               <div>
                 <h3 class="font-bold text-xl">Business</h3>
               </div>
               <div class="font-normal mt-4">
                 <Link href=""><p class=" hover:text-red-600">CorporateSR</p></Link>
                 <Link href=""><p class=" hover:text-red-600">Media Kit</p></Link>
                 <Link href=""><p class=" hover:text-red-600">Policies</p></Link>
                 <Link href=""><p class=" hover:text-red-600">Employee</p></Link>
                 <Link href=""><p class=" hover:text-red-600">Careers</p></Link>
                 <Link href=""><p class=" hover:text-red-600">Blog</p></Link>
               </div>
            </div>
             
            <div>
              <div>
               <h3 class="font-bold text-xl">Connect</h3>
              </div>
              <div class="font-normal mt-4">
               <p>123 456 7890 <br/> urobach@gmail.com <br/> 123, ifite-awka, Anambra, <br/> Nigeria</p>
              </div>
              <div class="flex space-x-3 pt-3">
               <Link href=""><span><FaLinkedin class="text-3xl"/></span></Link>
               <Link href=""><span><FaSquareXTwitter class="text-3xl" /></span></Link>
               <Link href=""><span><AiFillGoogleSquare class="text-3xl" /></span></Link>
              </div>
            </div>
             {/* mainContainer */}
          </div>
            <hr class="mt-4 text-service-color"/>
            <div>
              <div class="text-center pt-5"><span class="font-bold">Copyright &#0169; 2023 Architecture Firm</span></div>
              <div class="text-center pt-3"><span class="font-bold">Powered by Architecture Firm</span></div>
            </div>

          </div>
         </main>
    )
  }