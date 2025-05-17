export const loTitles = [
  {
    id: "0",
    loNumber: "LO1",
    title: "Conceptualize, design, and develop interactive media products",
    outcome: "LearningOutcomeOne",
  },
  {
    id: "1",
    loNumber: "LO2",
    title: "Transferable production",
    outcome: "LearningOutcomeTwo",
  },
  {
    id: "2",
    loNumber: "LO3",
    title: "Creative iterations",
    outcome: "LearningOutcomeThree",
  },
  {
    id: "3",
    loNumber: "LO4",
    title: "Professional standards",
    outcome: "LearningOutcomeFour",
  },
  {
    id: "4",
    loNumber: "LO5",
    title: "Personal leadership",
    outcome: "LearningOutcomeFive",
  },
];

// Studio Platalea brandguide
import studioPlataleaRuleGeometry from "../assets/png/studioPlataleaRuleGeometry.png";
import studioPlataleaFinishedRule from "../assets/png/studioPlataleaFinishedRule.png";
import studioPlataleaBrandbook from "../assets/pdf/studioPlataleaBrandbook.pdf";


// Portfolio Moodboard //
import inspirationPortfolioVideo from "../assets/worksPhotos/inspirationPortfolioVideo.mp4";
import feedbackPortfolioMoodboardMaikel from "../assets/png/feedbackPortfolioMoodboardMaikel.png";
import portfolioMoodboard from "../assets/png/portfolioMoodboard.png";

// The Art Department //
import wacomTry from "../assets/worksPhotos/wacomTry.png";
import arcadeGameTry from "../assets/worksPhotos/arcadeGameTry.png";
import videoSculpting from "../assets/worksPhotos/videoSculpting.mp4";
import cuteStuffs from "../assets/worksPhotos/cuteStuffs.jpg";

// Studio Platalea Team Charter //
import studioPlataleaTeamCharter from "../assets/pdf/studioPlataleaTeamCharter.pdf";

// studio Platalea Moodboard //
import studioPlataleaMoodboard from "../assets/png/studioPlataleaMoodboard.png";
import studioPlataleaBanner from "../assets/png/studioPlataleaBanner.png";

// Studio Platalea Logo //
import studioPlataleaLogoProcess from "../assets/worksPhotos/studioPlataleaLogoProcess.png";

// Studio Platalea Stylescapes //
import studioPlataleaFontsStyle from "../assets/worksPhotos/studioPlataleaFontsStyle.png";
import studioPlataleaInitialStyle from "../assets/worksPhotos/studioPlataleaInitialStyle.png";
import studioPlataleaGeometryStyle from "../assets/worksPhotos/studioPlataleaGeometryStyle.png";

// Personal Literature Research //
import PersonalLiteratureStudyCognitive from "../assets/pdf/BarrierstoDigitalAccessibilityforPersonswithCognitiveDisabilities.pdf"

// Double Diamond //
import DoubleDiamondProjectKrom from "../assets/pdf/DoubleDiamondProjectKrom.pdf"

// Group Dyslexia Research //
import GroupDyslexiaResearch from "../assets/pdf/DyslexiaResearch.pdf"

// First showcase Poster //
import DyslexiaPosterInspiration from "../assets/worksPhotos/DyslexiaPoster-inspiration.png"
import DyslexiaPosterBad from "../assets/worksPhotos/DyslexiaBadPoster.png"
import DyslexiaPosterGood from "../assets/worksPhotos/DyslexiaGoodPoster.png"
import DyslexiaPosterFinal from "../assets/worksPhotos/DyslexiaFinalPoster.png"
import FirstShowcaseFeedback from "../assets/worksPhotos/FirstShowcaseFeedback.png"

// MOSCOW //
import MoscowDiagram from "../assets/worksPhotos/MoSCoW.png"

