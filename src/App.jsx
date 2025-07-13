import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="mb-[-100vh] py-0 bg-[#e8e8e3]">
        <section className="sticky top-0 flex h-screen items-end px-6">
          <div className="w-full flex flex-col gap-y-10 overflow-x-clip">
            <h1 className="overflow-clip">
              <span className="flex flex-col text-5xl font-semibold leading-[0.8] tracking-tight text-black md:hidden">
                <span className="inline-block">AMAN</span>
                <span className="inline-block">LATHAR</span>
              </span>
              <span className="hidden md:block w-full text-[15vw] font-extrabold uppercase leading-[0.8] tracking-tight text-black">
                AMAN LATHAR
              </span>
            </h1>
            <div className="grid w-full grid-cols-12 gap-x-5 gap-y-6">
              <div className="col-span-12 md:col-span-4 flex flex-col gap-y-10 pt-20">
                <p className="max-w-[32ch] text-base md:text-2xl xl:text-3xl font-medium leading-snug text-[#6b645c]">
                  Open to job opportunities worldwide. Passionate about building
                  polished, intuitive, and thoughtful digital experiences that
                  leave a mark.
                </p>
                <a href="#Contact">
                  <button className="rounded-full bg-gray-700 px-6 py-2 text-white font-bold text-lg tracking-wide transition-colors duration-300 hover:bg-blue-600">
                    CONTACT
                  </button>
                </a>
              </div>
              <div className="col-span-4 flex justify-center items-center mb-5">
                <img
                  src="/my_photo.jpg"
                  alt="Aman Lathar"
                  className="h-[15vh] md:h-[50vh] max-w-lg rounded-lg object-cover object-center grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
              <div className="col-span-8 md:col-span-4 flex flex-col items-end justify-end">
                <span className="max-w-[15ch] text-right font-mono text-sm sm:text-3xl font-medium uppercase leading-snug tracking-widest text-[#6b645c]">
                  Available for work
                </span>
                <span className="text-4xl sm:text-8xl xl:text-9xl font-semibold uppercase leading-none tracking-tight text-black">
                  Aug'10
                </span>
              </div>
            </div>
          </div>
        </section>
        <div className="h-screen" />
      </main>
      <section className=" bg-black z-10 relative rounded-t-4xl p-7 text-[#6b645c]">
        <div className="mb-[-100vh] h-screen ">
          <div className="text-4xl md:text-[8vw] font-extrabold  my-10">
            WHAT I KNOW/
          </div>
          <div className="sticky top-15 md:top-50  w-full">
            <p className="max-w-xl text-md md:ml-[40vw] lg:ml-[50vw] 2xl:ml-[60vw] md:text-lg  2xl:text-2xl">
              I specialize in building scalable full-stack web applications
              using MongoDB, Express.js, React, and Node.js. Passionate about
              clean architecture, performance optimization, and delivering
              seamless user experiences across modern interfaces.
            </p>
          </div>
        </div>
        <div className=" h-screen"></div>
        <div>
          <div className=" text-4xl md:text-[8vw] font-extrabold  my-30 ">
            SELECTED PROJECTS /
          </div>
          <div className=" flex">
            <div className=" h-[300vh] hidden w-1/2 md:block relative ">
              <h1 className="sticky top-0 text-[15vw] font-extrabold">01</h1>
            </div>
            <div className="w-screen md:w-1/2">
              <div className="h-screen w-full  bg-blue-500"></div>
              <div className="h-screen w-full  bg-green-400"></div>
              <div className="h-screen w-full  bg-red-500"></div>
            </div>
          </div>
        </div>
        <div className=" h-screen"></div>
      </section>
    </>
  );
}

export default App;
