import { SelectedProjects } from "../constants/Projects";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const ProjectDetailPage = () => {
  const projectTitle = useParams();
  const projectsList = SelectedProjects.filter((item) => item.url === projectTitle.url)

  return (
    <>
        <Header />
        
        {projectsList.map(project => (
          <>
            <img className="rounded-[1rem] w-[20rem] mx-[auto]" src={project.coverPhoto}/>
            <h2 className="h2 text-[4rem] w-fit mx-[auto] my-[1.5rem]">Studio PLatalea</h2>
            <div className="flex flex-wrap mx-[1.4rem]">
              <div className="px-[1rem]">
                <h4 className="h4 uppercase opacity-[.5]">Project Type</h4>
                <h5 className="font-instrumentSerifItalic uppercase text-[1.5rem]">{project.projectType}</h5>
              </div>
              <div className="px-[1rem]">
                <h4 className="h4 uppercase opacity-[.5]">Role</h4>
                {project.role.map(item => (
                  <h5 className="font-instrumentSerifItalic uppercase text-[1.5rem]">{item}</h5>
                ))}
              </div>
              <div className="px-[1rem] my-[1rem]">
                <h4 className="h4 uppercase opacity-[.5]">Sector</h4>
                {project.sector.map(item => (
                  <h5 className="font-instrumentSerifItalic uppercase text-[1.5rem]">{item}</h5>
                ))}
              </div>
              <div className="px-[1rem] my-[1rem]">
                <h4 className="h4 uppercase opacity-[.5]">Technology Used</h4>
                {project.toolsUsed.map(item => (
                  <h5 className="font-instrumentSerifItalic uppercase text-[1.5rem]">{item}</h5>
                ))}
              </div>
            </div>
            <div className="mx-[2.4rem] my-[1rem]">
              <h3 className="h3 text-[2.3rem]">Context</h3>
              <p className="font-interItalic text-justify">{project.context}</p>
              <img className="rounded-[1rem] my-[1rem]" src={project.coverPhoto} />
            </div>
            <div className="mx-[2.4rem] my-[1rem]">
              <h3 className="h3 text-[2.3rem] text-end">Target Audience</h3>
              <p className="font-interItalic text-justify">{project.targetAudience}</p>
            </div>
            <div className="mx-[2.4rem] my-[1rem]">
              <h3 className="h3 text-[2.3rem]">Goal</h3>
              <p className="font-interItalic text-justify">{project.goal}</p>
              <img className="rounded-[1rem] my-[1rem]" src={project.coverPhoto} />
            </div>
            <div className="mx-[2.4rem] my-[1rem]">
              <h3 className="h3 text-[2.3rem] text-end">My Contribution</h3>
              <p className="font-interItalic text-justify">{project.contribution}</p>
              <img className="rounded-[1rem] my-[1rem]" src={project.coverPhoto} />
            </div>
          </>
        ))}
    </>
  )
}

export default ProjectDetailPage