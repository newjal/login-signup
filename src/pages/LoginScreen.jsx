import LoginForm from "../components/LoginForm";

const LoginScreen = () => {
  return (
    <div className="w-full h-screen relative rounded-6xl bg-whitesmoke-100 overflow-hidden flex flex-row items-start justify-start gap-[14px] leading-[normal] tracking-[normal] mq1125:flex-wrap">
      <section className="flex-1 bg-whitesmoke-100 overflow-hidden flex flex-row items-start justify-start py-0 pr-8 pl-0 box-border min-w-[613px] max-w-full mq750:min-w-full">
        <div className="h-[900px] flex-1 relative max-w-full">
          <img
            className="absolute top-[-12px] left-[0px] w-auto h-[612px] object-cover"
            alt=""
            src="/login-image@2x.png"
          />
          <img
            className="absolute top-[801px] left-[652px] w-[249px] h-[226px] z-[1]"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
          <img
            className="absolute top-[352px] left-[281px] w-[475px] h-[313px] z-[2]"
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
        </div>
      </section>
      <LoginForm />
      <img
        className="h-60 w-[299px] absolute !m-[0] top-[-57px] left-[-88px] z-[2]"
        alt=""
        src="/vector-2.svg"
      />
    </div>
  );
};

export default LoginScreen;
