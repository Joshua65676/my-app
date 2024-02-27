import { projectsData } from "@/constants";
import Image from "next/image";

export default function Projects() {
  return (
    <section>
      <div>
        <div class="mr-20 -ml-16 pt-10 mt-36 md:p-20 p-32 md:w-4/12 bg-white md:pt-1 md:ml-40">
          <div class="md:mt-10 md:-ml-5 -ml-10">
            <span class="font-bold ml-8">Global Perspective</span>
          </div>
          <hr class="About-line bg-red-600 p-1 w-40 h-2 m-12 -ml-28" />
          <div class="md:m-20 md:-ml-1 -ml-5">
            <h2 class="font-bold md:text-7xl text-3xl md:-mr-28">Projects</h2>
          </div>
        </div>

        <div class="md:grid md:grid-cols-4 md:gap-5  md:-mt-32 md:p-20 md:mb-44 p-48 w-screen -ml- bg-white ">
          {projectsData.map(({ id, image, description }) => (
            <div key={id} class="bg-black">
              <div class="parent">
                <Image
                  src={image}
                  width={500}
                  height={300}
                  class="image"
                  alt=""
                />
              </div>
              <div class="text-center p-3">
                <span class="text-white text-sm font-bold">{description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
