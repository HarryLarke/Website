import { useState } from "react"


const Home = () => {

    const [ hideTextAreaOne, setHideTextAreaOne ] = useState(false)
    const [ hideImageOne, setHideImageOne ] = useState(false)
    const [ hideTextAreaTwo, setHideTextAreaTwo ] = useState(false)
    const [ hideTextAreaThree, setHideTextAreaThree ] = useState(false)

    const [ expandTextAreaOne, setExpandTextAreaOne ] = useState(false)
    const [ expandTextAreaTwo, setExpandTextAreaTwo ] = useState(false)
    const [ expandTextAreaThree, setExpandTextAreaThree ] = useState(false)


    return(
        <main className="Main">
            <h2 className="title-two">Welcome to my website!</h2>
   
            <section className={`textarea-one ${hideTextAreaOne ? "hide" : ""} ${expandTextAreaOne ? "expand" : ""}`}>

                <div className="top">
                    <p className="tabtitle">My Skills</p>
                    <button className="top-buttons"
                    onClick={() => setHideTextAreaOne(prev => !prev)}
                    >_</button>
                    <button className="top-buttons"
                    onClick={() => setExpandTextAreaOne(prev => !prev)}
                    >0</button>
                </div>
                <section className="scroller">
                    <article className='art-one'>
                        <h3>My Specialities:</h3>
                        My focus is on developing and designing large-scale web applications. Both on the frontend and the backend.
                        These skills additionally mean that the sysetems focus on stability and large traffic and data management.
                        Additionally, my capablities range from every point of making an application:
                        development, testing, deploymnent and product.
                    </article>
                        
                    <article className="art-one">
                        <h3 className="title-three">Skills:</h3>
                        <p>JS, TS, React, CSS, HTML, NodeJS, ExpressJS, SQL, MonogoDB.</p>
                        <h4 className="title-three">Skills in dev:</h4>
                        <p>Docker, Java, SpringBoot, AWS Cloud Practioner, Linux OS.</p>
                    </article>

                    <article className="art-one">
                        <h3 className="title-three">Working Towards:</h3>
                        From my 'skills in dev' the aim is to have a wide range of skills, so not to be limited to one aspect of coding. 
                        Another vital area I want to grow in is gaining a highly comprehensive understanding of a language or library, 
                        such as Java. Therefore, such knowledge will outweigh me from the competition that all developers face.
                    </article>
                </section>
            </section>

            <section className={`img-one ${hideImageOne ? "hide" : ""}`}>
                <div className="top">
                    <button className="top-buttons"
                    onClick={() => setHideImageOne(prev => !prev)}
                    >_</button>
                </div>

                <article className="art-one">
              <img className="image-harry" src="/images/harry.png" height={'300'} width={'305'} alt="Portrait image of Me Harry."></img> 

                <p className="white">Wee photo of me in my Ceilidh Attire!</p>
                </article>
            </section>


            <section className={`textarea-two ${hideTextAreaTwo ? "hide" : ""} ${expandTextAreaTwo ? "expand" : ""}`}>
                <div className="top">
                    <p className="tabtitle">Certifications</p>
                    <button className="top-buttons"
                    onClick={() => setHideTextAreaTwo(prev => !prev)}
                    >_</button>
                    <button className="top-buttons"
                    onClick={() => setExpandTextAreaTwo(prev => !prev)}
                    >0</button></div>
                <h3 className="title-three">Certifications:</h3>
                <article className="art-one">

                </article>
            </section>

            <section className={`textarea-three ${hideTextAreaThree ? "hide" : ""} ${expandTextAreaThree ? "expand-img" : ""}`}>
                  <div className="top">
                    <p className="tabtitle">About Me</p>
                    <button className="top-buttons"
                    onClick={() => setHideTextAreaThree(prev => !prev)}
                    >_</button>
                    <button className="top-buttons"
                    onClick={() => setExpandTextAreaThree(prev => !prev)}
                    >0</button>
                </div>

                <article className="art-one">
                <h3 className="title-three">About Me:</h3>
                The best way to desribe my worth ethic is: a fulltime hobbyist.
                That is, I try to find joy, interest, and craftsmanship in all I do.
                Currently, I am a youth worker, housekeeper and software dev. This site 
                is for displaying my skills, projects and my general endeavours in software 
                development. 
                </article>

            </section>

   
        </main>
    )
}

//Will need to figure or how to stucture these spaces! May vary for each page too!
//Could change content focused on introducing the website and then having a sepeate page concerning aboutMe?
//Would be grand to get some icons in skills section!
//certificates and img boxes will need to be flexy - but for now given set pixels to give better impressoion of product
//My more about me under the photo?
//Expanding and scaling for photo need sorting 
export default Home