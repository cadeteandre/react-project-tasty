import "./Header.css";
import logoImg from "../../../public/images/tasty-logo.png";

const Header = () => {
    return (  
        <header>
            <img src={logoImg} alt="logo-img" />
            <div>
                <h1>Find a recipe, an idea, an inspiration...</h1>
                <div className="header__search">
                    <input type="text" placeholder="Type something to search" />
                    <button>Search</button>
                </div>
            </div>
        </header>
    );
}

export default Header;