import Adel_logo from "../assets/png/Adel_logo.png";
import { navigation } from "../constants";
import { hamburgerNavigation } from "../constants";
import { socials } from "../constants";
import { useLocation } from "react-router-dom";
import MenuSvg from "../assets/svg/MenuSvg";
import GlassContainer from "../components/GlassContainer";
import { Link } from "react-router-dom";
import ContactBtn from "./contactBtn";
import { useState } from "react";
import LinkArrow from "../assets/svg/link-arrow"

const Header = () => {
  const pathName = useLocation();
  const noFix = pathName.pathname != "/";

  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    setOpenNavigation(false);
  };

  return (
    <header id="home" className="w-[100%]">
      <div className="flex items-center justify-between my-[2rem] lg:mx-[3rem] mx-[2rem]">
        <Link to="/#home" className="block w-[5rem] xl:mr-8 relative z-[12]">
          <img src={Adel_logo} width={100} height={100} alt="Adeline Velanicha" />
        </Link>

        <button onClick={toggleNavigation} className="fixed right-[2rem] z-[11] lg:hidden">
          <GlassContainer
            className={`w-[3.8rem] h-[3.8rem] absolute rounded-[1rem] translate-x-[-1%] backdrop-blur-[5px] ${
              openNavigation ? "hidden" : ""
            }`}
          />
          <MenuSvg openNavigation={openNavigation} />
        </button>

        <nav
          className={`${
            openNavigation ? "" : "hidden"
          } fixed z-[10] top-0 left-0 w-[100%] text-white bg-color-2`}
        >
          <ul className="w-[100%] flex flex-col items-center mt-[6rem] mb-[3rem]">
            {hamburgerNavigation.map((item) => (
              <>
                <li
                  onClick={handleClick}
                  className="p-[1.2rem] pb-[1.5rem] uppercase font-interItalic text-[1.1rem] flex justify-center"
                >
                  <a href={item.hash}>{item.title}</a>
                </li>

                <div className="w-[80%] h-[1px] bg-gradient-to-r from-n-2 via-n-1 to-n-2"></div>
              </>
            ))}
          </ul>
          <h4 className="uppercase font-semibold mx-[auto] w-fit text-[.7rem] opacity-[.7] tracking-[.09rem]">
            socials
          </h4>
          <ul className="w-[100%] flex justify-around my-[1.2rem] mt-[.5rem]">
            {socials.map((item) => (
              <li
                onClick={handleClick}
                className="flex items-center opacity-[.9] text-[.9rem]"
              >
                <a href={item.url}>{item.title}</a>
                <LinkArrow white={true} className="w-[.75rem] mx-[.2rem]" />
              </li>
            ))}
          </ul>
        </nav>

        <nav
          className={`${
            noFix ? "" : "fixed w-[100%] z-[11]"
          } hidden lg:block`}
        >
          <GlassContainer
            noHover={true}
            className={`${
              noFix
                ? ""
                : "w-fit mx-[auto] xl:translate-x-[-13.5%] lg:translate-x-[-19%] backdrop-blur-[10px]"
            } h-[3.5rem] flex items-center] rounded-[1rem]`}
          >
            <ul className="flex items-center justify-center">
              {navigation.map((item) => (
                <>
                  {pathName.pathname === "/" && (
                    <li>
                      <a
                        key={item.id}
                        href={`/${item.hash}`}
                        className={`block relative text-[14px] font-interItalic uppercase mx-[1.8rem] after:content-[''] after:w-0 after:h-[1.5px] after:bg-color-2 after:absolute after:left-0 after:bottom-0 after:transition-width after:duration-200 hover:after:w-[95%] ${
                          item.hash === pathName.hash
                            ? "after:w-[95%]"
                            : "after:w-0"
                        }`}
                      >
                        {item.title}
                      </a>
                    </li>
                  )}

                  {pathName.pathname != "/" && (
                    <li>
                      {item.title != "Learning Outcomes" && (
                        <Link
                          to={`/${item.hash}`}
                          className="block relative text-[14px] font-interItalic uppercase mx-[1.8rem] after:content-[''] after:w-0 after:h-[1.5px] after:bg-color-2 after:absolute after:left-0 after:bottom-0 after:transition-width after:duration-200 hover:after:w-[95%]"
                        >
                          <p>{item.title}</p>
                        </Link>
                      )}

                      {item.title === "Learning Outcomes" && (
                        <div className="group relative h-[5rem] mt-[3.6rem]">
                          <Link
                            to={`/${item.hash}`}
                            className="group block relative text-[14px] font-interItalic uppercase mx-[1.8rem]"
                          >
                            <p>{item.title}</p>
                          </Link>
                          {item.list && (
                            <GlassContainer
                              noHover={true}
                              className="backdrop-blur-[10px] group fixed z-[10] top-[7rem] ml-[.2rem] w-[13rem] rounded-[1rem] hidden group-hover:flex justify-center"
                            >
                              <ul className="">
                                {item.list.map((listItem) => (
                                  <>
                                    {listItem.title != "Learning Outcome 5" && (
                                      <li className="relative m-[1rem] my-[1.1rem] w-[11rem] pb-[.5rem] uppercase text-[14px] font-interItalic border-b-[1px] border-n-3 flex justify-center after:content-[''] after:opacity-0 hover:after:opacity-[.7] after:w-[90%] after:h-[1px] after:bg-color-2 after:absolute after:bottom-[.6rem] after:transition-all">
                                        <Link to={`/WorksPage/${listItem.url}`}>
                                          {listItem.title}
                                        </Link>
                                      </li>
                                    )}
                                    {listItem.title ===
                                      "Learning Outcome 5" && (
                                      <li className="relative m-[1rem] my-[1rem] uppercase text-[14px] font-interItalic flex justify-center after:content-[''] after:opacity-0 hover:after:opacity-[.7] after:w-[90%] after:h-[1px] after:bg-color-2 after:absolute after:bottom-[.1rem] after:transition-all">
                                        <Link to={`/WorksPage/${listItem.url}`}>
                                          {listItem.title}
                                        </Link>
                                      </li>
                                    )}
                                  </>
                                ))}
                              </ul>
                            </GlassContainer>
                          )}
                        </div>
                      )}
                    </li>
                  )}
                </>
              ))}
            </ul>
          </GlassContainer>
        </nav>

        <button className="hidden lg:block relative z-[12]">
          <a href="#contact">
            <ContactBtn />
          </a>
        </button>
      </div>
    </header>
  );
};

export default Header;
