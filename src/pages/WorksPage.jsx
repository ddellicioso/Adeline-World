import Header from "../components/Header";
import WorksListComponent from "../components/WorksListComponent";
import { loTitles } from "../constants/WorksPage";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

const WorksPage = () => {
  const outcomeURL = useParams();
  const loTitle = loTitles.filter(
    (item) => item.outcome === outcomeURL.outcome
  );

  return (
    <>
      <header className="">
        <Header />
      </header>

      <section className="max-w-[78rem] flex justify-end mt-[2rem] mx-[auto]">
        {loTitle.map((item) => (
          <div className="flex flex-col items-end">
            <h3 className="font-interItalic text-[1.1rem] my-[.5rem]">{item.loNumber}</h3>
            <h1 className="font-interItalic uppercase text-[1.3rem] max-w-[30rem] text-right">{item.title}</h1>
          </div>
        ))}
      </section>

      <section className="max-w-[90rem] mt-[1rem] my-[10rem] mx-[auto]">
        <WorksListComponent />
      </section>


    </>
  );
};

export default WorksPage;
