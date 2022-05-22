import React from "react";

function Cta() {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bgService w-full h-full px-5 py-9 flex flex-col justify-center items-center gap-5">
      <div className="w-full flex flex-col text-center gap-3">
        <h2 className="uppercase text-[30px] font-bold leading-[36px] text-rich-black-fogra-39">
          TRIAL START FIRST 30 DAYS.
        </h2>
        <p className="text-[14px] font-medium leading-[25.2px] text-rich-black-fogra-39">
          Enter your email to create or restart your membership.
        </p>
      </div>

      <div className="w-full">
        <form
          onSubmit={submitHandler}
          className="w-full flex flex-col items-center text-center gap-4"
        >
          <input
            type="text"
            className="w-full h-[57px] px-4 py-4 text-[14px] text-rich-black-fogra-39 bg-white rounded"
            placeholder="Enter your email"
            required
          />
          <button
            type="submit"
            className="w-[50%] text-[14px] font-bold uppercase bg-rich-black-fogra-39 text-citrine h-[55px] rounded transition-all duration-150 hover:bg-citrine hover:text-rich-black-fogra-39 border-2 border-transparent hover:border-rich-black-fogra-39 focus:bg-citrine focus:text-rich-black-fogra-39 focus:border-rich-black-fogra-39"
          >
            get started
          </button>
        </form>
      </div>
    </div>
  );
}

export default Cta;
