import { Link } from "react-router"

const Header = () => {
    return(
        <header>
            <h1>Harry Larke: Fullstack Dev</h1> 
            <div> 
                <Link to='/'>Home</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/contactMe'>Contact Me</Link>
            </div>
        </header>
    )
}
//Will do some ui traking and variable statements to filter to out which links to show...
export default Header