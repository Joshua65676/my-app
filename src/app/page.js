import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
   <section>
    <main class="mx-16">
      <div class="pt-28 ml-8 text-lg font-bold">
        <p class="text-bold">Original And Creative In Thinking</p>
      </div>
      <hr class="line"/>
      <div class="ml-8 pt-24">
        <h1 class="text-7xl font-bold"> Ingenious Desing & <br /> Architecture</h1>
      </div>   
      <div class="hover:text-red-600 mr-96 -ml-9 pt-14 mt-14 p-10 w-6/12 flex space-x-80 bg-white">
        <span class="ml-14 font-bold text-lg">Read more </span>
        <FaLongArrowAltRight class="font-bold text-lg"/>
      </div>    
      {/* ABOUT IN HOME */}
        <div class="-mt-1 p-52 w-screen -ml-16 flex justify-between  bg-white">
          <div class="">
              <div class="mt-10">
                <span class="font-bold text-xl ml-8">A few words</span>
              </div>
                <hr class="line2"/>
              <div class="mt-20 -ml-10">
                <h2 class="font-bold text-5xl ml-8">About Us</h2>
              </div>
          </div>
          <div class="flex justify-around space-x-9 -mr-20">
            <div class="">
              <Image src="" alt="uche" />
              <h4 class="">Okoro Uche</h4>
              <p class="">I am text block. Click edit button<br /> to change this text.<br /> Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
            </div>
            <div class="">
              <h4 class="">Okoro Uche</h4>
              <p class="">I am text block. Click edit button<br /> to change this text.<br /> Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
              <Image src="" alt="gee" />
            </div>
          </div>
        </div>
        {/* SERVICES */}
        <div class="-mt-1 p-56 w-screen -ml-16 bg-service-color">
          <div class="text-center pb-20">
            <div class="-mt-20">
              <span class="font-bold text-xl">This Is What We Do</span>
            </div>
            <hr  class="line3" />
            <div class="mt-1">
              <h2 class="font-bold text-7xl">Services</h2>
            </div>
          </div>
          <div class="w-full">
            <div class="flex">
               <Link href="#">
                <Image src="/architect-sketch.jpg" width={1100} height={500} class="-ml-1 pt-5" alt=""/>
              </Link>
              <div class="text-center pt-20 mr-10 ml-10">
                <h4 class="font-bold text-xl pb-5">Consultation</h4>
                <p class="font-normal text-lg  ">I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <Link href="#">
                <Image src="/archi-building.jpg" width={1100} height={500} class="ml-2" alt="" />
              </Link>
            </div>
            
            <div class="flex">
              <div class="text-center pt-20 mr-6">
                <h4 class="font-bold text-xl pb-5">Planning</h4>
                <p class="font-normal text-lg ">I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <Link href="#">
                <Image src="/architect-plan.jpg" width={1100} height={500} alt="boss" />
              </Link>
              <div class="text-center pt-20  ml-6">
                <h4 class="font-bold text-xl pb-5">Building</h4>
                <p class="font-normal text-lg ">I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
        {/* OUR CLIENTS REPLAY */}
        <div class="-mt-1 p-56 w-screen -ml-16 flex space-x-7 bg-white">
          <div class="mr-1">
            <div class="-mt-10">
              <span class="font-bold text-xl">Visionary Clients</span>
            </div>
            <hr  class="line4" />
            <div class="mt-10">
              <div class="">
                <h2 class="font-bold text-5xl">What Our Clients Say?</h2>
              </div>
              <div class="mt-36">
                <p class="font-normal text-xl" >Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <div class="mt-5"><span class="font-normal text-xl text-red-500">Frances Owens</span></div>
              </div>
            </div>
          </div>
          <div class="mt-20">
              <div>
                <p class="font-normal text-xl ">Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <div class="mt-5"><span class="font-normal text-xl text-red-500">Frances Owens</span></div>
              </div>
              <div class="mt-24">
                <p class="font-normal text-xl ">Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
               <div class="mt-5"><span class="font-normal text-xl text-red-500">Frances Owens</span></div>
              </div>
          </div>
        </div>
    </main>
   </section>
  )
}
