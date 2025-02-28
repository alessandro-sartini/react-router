import { NavLink } from "react-router-dom";
import reactLogo from"../assets/react.svg"
export default function Header(){

    return (
        

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <a className="navbar-brand m-2" href="#">
                     <img src={reactLogo} alt="React Logo" width="30" height="24" />
                </a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink  className="nav-link " to="/" aria-current="page" href="#">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link "  to="/chisiamo" href="#">Chi siamo</NavLink>
                    </li>
                    <li className="nav-item">
                         <NavLink  className="nav-link " to="/products" href="#">Prodotti</NavLink>
                    </li>
                </ul>
            </div>
        
        </nav>
        
    )
}