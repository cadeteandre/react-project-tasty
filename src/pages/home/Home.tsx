import { useEffect } from "react";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import "./Home.css";
import { IAllCategories, ICategory } from "../../interfaces/IAllCategories";
import { Link } from "react-router-dom";
import { IMeal, IMeals } from "../../interfaces/IMeals";

interface IHomeprops {
    categoryData: ICategory[]
    setCategoryData: React.Dispatch<React.SetStateAction<ICategory[]>>,
    setRecipeMeal: React.Dispatch<React.SetStateAction<IMeal | null>>,
    recipeMeal: IMeal | null
}

const Home:React.FC<IHomeprops>= ({categoryData, setCategoryData, setRecipeMeal, recipeMeal}) => {
  

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data: IAllCategories) => setCategoryData(data.categories));
  }, []);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => res.json())
    .then((data: IMeals) => setRecipeMeal(data.meals[0]))
  }, []);

  return (
    <>
      <h2 className="section-headline">Or go through our categories</h2>
      <section className="category-card__wrapper">
        {categoryData.map((singleCategory) => (
          <Link key={singleCategory.idCategory} to={`/categories/${singleCategory.strCategory}`}>
            {" "}
            <CategoryCard
              key={singleCategory.idCategory}
              singleCategory={singleCategory}
            />
          </Link>
        ))}
        <Link to={`categories/${recipeMeal?.strCategory}/recipe/${recipeMeal?.idMeal}`}>
          {" "}
          <CategoryCard textForRandom={"Random"} />
        </Link>
      </section>
    </>
  );
};

export default Home;
