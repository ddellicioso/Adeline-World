import { WorksList } from "../constants/WorksPage";
import { useParams } from "react-router-dom";

const WorkTitle = () => {
  const workTitle = useParams();
  const workContent = WorksList.filter((item) => item.url === workTitle.url);

  return (
    <div className="flex flex-col items-center text-center px-4 py-8 max-w-[30rem] mx-auto">
      {workContent.map((item, index) => (
        <div key={index}>
          {/* Client Name & Duration */}
          <div className="flex justify-between w-full text-[1.1rem] font-light mb-4">
            <p>{item.project}</p>
            <p>{item.duration}</p>
          </div>

          {/* Title */}
          <h1 className="h5 uppercase text-[2rem]">{item.title}</h1>

          {/* Learning Outcomes Title */}
          <h3 className="text-[0.9rem] font-light mb-4">Learning Outcome Checklist</h3>

          {/* Checklist Circles */}
          <ul className="flex justify-center gap-4">
            {item.fittingOutcomes.map((outcome, i) => (
              <li
                key={i}
                className={`rounded-full w-[2.5rem] h-[2.5rem] flex items-center justify-center text-[1rem] ${
                  outcome.value
                    ? "bg-white text-black"
                    : "border border-white text-white opacity-60"
                }`}
              >
                {outcome.outcomeNum}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WorkTitle;
