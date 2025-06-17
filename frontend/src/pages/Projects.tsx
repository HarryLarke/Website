
const Projects = () => {

    return(
        <main className="Projects">
            <h2 className="title-two">Projects:</h2>
            
            <section className="textarea-one">
                <div className="top">
                    <button className="top-buttons">_</button>
                    <button className="top-buttons">0</button>
                </div>

                
                    <h3 className="title-three">Large/Fullstack Projects:</h3>
                <article className="art-two">
                    <a className="project-box"
                    href="https://github.com/HarryLarke/Revision-Card-App">
                        <h4>Revision Card App</h4>
                        <p>
                            A fullstack application, with custom front and backend.
                            The aim was to create a scalable, dry and organised app.
                        </p>
                    </a>
                </article>

            </section>
            
            <section className="textarea-two">
                <div className="top">
                    <button className="top-buttons">_</button>
                    <button className="top-buttons">0</button>
                </div>

                
                <h3 className="title-three">Mini Projects:</h3>
                <p>Here these applications practice specific skills:</p>

                <article className="art-two">
                 <a className="project-box"
                 href="https://github.com/HarryLarke/login-form">
                    <h4>Login Form</h4>
                    <p>
                        First TS project! Here I practiced implementing JWT's, interceptors and CRUD operations.  
                    </p>
                    
                </a>

                  <a className="project-box"
                  href="https://github.com/HarryLarke/login-form">
                    <h4>Redux To-Do-List</h4>
                    <p>
                        Practing React Redux and RTK, by gettinng to implement CRUD on a To-Do-List.
                        Probably a bit too powerful for a To-Do-List!
                    </p>
                </a>
                </article>

            </section>

            <section className="textarea-three">
                  <div className="top">
                    <button className="top-buttons">_</button>
                    <button className="top-buttons">0</button>
                </div>

               
                <h3 className="title-three">In Development:</h3>
                <article className="art-two">

                <div className="project-box">
                    <h4>Prospect Protector</h4>
                    <p>
                        A fullstack application, that is scalable, which also securely manages and implement SQL and complex data systems. 
                        This project is currently private, but wil be made public soon! 
                    </p>
                </div>
                </article>
            </section>
                
        </main>
    )
}

export default Projects