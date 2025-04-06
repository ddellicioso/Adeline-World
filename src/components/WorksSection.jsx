import GlassContainer from "../components/GlassContainer";
import { Link } from "react-router-dom";
import { learningOutcomes } from "../constants";

const WorksSection = () => {
  return (
    <ul className="max-w-[78rem] inline-flex flex-wrap">
      <h1 className="flex justify-center items-center max-h-[136px] mx-[auto] my-[auto] mb-[3rem] min-w-[37rem]">
        <h1 className="h1-1 text-[4.5rem] max-h-[4rem]">Learning</h1>
        <h1 className="h1-2 text-[6.5rem] mx-[1rem]">Outcomes</h1>
      </h1>
      {learningOutcomes.map((item) => (
        <li className="mx-[auto] my-[1rem]">
          <Link to={`/WorksPage/${item.url}`} key={item.id} className="">
            <GlassContainer className="min-w-[37rem] h-[9rem] rounded-[1rem] flex justify-center items-center">
              <h3 className="font-interItalic uppercase text-[1.2rem] p-[2rem] max-w-[30rem]">{item.title}</h3>
            </GlassContainer>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default WorksSection;
