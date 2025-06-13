import { Outlet } from "react-router";

import Header from "../components/Header";

const Layout = () => {
    return(
        <div className="Body">
            <Header/>
            <main className="App">
                <Outlet/>
            </main>
            <footer>Harry Larke 2025</footer>
        </div>
    )
}

export default Layout