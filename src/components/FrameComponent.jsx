import NameEmailLabels from "./NameEmailLabels";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[27px] min-w-[219px] max-w-full text-left text-base-2 text-dimgray font-poppins ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
        <div className="w-[105.2px] relative inline-block z-[1]">
          Last Name :
        </div>
        <input
          className="w-full [border:none] [outline:none] bg-whitesmoke-200 self-stretch h-[51px] rounded-[8.08px] flex flex-row items-start justify-start pt-[14.5px] px-[22px] pb-[15.5px] box-border font-poppins text-mini-1 text-dimgray min-w-[202px] z-[1]"
          placeholder="Enter your name.."
          type="text"
        />
      </div>
      <NameEmailLabels
        password="Mobile No.  :"
        xxxxxxxxxx="+91 - 98596 58000"
      />
      <NameEmailLabels password="Confirm Password  :" xxxxxxxxxx="xxxxxxxxxx" />
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
