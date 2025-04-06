import GlassContainer from "../components/GlassContainer";
import RightArrow from "../assets/svg/arrow.jsx";
import { Link } from "react-router-dom";

const ContactBtn = () => {
  return (
    <button>
      <GlassContainer className="group w-[10.5rem] h-[3.5rem] rounded-[1rem] flex items-center justify-center">
        <div className="group flex justify-between items-center w-[8.5rem] mx-[.8rem]">
          <p className="group group-hover:translate-x-[15%] transition-all">
            contact me
          </p>
          <div className="w-[2.5rem] h-[2.5rem] ml-[.5rem] border-solid border-[1px] border-color-2 group-hover:border-opacity-0 transition-all rounded-full flex justify-center items-center">
            <RightArrow className=" group scale-[.48] group-hover:translate-x-[12%] transition-all w-[2.3rem] opacity-[.9]" />
          </div>
        </div>
      </GlassContainer>
    </button>
  );
};

export default ContactBtn;
