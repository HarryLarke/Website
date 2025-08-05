import { useState } from "react"

import GitHub from "../icons/Github"
import LinkedIn from "../icons/LinkedIn"


const Projects = () => {

    const [ hideProjects, setHideProjects ] = useState(false)
    const [ hideLinks, setHideLinks ] = useState(false)
    const [ hideProjectsMini, setHideProjectsMini ] = useState(false)

    const [ expandProjects, setExpandProjects ] = useState(false)

    const [ expandProjectsMini, setExpandProjectsMini ] = useState(false)



    return(
        <main className="Projects">
            <h2 className="title-two shorter">Projects:</h2>
            
            <section className={`projects-main green ${hideProjects ? "hide" : ""} ${expandProjects ? "expand": ""}`}>
                <div className="top">
                    <p className="tabtitle">Fullstack Projects</p>
                    <button className="top-buttons"
                    onClick={() => setHideProjects(prev => !prev)}
                    >_</button>
                    <button className="top-buttons"
                    onClick={() => setExpandProjects(prev => !prev)}
                    >0</button>
                </div>

                
                    <h3 className="title-three">Large/Fullstack Projects:</h3>
                <div className="art-four">
                    <a className="project-box"
                    href="https://github.com/HarryLarke/Revision-Card-App">
                        <h4>Revision Card App</h4>
                        <p>
                            A fullstack application, with a custom front and backend.
                            The aim was to create a scalable, dry and organised app.
                        </p>
                    </a>

                    <article className={`projects-dev`}>
                        <div className="top ">
                        </div>

                    
                        <h3 className="title-three">In Development:</h3>
                        <article className="art-two">

                        <a className="project-box"
                        href="https://github.com/HarryLarke/Prospect-Protector"
                        >
                            <h4>Prospect Protector</h4>
                            <p>
                                A fullstack application, that is scalable, which also securely manages and implements SQL and complex data systems.  
                            </p>
                        </a>
                        </article>
                    </article>
                </div>

            </section>

            <section className={`link-box ${hideLinks ? "hide" : ""}`}>
                <div className="top">
                    <button className="top-buttons"
                    onClick={() => setHideLinks(prev => !prev)}
                    >_</button>
                </div>

                <article className="art-three">
                    <h3 className="title-three-background">More Important Links!</h3>

                    <div className="github-container">
                        <a className="link-icon"
                        href="https://github.com/HarryLarke">
                        Github
                        <GitHub/>
                        </a>

                        <a  className="link-icon"
                        href="https://www.linkedin.com/in/harry-l-46156b133/">
                        LinkedIn
                        <LinkedIn/>
                        </a>
                    </div>

                </article>

                <div className="banner">Follow me on Github and LinkedIn</div>
            </section>
        

        <section className={`projects-mini ${hideProjectsMini ? "hide": ""} ${expandProjectsMini ? "expand" : ""}`}>
                <div className="top">
                    <p className="tabtitle">Mini Projects</p>
                    <button className="top-buttons"
                    onClick={() => setHideProjectsMini(prev => !prev)}
                    >_</button>
                    <button className="top-buttons"
                    onClick={() => setExpandProjectsMini(prev => !prev)}>0</button>
                </div>

                
                <h3 className="title-three">Mini Projects:</h3>
                    <p>Here these applications practice and apply specific skills:</p>

                <article className="art-four">
                    <a className="project-box"
                    href="https://github.com/HarryLarke/login-form">
                        <h4>Login Form</h4>
                        <p>
                            First TS project! Here I practiced implementing JWT's, interceptors and CRUD operations.  
                        </p>
                        
                    </a>

                    <a className="project-box"
                    href="https://github.com/HarryLarke/mini-redux-practice">
                        <h4>Redux To-Do-List</h4>
                        <p>
                            Practing React Redux and RTK, by gettinng to implement CRUD on a To-Do-List.
                            Probably a bit too powerful for a to-do-list!
                        </p>
                    </a>
                </article>

        </section>
                
        </main>
    )
}

export default Projects