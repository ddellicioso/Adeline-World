
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import LeftArrow from "../assets/svg/arrow.jsx";
import LinkArrow from "../assets/svg/link-arrow.jsx";
import { useLocation } from "react-router-dom";


const WorkDetail2 = () => {
  const workTitle = useParams();


  const outcome = workTitle.outcome;

  return (
      <div className="max-w-[10rem]">
        <Link
          to={`/WorksPage/${outcome}`}
          className="group relative font-interItalic lowercase text-[1.1rem] flex"
        >
          <LeftArrow className="rotate-[180deg] w-[1.2rem] mx-[.7rem] group-hover:mx-[.4rem] transition-all" />
          <p className="group underline">Back to list of works</p>
        </Link>
        </div>
    );

};

export default WorkDetail2;