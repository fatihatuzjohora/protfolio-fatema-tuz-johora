import "./App.css";
import { FaHome, FaLaptopCode } from "react-icons/fa";
import { IoDocumentOutline, IoPersonSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Element, Link } from "react-scroll";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Projects from "./component/Projects";
import Skills from "./component/Skills";

function App() {
  const link = (
    <>
      <Link
        activeClass="active"
        to="home"
        smooth={true}
        duration={500}
        spy={true}
        className="text-white font-semibold bold flex justify-start gap-3 text-2xl mb-5"
      >
        <FaHome />
        Home
      </Link>

      <Link
        activeClass="active"
        spy={true}
        to="skills"
        smooth={true}
        duration={500}
        className="text-white font-semibold bold flex justify-start gap-3 text-2xl mb-5"
      >
        <FaLaptopCode />
        Skills
      </Link>

      <Link
        activeClass="active"
        spy={true}
        to="projects"
        smooth={true}
        duration={500}
        className="text-white font-semibold bold flex justify-start gap-3 text-2xl mb-5"
      >
        <IoDocumentOutline />
        Projects
      </Link>

      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        duration={500}
        className="text-white font-semibold bold flex justify-start gap-3 text-2xl mb-5"
      >
        <IoPersonSharp />
        About
      </Link>

      <Link
        activeClass="active"
        spy={true}
        to="contact"
        smooth={true}
        duration={500}
        className="text-white font-semibold bold flex justify-start gap-3 text-2xl mb-5"
      >
        <MdEmail />
        Contact
      </Link>
    </>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        <div className="w-1/5 min-h-screen  bg-blue-500 px-2 py-4 fixed top-0 flex justify-center items-center">
          <div className="flex flex-col md:block  w-[130px] mx-auto ">{link}</div>
        </div>

        <div className=" ml-[270px] ">
          <Element name="home" className="sec1">
            <Home></Home>
          </Element>

          <Element name="skills" className="sec2">
            <Skills></Skills>
          </Element>

          <Element name="projects" className="sec2">
            <Projects></Projects>
          </Element>

          <Element name="about" className="sec2">
            <About></About>
          </Element>

          <Element name="contact" className="sec3">
            <Contact></Contact>
          </Element>
        </div>
      </div>
    </div>
  );
}

export default App;
