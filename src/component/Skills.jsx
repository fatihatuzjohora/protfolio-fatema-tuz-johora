import React from "react";

const Skills = () => {
  return (
    <div className="bg-slate-900 min-h-screen">
      <h1 className="text-4xl text-white font-semibold text-center pt-10 pb-10">
        {" "}
        Skils
      </h1>
      <div className="flex items-center  justify-center ">
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 pb-10">
            <div
              className="flex rounded-3xl flex-col-reverse bg-white skil p-3 md:mx-5 mt-10 justify-center items-center aos-init aos-animate"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="400"
            >
              <p className="md:text-3xl font-semibold ">HTML</p>
              <img
                className="md:w-20 w-14 skil-img"
                src="data:image/png;base64,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"
                alt=""
              />
            </div>

            <div
              className="flex rounded-3xl flex-col-reverse bg-white md:p-3 skil md:mx-5 mt-10 justify-center items-center aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="400"
            >
              <p className="md:text-3xl font-semibold ">CSS</p>
              <img
                className="md:w-20 w-14 skil-img"
                src="../../public/CSS3_logo.svg-f2886d40.png"
                alt=""
              />
            </div>

            <div
              className="flex rounded-3xl flex-col-reverse bg-white md:p-3 skil md:mx-5 mt-10 justify-center items-center aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="400"
            >
              <p className="md:text-3xl font-semibold ">React</p>
              <img
                className="md:w-20 w-14 skil-img"
                src="../../public/react-35ef61ed.svg"
                alt=""
              />
            </div>

            <div
              className="flex rounded-3xl flex-col-reverse bg-white md:p-3 skil md:mx-5 mt-10 justify-center items-center aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="400"
            >
              <p className="md:text-3xl font-semibold ">Tailwind</p>
              <img
                className="md:w-20 w-14 skil-img"
                src="../../public/download.png"
                alt=""
              />
            </div>

            <div
              className="flex rounded-3xl flex-col-reverse bg-white md:p-3 skil md:mx-5 mt-10 justify-center items-center aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="400"
            >
              <p className="md:text-3xl font-semibold ">MongoDB</p>
              <img
                className="md:w-20 w-14 skil-img"
                src="../../public/225-2254691_9kib-354x415-unnamed-mongodb-logo-svg-removebg-preview-f93dc190.png"
                alt=""
              />
            </div>

            <div
              className="flex rounded-3xl flex-col-reverse bg-white md:p-3 skil md:mx-5 mt-10 justify-center items-center aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="400"
            >
              <p className="md:text-3xl font-semibold ">Express</p>
              <img
                className="md:w-20 w-14 skil-img"
                src="../../public/expressjs-icon-44e8ea18.svg"
                alt=""
              />
            </div>

            <div
              className="flex rounded-3xl flex-col-reverse bg-white md:p-3 skil md:mx-5 mt-10 justify-center items-center aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="400"
            >
              <p className="md:text-3xl font-semibold ">Node.js</p>
              <img
                className="md:w-20 w-14 skil-img"
                src="../../public/128px-Node.js_logo.svg-5293df05.png"
                alt=""
              />
            </div>

            <div
              className="flex rounded-3xl flex-col-reverse bg-white md:p-3 skil md:mx-5 mt-10 justify-center items-center aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="400"
            >
              <p className="md:text-3xl font-semibold ">Javascript</p>
              <img
                className="md:w-20 w-14 skil-img"
                src="../../public/download (1).png"
                alt=""
              />
            </div>

            <div
              className="flex rounded-3xl flex-col-reverse bg-white md:p-3 skil md:mx-5 mt-10 justify-center items-center aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="400"
            >
              <p className="md:text-3xl font-semibold ">JWT</p>
              <img
                className="md:w-20 w-14 skil-img"
                src="../../public/jwt-3-87ed3f60.svg"
                alt=""
              />
            </div>

            <div
              className="flex rounded-3xl flex-col-reverse bg-white md:p-3 skil md:mx-5 mt-10 justify-center items-center aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="400"
            >
              <p className="md:text-3xl font-semibold ">Bootstrap</p>
              <img
                className="md:w-20 w-14 skil-img"
                src="../../public/Bootstrap_logo.svg-ef000cd4.png"
                alt=""
              />
            </div>

            <div
              className="flex rounded-3xl flex-col-reverse bg-white md:p-3 skil md:mx-5 mt-10 justify-center items-center aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="400"
            >
              <p className="md:text-3xl font-semibold ">Firebase</p>
              <img
                className="md:w-20 w-14 skil-img"
                src="../../public/firebase-logo-e2c2f0e1.png"
                alt=""
              />
            </div>

            <div
              className="flex rounded-3xl flex-col-reverse bg-white md:p-3 skil md:mx-5 mt-10 justify-center items-center aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="400"
            >
              <p className="md:text-3xl font-semibold ">Redux</p>
              <img
                className="md:w-20 w-14 skil-img"
                src="../../public/download (2).png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
