import React from "react";

const About = () => {
  return (
    <div className="">
      <section className="bg-slate-900">
        <div className="container flex flex-col-reverse mx-auto lg:flex-row">
            
          <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 text-white ">
          Hi, I am Fatema Tuz Johora, a dedicated MERN stack web developer with expertise in HTML, CSS, and JavaScript. With three years of experience and a passion for web development, I have completed a comprehensive course in complete web development. My focus is on creating visually appealing interfaces and delivering an exceptional user experience. I excel in front-end technologies, including HTML for perfect structuring, CSS for stunning designs, and JavaScript for interactivity. Moreover, my proficiency in the MERN stack enables me to develop robust and scalable applications. I am a dedicated professional who values teamwork, effective communication, and continuous learning. Currently, I am working on my portfolio website to showcase my skills and projects.            
          </div>

          
          <div className="lg:w-1/2 xl:w-3/5 ">
            <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
              {/* <img
                src="https://i.ibb.co/888m2rY/fatiha.png"
                alt=""
                className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />*/}
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
