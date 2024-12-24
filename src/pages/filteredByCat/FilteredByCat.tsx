import { useEffect, useState } from "react";
import FilteredCard from "../../components/filteredCard/FilteredCard";
import "./FilteredByCat.css";
import { IFilteredCat, IFilteredMeal } from '../../interfaces/IFilteredCat';

import { useParams } from "react-router-dom";



const FilteredByCat = () => {

    const [filteredCatData, setFilteredCatData] = useState<IFilteredMeal[]>([]);
    const {categoryName} = useParams() 
    

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
        .then((res) => res.json())
        .then((data:IFilteredCat) => setFilteredCatData(data.meals))
    }, []);
    console.log('data logged', filteredCatData);
    

    return (  
       <>
        <h1>Everything {categoryName}</h1>
        <section className="filtered-card__wrapper">
            {filteredCatData.map((singleMeal) => (
            <FilteredCard key={singleMeal.idMeal} singleMeal={singleMeal}/>
        ))}
        </section>
        </>
    );
}

export default FilteredByCat;