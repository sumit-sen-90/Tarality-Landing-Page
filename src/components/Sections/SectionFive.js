import React from "react";
import constant from "../../utils/constant";
function SectionFive() {
  return (
    <div className=" max-w-[1480px] m-auto flex justify-center items-center flex-col ">
      <div className="m-4 flex flex-col  items-center gap-3">
        <p className="font-poppins text-white text-xl md:text-3xl font-bold mt-12 ">
          CEO & Director Tarality Mr. Abhijit shukla
        </p>
      </div>

      <div className="max-w-sm mx-auto m-5 bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
        <img className="w-full h-auto" src={constant.CEO_IMG} alt="Card" />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">Abhijit Shukla</h2>
          <p className="text-gray-600">
            Experienced Assistant Software Engineer in the information
            technology and services industry.
          </p>
          <a
            href={constant.CEO_ADDRESS}
            target="_blank"
            rel="noreferrer"
          >
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300 ease-in-out">
              Learn More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SectionFive;
