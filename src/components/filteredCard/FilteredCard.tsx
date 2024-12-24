import { Link, useParams } from "react-router-dom";
import { IFilteredMeal } from "../../interfaces/IFilteredCat";

import "./FilteredCard.css";

interface IFilteredProps {
    singleMeal: IFilteredMeal
}

const FilteredCard:React.FC<IFilteredProps> = ({singleMeal}) => {

    /* const {mealID} = useParams()  */

    return (  
       
            <Link to={`recipe/${singleMeal.idMeal}`}>
        <article className="filtered-card">
           <p>{singleMeal.strMeal}</p> 
           <img src={singleMeal.strMealThumb} alt="Meal Title" />
        </article>
        </Link>
    
    );

}

export default FilteredCard;