import React from "react";
import message_icon from "../assets/msg-icon.png";
import phone_icon from "../assets/phone-icon.png";
import mail_icon from "../assets/mail-icon.png";

const Contact = () => {
  return (
    <div id="contact">
      <form
        action=""
        className="flex flex-col justify-cente items-center gap-y-5 mt-7"
      >
        <div className="flex gap-3 items-center">
          <img src={phone_icon} alt="" className="w-[30px]" />
          <input
            required
            className="rounded w-[300px] bg-violet-700 text-white px-3 py-2 outline-0  "
            type="text"
            placeholder="Enter Your Phone"
          />
        </div>

        <div className="flex gap-3 items-center">
          <img src={mail_icon} alt="" className="w-[30px]" />
          <input
            className="rounded w-[300px] bg-violet-700 text-white px-3 py-2 outline-0  "
            type="email"
            required
            placeholder="Example@gmail.com"
          />
        </div>

        <div className="flex gap-3 items-center">
          <img src={message_icon} alt="" className="w-[30px]" />
          <input
            required
            className="rounded w-[300px] bg-violet-700 text-white px-3 py-2 outline-0  "
            type="text"
            placeholder="Enter Your Message"
          />
        </div>

        <div>
          <button className="rounded cursor-pointer w-[200px] bg-violet-900 text-white px-3 py-2 outline-0  ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
