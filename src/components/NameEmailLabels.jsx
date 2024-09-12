import PropTypes from "prop-types";

const NameEmailLabels = ({ className = "", password, xxxxxxxxxx }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full text-left text-base-2 text-dimgray font-poppins ${className}`}
    >
      <div className="w-24 relative inline-block z-[1]">{password}</div>
      <div className="self-stretch rounded-[8.08px] bg-whitesmoke-200 flex flex-row items-start justify-start pt-[14.5px] px-[22px] pb-[15.5px] box-border max-w-full z-[1] text-mini-1">
        <div className="h-[51px] w-[336px] relative rounded-[8.08px] bg-whitesmoke-200 hidden max-w-full" />
        <div className="w-[108.3px] relative inline-block shrink-0 z-[2]">
          {xxxxxxxxxx}
        </div>
      </div>
    </div>
  );
};

NameEmailLabels.propTypes = {
  className: PropTypes.string,
  password: PropTypes.string,
  xxxxxxxxxx: PropTypes.string,
};

export default NameEmailLabels;
