import { useCallback } from "react";
import NameEmailLabels from "./NameEmailLabels";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLoginNowClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[27px] min-w-[218px] max-w-full text-left text-base-2 text-dimgray font-poppins ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
        <div className="w-[104.9px] relative inline-block z-[1]">
          First Name :
        </div>
        <input
          className="w-full [border:none] [outline:none] bg-whitesmoke-200 self-stretch h-[51px] rounded-[8.08px] flex flex-row items-start justify-start pt-[14.5px] px-[22px] pb-[15.5px] box-border font-poppins text-mini-1 text-dimgray min-w-[202px] z-[1]"
          placeholder="Enter your name.."
          type="text"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
        <div className="relative inline-block min-w-[74.8px] z-[1]">
          Emal Id :
        </div>
        <input
          className="w-full [border:none] [outline:none] bg-whitesmoke-200 self-stretch h-[51px] rounded-[8.08px] flex flex-row items-start justify-start pt-[14.5px] px-[22px] pb-[15.5px] box-border font-poppins text-mini-1 text-dimgray min-w-[202px] z-[1]"
          placeholder="info@xyz.com"
          type="text"
        />
      </div>
      <NameEmailLabels password="Password :" xxxxxxxxxx="xxxxxxxxxx" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
        <div className="w-[158.5px] relative inline-block z-[1]">
          Company Name :
        </div>
        <input
          className="w-full [border:none] [outline:none] bg-whitesmoke-200 self-stretch h-[51px] rounded-[8.08px] flex flex-row items-start justify-start py-[15px] px-2.5 box-border font-poppins text-mini-1 text-dimgray min-w-[202px] z-[1]"
          placeholder="Enter company name ..."
          type="text"
        />
      </div>
      <button
        className="cursor-pointer [border:none] pt-[13px] px-[31px] pb-[13.5px] bg-midnightblue w-[214px] shadow-[0px_12.1px_24.23px_rgba(1,_11,_253,_0.12)] rounded-[8.08px] flex flex-row items-start justify-start box-border whitespace-nowrap z-[1] hover:bg-darkslateblue-100"
        onClick={onLoginNowClick}
      >
        <div className="h-[50.5px] w-[214px] relative shadow-[0px_12.1px_24.23px_rgba(1,_11,_253,_0.12)] rounded-[8.08px] bg-midnightblue hidden" />
        <div className="flex-1 relative text-base-2 font-semibold font-poppins text-white text-center z-[2]">{`Sign up `}</div>
      </button>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
