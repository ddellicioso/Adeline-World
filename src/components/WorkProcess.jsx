import { WorksList } from "../constants/WorksPage";
import { useParams } from "react-router-dom";
import GlassContainer from "./GlassContainer";
import LinkArrow from "../assets/svg/link-arrow.jsx";
import { Link } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const WorkProcess = () => {
  // Get parameters from full path
  const workTitle = useParams();
  console.log(workTitle);

  // Checks if current url matches any url of objects in WorksList constant
  const worksList = WorksList.filter((item) => item.url === workTitle.url);

  return (
    <>
      {worksList.map((item) => (
        <GlassContainer noHover={true}>
          <div className="max-w-[50rem] flex flex-col justify-center">
            <div className="flex items-center mt-[2rem] mx-[2.5rem] justify-end">
              <h1 className="h1-2 px-3">Process</h1>
              <h1 className="h4 uppercase text-[2rem]">and</h1>
              <h1 className="h1-2 px-3">Results</h1>
            </div>

            {item.process && (
              <div className="mx-[2.5rem]">
                {item.process.map((listItem) => (
                  <>
                    <h3 className="h1-2 text-[2.2rem] mb-[.2rem] mt-[2.8rem]">
                      {listItem.title}
                    </h3>

                    {listItem.content.map((content) => (
                      <>
                        {content.subheading && (
                          <h4 className="font-instrumentSerifItalic text-[1.7rem] my-[.5rem] mt-[1.8rem]">
                            {content.subheading}
                          </h4>
                        )}
                        <p>{content.text}</p>

                        {/* Display image */}
                        {content.images && (
                          <>
                            {content.images.map((image) => (
                              <img
                                src={image}
                                className="my-[1rem] rounded-[.7rem]"
                              />
                            ))}
                          </>
                        )}
                        {/* Display video */}
                        {content.video && (
                          <>
                            <video
                              className="w-[730px] h-[450px] mt-[1.3rem]"
                              controls
                            >
                              <source src={content.video} type="video/mp4" />
                            </video>
                          </>
                        )}

                        {/* Display iframe */}
                        {content.iframe && (
                          <iframe
                            src={content.iframe}
                            className="w-[730px] h-[450px] mt-[1.3rem]"
                          ></iframe>
                        )}

                        {/* Display code syntax */}
                        {content.syntax && (
                          <>
                            {content.syntax.map((syntax) => (
                              <div className="my-[1rem]">
                                <div className="bg-neutral-700 rounded-t-[.7rem]">
                                  <p className=" font-light text-white text-[12px] mx-[1rem] py-[.2rem]">
                                    {syntax.fileName}
                                  </p>
                                </div>
                                <SyntaxHighlighter
                                  language="javascript"
                                  style={atomOneDark}
                                  customStyle={{
                                    padding: "1rem",
                                    fontSize: "14px",
                                    lineHeight: "1.2rem",
                                    borderBottomLeftRadius: ".7rem",
                                    borderBottomRightRadius: ".7rem",
                                  }}
                                  showLineNumbers={true}
                                  showInlineLineNumbers={true}
                                  lineNumberStyle={{ opacity: ".3" }}
                                  wrapLongLines={true}
                                >
                                  {syntax.codeString}
                                </SyntaxHighlighter>
                              </div>
                            ))}
                          </>
                        )}

                        {/* Display link */}
                        {content.links && (
                          <>
                            {content.links.map((link) => (
                              <a
                                href={link.url}
                                target="_blank"
                                className="group flex items-center opacity-[.85] hover:opacity-[1] transition-all my-[.8rem]"
                              >
                                <p className="group font-interItalic underline text-[18px]">
                                  {link.text}
                                </p>
                                <LinkArrow className="group w-[.85rem] mx-[.3rem] group-hover:translate-y-[-25%] transition-all" />
                              </a>
                            ))}
                          </>
                        )}

                        {/* Display linkTo */}
                        {content.linkTo && (
                          <Link
                            to={`/WorksPage/${content.linkToLO}/WorkDetailPage/${content.linkTo}`}
                            className="group flex items-center opacity-[.85] hover:opacity-[1] transition-all my-[.8rem]"
                          >
                            <p className="group font-interItalic underline text-[18px]">
                              {content.linkToText}
                            </p>
                            <LinkArrow className="group w-[.85rem] mx-[.3rem] group-hover:translate-y-[-25%] transition-all" />
                          </Link>
                        )}

                        {/* Display list */}
                        {content.list && (
                          <ul className="mx-[1rem]">
                            {content.list.map((listItem) => (
                              <li className="list-disc">{listItem}</li>
                            ))}
                          </ul>
                        )}

                        {/* Display Document */}
                        {content.document && (
                          <object
                            data={content.document}
                            type="application/pdf"
                            className="w-[730px] h-[450px] mt-[1.3rem]"
                          ></object>
                        )}

                        {/* Feedback section */}
                        <h4 className="font-instrumentSerifItalic text-[1.7rem] my-[.5rem] mt-[1.8rem]">
                          {content.feedbackTitle}
                        </h4>
                        <p>{content.feedback}</p>
                        <img
                          src={content.feedpulse}
                          className="my-[1rem] rounded-[.7rem]"
                        />
                      </>
                    ))}
                  </>
                ))}
              </div>
            )}
          </div>
        </GlassContainer>
      ))}
    </>
  );
};

export default WorkProcess;
