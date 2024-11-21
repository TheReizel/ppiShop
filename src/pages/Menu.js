import "./Styles.css";
import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <nav className="menu">
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
            </ul>
        </nav>
    );
}