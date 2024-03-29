import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const footerInfo = [
  {
    title: "Company Info",
    one: "About Us",
    two: "Carrier",
    three: "We are hiring",
    four: "Blog",
  },
  {
    title: "Legal",
    one: "About Us",
    two: "Carrier",
    three: "We are hiring",
    four: "Blog",
  },
  {
    title: "Features",
    one: "Business Marketing",
    two: "User Analytic",
    three: "Live Chat",
    four: "Unlimited Support",
  },
  {
    title: "Resources",
    one: "About Us",
    two: "Carrier",
    three: "We are hiring",
    four: "Blog",
  },
];

export default function Footer() {
  return (
    <>
      <div className="flex w-full flex-col items-center px-24 justify-center bg-white sm:justify-center sm:p-0">
        <div className="flex w-4/5 justify-between flex-wrap items-center py-5 sm:gap-3 sm:bg-[#FAFAFA] sm:w-full sm:px-10">
          <div className="text-[#252B42] flex items-center gap-24 sm:w-full">
            <h3 className="text-2xl font-bold">Bandage</h3>
          </div>
          <hr />
          <div className="flex gap-2 sm:w-full">
            <FontAwesomeIcon icon={faInstagram} style={{ color: "#23A6F0" }} />
            <FontAwesomeIcon icon={faFacebook} style={{ color: "#23A6F0" }} />
            <FontAwesomeIcon icon={faTwitter} style={{ color: "#23A6F0" }} />
          </div>
        </div>
        <div className="flex justify-start w-4/5 py-5 flex-wrap sm:gap-5">
          <div className="flex basis-2/3 sm:flex-wrap sm:gap-5">
            {footerInfo.map((info, index) => (
              <div
                key={index}
                className="w-full flex flex-col relative text-black text-left gap-y-2  sm:gap-2"
              >
                <h2 className="text-base font-bold">{info.title}</h2>
                <ul className="text-sm font-bold text-[#737373] sm:gap-2">
                  <li>
                    <a href="#">{info.one}</a>
                  </li>
                  <li>{info.two}</li>
                  <li>{info.three}</li>
                  <li>{info.four}</li>
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col text-left flex-grow basis-1/3 gap-3">
            <h2 className="text-base font-bold text-black">Get in touch</h2>
            <form className="flex">
              <input
                className="text-sm max-w-fit border-2 text-[#737373] bg-gray-50 border-gray-200"
                type="text"
                placeholder="Your E-mail"
              />
              <button className="bg-[#23A6F0]  text-white font-normal text-sm py-4 px-6 rounded hover:bg-blue-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="w-full justify-center flex bg-[#FAFAFA]">
          <div className="flex justify-start w-4/5 py-5">
            <p className="text-base font-bold text-[#737373]">
              Made With Love By Finland All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
