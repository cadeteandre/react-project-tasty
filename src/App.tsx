import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './rootLayout/RootLayout'
import Home from './pages/home/Home'
import FilteredByCat from './pages/filteredByCat/FilteredByCat'
import RecipePage from './pages/recipePage/RecipePage'
import { useState } from 'react'
import { IMeal } from './interfaces/IMeals'
import { ICategory } from './interfaces/IAllCategories'

function App() {

  const [categoryData, setCategoryData] = useState<ICategory[]>([]);

  const [recipeMeal, setRecipeMeal] = useState<IMeal | null>(null);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout setRecipeMeal={setRecipeMeal} />}>
        <Route index element={<Home categoryData={categoryData} setCategoryData={setCategoryData}/>} />
        <Route path="/categories/:categoryName" element={<FilteredByCat/>} />
        <Route path='/recipe/:mealID' element={<RecipePage recipeMeal={recipeMeal} />} />
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
