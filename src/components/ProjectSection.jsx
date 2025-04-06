import { Link } from "react-router-dom";
import { SelectedProjects } from "../constants/Projects";
import LinkArrow from "../assets/svg/link-arrow.jsx";

const ProjectSection = () => {

    return (
        <div className="mx-[2.5rem]">
            <h4 className="h4 uppercase text-[2rem] text-end w-[100%] my-[1rem]">Highlighted Works</h4>
            {SelectedProjects.map (project => (
                <div className="">
                    <img className="rounded-[1rem]" src={project.coverPhoto} />
                    <div className="">
                        <h5 className="font-interItalic text-[1.7rem] uppercase mt-[1.6rem] my-[1rem]">{project.title}</h5>
                        <p className="font-interItalic text-[1rem]">{project.description}</p>
                        <Link to={project.url} className="flex items-center justify-end my-[1.5rem]">
                            <p className="font-interItalic uppercase text-[1.1rem] relative after:content-[''] after:w-[100%] after:h-[1px] after:bg-color-2 after:absolute after:left-0 after:bottom-[0.1rem]">Read more</p>
                            <LinkArrow className="w-[.9rem] mx-[.4rem]"/>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProjectSection 