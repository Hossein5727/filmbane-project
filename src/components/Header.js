import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import { BsYoutube, BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import { navData } from "../data/navData";
import logo from "../assests/img/logo.svg";

function Header() {
  const [isToggleMenu, setIsToggleMenu] = useState(false);
  const navRef = useRef();
  const navContainerRef = useRef();
  const headerRef = useRef();

  useEffect(() => {
    // toggle navbar and has transition!!
    if (isToggleMenu) {
      navRef.current.classList.add("animate__fadeInRight", "right-0");
      navRef.current.classList.remove(
        "animate__fadeOutRight",
        "-right-[700px]"
      );
      navContainerRef.current.classList.add("block");
      navContainerRef.current.classList.remove("hidden");
    } else {
      navRef.current.classList.remove("animate__fadeInRight", "-right-[700px]");
      navRef.current.classList.add("animate__fadeOutRight");
      setTimeout(() => {
        navContainerRef.current.classList.add("hidden");
      }, 500);
    }

    headerScrollChangeBg();

    return () => {
      clearTimeout(navContainerRef);
    };
  }, [navRef, isToggleMenu, headerRef]);

  const headerScrollChangeBg = () => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 10
        ? headerRef.current.classList.add("bg-[#151923]") ||
          headerRef.current.classList.remove("bg-transparent")
        : headerRef.current.classList.remove("bg-[#151923]");
    });
  };

  return (
    <header
      ref={headerRef}
      className="w-full fixed top-0 left-0 bg-transparent  px-4 py-5 z-[8] transition-all duration-500"
    >
      <div className="w-full flex items-center justify-between">
        <img src={logo} alt="logo" />
        <HiMenuAlt4
          className="text-4xl cursor-pointer transition-all duration-150 text-white"
          onClick={() => setIsToggleMenu(!isToggleMenu)}
        />
      </div>
      <div
        ref={navContainerRef}
        className={`absolute z-[2] transition-all duration-200 w-[100vw] h-[100vh] hidden left-0 top-0  bg-[rgba(0,0,0,0.5)]`}
      >
        <nav
          ref={navRef}
          className={`absolute animate__animated animate__delay-1ms  z-[3] right-0  flex top-0 w-[310px] h-[100vh] bg-eerie-black flex-col items-start justify-start gap-8  py-8`}
        >
          <div className="flex justify-between w-full px-6 items-center">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <FaTimes
              className="text-3xl cursor-pointer transition-all duration-150 text-white font-bold "
              onClick={() => setIsToggleMenu(false)}
            />
          </div>
          <div className="flex w-full flex-col justify-start gap-2 text-white text-[15px]">
            {navData.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className={`font-[500] border-b px-6 py-[7px] ${
                  item.text === "Home" &&
                  "border-t py-[11px] border-t-[#2F3438]"
                } border-b-[#2F3438] transition-all duration-150  focus:text-citrine`}
              >
                {item.text}
              </Link>
            ))}
          </div>
          <div className="px-6 py-3 w-full flex items-center justify-center gap-8 text-white transition-all duration-150 text-xl">
            <BsTwitter className="cursor-pointer transition-all duration-150  hover:text-citrine" />
            <BsFacebook className="cursor-pointer transition-all duration-150  hover:text-citrine" />
            <BsInstagram className="cursor-pointer transition-all duration-150  hover:text-citrine" />
            <BsYoutube className="cursor-pointer transition-all duration-150  hover:text-citrine" />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
