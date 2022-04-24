import "../styles/Header.scss";
import logo from "../assets/Logo(1).svg"
import {Button} from "./Button";


export const Header = () => {
    return(
     <header>
        <a href="#"><img src={logo} alt="logo" className="logo"/> </a>
         <ul className="list-btn">
             <li><Button>User</Button></li>
             <li><Button>Sign Up</Button></li>
         </ul>
     </header>
    )

}