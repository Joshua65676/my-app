import Image from "next/image";

export default function Projects(){
    return (
        <section>
           <div>
            <div class="mr-20 -ml-16 pt-10 mt-36 md:p-20 p-32 md:w-4/12 bg-white md:pt-1 md:ml-40">
              <div class="md:mt-10 md:-ml-5 -ml-10"> 
                <span class="font-bold ml-8">Global Perspective</span>
              </div>
                <hr class="About-line bg-red-600 p-1 w-40 h-2 m-12 -ml-28"/>
              <div class="md:m-20 md:-ml-1 -ml-5">
                <h2 class="font-bold md:text-7xl text-3xl md:-mr-28">Projects</h2>
              </div>
            </div>

            <div class="md:grid md:grid-cols-4 md:gap-5  md:-mt-32 md:p-20 md:mb-44 p-48 w-screen -ml- bg-white ">
                <div class="bg-black">
                    <div class="parent"><Image src="/mirror-building.jpg" width={500} height={300} class="image" alt="" /></div>
                    <div class="text-center p-3">
                      <span class="text-white text-sm font-bold">The Rock & Roll Hall of Fame Museum</span>
                    </div>
                </div>

                <div class="bg-black">
                      <div class="parent"><Image src="/projects-1-img.jpg" width={500} height={300} class="image" alt="" /></div>
                    <div class="text-center p-3">
                      <span class="text-white text-sm font-bold">Geometric Glass Building Architecture</span>
                    </div>
                </div>

                <div class="bg-black">
                    <div class="parent"><Image src="/projects-2-img.jpg" width={500} height={300} class="image" alt="" /></div>
                    <div class="text-center p-3">
                      <span class="text-white font-bold text-sm">Architecture Building Park Facade</span>
                    </div>
                </div>

                <div class="bg-black">
                       <div class="parent"><Image src="/projects-09-free-img.jpg" width={500} height={300} class="image" alt="" /></div>
                    <div class="text-center p-3">
                      <span class="text-white font-bold text-sm">Abstract Reflection Metal Window</span>
                    </div>
                </div>

                <div class="bg-black">
                       <div class="parent"><Image src="/projects-08-free-img.jpg" width={500} height={300} class="image" alt="" /></div>
                    <div class="text-center p-3">
                      <span class="text-white font-bold text-sm">Architecture White Spiral Building</span>
                    </div>
                </div>

                <div class="bg-black">
                      <div class="parent"><Image src="/traingular-building.jpg" width={500} height={300} class="image" alt="" /></div>
                    <div class="text-center p-3">
                      <span class="text-white font-bold text-sm">Arch20 - Captivating Geometry</span>
                    </div>
                </div>

                <div class="bg-black">
                       <div class="parent"><Image src="/projects-06-free-img.jpg" width={500} height={300} class="image" alt="" /></div>
                    <div class="text-center p-3">
                      <span class="text-white font-bold text-sm">Avantage Acheter Appartement</span>
                    </div>
                </div>

                <div class="bg-black">
                       <div class="parent"><Image src="/projects-05-free-img.jpg" width={500} height={300} class="image" alt="" /></div>
                    <div class="text-center p-3">
                      <span class="text-white font-bold text-sm">Blue & White Clear Glass Building</span>
                    </div>
                </div>

                <div class="bg-black">
                       <div class="parent"><Image src="/projects-04-free-img.jpg" width={500} height={300} class="image" alt="" /></div>
                    <div class="text-center p-3">
                      <span class="text-white font-bold text-sm">Contemporary Architecture Ceiling</span>
                    </div>
                </div>

                <div class="bg-black">
                       <div class="parent"><Image src="/projects-03-free-img.jpg" width={500} height={300} class="image" alt="" /></div>
                    <div class="text-center p-3">
                      <span class="text-white font-bold text-sm">Modern White Architecture Building</span>
                    </div>
                </div>

                <div class="bg-black">
                   <div class="parent"><Image src="/architect-bridge.jpg" width={500} height={300} class="image" alt="" /></div>
                    <div class="text-center p-3">
                      <span class="text-white font-bold text-sm">Architecture Bridge Infrastructure</span>
                    </div>
                </div>

                <div class="bg-black">
                       <div class="parent"><Image src="/projects-01-free-img.jpg" width={500} height={300} class="image" alt="" /></div>
                    <div class="text-center p-3">
                      <span class="text-white font-bold text-sm">Architecture Building Infrastructure</span>
                    </div>
                </div>
            </div>
           </div>
        </section>
    )
}