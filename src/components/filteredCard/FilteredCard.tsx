import { IFilteredMeal } from "../../interfaces/IFilteredCat";
import { IMeal } from "../../interfaces/IMeals";
import "./FilteredCard.css";

interface IFilteredProps {
    filteredMeals: IFilteredMeal
}

const FilteredCard:React.FC<IFilteredProps> = ({filteredMeals}) => {
    return (  
        <section className="filtered-card__wrapper">
        <article className="filtered-card">
           <p>{filteredMeals.strMeal}</p> 
           <img src={filteredMeals.strMealThumb} alt="Meal Title" />
        </article>
        </section>
    );

}

export default FilteredCard;