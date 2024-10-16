import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {

    const [path, setPath] = useState("home")

    const handlePathChange = (path) => {
        setPath(path)
    }

    return (
        <>
            <h2 className="header"> 
                Expense Tracker
            </h2>
            <nav className="links">
                <Link onClick={() => handlePathChange("home")} className="home path" to="/" style={{textDecoration: path === "home" ? "underline" : "none"}}>Home</Link>
                <Link onClick={() => handlePathChange("visualise")} className="visualise path" to="/visualise" style={{textDecoration: path === "visualise" ? "underline" : "none"}}>Visualise</Link>
            </nav>
        </>
    )
}

export default Header