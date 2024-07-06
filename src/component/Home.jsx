import React from "react";

const Home = () => {
  return (
    <div className="bg-zinc-800 font min-h-screen">
      <div className=" text-white flex flex-col justify-center p-6 min-h-screen mx-auto w-[600px]">
        <div className="flex flex-col md:text-3xl  justify-center items-start">
          <span className="">
            &lt;&gt; <br /> Hi_There!
          </span>
          <span className="md:text-7xl">I'm_Fatema_Tuz_Johora</span>
          <span>A Professional</span>
          <span>
            MERN Stack BACK-END FRONT-END Developer <br /> &lt;/&gt;
          </span>{" "}
          <br />
        </div>
        <div className="">
          <button className=" border btn  text-white hover:bg-red-900 bg-zinc-800 text-xl h-[58px]">
            <a href="https://docs.google.com/document/d/1HS0yrlhsFgt3xYAfIwuVakxJyvprDuLopl_H9tCb0lc/export?format=pdf">
              Download CV
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
