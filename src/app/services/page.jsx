import Image from "next/image";

export default function Services(){
    return (
      <section>
        <div>
            <div class="mr-20 -ml-16 pt-10 mt-36 md:p-20 p-32 md:w-4/12 bg-white md:pt-1 md:ml-40">
              <div class="md:mt-10 md:-ml-5 -ml-10">
                <span class="font-bold md:ml-8">Global Perspective</span>
              </div>
                <hr class="About-line bg-red-600 p-1 w-40 h-2 m-12 -ml-28"/>
              <div class="md:m-20 md:-ml-1 -ml-5">
                <h2 class="font-bold md:text-7xl text-3xl md:-mr-28">Services</h2>
              </div>
            </div> 
           {/* Main section */}
             <div class="-mt-52 -mb-24 md:p-52 md:-mb-48 p-48 md:w-screen -ml- md:flex bg-white">                    
                      <div class="hidden md:flex md:w-screen md:mt-10">
                         <Image src="/services-img (1).jpg" width={5000} height={5000} class="" alt="" />
                      </div>                    
                <div class="bg-red-600 space-y-10 pt-20 pb-20 -mt-10 w-screen -ml-48 md:w-full md:-mt-28 md:-ml-10">
                   <div class="md:mr-52 md:ml-20 pt-5 pb-5 ml-14 text-white">
                     <div class="md:-mt-10 -mt-20 -ml-5">
                       <span class="font-bold text-sm">Leading Company</span>
                     </div>
                     <hr  class="line-4 " />
                     <div class="md:mt-10 -ml-8 -mr-52">
                       <div class="">
                         <h2 class="font-bold md:text-5xl text-3xl"> This Is What We Do</h2>
                       </div>
                     </div>
                   </div>

                   <div class="flex justify-around space-x-5 ml-10 mr-20 text-white">
                      <div class="">
                        <p class="">lick edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>
                   </div>
                </div>

                      <div class="w-screen -ml-48 h-full md:hidden">
                         <Image src="/services-img (1).jpg" width={5000} height={100} class="md:ml-40 md:w-screen" alt="" />
                      </div>

            </div>
             {/* Service 1 */}
            <div class="mb-44 space-y-10 md:p-52 md:mb-20 p-8 w-screen -ml- md:space-y-20 bg-white">
                <div class="space-y-10 md:flex md:space-x-40 md:-space-y-0">
                  <div class="md:space-y-5">
                     <div class="">
                       <span class="font-bold text-sm">- 01</span>
                     </div>
                     <div class="">
                      <h1 class="md:font-bold md:text-4xl font-bold text-lg">Planning</h1>
                     </div>
                     <hr class="line4" />
                     <div class="">
                       <p class="">
                         Lorem ipsum dolor sit amet, consectetur adpiscing elit.
                         Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                       </p>
                     </div>
                  </div>
                  
                  <div class="md:space-y-5">
                    <div class="">
                      <span class="font-bold text-sm">- 02</span>
                    </div>
                    <div class="">
                      <h1 class="md:font-bold md:text-4xl font-bold text-lg ">Project Management</h1>
                    </div>
                    <hr class="line4" />
                    <div class="">
                      <p class="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                      </p>
                    </div>
                  </div>
                </div>
                 {/* service 2 */}
                 <div class="md:flex md:space-x-40 md:-space-y-0 space-y-10">
                  <div class="md:space-y-5">
                     <div class="">
                       <span class="font-bold text-sm">- 03</span>
                     </div>
                     <div class="">
                      <h1 class="md:font-bold md:text-4xl font-bold text-lg">Structural Engineering</h1>
                     </div>
                     <hr class="line4" />
                     <div class="">
                       <p class="">
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                       </p>
                     </div>
                  </div>
                  
                  <div class="md:space-y-5">
                    <div class="">
                      <span class="font-bold text-sm">- 04</span>
                    </div>
                    <div class="">
                      <h1 class="md:font-bold md:text-4xl font-bold text-lg">Interior Design</h1>
                    </div>
                    <hr class="line4" />
                    <div class="">
                      <p class="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Service 3 */}
                <div class="md:flex md:space-x-40 md:-space-y-0 space-y-10">
                  <div class="md:space-y-5">
                     <div class="">
                       <span class="font-bold text-sm">- 05</span>
                     </div>
                     <div class="">
                      <h1 class="md:font-bold md:text-4xl font-bold text-lg">Building</h1>
                     </div>
                     <hr class="line4" />
                     <div class="">
                       <p class="">
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                       </p>
                     </div>
                  </div>
                  
                  <div class="md:space-y-5">
                    <div class="">
                      <span class="font-bold text-sm">- 06</span>
                    </div>
                    <div class="">
                      <h1 class="md:font-bold md:text-4xl font-bold text-lg">Consultation</h1>
                    </div>
                    <hr class="line4" />
                    <div class="">
                      <p class="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                      </p>
                    </div>
                  </div>
                </div>

            </div>

        </div>
      </section>
    )
}