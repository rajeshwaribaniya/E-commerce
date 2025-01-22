import './App.css'
import Navbar from './components/navbar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Cart, LoginSignup, Product, Shop, ShopCategory} from './pages'
import Footer from './components/Footer/Footer'


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Shop />} />
          <Route path='/men' element = {<ShopCategory  category = "men" />} />
          <Route path='/women' element = {<ShopCategory category= "women" />} />
          <Route path='/kids' element = {<ShopCategory category = "kid" />} />

          <Route path='/product' element= {<Product />}>

            <Route path=':productId' element= {<Product/>} />

          </Route>

          <Route path='/cart' element= {<Cart />} />
          <Route path='/login' element= {<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </>
  )
}

export default App
