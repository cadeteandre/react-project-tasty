import "./MealDetailsSection.css";

const MealDetailsSection = () => {
  return (
    <section className="stn-recipe">
      <div className="img-box">
        <img
          src="https://www.themealdb.com/images/media/meals/vrspxv1511722107.jpg"
          alt="food"
        />
      </div>
      <main>
        <article className="text-recipe">
          <h1>Carrot Cake</h1>
          <ul></ul>
          <p>
            For the carrot cake, preheat the oven to 160C/325F/Gas 3. Grease and
            line a 26cm/10in springform cake tin.\r\nMix all of the ingredients
            for the carrot cake, except the carrots and walnuts, together in a
            bowl until well combined. Stir in the carrots and walnuts.\r\nSpoon
            the mixture into the cake tin and bake for 1 hour 15 minutes, or
            until a skewer inserted into the middle comes out clean. Remove the
            cake from the oven and set aside to cool for 10 minutes, then
            carefully remove the cake from the tin and set aside to cool
            completely on a cooling rack.\r\nMeanwhile, for the icing, beat the
            cream cheese, caster sugar and butter together in a bowl until
            fluffy. Spread the icing over the top of the cake with a palette
            knife.
          </p>
        </article>
        <article className="text-ingredients">
          <h1>Ingredients</h1>
          <p>
            1kg Beef 2 tbs Plain Flour 2 tbs Rapeseed Oil 200ml Red Wine 400ml
            Beef Stock 1 finely sliced Onion 2 chopped Carrots 3 sprigs Thyme 2
            tbs Mustard 2 free-range Egg Yolks 400g Puff Pastry 300g Green Beans
            25g Butter pinch Salt pinch Pepper
          </p>
          <a href="#">
            <button>Watch on YouTube</button>
          </a>
        </article>
      </main>
    </section>
  );
};

export default MealDetailsSection;
