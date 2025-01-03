import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './rootLayout/RootLayout'
import Home from './pages/home/Home'
import FilteredByCat from './pages/filteredByCat/FilteredByCat'
import RecipePage from './pages/recipePage/RecipePage'
import { useEffect, useState } from 'react'
import { IMeal, IMeals } from './interfaces/IMeals'
import { ICategory } from './interfaces/IAllCategories'

function App() {

  const [categoryData, setCategoryData] = useState<ICategory[]>([]);

  const [recipeMeal, setRecipeMeal] = useState<IMeal | null>(null);

  const [mealIDData, setMealIDData] = useState<string>('');

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealIDData}`)
    .then((response) => response.json())
    .then((data: IMeals) => setRecipeMeal(data.meals[0]))
    console.log(recipeMeal)
  }, [mealIDData])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout recipeMeal={recipeMeal} setRecipeMeal={setRecipeMeal} />}>
        <Route index element={<Home categoryData={categoryData} setCategoryData={setCategoryData} setRecipeMeal={setRecipeMeal} recipeMeal={recipeMeal} />} />
        <Route path="/categories/:categoryName" element={<FilteredByCat setMealIDData={setMealIDData} setRecipeMeal={setRecipeMeal}/>} />
        <Route path={`categories/:categoryName/recipe/:mealID`} element={<RecipePage recipeMeal={recipeMeal} />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
