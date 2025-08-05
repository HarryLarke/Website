import { Outlet } from "react-router";

import Header from "../components/Header";

const footerText = "- - Harry_λ(Larke) 2025 - -"

const Layout = () => {
    return(
        <div className="body">
            <Header/>
            <Outlet/>
            <footer>{footerText}</footer>
        </div>
    )
}

export default Layout