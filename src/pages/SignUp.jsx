import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";

const SignUp = () => {
  return (
    <div className="w-full h-screen relative rounded-6xl bg-whitesmoke-100 overflow-hidden flex flex-row items-end justify-start py-0 pr-[11px] pl-0 box-border gap-[11px] leading-[normal] tracking-[normal] text-center text-base-2 text-dimgray font-poppins mq1125:flex-wrap mq1125:pl-[11px] mq1125:pt-[11px] mq1125:pb-[11px] mq1125:box-border">
      <div className="flex-1 shadow-[28px_0px_50.49px_rgba(0,_0,_0,_0.17)] bg-white flex flex-col items-end justify-start pt-[39px] px-[50px] pb-[20px] box-border gap-[95px] min-w-[536px] max-w-full mq750:pt-[25px] mq750:pb-[105px] mq750:box-border mq750:min-w-full mq450:gap-[24px] mq1050:gap-[47px] mq1050:pl-[25px] mq1050:pr-[25px] mq1050:box-border">
        <img
          className="w-[825px] h-[900px] relative hidden max-w-full"
          alt=""
          src="/left-background.svg"
        />  
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-0 pl-px">
          <div className="w-[274px] flex flex-row items-start justify-start relative">
            <div className="absolute !m-[0] right-[28px] bottom-[-14px] font-semibold z-[1]">
              Sign up into your account
            </div>
           <img
              className="h-[106px] flex-1 relative max-w-full overflow-hidden object-cover z-[2]"
              loading="lazy"
              alt=""
              src="/dummy-logo@2x.png"
            />
          </div>
        </div>
        <form className="m-0 self-stretch flex flex-row items-start justify-center gap-[52px] max-w-full mq750:flex-wrap mq750:gap-[26px]">
          <FrameComponent1 />
          <FrameComponent />
        </form>
      </div>
      <div className="h-[675px] w-[593px] flex flex-col items-start justify-start min-w-[593px] max-w-full mq750:min-w-full mq1125:flex-1">
        <div className="self-stretch h-[502px] relative">
          <img
            className="absolute h-full top-[0px] bottom-[0px] left-[46px] max-h-full w-[520px]"
            loading="lazy"
            alt=""
            src="/vector1.svg"
          />
          <img
            className="absolute top-[16px] left-[0px] w-[593px] h-[418px] object-cover z-[1]"
            alt=""
            src="/sign-up01-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
