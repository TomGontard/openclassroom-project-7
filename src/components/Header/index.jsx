import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'

export default function Header() {
    return (
        <div>
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>
            <nav>
                <ul>
                    <Link to="/"> Accueil </Link>
                    <Link to="/A-Propos"> A Propos </Link>
                </ul>
            </nav>
        </div>
  )
}