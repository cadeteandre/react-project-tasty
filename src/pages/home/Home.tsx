import { useEffect } from "react";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import "./Home.css";
import { IAllCategories, ICategory } from "../../interfaces/IAllCategories";
import { Link } from "react-router-dom";

interface IHomeprops {
    categoryData: ICategory[]
    setCategoryData: React.Dispatch<React.SetStateAction<ICategory[]>> 
}

const Home:React.FC<IHomeprops>= ({categoryData, setCategoryData}) => {
  

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data: IAllCategories) => setCategoryData(data.categories));
  }, []);
  console.log(categoryData);

  return (
    <>
      <h1>Or go through our categories</h1>
      <section className="category-card__wrapper">
        {categoryData.map((singleCategory) => (
          <Link to={`/categories/${singleCategory.strCategory}`}>
            {" "}
            <CategoryCard
              key={singleCategory.idCategory}
              singleCategory={singleCategory}
            />
          </Link>
        ))}
        <Link to={"/recipe/random"}>
          {" "}
          <CategoryCard textForRandom={"Random"} />
        </Link>
      </section>
    </>
  );
};

export default Home;
