import React from "react";
import { Link } from "react-router-dom";
import logo from "../assests/img/logo.svg";
import { footerData1 } from "../data/footerData";

function Footer() {
  return (
    <div className="w-full flex flex-col">
      <div className="px-5 py-14 footerData1 flex flex-col justify-center items-center gap-9 bgFooterSection1">
        <img src={logo} alt="logo" />

        <div className="w-full flex justify-center items-center gap-7 flex-wrap">
          {footerData1.map((item) => (
            <Link
              to={item.link}
              key={item.id}
              className="text-[#CECACA] text-[14px] font-bold uppercase transition-all duration-150 focus:text-citrine"
            >
              {item.text}
            </Link>
          ))}
        </div>

        <div className="divider"></div>
      </div>
    </div>
  );
}

export default Footer;
