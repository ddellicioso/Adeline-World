import ThreeLogo from "./ThreeLogo";

const Main = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row mx-[auto] my-[6rem] w-fit lg:w-[70%] justify-center">
      <div>
        <h2 className="h2">Hello, I'm</h2>
        <h1 className="h1-2 text-[5rem] md:text-[7rem] w-[18rem] md:w-[30rem] text-wrap leading-[5rem] md:leading-[6.5rem]">
          Ellyshia Cheryl Tan
        </h1>
        <h3 className="font-interItalic uppercase text-[.8rem] md:text-[1.2rem] my-[.5rem] mb-0 md:mb-[.5rem]">
          Front-end Developer
        </h3>
        <h3 className="font-interItalic uppercase text-[.8rem] md:text-[1.2rem]">
          UI/UX Designer
        </h3>
      </div>

      <div className="w-[10rem] h-[10rem] md:w-[25rem] md:h-[21rem] lg:mx-[auto] mx-0 self-end rotate-[10deg] lg:rotate-0">
        <ThreeLogo />
      </div>

      {/* <h1 className="inline-flex flex-wrap justify-between gap-[2rem] md:gap-[5.5rem] opacity-[.5]">
        <span className="h1-1 text-[2.2rem] md:text-[3.5rem] lg:text-[4.8rem]">This is</span>
        <span className="h1-2 text-[2.2rem] md:text-[3.5rem] lg:text-[4.8rem]">Portfolio of</span>
        <span className="h1-1 text-[2.2rem] md:text-[3.5rem] lg:text-[4.8rem]">Ellyshia Tan</span>
        <span className="h1-2 text-[2.2rem] md:text-[3.5rem] lg:text-[4.8rem]">A media design student</span>
        <span className="h1-1 text-[2.2rem] md:text-[3.5rem] lg:text-[4.8rem]">Creating</span>
        <span className="h1-1 text-[2.2rem] md:text-[3.5rem] lg:text-[4.8rem]">With passion and</span>
        <span className="h1-2 text-[2.2rem] md:text-[3.5rem] lg:text-[4.8rem]">Dedication</span>
        <span className="h1-1 text-[2.2rem] md:text-[3.5rem] lg:text-[4.8rem]">To</span>
        <span className="h1-2 text-[2.2rem] md:text-[3.5rem] lg:text-[4.8rem]">Establish a better</span>
        <span className="h1-1 text-[2.2rem] md:text-[3.5rem] lg:text-[4.8rem]">Digital world</span>
      </h1> */}
    </div>
  );
};

export default Main;
