import { ICategory } from "../../interfaces/IAllCategories";
import "./CategoryCard.css";

interface Props {
  singleCategory?: ICategory;
  textForRandom?: string;
}
const CategoryCard: React.FC<Props> = ({ singleCategory, textForRandom }) => {
  return (
    <article className="category-card">
      <p>{singleCategory ? singleCategory.strCategory : textForRandom}</p>
      <img
        src={singleCategory?.strCategoryThumb}
        alt={singleCategory?.strCategory}
      />
    </article>
  );
};

export default CategoryCard;
