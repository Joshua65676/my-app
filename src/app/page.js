import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";
// import { Image1 } from "/public/architect-photo-01-free-img.jpg.jpg";
// import { Image2 } from "./";

export default function Home() {
  return (
   <section>
    <main class="mx-16">
      <div class="pt-28 text-lg font-bold -ml-12  md:ml-10">
        <p class="text-bold">Original And Creative In Thinking</p>
      </div>
      <hr class="md:-ml-8 line"/>
      <div class="-ml-10 -pt-24 md:ml-8 md:pt-24">
        <h1 class="text-2xl font-bold md:text-7xl"> Ingenious Desing & <br /> Architecture</h1>
      </div>   
      <div class="mr-20 -ml-16 pt-14 mt-14 p-10 w-96 flex space-x-24 bg-white md:mr-96 md:-ml-9 md:w-6/12 md:space-x-80">
        <span class="ml-14 font-bold text-lg hover:text-red-600">Read more </span>
        <FaLongArrowAltRight class="font-bold text-lg hover:text-red-600"/>
      </div>    
      {/* ABOUT IN HOME */}
        <div class="md:flex md:justify-between md:-mt-1 md:p-52 w-screen -ml-16 pt-8 bg-white">
          <div class="">
              <div class="md:mt-10 md:-ml-5 ml-24 ">
                <span class="font-bold text-xl ml-8">A few words</span>
              </div>
                <hr class="line2"/>
              <div class="md:mt-20 md:-ml-10 pb-8 ml-14">
                <h2 class="font-bold text-5xl ml-8">About Us</h2>
              </div>
          </div>
          <div class="space-y-10 md:justify-around md:space-x-14 md:-mr-20 md:flex">
            <div class="space-y-5">
              <Image src="/architect-photo-01-free-img.jpg.jpg" width={300} height={500} class="ml-10" alt="uche" />
              <h4 class="font-bold text-xl ml-10 md:ml-10">Okoro Uche</h4>
              <p class="font-normal ml-10 md:ml-10">I am text block. Click edit button<br /> to change this text.<br /> Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
            </div>
            <div class="space-y-5 md:-pt-5">
              <h4 class="font-bold text-xl ml-10 md:ml-10">Okoro Uche</h4>
              <p class="font-normal ml-10 md:ml-10">I am text block. Click edit button<br /> to change this text.<br /> Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
              <Image src="/architect-photo-02-free-img.jpg" width={300} height={500} class="ml-10" alt="gee" />
            </div>
          </div>
        </div>
        {/* SERVICES */}
        <div class="md:-mt-1 md:p-56 p-32 md:w-screen md:-ml-16 -ml-48 -mr-16 text-center bg-service-color">
          <div class="md:text-center md:pb-20 pt-10 pb-10 ml-16">
            <div class="-mt-20 -mr-14 md:mr-16">
              <span class="font-bold text-xl">This Is What We Do</span>
            </div>
            <hr  class="line3" />
            <div class="mt-1 md:-ml-20 ml-5">
              <h2 class="font-bold md:text-7xl text-5xl">Services</h2>
            </div>
          </div>
          <div class="md:w-full -mr-32">
            <div class="md:flex -mr-1">
               <Link href="#">
                <Image src="/architect-sketch.jpg" width={1100} height={500} class="-ml-1 pt-5" alt=""/>
              </Link>
              <div class="text-center md:pt-20 pt-10 mr-10 ml-10 pb-5">
                <h4 class="font-bold text-xl pb-5">Consultation</h4>
                <p class="font-normal text-lg  ">I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <Link href="#">
                <Image src="/archi-building.jpg" width={1100} height={500} class="md:ml-2" alt="" />
              </Link>
            </div>
            
            <div class="md:flex">
              <div class="text-center md:pt-20 pt-10 pb-10 mr-6">
                <h4 class="font-bold text-xl pb-5">Planning</h4>
                <p class="font-normal text-lg ">I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <Link href="#">
                <Image src="/architect-plan.jpg" width={1100} height={500} alt="boss" />
              </Link>
              <div class="text-center md:pt-20 pt-10 md:ml-6">
                <h4 class="font-bold text-xl pb-5">Building</h4>
                <p class="font-normal text-lg ">I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
        {/* OUR CLIENTS REPLAY */}
        <div class="-mt-1 md:p-56 p-48 w-screen -ml-16 md:flex md:space-x-7 bg-white">
          <div class="md:mr-52 md:ml-20 -ml-36">
            <div class="md:-mt-10 -mt-20 -ml-5">
              <span class="font-bold text-xl">Visionary Clients</span>
            </div>
            <hr  class="line4" />
            <div class="md:mt-10 -ml-8 -mr-52">
              <div class="">
                <h2 class="font-bold md:text-5xl text-3xl">What Our Clients Say?</h2>
              </div>
              <div class="md:mt-56 mt-20 -ml- mr-14">
                <p class="font-normal md:text-xl text-lg" >Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <div class="mt-5"><span class="font-normal md:text-xl text-red-500">Frances Owens</span></div>
              </div>
            </div>
          </div>
          <div class="md:mt-20 mt-20 -ml-44 -mr-36">
              <div>
                <p class="font-normal md:text-xl text-lg">Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <div class="mt-5"><span class="font-normal md:text-xl text-red-500">Frances Owens</span></div>
              </div>
              <div class="mt-24">
                <p class="font-normal md:text-xl text-lg">Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
               <div class="mt-5"><span class="font-normal md:text-xl text-red-500">Frances Owens</span></div>
              </div>
          </div>
        </div>
    </main>
   </section>
  )
}
