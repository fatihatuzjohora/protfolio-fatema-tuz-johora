import "./App.css";
import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaLaptopCode } from "react-icons/fa";
import { IoDocumentOutline, IoPersonSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Footer from "./component/Footer";

function App() {
  const link = (
    <>
      <NavLink
        to="home"
        className="text-white font-semibold bold flex justify-start gap-3 text-2xl mb-5"
      >
        <FaHome />
        Home
      </NavLink>
      <NavLink
        to="skills"
        className="text-white font-semibold bold flex justify-start gap-3 text-2xl mb-5"
      >
        <FaLaptopCode />
        Skills
      </NavLink>
      <NavLink
        to="projects"
        className="text-white font-semibold bold flex justify-start gap-3 text-2xl mb-5"
      >
        <IoDocumentOutline />
        Projects
      </NavLink>
      <NavLink
        to="about"
        className="text-white font-semibold bold flex justify-start gap-3 text-2xl mb-5"
      >
        <IoPersonSharp />
        About
      </NavLink>
      <NavLink
        to="contact"
        className="text-white font-semibold bold flex justify-start gap-3 text-2xl mb-5"
      >
        <MdEmail />
        Contact
      </NavLink>
    </>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        <div className="w-1/5 min-h-screen bg-blue-500 px-2 py-4 sticky top-0 flex justify-center items-center">
          <div className="flex flex-col w-[130px] mx-auto">
            {link}
          </div>
        </div>
        <div className="w-4/5 p-4">
          <Outlet />
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