export const WorksList = [
  // ------------------------------ Studio Platalea Brandguide ------------------------------ //
  {
    
    outcomes: [`LearningOutcomeOne`, `LearningOutcomeFour`],
    fittingOutcomes: [
      { outcomeNum: "1", value: true },
      { outcomeNum: "2" },
      { outcomeNum: "3"},
      { outcomeNum: "4", value: true  },
      { outcomeNum: "5" },
    ],
    outcomeDesc: [
      {
        title: "LO 1 - Interactive Media Product",
        desc: "Creation of an immersive experience for relaxation using VR.",
      },
      {
        title: "LO 4 - Professional Standards",
        desc: "Implementation of usability testing (CMD method) and written testing report.",
      },
    ],
    id: "1",
    title: "Studio Platalea Brandguide",
    project: "Studio Project",
    duration: "3 weeks",
    // coverImage: ,
    url: "studioPlataleaBrandguide",
    process: [
      {
        content: [
          {
            text: `After me and my team agreed on the style, color palette, and typography of our studio, we decided to make 
            the brandguide for our studio with Figma. I am in charge of thinking of the rules of our decorative geometry shapes. 
            For a context, during our last feedback on our moodboards, one of our teacher recommended us to think about rules for our 
            geometry shapes to give it some structure and help people who want to use our shapes to understand and follow the guidelines.`,
            images: [studioPlataleaRuleGeometry],
          },
          {
            text: `I was sick during the making of the brandguide so I had to participate remotely from home.
             I used 3 base colors from our color palette for the shapes; I thought that maybe we can make both light mode and dark mode 
             (mainly for the website) shapes and colors, for light mode I used pink as the main background color, and dark blue for dark mode.
             For the colors of the shapes, I just alternate the hue/saturation of the base colors to match with the background color depending on the mode. `,
            images: [ studioPlataleaFinishedRule],
          }
        ]
      },
      {
        title: `Brand Guide`,
        content: [
          {
            document: [studioPlataleaBrandbook]
          },
        ]
      }
    ]
  },

  // ---------------------- Portfolio Moodboard ---------------------------- //
  {
    outcomes: [`LearningOutcomeThree`, ],
    fittingOutcomes: [
      { outcomeNum: "1"},
      { outcomeNum: "2" },
      { outcomeNum: "3", value: true  },
      { outcomeNum: "4"},
      { outcomeNum: "5" },
    ],
    outcomeDesc: [
      {
        title: "LO 3 - Iterative Design",
        desc: "Design process went through several iterations based on external feedbacks, until finalized.",
      },
    
    ],
    id: "1",
    title: "Portfolio Moodboard",
    project: "Personal Portfolio",
    duration: "1 weeks",
    // coverImage: ,
    url: "portfolioMoodboard",
    process: [
      {
        title: "Research and Inspirations",
        content: [
          {
            text: `I talked to Maikel about my idea on making a Threejs website, he advised me to go to Awwwards.com to 
            look for some 3D website as inspirations, he also told me to think about an easy navigation website since it’s 
            my first time trying to develop a 3D website. `
          },
          {
            text: `So, I did what he said, I went to Awwwards.com, scrolled around, and I found bunch of fun websites. 
            My favorite one is Joshua's World for its simple and clear navigation, so I decided to adopt its logic and navigation 
            for my portfolio since this would be my first time attempting to develop 3D website and I figured that I should start from a simple navigation. `,
            links: [
              {
                url: `https://www.joshuas.world/ `,
                text: `Joshua's World link`
              }
            ]
          },
          {
            text: `Below is a video to show what kind of navigation I want. The video came from one of my favorite cozy games and I feel like it would suit my theme.`,
            video: inspirationPortfolioVideo
          },
          {
            text: `I also went to Pinterest to start making a mood board. My theme for this portfolio is bubbly, amusement park, “dream core”, with pastel colors. `,
            images: [portfolioMoodboard]
          },
          {
            text: `My goal for this portfolio is that, when someone browse through my portfolio, they should feel like they’re
             entering my world and know me more than just a stranger, as in how I view the world, what my personality is like, and what it feels to be me. `,
            feedbackTitle: `Feedback from Maikel`,
            feedpulse: feedbackPortfolioMoodboardMaikel
          }
        ]
      }
    ]
  },

  // ------------------------------- The Art Department ---------------------------------- //

  {
    outcomes: [`LearningOutcomeFive`],
    fittingOutcomes: [
      { outcomeNum: "1" },
      { outcomeNum: "2" },
      { outcomeNum: "3" },
      { outcomeNum: "4"},
      { outcomeNum: "5", value: true },
    ],
    outcomeDesc: [
      {
        title: "LO 5 - Personal Leadership",
        desc: "Analyse and reflecting on my performance during presenting and take into account for personal improvement.",
      }
    ],
    id: "1",
    title: "The Art Department",
    project: "Personal Leadership",
    url: "theArtDepartment",
    process: [
      {
        content: [
          {
            text: `I visited The Art Department event that Fontys sponsored us. When our teacher 
            announced that we will have a small “field trip” to this event, I checked their website; 
            though it didn’t give me enough information, I’m pretty interested in its animation stuffs. `
          },
          {
            text: `I didn’t have any expectations on what’s going to be there, but the moment I walked 
            into the area, I got very excited because there were a lot of art and animations stuffs. 
            Me and one of my teammates, Alexa, we decided to visit this one stand from Sound & Vision, 
            we tried to draw on their Wacom tablet. We also tried their arcade machine, and it was so much fun. `,
            images: [wacomTry, arcadeGameTry]
          },
          {
            text: `After that I went to the booths and stands hall and I spent some money to buy cute stuffs, 
            we also participated in one of the sculpting workshops. I’ve always wanted to try to sculpt and 
            I’m very happy to be able to fulfill one of my-somewhat-dream. `,
            images: [cuteStuffs],
            video: [videoSculpting]
          }
        ]
      }
    ]
  },
  
  // -------------------------- Studio Platalea Team Charter ------------------------------ //
  {
    outcomes: [`LearningOutcomeFour`, `LearningOutcomeFive`],
    fittingOutcomes: [
      { outcomeNum: "1" },
      { outcomeNum: "2" },
      { outcomeNum: "3" },
      { outcomeNum: "4", value: true  },
      { outcomeNum: "5", value: true },
    ],
    outcomeDesc: [
      {
        title: "LO 5 - Personal Leadership",
        desc: "Analyse and reflecting on my performance during presenting and take into account for personal improvement.",
      }
    ],
    id: "1",
    title: "Studio Platalea Team Charter",
    project: "Studio Project",
    url: "studioPlataleaTeamCharter",
    process: [
      {
        content: [
          {
            text: `In the beginning of the project, when me and my team members just got together, we get to know each other 
            by writing our strengths and weaknesses in the team charter, and align with each other’s values, also setting the 
            norms so we can work nicely and professionally throughout the group projects. `,
            document: [studioPlataleaTeamCharter]
          }, 
        ]
      }
    ]
  },

  // ------------------- Studio Platalea Moodboard ------------------- //
  {
    outcomes: [`LearningOutcomeThree`],
    fittingOutcomes: [
      { outcomeNum: "1" },
      { outcomeNum: "2" },
      { outcomeNum: "3", value: true  },
      { outcomeNum: "4"},
      { outcomeNum: "5"},
    ],
    outcomeDesc: [
      {
        title: "LO 3 - Iterative Design",
        desc: "Design process went through several iterations based on external feedbacks, until finalized.",
      }
    ],
    id: "1",
    title: "Studio Platalea Moodboard",
    project: "Studio Project",
    // coverImage: clientMeetingCover,
    url: "studioPlataleaMoodboard",
    process: [
      {
        title: `Context`,
        content: [
          {
            text: `We each made mood boards of what we think Studio Platalea ‘s style could be. 
          Before started in working on the individual mood board, we discussed about which clients we want to work with; 
          we chose Maikel and Petra inc. as our first choice because the project sounds cool, and we already have an idea 
          what we can do for it. The Night of The Nerds are our second choice as their theme of project are also interesting. `
          },
          {
            text: `Since both of the clients are somewhat kind of technology-ish, I had an idea of using a lot of futuristic/cyberpunk
            theme for our studio, I also figured using chrome elements might be good and fitting. Before hand, we agreed on our 
            color palette, so I looked for a futuristic element that has somehow same colors as our agreed colors. 
            I used Pinterest as a media to search for the images I want and used Canva to make the mood board. 
            After my team finished making their mood board, we showed each other’s and decide which style we want to go with.`,
            images: [studioPlataleaMoodboard]
          },
          {
            feedbackTitle: `Feedback from peers 1`,
            feedback: `I asked my peers for some feedbacks during our moodboard showcase. They liked the chrome elements, liked the serif font used, liked the color palette. 
            Since they liked the serif font, I tired to combine it with a script font.`,
            
          },
          {
            feedbackTitle: `Feedback from peers 2`,
            feedback: `My teammates liked the font combination, the 'p' looked like the head of a bird and its beak, and we can use it as our banner.`,
            images: [studioPlataleaBanner],
          }
        ]
      }
    ]
  }, 

  // ----------------------------- Studio Platalea Logo ------------------------------- //
  {
    outcomes: [`LearningOutcomeThree`],
    fittingOutcomes: [
      { outcomeNum: "1" },
      { outcomeNum: "2" },
      { outcomeNum: "3", value: true  },
      { outcomeNum: "4"},
      { outcomeNum: "5"},
    ],
    id: "1",
    title: "Studio Platalea Logo",
    project: "Studio Project",
    url: "studioPlataleaLogo",
    process: [
      {
        content: [
          {
            text: `From the last peer feedback, I tried to execute the idea of making the “P” looking like the spoonbill bird. `
          },
          {
            text: `My teammate’s mood board has a Shutterstock image of different poses of a spoonbill, and I traced one of the 
            pose’s outlines and put a color on it. Then, I was thinking where we can put this outline somewhere on the banner logo, 
            and BOOM, I accidentally put the bird on the letter “L” and it looked amazing. I showed the result to my peer, and we 
            all agreed that we should use this as our complete logo and use the stand-alone bird and the “L” as our icon.`,
            images: [studioPlataleaLogoProcess]
          }
        ]
      }
    ]
  },
  // ------------------ Studio Platalea Stylescapes ------------------ //

  {
    outcomes: [`LearningOutcomeThree`],
    fittingOutcomes: [
      { outcomeNum: "1" },
      { outcomeNum: "2" },
      { outcomeNum: "3", value: true  },
      { outcomeNum: "4"},
      { outcomeNum: "5"},
    ],
    id: "1",
    title: "Studio Platalea Stylescapes",
    project: "Studio Project",
    url: "studioPlataleaStylescapes",
    process: [
      {
        content: [
          {
            text: `Since we already agreed on the color palette and a serif font as a header, I started to look for a 
            sans serif font to balance out the typography. I used Google Fonts and Dafont as a tool to help me to search 
            for fitting fonts; I found 4 fonts that I think might fit with the header font, then I showed it to my 
            teammates and asked them what they think about it. `,
            images: [studioPlataleaFontsStyle]
          },
          {
            feedbackTitle: `Feedback from peers`,
            feedback: `Josefin font were too thick/bold to use as a secondary font, Urbanist was a direct no; my teammate 
            couldn’t pick between Poppins and Louis George Café, but after zooming in and looking at the details of 
            these fonts, one of my teammate pointed out that Poppins’ capital letters were not remarkable enough, so in 
            the end we chose Louis George Café as our secondary font. `
          },
          {
            text: `My team struggled on what our elements going to be, I thought maybe something futuristic is good, but 
            then futuristic elements were too clashing with the pastel colors, and I couldn’t seem to mix them properly, so I left them. `,
            images: [studioPlataleaInitialStyle]
          },
          {
            text: `At our first update presentation, my team made and used several random blobs as our elements, it looked nice, 
            but in my opinion the blobs didn’t complement our elegant fonts and logo, and it lacked structure. So instead of using 
            organic shapes, I had an idea of using random geometric shapes like triangle, rectangle, etc., and to my surprise, it actually 
            looked good, I showed it to my peers, and we all agreed that we could use it as our element. `,
            images: [studioPlataleaGeometryStyle]
          },
          {
            feedbackTitle: `Feedback from teacher`,
            feedback: `We went to Dirk to show our progress, and he agreed that the geometric shapes look nice, but we should make a rule 
            for the shapes so it won’t be completely abstract, and other people who wants to recreate it, would know how to make it properly. `
          }
        ]
      }
    ]
  },

  // --------- Personal Literature Research on Cognitive Disability --------- //
  {
    outcomes: [`LearningOutcomeFour`],
    fittingOutcomes: [
      { outcomeNum: "1" },
      { outcomeNum: "2" },
      { outcomeNum: "3" },
      { outcomeNum: "4", value: true},
      { outcomeNum: "5"},
    ],
    id: "1",
    title: "Literature Research on Cognitive Disability",
    project: "Accessibility Project",
    client: "Studio Krom",
    url: "personalLiteratureResearchonCognitiveDisability",
    process: [
      {
        content: [
          {
            text: `	After the interview with our client, our group decided to focus on cognitive 
            disability and assign each of us to do our personal research and later on discuss which 
            disability we want to focus. 
            I chose dyslexia because it's one of the common disability and I feel like majority of 
            people doesn't take it seriously, so I want to raise awareness about this disability.`,
            document: [PersonalLiteratureStudyCognitive]
          }
        ]
      }
    ]
  },

  // -------------- Double Diamond Method --------------- //
  {
    outcomes: [`LearningOutcomeFour`],
    fittingOutcomes: [
      { outcomeNum: "1" },
      { outcomeNum: "2" },
      { outcomeNum: "3" },
      { outcomeNum: "4", value: true},
      { outcomeNum: "5"},
    ],
    id: "1",
    title: "Double Diamond Method",
    project: "Accessibility Project",
    client: "Studio Krom",
    url: "doubleDiamondMethod",
    process: [
      {
        content: [
          {
            text: `To help us structure the project nice and neatly, I used Double Diamond method. 
            This method guides us from problem identification and solution delivery. Moreover, this 
            method aligns well with CMD workflows which I implemented in the document.`,
            document: [DoubleDiamondProjectKrom]
          },
          
        ]
      },
      {
        title: `What I learned`,
        content: [
          {
            text: `Using the double diamond method helped me understand how to approach a design 
            challenge step by step while staying focused on the user. Overall, I learned how a structured 
            design process like the double diamond helps balance creativity with critical thinking. 
            It gave me more confidence in handling complex topics like cognitive accessibility, and helped 
            me create solutions that are both thoughtful and user focused.`
          }
        ]
      }
    ]
  },

  // Group Literature Research on Dyslexia //
  {
    outcomes: [`LearningOutcomeFour`],
    fittingOutcomes: [
      { outcomeNum: "1" },
      { outcomeNum: "2" },
      { outcomeNum: "3" },
      { outcomeNum: "4", value: true},
      { outcomeNum: "5"},
    ],
    id: "1",
    title: "Group Literature Research on Dyslexia",
    project: "Accessibility Project",
    client: "Studio Krom",
    url: "groupResearchonDyslexia",
    process: [
      {
        content: [
          {
            text: `After discussing that we want to focus on dyslexia, we jumped straight 
            in literature research. I would love to get in touch with our stakeholders 
            (people who has dyslexia) to interview them, but they are hard to find and we 
            do not have much time in our hands so I decided to focus on what we can get from
             the internet.`,
            document: [GroupDyslexiaResearch]
          },
          {
            feedbackTitle: `Feedback from client`,
            feedback: `During our client meeting where we showed our research to the client, 
            they liked the idea of raising awareness by making a gamified website. The client 
            really liked the research we did, and said that he would like to read the full document. `
          }
        ]
      }
    ]
  },

  // ------------------- First Showcase - Poster ------------------ //
  {
    outcomes: [`LearningOutcomeThree`],
    fittingOutcomes: [
      { outcomeNum: "1" },
      { outcomeNum: "2" },
      { outcomeNum: "3", value: true  },
      { outcomeNum: "4"},
      { outcomeNum: "5"},
    ],
    id: "1",
    title: "First Showcase (Poster)",
    project: "Accessibility Project",
    client: "Studio Krom",
    url: "FirstShowcase",
    process: [
      {
        title:`Context`,
        content: [
          {
            text: `For our first showcase, we were told to make a minimum of A2 format poster 
            that represent our concept and idea. My group decided to make the poster in Figma 
            where everyone feels comfortable using. `
          },
          {
            text:`First step I took is to look for some inspirations from Pinterest and Google 
            and shared it with my teammates in the Figma file. After that, I had an idea of 
            recreating this image I found that I feel like it's represents dyslexia.`,
            images: [DyslexiaPosterInspiration]
          },
          {
            text:`I typed random alphabets individually and later used a randomizer plugin from 
            Figma to randomize the order of the alphabets. But after implementing it, I don’t 
            really see how dyslexia are represented in the poster and it just felt like random 
            letters being put together not so nicely. `, 
            images: [DyslexiaPosterBad]
          },
          {
            text: `	Then I made a new poster after looking for more inspirations, the idea is the 
            same, like random letters flying around and trying to make a word/sentence. I used glitchy 
            effect from one of the plugins I found from Figma for the words and it makes it looks so 
            much better. Since our website is designed to be in a PC/laptop so I used a laptop image in the poster.`,
            images: [DyslexiaPosterGood]
          },
          {
            feedbackTitle: `Feedback from teachers and peers`,
            feedback: `	The poster suits better to be a game advertisement rather than being used as a showcase poster, 
            because there's no information about the concept (like the teachers wants). Despite the minimal information, 
            people liked the design and said that it's futuristic, which what I wanted.`
          },
          {
            feedbackTitle: `Feedback from client`,
            feedback: `	Our client specifically liked the scrambled letters for the background and said that we could be 
            potentially used as a landing page or just advertising the website/game.`
          },
          {
            text: `Below is the final poster, I contributed on adding random letters and brainstormed on the contents.`,
            images: [DyslexiaPosterFinal]
          },
          {
            feedbackTitle: `Feedback during showcase`,
            feedback: `Even though the showcase presentation ended up a little disappointing,  here are the feedbacks we 
            collected during the showcase. The feedback are collected by Jerryl (my teammate) an d posted on our Discord channel.`,
            images: [FirstShowcaseFeedback]
          },
          
        ]
      },
      {
        title: `What I learned`,
        content: [
          {
            text: `	During this process, I learned that a strong idea needs clear visual communication. My first poster didn't 
            represent dyslexia well instead it just looked like random letters. Through experimenting with Figma plugins and 
            visual effects, I improved the design and gave it more fitting, glitchy look.
            Feedback from teachers and peers helped me realize that a good design also needs context, it should communicate 
            the concept, not just look nice. I also learned the value of iteration, teamwork, and staying open to criticism 
            to improve the final result.`
          }
        ]
      }
    ]
  },

  // ------------------- MoSCoW Method ------------------- //
  {
    outcomes: [`LearningOutcomeFour`],
    fittingOutcomes: [
      { outcomeNum: "1" },
      { outcomeNum: "2" },
      { outcomeNum: "3"  },
      { outcomeNum: "4", value: true},
      { outcomeNum: "5"},
    ],
    id: "1",
    title: "MoSCoW Method",
    project: "Accessibility Project",
    client: "Studio Krom",
    url: "MoscowMethod",
    process: [
      {
        title:`Context`,
        content: [
          {
            text: `Since our team had limited time and resources, we needed 
            a clear structure to decide what to focus on first. I used MoSCoW 
            method to help distinguish between core features (like simulating 
            reading difficulty) and non essential features (like multiplayer or 
            leaderboards). This helped keep the project manageable and aligned 
            with our goal of raising awareness.`
          },
        ]
      },
      {
        title: `How I did it`,
        content: [
          {
            text: `	I facilitated a feature planning session with my group, where 
            we listed all possible features we had brainstormed or researched. Then, 
            based on our project goal, target audience, and time constraints, we 
            discussed each feature's priority and sorted it into one of four categories. 
            The final outcome was a MoSCoW diagram below that made it easy to communicate 
            our scope to team members.`,
            images: [MoscowDiagram]
          }
        ]
      },
      {
        title: `What I learned`,
        content: [
          {
            text: `Using the MoSCoW method taught me how to make design decisions 
            based on user goals and project constraints, to communicate priorities clearly 
            within a team, and setting realistic expectations while building the project. 
            This method gave our project more focus and made sure we spent time on what mattered most.`
          }
        ]
      }
    ]
  }
];