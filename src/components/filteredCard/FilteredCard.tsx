import { Link } from "react-router-dom";
import { IFilteredMeal } from "../../interfaces/IFilteredCat";

import "./FilteredCard.css";
import { useEffect } from "react";
import { IMeal, IMeals } from "../../interfaces/IMeals";

interface IFilteredProps {
    singleMeal: IFilteredMeal,
    setMealIDData: React.Dispatch<React.SetStateAction<string>>,
    setRecipeMeal: React.Dispatch<React.SetStateAction<IMeal | null>>
}

const FilteredCard:React.FC<IFilteredProps> = ({ singleMeal, setMealIDData, setRecipeMeal }) => {

    useEffect(() => {
        fetch(`www.themealdb.com/api/json/v1/1/lookup.php?i=${singleMeal.idMeal}`)
        .then((response) => response.json())
        .then((data: IMeals) => setRecipeMeal(data.meals[0]))
    }, [setRecipeMeal, singleMeal.idMeal])

    return (  
        <Link onClick={() => setMealIDData(singleMeal.idMeal)} to={`recipe/${singleMeal.idMeal}`}>
            <article className="filtered-card">
            <p>{singleMeal.strMeal}</p> 
            <img src={singleMeal.strMealThumb} alt="Meal Title" />
            </article>
        </Link>
    );

}

export default FilteredCard;