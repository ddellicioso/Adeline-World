import GlassContainer from "./GlassContainer";
import selfPortraitBackground from "../assets/self_portrait_background.png";
import selfPortrait from "../assets/self_portrait.png";
import ContactBtn from "./contactBtn";

const AboutSection = () => {
  return (
    <div className="flex lg:flex-wrap flex-wrap-reverse w-fit mx-[auto] max-w-[100%]">
      <GlassContainer
        noHover={true}
        className="hidden lg:flex justify-center w-[28rem] h-[40rem] rounded-t-full rotate-[-2deg] scale-[.7] lg:scale-[.8] xl:scale-[.9] lg:mx-[2rem] xl:mx-[3rem]"
      >
        <img
          src={selfPortraitBackground}
          className="rounded-t-full scale-[.92] opacity-[.6]"
        />
        <img
          src={selfPortrait}
          className="absolute scale-[1.07] translate-y-[4%]"
        />
      </GlassContainer>

      <div className="my-[7rem] lg:my-[6rem] xl:my-[5rem] xl:mx-[3rem] max-w-[50rem] flex flex-col mx-[auto]">
        <div className="-rotate-[5deg] scale-[1.2] ml-[1rem] mb-[2rem] md:ml-[8rem] lg:ml-[4rem] lg:mb-[4rem] xl:mb-[5rem]">
          <h1 className="h1-1 text-[3rem] md:text-[4rem] xl:text-[5rem]">So glad</h1>
          <h1 className="h1-2 text-[3rem] md:text-[4rem] xl:text-[5.2rem] ml-[2.5rem] lg:mt-[-.5rem] xl:ml-[2.8rem] xl:mt-[.2rem]">
            You're here!
          </h1>
        </div>
        <p className="max-w-[18rem] md:max-w-[35rem] lg:max-w-[30rem] xl:max-w-[35rem] font-interItalic text-[1rem] mb-[5rem]">
          I'm Ellyshia Cheryl Tan, a second year ICT & Media Design student. I'm an international student from Indonesia,
          currently studying ICT & Media Design in Eindhoven, The Netherlands. As an individual who values creativity and
          whose interests lies in design & front-end development, I would like to be able to utilize my creativity
          and skills in programming by creating meaningful solutions that foster connection with users.
        </p>
        <button className="self-end hidden lg:block lg:mt-[-3rem] lg:ml-[-4rem] lg:scale-[.9] xl:scale-[1] xl:m-0">
          <a href="#contact">
            <ContactBtn />
          </a>
        </button>
      </div>
    </div>
  );
};

export default AboutSection;
