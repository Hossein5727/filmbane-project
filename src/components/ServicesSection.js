import React from "react";
import imgService from "../assests/img/service-banner.jpg";
import { MdLogin } from "react-icons/md";
import { serviceCardsData } from "../data/serviceCardsData";
import ServiceCard from "./ServiceCard";

function ServicesSection() {
  return (
    <div className="servicesSectionBg w-full h-full px-4 py-16 flex flex-col justify-start items-start gap-6">
      <div className="w-full relative">
        <img src={imgService} className="w-full" alt="serviceImg" />
        <a download href={imgService} className="service-btn">
          download
          <MdLogin className="text-[26px]" />
        </a> 
      </div>

      <div className="flex flex-col justify-start items-start gap-4 w-full">
        <div className="flex items-center gap-2">
          <div className="w-[38px]  h-[3px] rounded-lg bg-citrine "></div>
          <h4 className="uppercase text-white text-[13px] font-[500]">
            Our Services
          </h4>
        </div>

        <h2 className="text-[32px] font-[700] leading-[38.4px] text-white">
          Download Your Shows Watch Offline.
        </h2>

        <p className="text-[14px] font-[500] leading-[25.2px] text-[#BDBDBD]">
          Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod
          tempor.There are many variations of passages of lorem Ipsum available,
          but the majority have suffered alteration in some injected humour.
        </p>
      </div>

      <div className="w-full flex flex-col justify-start items-start gap-6">
        {serviceCardsData.map((item) => (
          <ServiceCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;
