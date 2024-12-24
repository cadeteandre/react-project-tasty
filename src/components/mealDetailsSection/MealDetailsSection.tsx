import "./MealDetailsSection.css";
import { IMeal } from '../../interfaces/IMeals';
import Loader from "../loader/Loader";

interface IMealDetailsSectionProps {
  recipeMeal: IMeal | null
}

const MealDetailsSection: React.FC<IMealDetailsSectionProps> = ({ recipeMeal }) => {

  if (!recipeMeal) return <Loader />
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
            {Object.keys(recipeMeal)
              .filter(key => key.startsWith('strIngredient') && recipeMeal[key as keyof IMeal])
              .map(key => {
                const index = key.replace('strIngredient', '');
                const measureKey = `strMeasure${index}`;

                return (
                  <li key={key}>
                    {`${recipeMeal[measureKey as keyof IMeal] || ''} ${recipeMeal[key as keyof IMeal]}`}
                  </li>
                );
              })}
          </ul>
          <a href={recipeMeal.strYoutube ? recipeMeal.strYoutube : '#'}>
            <button>Watch on YouTube</button>
          </a>
        </article>
      </main>
    </section>
  );
};

export default MealDetailsSection;
