import { Link } from "react-router"
import MainIcon from "../icons/MainIcon"

const Header = () => {
    return(
        <>
        <header>
            <div className="title-container">
                <MainIcon/>
                <h1>Harry Larke: Fullstack Dev</h1>
            </div>
            <div className="header-button-container">
                <button className="header-buttons">_</button>
                <button className="header-buttons">O</button>
                <button className="header-button-close">X</button>
            </div>
        </header>
         <div className="links-container"> 
                <Link className="header-link" to='/'>Home</Link>
                <Link className="header-link" to='/projects'>Projects</Link>
                <Link className="header-link" to='/contactMe'>Contact Me</Link>
        </div>
        </>
    )
}
//Will do some ui traking and variable statements to filter to out which links to show...
export default Header