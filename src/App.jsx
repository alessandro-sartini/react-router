import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/productsMain/MainProducts";
import ChiSiamoPage from "./pages/ChiSiamoPage";
import Post from "./pages/productsMain/Post";

//context
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (

    <GlobalProvider>
    
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />

            <Route path="/products" Component={ProductsPage} />

            <Route path="/chisiamo" Component={ChiSiamoPage} />

            <Route path="/products/:id" Component={Post}/>
          </Route>
        </Routes>
      </BrowserRouter>
    
    </GlobalProvider>
  );
}

export default App;
