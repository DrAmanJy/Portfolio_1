import Header from "./components/Header";
import SelectedProjects from "./components/SelectedProjects";

function App() {
  return (
    <>
      <Header />
      <main className="mb-[-100vh] py-0 bg-[#e8e8e3]">
        <section className="sticky top-0 flex h-screen items-end px-6">
          <div className="w-full flex flex-col gap-y-10 overflow-x-clip">
            <div className="md:hidden block">
              <img
                src="/my_photo.jpg"
                alt="Aman Lathar"
                className="h-[40vh] absolute z-0 top-20 max-w-lg rounded-lg object-cover object-center grayscale"
              />
            </div>
            <h1 className="overflow-clip z-1">
              <span className="flex flex-col text-5xl font-semibold leading-[0.8] tracking-tight text-black md:hidden">
                <span className="inline-block">AMAN</span>
                <span className="inline-block">LATHAR</span>
              </span>
              <span className="hidden md:block w-full text-[15vw] font-extrabold uppercase leading-[0.8] tracking-tight text-black">
                AMAN LATHAR
              </span>
            </h1>

            <div className="w-full flex flex-wrap gap-x-5 gap-y-6 z-1">
              <div className="w-full md:w-[32%] flex flex-col gap-y-10 pt-20">
                <p className="max-w-[32ch] text-base md:text-2xl xl:text-3xl font-medium leading-snug text-[#6b645c]">
                  Full-stack JavaScript developer MERN dedicated to crafting
                  efficient, scalable, and user-friendly web solutions with
                  clean code and solid architecture.
                </p>
                <a href="#Contact">
                  <button className="rounded-full bg-gray-700 px-6 py-2 text-white font-bold text-xl transition-colors duration-300 hover:bg-blue-600">
                    CONTACT
                  </button>
                </a>
              </div>
              <div className="w-full md:w-[30%] flex justify-center items-center mb-5">
                <img
                  src="/my_photo.jpg"
                  alt="Aman Lathar"
                  className="h-[15vh] hidden md:block md:h-[50vh] max-w-lg rounded-lg object-cover object-center grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
              <div className="w-full md:w-[32%] flex flex-col items-end justify-end mb-20">
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

      <section className="bg-black z-10 relative rounded-4xl p-7 text-[#6b645c]">
        <div>
          <div className="text-4xl md:text-[7vw] font-extrabold my-10 text-white">
            WHAT I KNOW/
          </div>
          <div className=" h-[210vh]">
            <div className="w-full mb-20">
              <p className="max-w-xl text-md md:ml-[40vw] lg:ml-[50vw] 2xl:ml-[60vw] md:text-lg 2xl:text-2xl">
                I’m a MERN stack developer skilled in building scalable,
                full-stack applications with a strong emphasis on clean code,
                modular architecture, and performance optimization. I craft
                intuitive user interfaces with React, robust APIs with Node and
                Express, and efficient data models with MongoDB—all aligned to
                deliver seamless digital experiences.
              </p>
            </div>

            {/* Full-Stack Section */}
            <div className="sticky top-[11vh] border-t pt-10">
              <div className="flex flex-col md:grid md:grid-cols-12 items-center gap-x-4">
                <span className="col-span-2 text-2xl text-blue-400 font-semibold">
                  (01)
                </span>
                <h3 className="col-span-8 col-start-6 text-2xl md:text-4xl font-bold py-4">
                  Full-Stack Development
                </h3>
              </div>
              <div className="flex flex-col md:grid md:grid-cols-12 min-h-[40vh] gap-6 pt-6">
                <div className="col-span-7 col-start-6 flex flex-col gap-6">
                  <p className="text-base md:text-lg max-w-[40ch] text-neutral-300">
                    I build complete web applications using the MERN stack. From
                    responsive user interfaces to secure backend APIs, I deliver
                    performant and maintainable full-stack solutions.
                  </p>
                  <div className="flex flex-col divide-y divide-gray-700">
                    <span className="flex items-start gap-4 py-2 text-lg font-semibold text-blue-300">
                      <span className="text-sm font-mono text-neutral-500 leading-[200%]">
                        01
                      </span>
                      React, Node.js, Express.js
                    </span>
                    <span className="flex items-start gap-4 py-2 text-lg font-semibold text-blue-300">
                      <span className="text-sm font-mono text-neutral-500 leading-[200%]">
                        02
                      </span>
                      MongoDB, Mongoose, REST APIs
                    </span>
                    <span className="flex items-start gap-4 py-2 text-lg font-semibold text-blue-300">
                      <span className="text-sm font-mono text-neutral-500 leading-[200%]">
                        03
                      </span>
                      Git, GitHub, Postman
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Frontend Section */}
            <div className="sticky top-[25vh] border-t bg-black pt-10">
              <div className="flex flex-col md:grid md:grid-cols-12 items-center gap-x-4">
                <span className="col-span-2 text-2xl text-blue-400 font-semibold">
                  (02)
                </span>
                <h3 className="col-span-8 col-start-6 text-2xl md:text-4xl font-bold py-4">
                  Frontend Development
                </h3>
              </div>
              <div className="flex flex-col md:grid md:grid-cols-12 min-h-[40vh] gap-6 pt-6">
                <div className="col-span-7 col-start-6 flex flex-col gap-6">
                  <p className="text-base md:text-lg max-w-[40ch] text-neutral-300">
                    I focus on building fast, responsive, and accessible user
                    interfaces with clean, component-based design patterns using
                    React and TailwindCSS.
                  </p>
                  <div className="flex flex-col divide-y divide-gray-700">
                    <span className="flex items-start gap-4 py-2 text-lg font-semibold text-blue-300">
                      <span className="text-sm font-mono text-neutral-500 leading-[200%]">
                        01
                      </span>
                      React, JSX, TailwindCSS
                    </span>
                    <span className="flex items-start gap-4 py-2 text-lg font-semibold text-blue-300">
                      <span className="text-sm font-mono text-neutral-500 leading-[200%]">
                        02
                      </span>
                      HTML5, CSS3, JavaScript (ES6+)
                    </span>
                    <span className="flex items-start gap-4 py-2 text-lg font-semibold text-blue-300">
                      <span className="text-sm font-mono text-neutral-500 leading-[200%]">
                        03
                      </span>
                      Responsive & Component-Based Design
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Section */}
            <div className="sticky top-[39vh] border-t bg-black pt-10">
              <div className="flex flex-col md:grid md:grid-cols-12 items-center gap-x-4">
                <span className="col-span-2 text-2xl text-blue-400 font-semibold">
                  (03)
                </span>
                <h3 className="col-span-8 col-start-6 text-2xl md:text-4xl font-bold py-4">
                  Backend Development
                </h3>
              </div>
              <div className="flex flex-col md:grid md:grid-cols-12 min-h-[40vh] gap-6 pt-6">
                <div className="col-span-7 col-start-6 flex flex-col gap-6">
                  <p className="text-base md:text-lg max-w-[40ch] text-neutral-300">
                    I build robust and scalable backends using Node.js and
                    Express. I implement RESTful APIs, middleware,
                    authentication, and integrate MongoDB for secure data
                    handling.
                  </p>
                  <div className="flex flex-col divide-y divide-gray-700">
                    <span className="flex items-start gap-4 py-2 text-lg font-semibold text-blue-300">
                      <span className="text-sm font-mono text-neutral-500 leading-[200%]">
                        01
                      </span>
                      Node.js, Express.js, Middleware
                    </span>
                    <span className="flex items-start gap-4 py-2 text-lg font-semibold text-blue-300">
                      <span className="text-sm font-mono text-neutral-500 leading-[200%]">
                        02
                      </span>
                      MongoDB, Mongoose, CRUD Operations
                    </span>
                    <span className="flex items-start gap-4 py-2 text-lg font-semibold text-blue-300">
                      <span className="text-sm font-mono text-neutral-500 leading-[200%]">
                        03
                      </span>
                      dotenv, CORS, Helmet, Postman
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SelectedProjects />

        <div className="h-screen"></div>
      </section>
    </>
  );
}

export default App;
