import MealDetailsSection from "../../components/mealDetailsSection/MealDetailsSection";
import { IMeal } from "../../interfaces/IMeals";
import "./RecipePage.css";

interface IRecipePageProps {
  recipeMeal: IMeal | null
}

const RecipePage: React.FC<IRecipePageProps> = ({ recipeMeal }) => {
  return (
    <section className="recipePage">
      <MealDetailsSection recipeMeal={recipeMeal} />
    </section>
  );
};

export default RecipePage;
