import { Link } from "react-router-dom"
import Logo from "../../assets/images/logo.svg"

export default function Footer() {
    return (
        <footer>
            <Link to="/">
                <img src={Logo} alt="Kasa Logo" />
            </Link>
            <p>
                &copy; 2020 Kasa. All rights reserved
            </p>
        </footer>
    );
}