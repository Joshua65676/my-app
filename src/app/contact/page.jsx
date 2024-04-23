"use client";
import { ContactUs } from "./Contact";

export default function Contact(){
    return(
        <section>
            <div>
                <div class="mr-20 -ml-16 pt-10 mt-36 md:p-20 p-32 md:w-4/12 bg-white md:pt-1 md:ml-40">
                  <div class="md:mt-10 md:-ml-5 -ml-10"> 
                    <span class="font-bold ml-8">Get In Touch</span>
                  </div>
                    <hr class="About-line bg-red-600 p-1 w-40 h-2 m-12 -ml-28"/>
                  <div class="md:m-20 md:-ml-1 -ml-5">
                    <h2 class="font-bold md:text-7xl text-3xl md:-mr-28">Contact</h2>
                  </div>
                </div>

            <div class="md:-mt-52 md:p-52 md:pt- pb-40 -mt-20 md:w-screen w-full md:flex md:space-x-20 flex-col-revers bg-white">
             <div class="md:mr-52 md:ml-20 md:pt-5 md:pb-5 pt-20 pb-20 ml-10 ">
               <div class="md:-mt-10 -mt-20 -ml-5">
                 <span class="font-bold text-sm">Have Any Questions?</span>
               </div>
               <div class="md:mt-10 -ml-8 -mr-52">
                 <div class="">
                   <h2 class="font-bold md:text-5xl text-3xl">Let's Get In Touch</h2>
                 </div>
                 <div class="md:mt-14 md:mb-32 mt-10 mr-56 md:mr-14">
                   <p class="font-normal md:text-sm text-lg" >Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                 </div>
               </div>
             </div>

              <div class="ml-3 mr-5 pt-10 mb-12">
                <ContactUs />               
              </div>
            </div>

          </div>
        </section>
    )
}