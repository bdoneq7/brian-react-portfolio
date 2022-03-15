import React from "react";
import gitLogo from "../../assets/images/github-logo.png"
import image_1 from "../../assets/images/whatsoutthere.jpg";
import image_2 from "../../assets/images/what2watch.jpg";
import image_3 from "../../assets/images/runbuddy.jpg";
import image_4 from "../../assets/images/passwordgen.PNG";
import image_5 from "../../assets/images/codequiz.PNG";

function Project(props) {
  const projectList = [
    {
      name: "What's Out There?",
      type: "Node, Express",
      description: "UFO sightings Database",
      image: image_1,
      appLink: "https:herokuapp.com/",
      gitLogo: gitLogo,
      gitRepo: "https://github.com/",
      accessibility: "UFO sightings Database"
    },
    {
      name: "What 2 Watch",
      type: "HTML/CSS/JavaScript/Ajax",
      description: "Run Buddy",
      image: image_2,
      appLink: "https://msdale.github.io/run-buddy/",
      gitLogo: gitLogo,
      gitRepo: "https://github.com/",
      accessibility: "Run Buddy"
    },
    {
      name: "Password Generator",
      type: "HTML/CSS/JavaScript",
      description: "Password Generator",
      image: image_3,
      appLink: "https://github.com/",
      gitLogo: gitLogo,
      gitRepo: "https://github.com/",
      accessibility: "Password Generator"
    },
    {
      name: "Code Quiz",
      type: "HTML/CSS/JavaScript",
      description: "Code Quiz",
      image: image_4,
      appLink: "https://github.com/",
      gitLogo: gitLogo,
      gitRepo: "https://github.com/",
      accessibility: "Code Quiz"
    },
    {
      name: "Workday Scheduler",
      type: "HTML/CSS/JavaScript",
      description: "Workday Scheduler",
      image: image_5,
      appLink: "https://github.com/",
      gitLogo: gitLogo,
      gitRepo: "https://github.com/",
      accessibility: "Workday Scheduler"
    },
    
  ];

  return (
    <div className="flex-row">
      {projectList.map((project) => (
        <section>
          
          <div>
          <p>&nbsp;<span class="project-title">{project.name}</span><br/><br/>
          &nbsp;Description: {project.description}<br/><br/>
          &nbsp;Built with {project.type}<br/>
          &nbsp;<a href={project.gitRepo} target="_blank" rel="noreferrer" alt="git Icon">Github Repo Link
            </a>
          </p>
          <br/>
            <a href={project.appLink} target="_blank" rel="noreferrer" alt="app image">
              <img
                src={project.image}
                alt={project.accessibility}
                className="img-thumbnail mx-1 my-project-link"
              />
            </a>
          </div>
        </section>
      ))}
    </div>
  );
}
export default Project;