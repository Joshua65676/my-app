import Image from "next/image";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Link from "next/link";

export default function About() {
    return (
      <section>
        <div class="">
          <div class="mr-10 -ml-16 pt-10 mt-36 w-96 p-0 md:p-20 md:w-4/12 bg-white md:pt-1 md:ml-40">
              <div class="md:mt-10 md:-ml-5 ml-20">
                <span class="font-bold ml-8">A few words</span>
              </div>
                <hr class="About-line bg-red-600 p-1 w-40 h-2 m-12 -ml-1"/>
              <div class="md:m-20 md:-ml-1 ml-24">
                <h2 class="font-bold md:text-7xl text-5xl md:-mr-28">About Us</h2>
              </div>
           </div>
           {/* About Section 2 */}
           <div class="md:-mt-52 md:p-52 md:pt- pb-40 -mt-2 md:w-screen w-full md:flex md:space-x-20 flex-col-revers bg-white">
            <div class="md:mr-52 md:ml-20 md:pt-5 md:pb-5 pt-20 pb-20 ml-10 ">
               <div class="md:-mt-10 -mt-2 -ml-5">
                 <span class="font-bold text-sm">Leading Company</span>
               </div>
               <hr  class="line4" />
               <div class="md:mt-10 -ml-8 -mr-52">
                 <div class="">
                   <h2 class="font-bold md:text-5xl text-3xl">Making a Difference</h2>
                 </div>
                 <div class="md:mt-14 md:mb-32 mt-10 mr-56 md:mr-14">
                   <p class="font-normal md:text-sm text-lg" >Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                 </div>
               </div>
             </div>

             <div class="ml-3 mr-5 pt-10 mb-20">
               <Image src="/architects-infrastructure.png" width={3000} height={100} class="-mt-14 h-full" alt="" />  
             </div>
           </div>
           {/* About Section2 */}
            <div class="-mt-52 md:p-52 md:-mb-80 p-48 w-screen -ml- md:flex md:space-x-20 bg-bg-color">
                <div class="md:mr-52 md:ml-20 pt-5 pb-5 -ml-36 ">
                  <div class="md:-mt-10 -mt-20 -ml-5">
                    <span class="font-bold text-sm">Leading Company</span>
                  </div>
                  <hr  class="line4" />
                  <div class="md:mt-10 -ml-8 -mr-52">
                    <div class="">
                      <h2 class="font-bold md:text-5xl text-3xl"> Why Work With Us</h2>
                    </div>
                  </div>
                </div>

                <div class="bg-red-600 space-y-10 pt-20 pb-20 mt-10 w-96 -ml-48 md:w-11/12 md:-mt-3 md:-ml-5">
                   <div class="flex justify-around space-x-5 ml-10 mr-20 text-white">
                      <MdOutlineArrowForwardIos class="text-5xl" />
                      <div class="pt-3 space-y-3">
                       <h3 class="font-bold text-2xl"> Self Motivated</h3>
                       <p class="">lick edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>
                   </div>

                   <div class="flex justify-around space-x-5 ml-10 mr-20 text-white">
                      <MdOutlineArrowForwardIos class="text-5xl" />
                      <div class="pt-3 space-y-3">
                       <h3 class="font-bold text-2xl"> International Experience</h3>
                       <p class="">lick edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>
                   </div>

                   <div class="flex justify-around space-x-5 ml-10 mr-20 text-white">
                      <MdOutlineArrowForwardIos class="text-5xl" />
                      <div class="pt-3 space-y-3">
                       <h3 class="font-bold text-2xl"> We Meet Deadlines</h3>
                       <p class="">lick edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>
                   </div>

                   <div class="flex justify-around space-x-5 ml-10 mr-20 text-white">
                      <MdOutlineArrowForwardIos class="text-5xl" />
                      <div class="pt-3 space-y-3">
                       <h3 class="font-bold text-2xl"> Sustainable Design</h3>
                       <p class="">lick edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>
                   </div>

                   <div class="flex justify-around space-x-5 ml-10 mr-20 text-white">
                      <MdOutlineArrowForwardIos class="text-5xl" />
                      <div class="pt-3 space-y-3">
                       <h3 class="font-bold text-2xl"> Attention To Detail</h3>
                       <p class="">lick edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>
                   </div>
                </div>
            </div>
            {/* About Section3 */}
            <div class="md:flex md:justify-between md:-mt-5 md:p-52 w-screen pt-20 bg-white">
                 <div class="">
                  <div class="md:mt-10 md:-ml-5 ml-24 ">
                    <span class="font-bold text-xl ml-8">A few words</span>
                  </div>
                  <hr class="line2"/>
                  <div class="md:mt-20 md:-ml-10 pb-8 ml-14">
                    <h2 class="font-bold text-5xl ml-8">About Us</h2>
                  </div>
                 </div>
              <div class="space-y-10 md:justify-around md:space-x-14 md:-mr-20 md:flex mt-10">
                 <div class="space-y-5">
                   <h4 class="font-bold text-xl ml-10 md:ml-0 md:text-center">Josh Dev</h4>
                   <p class="font-normal ml-10 md:ml-10">I am text block. Click edit button<br /> to change this text.<br /> Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
                   <Image src="/architect-photo-01-free-img.jpg.jpg" width={300} height={500} class="ml-10" alt="uche" />
                 </div>
                 <div class="space-y-5 md:-pt-5">
                   <h4 class="font-bold text-xl ml-10 md:ml-0 md:text-center">Josh Dev</h4>
                   <p class="font-normal ml-10 md:ml-10">I am text block. Click edit button<br /> to change this text.<br /> Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
                   <Image src="/architect-photo-02-free-img.jpg" width={300} height={500} class="ml-10" alt="gee" />
                 </div>
               </div>
             </div>

            <div class="md:-mt-80 md:p-64 p-32 -mt-32 md:w-screen -ml-20 md:ml-0 bg-white">
                <div class="md:flex md:space-x-32 md:ml-20">
                  <div class=" md:pt-10 pt-10 pb-10 md:-ml-40">
                    <h4 class="font-bold text-xl pb-5 md:text-center">Ashley Collins</h4>
                    <p class="font-normal">I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <div class="md:mt-5 md:-ml-20 -mr-20">
                    <Link href="#">
                      <Image src="/about-img.jpg" width={1100} height={500} alt="boss" />
                    </Link>
                  </div>
                  <div class="md:pt-5 pt-10 md:-ml-52">
                    <h4 class="font-bold text-xl pb-5 md:text-center">Sarah Allen</h4>
                    <p class="font-normal">I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>

                <div class="md:flex mb-24 md:space-x-10 -mr-20">
                  <div class="md:-ml-40 md:-mt-40">
                    <Link href="#">
                      <Image src="/architect-about-01.jpg" width={1100} height={500} class="-ml-1 pt-5" alt=""/>
                    </Link>
                  </div>
                  <div class="md:pt-14 pt-10 mr-10 md:ml-10 pb-5">
                    <h4 class="font-bold text-xl pb-5 md:text-center">Daniel Vargas</h4>
                    <p class="font-normal">I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <div class="md:-mt-40 md:ml-24">
                    <Link href="#">
                      <Image src="/about-image02.jpg" width={1100} height={500} class="md:ml-2" alt="" />
                    </Link>
                  </div>
                </div>
            </div>

        </div>
      </section>
    )
  }