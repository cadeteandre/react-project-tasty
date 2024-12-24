import { useEffect, useState } from "react";
import FilteredCard from "../../components/filteredCard/FilteredCard";
import "./FilteredByCat.css";
import { IFilteredCat, IFilteredMeal } from '../../interfaces/IFilteredCat';


const FilteredByCat = () => {

    const [filteredCatData, setFilteredCatData] = useState<IFilteredCat[]>([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=beef')
        .then((res) => res.json())
        .then((data) => setFilteredCatData(data.meals))
    }, []);
    console.log('data logged', filteredCatData);
    

    return (  
       <>
        <h1>Everything categoryname</h1>
        <section className="filtered-card__wrapper">
            {filteredCatData.map((filteredMeals) => (
            <FilteredCard key={filteredMeals.meals} filteredMeals={filteredMeals}/>
        ))}
        </section>
        </>
    );
}

export default FilteredByCat;