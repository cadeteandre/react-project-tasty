import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './rootLayout/RootLayout'
import Home from './pages/home/Home'
import FilteredByCat from './pages/filteredByCat/FilteredByCat'
import RecipePage from './pages/recipePage/RecipePage'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='/categories' element={<FilteredByCat />} />
        <Route path='/recipe/:mealID' element={<RecipePage />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
