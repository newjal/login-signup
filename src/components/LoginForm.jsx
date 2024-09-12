import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const LoginForm = ({ className = "" }) => {
  const navigate = useNavigate();

  const onSignUpClick = useCallback(() => {
    navigate("/signup-screen");
  }, [navigate]);

  return (
    <form
      className={`m-0 w-[300px] shadow-[-28px_0px_50.49px_rgba(0,_0,_0,_0.05)] bg-white flex flex-col items-end justify-start pt-[100px] px-[26px] pb-[137.5px] box-border gap-[37.5px] min-w-[483px] max-w-full mq750:gap-[19px] mq750:min-w-full mq450:pt-[83px] mq450:pb-[58px] mq450:box-border mq1050:pt-32 mq1050:pb-[89px] mq1050:box-border mq1125:flex-1 ${className}`}
    >
      <img
        className="w-[400px] h-[900px] relative hidden "
        alt=""
        src="/right-background.svg"   
      />
      <div className="w-[398.1px] flex flex-row items-start justify-center pt-0 px-0 pb-[30.5px] box-border max-w-full">
        <div className="flex flex-row items-start justify-start relative">
          <div className="relative text-base-2 font-semibold font-poppins text-dimgray text-center z-[1]">
            Login into your account
          </div>
        <img
            className="h-[106px] w-[274px] absolute !m-[0] top-[-96px] left-[-55px] object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/dummy-logo@2x.png"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[23.7px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[10.3px] max-w-full">
          <div className="relative text-base-2 font-poppins text-dimgray text-left inline-block min-w-[71px] z-[1]">
            Email Id :
          </div>
          <div className="self-stretch rounded-[8.08px] bg-whitesmoke-200 flex flex-row items-start justify-between py-0 pr-0 pl-5 box-border max-w-full gap-[20px] z-[1] mq450:flex-wrap mq450:pr-5 mq450:pb-5 mq450:box-border">
            <div className="self-stretch w-[429.1px] relative rounded-[8.08px] bg-whitesmoke-200 hidden max-w-full" />
            <input
              className="w-[210px] [border:none] [outline:none] bg-[transparent] h-[35.2px] flex flex-col items-start justify-start pt-[14.2px] px-0 pb-0 box-border font-poppins text-mini-1 text-dimgray"
              placeholder="info@provistechnologies.com"
              type="text"
            />
            <img
              className="h-[50.5px] w-[50.5px] relative z-[2]"
              alt=""
              src="/mail-icon.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[10.3px] max-w-full">
          <div className="relative text-base-2 font-poppins text-dimgray text-left inline-block min-w-[78px] z-[1]">
            Password
          </div>
          <div className="self-stretch rounded-[8.08px] bg-whitesmoke-200 flex flex-row items-start justify-between py-0 pr-0 pl-5 box-border max-w-full gap-[20px] z-[1] mq450:flex-wrap mq450:pr-5 mq450:pb-5 mq450:box-border">
            <div className="self-stretch w-[429.1px] relative rounded-[8.08px] bg-whitesmoke-200 hidden max-w-full" />
            <input
              className="w-36 [border:none] [outline:none] bg-[transparent] h-[35.2px] flex flex-col items-start justify-start pt-[14.2px] px-0 pb-0 box-border font-poppins text-mini-1 text-dimgray"
              placeholder="Enter your password"
              type="text"
            />
            <div className="h-[50.5px] w-[50.5px] relative rounded-[8.08px] bg-midnightblue z-[2]">
              <div className="absolute top-[0px] left-[0px] rounded-[8.08px] bg-midnightblue w-full h-full hidden" />
              <img
                className="absolute top-[13.2px] left-[13.2px] w-[24.2px] h-[24.2px] overflow-hidden z-[3]"
                alt=""
                src="/show-password.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end">
          <div className="relative text-mini-1 [text-decoration:underline] font-poppins text-midnightblue text-left inline-block min-w-[126px] z-[1]">
            Forgot password?
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] pt-[13.1px] px-5 pb-[13.4px] bg-midnightblue self-stretch shadow-[0px_12.1px_24.23px_rgba(1,_11,_253,_0.12)] rounded-[8.08px] flex flex-row items-start justify-center box-border whitespace-nowrap max-w-full z-[1] hover:bg-darkslateblue-100">
        <div className="h-[50.5px] w-[429.1px] relative shadow-[0px_12.1px_24.23px_rgba(1,_11,_253,_0.12)] rounded-[8.08px] bg-midnightblue hidden max-w-full" />
        <div className="relative text-base-2 font-semibold font-poppins text-white text-center inline-block min-w-[83px] z-[1]">
          Login now
        </div>
      </button>
      <div className="self-stretch flex flex-row items-start justify-center gap-[20.1px] mq450:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start pt-[11.1px] px-0 pb-0 box-border min-w-[120px]">
          <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-silver" />
        </div>
        <div className="relative text-mini-1 font-poppins text-silver text-left inline-block min-w-[20px] z-[1]">
          OR
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[11.1px] px-0 pb-0 box-border min-w-[120px]">
          <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-silver" />
        </div>
      </div>
      <button
        className="cursor-pointer py-3 px-5 bg-[transparent] self-stretch rounded-[8.08px] box-border flex flex-row items-start justify-center max-w-full z-[1] border-[1px] border-solid border-midnightblue hover:bg-darkslateblue-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslateblue-100"
        onClick={onSignUpClick}
      >
        <div className="h-[50.5px] w-[429.1px] relative rounded-[8.08px] box-border hidden max-w-full border-[1px] border-solid border-midnightblue" />
        <div className="relative text-base-2 font-semibold font-poppins text-midnightblue text-center inline-block min-w-[97px] z-[1]">
          Signup now
        </div>
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  className: PropTypes.string,
};

export default LoginForm;
