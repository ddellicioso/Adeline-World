import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { WorksList } from "../constants/WorksPage";
import LinkArrow from "../assets/svg/link-arrow.jsx";

const WorksListComponent = () => {
  const outcomeURL = useParams();
  const works = WorksList.filter(item => item.outcomes.some(listItem => listItem === outcomeURL.outcome));

  return (
    <>
      {/* {works.map((item) => (
        <ul className="flex justify-center">
          {item.recent && (
            <li className = "max-w-[70rem]">
              <h4 className="h4 uppercase text-[1.8rem] ml-[.5rem]">Highlighted</h4>
              <div className="flex justify-between items-center">
                <img
                  src={item.coverImage}
                  alt={item.title}
                  className="rounded-[1rem] w-[480px] h-[auto] mr-[5rem]"
                />
                <div className="max-w-[30rem]">
                  <h3 className="font-interItalic text-[2rem] uppercase leading-[3rem]">{item.title}</h3>
                  <p className="font-interItalic mt-[1.5rem] mb-[3.5rem] text-[16px]">
                    {item.recentDesc}
                  </p>
                  <Link to={`WorkDetailPage/${item.url}`} className="flex group w-[7.8rem] justify-between items-center">
                    <p className="group relative font-interItalic uppercase text-[18px] after:content-[''] after:w-[100%] after:h-[2px] after:absolute after:bg-color-2 after:bottom-[-.1rem] after:left-0 after:opacity-0 group-hover:after:opacity-[.8] after:transition-all">Read more</p>
                    <LinkArrow className="group w-[.87rem] opacity-[.8] group-hover:opacity-[.95] transition-all" />
                  </Link>
                </div>
              </div>
            </li>
          )}
        </ul>
      ))} */}
      {works.map((item) => (
        <ul className="flex justify-center my-[1rem]">
          {!item.recent && (
            <li className="group w-[77%] py-[4rem] pt-[1rem] border-[2px] border-x-0 border-t-0 border-b-color-6 border-opacity-50">
              <Link
                to={`WorkDetailPage/${item.url}`}
                key={item.id}
                className="flex justify-between group w-[72rem] absolute"
              >
                <div className="flex">
                  <h2 className="h5 text-[2.5rem] uppercase mx-[1rem] opacity-80">
                    {item.title}
                  </h2>
                  <LinkArrow className="w-[1.8rem] opacity-[.7] self-start mt-[.6rem] group-hover:opacity-[.95] transition-opacity ease-in-out duration-200" />
                </div>
                {/* <img
                  src={item.coverImage}
                  className="w-[300px] h-auto rounded-[1rem] translate-y-[-40%] mr-[7rem] opacity-0 group-hover:opacity-90 transition-opacity ease-in-out duration-200"
                /> */}
              </Link> 
            </li>
          )}
        </ul>
      ))}
    </>
  );
};

export default WorksListComponent;
