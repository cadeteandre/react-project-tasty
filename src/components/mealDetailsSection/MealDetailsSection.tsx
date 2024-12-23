import "./MealDetailsSection.css";
import { IMeal } from "../../interfaces/IMeals";

interface IMealDetailsSectionProps {
  recipeMeal: IMeal | null
}

const MealDetailsSection: React.FC<IMealDetailsSectionProps> = ({ recipeMeal }) => {

  if (!recipeMeal) return <p>Loading...</p>
  return (
    <section className="stn-recipe">
      <div className="img-box">
        <img
          src={recipeMeal.strMealThumb}
          alt={recipeMeal.strMeal}
        />
      </div>
      <main>
        <article className="text-recipe">
          <h1>{recipeMeal.strMeal}</h1>
          <ul>
            {recipeMeal.strInstructions.split('\r\n').map((part, index) => (
              <li key={index}>{`${part.trim()}`}</li>
            ))}
          </ul>
        </article>
        <article className="text-ingredients">
          <h1>Ingredients</h1>
          <ul>
            <li>{`${recipeMeal.strMeasure1} ${recipeMeal.strIngredient1}`}</li>
            <li>{`${recipeMeal.strMeasure2} ${recipeMeal.strIngredient2}`}</li>
            <li>{`${recipeMeal.strMeasure3} ${recipeMeal.strIngredient3}`}</li>
            <li>{`${recipeMeal.strMeasure4} ${recipeMeal.strIngredient4}`}</li>
            <li>{`${recipeMeal.strMeasure5} ${recipeMeal.strIngredient5}`}</li>
            <li>{`${recipeMeal.strMeasure6} ${recipeMeal.strIngredient6}`}</li>
          </ul>
          <a href="#">
            <button>Watch on YouTube</button>
          </a>
        </article>
      </main>
    </section>
  );
};

export default MealDetailsSection;
