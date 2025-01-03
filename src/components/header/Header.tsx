import "./Header.css";
import logoImg from "../../../public/images/tasty-logo.png";
import { useEffect, useState } from "react";
import { IMeal, IMeals } from "../../interfaces/IMeals";
import { Link } from "react-router-dom";

interface IHeaderProps {
    recipeMeal: IMeal | null,
    setRecipeMeal: React.Dispatch<React.SetStateAction<IMeal | null>>
}

const Header: React.FC<IHeaderProps> = ({ recipeMeal, setRecipeMeal }) => {

    const [input, setInput] = useState<string>('');
    const [searchResult, setSearchResult] = useState<IMeal[] | null>(null);

    useEffect(() => {
        if(input.length > 0) {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
            .then((response) => response.json())
            .then((data: IMeals) => setSearchResult(data.meals))
        }
    }, [input])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    const handleClick = () => {
        if(input !== '') {
            setRecipeMeal(searchResult && searchResult[0]);
        }
        setInput('');
    }

    return (  
        <header>
            <Link to={'/'}>
                <img src={logoImg} alt="logo-img" />
            </Link>
            <div>
                <h1>Find a recipe, an idea, an inspiration...</h1>
                <div className="header__search">
                    <div className="header__searchList">
                        <input value={input} onChange={(e) => handleChange(e)} type="text" placeholder="Type something to search" />
                        {input.length > 0 && (
                            <div className="search__output">
                                <ul>
                                    {searchResult?.map((meal) => (
                                        <Link className="search__output__li" key={meal.idMeal} to={recipeMeal ? `categories/${recipeMeal.strCategory}/recipe/${recipeMeal.idMeal}` : '/'}>
                                            <li onClick={handleClick}>{meal.strMeal}</li>
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <Link className="header__button" to={input !== '' && recipeMeal ? `categories/${recipeMeal.strCategory}/recipe/${recipeMeal.idMeal}` : '/'}>
                        <button onClick={handleClick}>Search</button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;