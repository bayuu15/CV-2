import { Navbar, NavbarLink } from "flowbite-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  let menuActive = show ? "left-0" : "-left-full";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        setScroll(true);
        setShow(false);
      } else {
        setScroll(false);
      }
     
    });
  });

  let scrollActive = scroll ? "py-6 bg-white shadow" : "py-4"

  return (
    //   <nav className="sticky top-0 left-0" >
    //       <nav className="sticky top-0 left-0 bg-white border-b border-gray-200 ">
    //           <div className="max-w-5xl mx-auto px-4">
    //               <div className="flex items-center justify-between h-16">
    //                   <span className="text-2xl text-gray-900 font-semibold">Logo</span>
    //                   <div className="flex space-x-4 text-gray-900">
    //                       <a href="#Home">Home</a>
    //                       <h1>|</h1>
    //                       <a href="#About">About Me</a>
    //                       <h1>|</h1>
    //                       <a href="#Project">Projects</a>
    //                       <h1>|</h1>
    //                       <a href="#contact">Contact</a>
    //                   </div>
    //               </div>
    //           </div>
    //       </nav>
    //   </nav>

    <div className={`navbar fixed w-full transition-all ${scrollActive}`}>
      <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between">
          <div className="logo">
            <h1 className="text-2xl font-bold">CV</h1>
          </div>
          <ul
            className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:text-black md:p-0 md:m-0 md:transition-none gap-8 fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg shadow-slate-300 bg-sky-400 font-bold text-white transition-all`}
          >
            <li>
              <a href="#" className="font-medium opacity-75">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="font-medium opacity-75">
                About Me
              </a>
            </li>
            <li>
              <a href="#project" className="font-medium opacity-75">
                Project
              </a>
            </li>
            <li>
              <a href="#contact" className="font-medium opacity-75">
                Contact
              </a>
            </li>
          </ul>
          <div className="sosial items-center gap-2">
            <a
              href=""
              className="bg-sky-400 px-3 py-2 rounded-full text-white font-bold hover:bg-sky-600 transition-all"
            >
              Social Media
            </a>
          </div>
            <i
              className="ri-menu-line text-3xl md:hidden block"
              onClick={handleClick}
            ></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
