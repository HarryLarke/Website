import { Link } from "react-router"

const Missing = () => {

    return(
        <main>
            <section>
                <h2>Page Missing</h2>
                <Link to={'/'}>Home</Link>
                <Link to={'/projects'}>Projects</Link>
                <Link to={'/contactMe'}>Contact Me</Link>
            </section>
        </main>
    )
}


export default Missing 