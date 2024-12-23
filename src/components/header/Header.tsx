import "./Header.css";
import logoImg from "../../../public/images/tasty-logo.png";
import { useEffect, useState } from "react";
import { IMeal, IMeals } from "../../interfaces/IMeals";
import { Link } from "react-router-dom";

interface IHeaderProps {
    setRecipeMeal: React.Dispatch<React.SetStateAction<IMeal | null>>
}

const Header: React.FC<IHeaderProps> = ({ setRecipeMeal }) => {

    const [input, setInput] = useState<string>('');
    const [searchResult, setSearchResult] = useState<IMeal[] | null>(null);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
        .then((response) => response.json())
        .then((data: IMeals) => setSearchResult(data.meals))
    }, [input])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
        setRecipeMeal(searchResult && searchResult[0]);
    }

    const handleClick = () => {
        setRecipeMeal(searchResult && searchResult[0]);
    }

    return (  
        <header>
            <img src={logoImg} alt="logo-img" />
            <div>
                <h1>Find a recipe, an idea, an inspiration...</h1>
                <div className="header__search">
                    <input value={input} onChange={(e) => handleChange(e)} type="text" placeholder="Type something to search" />
                    <Link to={`/recipe/${searchResult && searchResult[0].idMeal}`}>
                        <button onClick={handleClick}>Search</button>
                    </Link>
                </div>
            </div>
            {input.length >= 1 && (
                <div className="header__searchList">
                    <ul>
                        {searchResult?.map((meal) => (
                            <Link key={meal.idMeal} to={`/recipe/${meal.idMeal}`}>
                                <li onClick={handleClick}>{meal.strMeal}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Header;