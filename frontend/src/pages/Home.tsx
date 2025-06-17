
const Home = () => {

    return(
        <main className="Home">
            <h2 className="title-two">Welcome to my website!</h2>
   
            <section className="textarea-one">

                <div className="top">
                    <button className="top-buttons">_</button>
                    <button className="top-buttons">0</button>
                </div>

                <article className="art-one">
                <h3 className="title-three">About Me:</h3>
                The best way to desribe my worth ethic is: a fulltime hobbyist.
                That is, I try to find joy, interest, and craftsmanship in all I do.
                Currently, I am a youth worker, housekeeper and software dev. This stite 
                is for displaying my skills, projects and general endeavours in software 
                development. 
                </article>
                
                <article className="art-one">
                <h3 className="title-three">Skills:</h3>
                <p>JS, TS, React, CSS, HTML, NodeJS, ExpressJS, SQL, MonogoDB.</p>
                <h4 className="title-three">Skills in dev:</h4>
                <p>Docker, Java, SpingBoot, AWS Cloud Practioner, Linux OS</p>
                </article>
            </section>

            <section className="img-one">
                <div className="top">
                    <button className="top-buttons">_</button>
                    <button className="top-buttons">0</button>
                </div>
            </section>

            <section className="textarea-two">
                <div className="top">
                    <button className="top-buttons">_</button>
                    <button className="top-buttons">0</button></div>
                <h3 className="title-three">Certifications:</h3>
                <article className="art-one">

                </article>
            </section>
        </main>
    )
}
//Will need to figure or how to stucture these spaces! May vary for each page too!
//Could change content focused on introducing the website and then having a sepeate page concerning aboutMe?
//Would be grand to get some icons in skills section!
//certificates and img boxes will need to be flexy - but for now given set pixels to give better impressoion of product
export default Home