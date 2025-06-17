import { Outlet } from "react-router";

import Header from "../components/Header";

const Layout = () => {
    return(
        <body>
            <Header/>
            <Outlet/>
            <footer>Harry Larke 2025</footer>
        </body>
    )
}

export default Layout