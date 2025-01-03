import { useEffect, useState } from "react";
import FilteredCard from "../../components/filteredCard/FilteredCard";
import "./FilteredByCat.css";
import { IFilteredCat, IFilteredMeal } from '../../interfaces/IFilteredCat';

import { useParams } from "react-router-dom";
import { IMeal } from "../../interfaces/IMeals";

interface Props {
    setMealIDData: React.Dispatch<React.SetStateAction<string>>,
    setRecipeMeal: React.Dispatch<React.SetStateAction<IMeal | null>>
}

const FilteredByCat: React.FC<Props> = ({ setMealIDData, setRecipeMeal }) => {

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
            <h2 className="section-headline">Everything {categoryName}</h2>
            <section className="filtered-card__wrapper">
                {filteredCatData.map((singleMeal) => (
                <FilteredCard key={singleMeal.idMeal} singleMeal={singleMeal} setMealIDData={setMealIDData} setRecipeMeal={setRecipeMeal}/>
            ))}
            </section>
        </>
    );
}

export default FilteredByCat;