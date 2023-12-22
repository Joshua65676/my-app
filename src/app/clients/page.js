import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

export default function Clients(){
       return(
        <section>
         <div>
            <div class="mr-20 -ml-16 pt-10 mt-36 md:p-20 p-32 md:w-4/12 bg-white md:pt-1 md:ml-40">
              <div class="md:mt-10 md:-ml-5 -ml-10"> 
                <span class="font-bold ml-8">Our Happy Clients</span>
              </div>
                <hr class="About-line bg-red-600 p-1 w-40 h-2 m-12 -ml-28"/>
              <div class="md:m-20 md:-ml-1 -ml-5">
                <h2 class="font-bold md:text-7xl text-3xl md:-mr-28">Clients</h2>
              </div>
            </div>

            <div class="md:grid md:grid-cols-3 md:gap-5 md:pt-28  md:-mt-32 md:p-48 md:mb-44 p-48 w-screen -ml- bg-white">
                <div>
                    <Image src="/icon-5.jpg" width={500} height={300} alt="" />
                </div>

                <div>
                    <Image src="/icon-4.jpg" width={500} height={300} alt="" />
                </div>

                <div>
                    <Image src="/icon-3.jpg" width={500} height={300} alt="" />
                </div>

                <div class="md:ml-52 md:-mr-52">
                    <Image src="/icon-2.jpg" width={500} height={300} alt="" />
                </div>

                <div class="md:ml-52 md:-mr-52">
                    <Image src="/icon-1.jpg" width={500} height={300} alt="" />
                </div>
            </div>

            {/* OUR CLIENTS REPLAY */}
                <div class="-mt-56 md:p-40 p-48 w-screen mb-32 md:flex md:space-x- md:justify-between bg-white">
                  <div class="md:mr-52 md:ml-20 -ml-36">
                    <div class="md:-mt-10 -mt-20 -ml-5">
                      <span class="font-bold text-xl">Visionary Clients</span>
                    </div>
                    <hr  class="line4" />
                    <div class="md:mt-10 space-x-5 ">
                      <div class="">
                        <h2 class="font-bold md:text-6xl text-3xl">What Our Clients Say?</h2>
                      </div>
                      <div class="md:mt-48 mt-20 -ml- mr-56 space-y-5">
                        <FaQuoteLeft class="text-5xl" />
                        <p class="font-normal md:text-xl text-lg" >Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <div class="mt-5"><span class="font-normal md:text-sm text-red-500">Frances Owens</span></div>
                      </div>
                    </div>
                  </div>
                  <div class="md:mt-20 mt-20 -ml-44 mr-3">
                      <div class="space-y-5">
                        <FaQuoteLeft class="text-5xl" />
                        <p class="font-normal md:text-xl text-lg">Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <div class="mt-5"><span class="font-normal md:text-sm text-red-500">Frances Owens</span></div>
                      </div>
                      <div class="mt-24 space-y-5">
                        <FaQuoteLeft class="text-5xl" />
                        <p class="font-normal md:text-xl text-lg">Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                       <div class="mt-5"><span class="font-normal md:text-sm text-red-500">Frances Owens</span></div>
                      </div>
                  </div>
                </div>
               
                <div class="-mt-96 md:p-40 p-48 w-screen mb-32 bg-white">
                    <div class="md:flex md:space-x-10 md:justify-between md:ml-16">
                      <div class="space-y-5 md:ml-5">
                        <FaQuoteLeft class="text-5xl" />
                        <p class="font-normal md:text-xl text-lg">Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <div class="mt-5"><span class="font-normal md:text-sm text-red-500">Frances Owens</span></div>
                      </div>
                      <div class="space-y-5">
                        <FaQuoteLeft class="text-5xl" />
                        <p class="font-normal md:text-xl text-lg">Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                       <div class="mt-5"><span class="font-normal md:text-sm text-red-500">Frances Owens</span></div>
                      </div>
                    </div>
                </div>

         </div>
        </section>
       )
}