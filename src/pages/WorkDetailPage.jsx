import Header from "../components/Header";
import WorkDetail2 from "../components/WorkDetail2";
import WorkProcess from "../components/WorkProcess";
import Footer from "../components/Footer";
import WorkTitle from "../components/WorkTitle";

const WorkDetailPage = () => {
  return (
    <>
      <header className="">
        <Header />
      </header>

      <section className="flex flex-col items-center max-w-[80rem] mx-auto my-[5rem] gap-[2rem]">
        {/* Top row: WorkTitle + WorkDetail2 */}
        <div className="flex w-full justify-center gap-[2rem]">
          <aside className="basis-[15%]">
            <WorkDetail2 />
          </aside>
            <div className="basis-[90%] pr-[5rem]">
              <WorkTitle />
            </div>
        </div>

        {/* Bottom row: WorkProcess */}
        <div className="w-auto">
          <WorkProcess />
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default WorkDetailPage;
