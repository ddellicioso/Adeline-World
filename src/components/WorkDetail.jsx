import { WorksList } from "../constants/WorksPage";
import { useParams } from "react-router-dom";
import GlassContainer from "./GlassContainer";
import { Link } from "react-router-dom";
import LeftArrow from "../assets/svg/arrow.jsx";
import LinkArrow from "../assets/svg/link-arrow.jsx";
import { useLocation } from "react-router-dom";

const WorkDetail = () => {
  const workTitle = useParams();
  const workContent = WorksList.filter((item) => item.url === workTitle.url);

  const outcome = workTitle.outcome;

  return (
    <div className="max-w-[21rem]">
      <Link
        to={`/WorksPage/${outcome}`}
        className="group relative font-interItalic lowercase text-[1.1rem] flex"
      >
        <LeftArrow className="rotate-[180deg] w-[1.2rem] mx-[.7rem] group-hover:mx-[.4rem] transition-all" />
        <p className="group underline">Back to list of works</p>
      </Link>

      {workContent.map((item) => (
        <GlassContainer
          noHover={true}
          className="max-w-[25rem] h-[auto] rounded-[1rem] my-[1rem] flex justify-center"
        >
          <div className="p-[1.2rem] max-w-[21rem] mx-[auto]">
            <h2 className="h2 uppercase text-[2rem]">{item.title}</h2>
            {/* <img
              src={item.coverImage}
              className="w-[350px] h-auto my-[1rem] rounded-[.5rem]"
            /> */}
            <div className="my-[1.5rem]">
              {item.project && (
                <>
                  <h4 className="h4 uppercase text-[1.3rem] opacity-75 leading-none">
                    Project
                  </h4>
                  <h3 className="h3 uppercase text-[1.8rem] pb-[.5rem] border-b-[1.75px] border-x-0 border-t-0 border-color-2 border-opacity-50 mb-5">
                    {item.project}
                  </h3>
                </>
              )}

              {item.client && (
                <>
                  <h4 className="h4 uppercase text-[1.3rem] opacity-75 leading-none">
                    Client
                  </h4>
                  <h3 className="h3 uppercase text-[1.8rem] pb-[.5rem] border-b-[1.75px] border-x-0 border-t-0 border-color-2 border-opacity-50 mb-5">{item.client}</h3>
                </>
              )}

              {item.gitLink && (
                <>
                  <h4 className="h4 uppercase text-[1.3rem] opacity-75 leading-none">
                    Repository
                  </h4>
                  <a
                    href={item.gitLink}
                    target="_blank"
                    className="group h3 uppercase text-[1.75rem] flex items-center"
                  >
                    <p className="group group-hover:underline underline-offset-[.2rem] decoration-[1.5px]">
                      {item.linkText}
                    </p>
                    <LinkArrow className="group w-[1.3rem] mx-[.5rem] opacity-[.8] group-hover:opacity-[1] transition-all" />
                  </a>
                </>
              )}
            </div>
          </div>
        </GlassContainer>
      ))}

      <div className="max-w-[20rem] my-[1rem]">
        <h3 className="font-interItalic text-[1rem] uppercase">
          Learning outcomes checklist
        </h3>
        <ul className="flex justify-between my-[1rem]">
          {workContent.map((item) =>
            item.fittingOutcomes.map((outcome) => (
              <li
                className={`${
                  outcome.value
                    ? "bg-color-2 text-white"
                    : "border-solid border-[1px] border-color-2 opacity-[.7]"
                } rounded-full w-[2.5rem] h-[2.5rem] flex justify-center items-center`}
              >
                {outcome.outcomeNum}
              </li>
            ))
          )}
        </ul>

        {workContent.map((item) => (
          <>
            {item.outcomeDesc.map((item) => (
              <div className="mt-[1rem]">
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-[14px] leading-[1.2rem]">{item.desc}</p>
              </div>
            ))}
          </>
        ))}
      </div>
    </div>
  );
};

export default WorkDetail;
