import { BrowserRouter, Routes, Route } from "react-router-dom"

import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import ChiSiamoPage from "./pages/ChiSiamoPage"

function App() {

  return (

    <BrowserRouter>
      
      <Routes>

        <Route Component={DefaultLayout}>

          <Route path="/" Component={HomePage}/>
          
          <Route path="/products" Component={ProductsPage} />
          
          <Route path="/chisiamo" Component ={ChiSiamoPage}/>

        </Route>

      </Routes>
    
    </BrowserRouter>
  )
}

export default App
