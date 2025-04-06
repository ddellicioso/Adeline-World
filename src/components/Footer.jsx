
import { socials } from "../constants";
import LinkArrow from "../assets/svg/link-arrow.jsx";
import { useLocation } from "react-router-dom";
import LinkedinIcon from "../assets/socials/linkedin.jsx";
import GitlabIcon from "../assets/socials/gitlab.jsx";
import MailIcon from "../assets/socials/mail.jsx";
import { WorksList } from "../constants/WorksPage";

const Footer = () => {
  // Gets full URL path
  const pathName = useLocation();
  console.log(pathName);

  // Access URL segment that contains the title of the work
  const workTitle = pathName.pathname.split("/")[4];
  console.log(workTitle);

  // Accessing index of each work detail in the WorksList constant
  const currentIndex = WorksList.findIndex((item) => item.url === workTitle);
  console.log(currentIndex);



  if (currentIndex === WorksList.length - 1) {
    nextIndex = 0;
    previousIndex = currentIndex - 1;
  } else if (currentIndex === 0) {
    nextIndex = currentIndex + 1;
    previousIndex = WorksList.length - 1;
  } else {
    nextIndex = currentIndex + 1;
    previousIndex = currentIndex - 1;
  }

  // Access URL segment that contains the learning outcome detail of the work
  const backLink = pathName.pathname.split("/")[2];
  console.log(backLink);

  return (
    <>
      {pathName.pathname === "/" && (
        <div className="mt-[-5rem] lg:mt-[12rem] mx-[auto] w-[100%]">
          

          <div className="flex flex-col md:flex-row items-center justify-center mt-[.8rem] w-[100%] bg-color-2 md:my-[.8rem] md:bg-transparent">
            <ul className="flex my-[1rem] mb-[0] md:hidden">
              {socials.map((item) => (
                <li className="my-[1.5rem] mt-[1rem] mx-[3.2rem] opacity-[.9]">
                  <a
                    className="h-[4rem] flex flex-col justify-between items-center"
                    href={item.url}
                  >
                    {item.title === "Linkedin" && (
                      <LinkedinIcon
                        white={true}
                        className="w-[2rem] opacity-[.9] group-hover:opacity-[1] transition-all"
                      />
                    )}
                    {item.title === "Gitlab" && (
                      <GitlabIcon
                        white={true}
                        className="w-[2rem] opacity-[.9] group-hover:opacity-[1] transition-all"
                      />
                    )}
                    <div className="flex items-center">
                      <p className="relative text-white text-[13px] ml-[.4rem]">
                        {item.title}
                      </p>
                      <LinkArrow
                        white={true}
                        className="w-[.7rem] h-[.7rem] ml-[.3rem] opacity-[.8] group-hover:opacity-[1]"
                      />
                    </div>
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-center w-[100%] mx-[2rem]">
              <div className="h-[1px] w-[100%] bg-color-2 opacity-[.8] hidden md:block"></div>
              <p className="text-[.5rem] md:text-[.75rem] my-[.5rem] md:my-[0] min-w-fit uppercase mx-[1rem] text-white md:text-color-2 font-interItalic opacity-[.65] md:opacity-[1]">
                Adeline Agna Velanicha
              </p>
            </div>
          </div>
        </div>
      )}

      {/* {!pathName.pathname.includes("WorkDetailPage") && */}
      {pathName.pathname != "/" && (
        <div className="flex flex-col items-center w-[100%] bg-color-7">
          <div className="flex justify-between mx-[1rem] my-[.4rem] w-[100%]">
            <p className="text-[10px] uppercase mx-[1rem] text-white font-interItalic">
              Adeline Agna Velanicha
            </p>
            {/* <ul className="flex justify-between items-center font-interItalic scale-[.9] w-[25%]">
              {socials.map((item) => (
                <a href={item.url} key={item.id}>
                  <li className="group flex justify-center items-center text-white">
                    {item.title === "Linkedin" && (
                      <LinkedinIcon
                        white={true}
                        className="w-[1rem] opacity-[.9] group-hover:opacity-[1] transition-all"
                      />
                    )}
                    {item.title === "Gitlab" && (
                      <GitlabIcon
                        white={true}
                        className="w-[1rem] opacity-[.9] group-hover:opacity-[1] transition-all"
                      />
                    )}
                    <p className="relative text-[13px] ml-[.4rem] after:content-[''] after:opacity-0 hover:after:opacity-[.7] after:w-[100%] after:transition-all after:duration-250 after:h-[1.1px] after:bg-white after:absolute after:left-0 after:bottom-[.2rem]">
                      {item.title}
                    </p>
                    <LinkArrow
                      white={true}
                      className="w-[.7rem] h-[.7rem] ml-[.3rem] opacity-[.8] group-hover:opacity-[1]"
                    />
                  </li>
                </a>
              ))}
            </ul> */}
          </div>
        </div>
      )}

      
      
    </>
  );
};

export default Footer;
