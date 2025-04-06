import Header from "../components/Header";
import Main from "../components/MainSection";
import AboutSection from "../components/AboutSection";
import WorksSection from "../components/WorksSection";
import Footer from "../components/Footer";
import ProjectSection from "../components/ProjectSection";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    window.location.hash = "#home";
  }, []);

  return (
    <>
      <header className="">
        <Header />
      </header>

      <main className="w-[100%] mt-[-3rem] lg:my-[2rem]">
        <Main />
      </main>

      <section className="w-[100%] hidden">
        <ProjectSection />
      </section>

      <section id="about" className="w-[100%] mt-[-2rem] md:mt-[5rem]">
        <AboutSection />
      </section>

      <section
        id="works"
        className="w-full hidden lg:inline-flex justify-center p-10 lg:pt-[8rem]"
      >
        <WorksSection />
      </section>

      <footer id="contact" className="block mx-[auto]">
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;
