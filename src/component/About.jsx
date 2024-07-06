import React from "react";

const About = () => {
  return (
    <div className="bg-slate-900 min-h-screen">
      <section className="">
        <h1 className="font-semibold text-white text-4xl text-center pt-10 pb-10">
          About Me
        </h1>
        <div className="container flex flex-col-reverse mx-auto lg:flex-row p-8">
          <div className="flex flex-col  rounded-sm pr-5 lg:w-[800px] justify-center items-center text-xl text-white">
            <p>
              Hi, I am{" "}
              <span className="text-orange-500 font-semibold">
                Fatema Tuz Johora
              </span>
              , a dedicated MERN stack web developer with expertise in HTML,
              CSS, and JavaScript. With three years of experience and a passion
              for web development, I have completed a comprehensive course in
              complete web development. My focus is on creating visually
              appealing interfaces and delivering an exceptional user
              experience. I excel in front-end technologies, including HTML for
              perfect structuring, CSS for stunning designs, and JavaScript for
              interactivity. Moreover, my proficiency in the MERN stack enables
              me to develop robust and scalable applications. I am a dedicated
              professional who values teamwork, effective communication, and
              continuous learning. Currently, I am working on my portfolio
              website to showcase my skills and projects.
            </p>
          </div>

          <div className="">
            <div className="bg-slate-800 rounded-xl">
              <img
                src="https://i.ibb.co/888m2rY/fatiha.png"
                alt=""
                className=" w-full"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
