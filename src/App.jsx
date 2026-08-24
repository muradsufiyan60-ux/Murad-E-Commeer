import './App.css';
import Navbar from "./components/navbar.jsx";
import Footer from './components/Footer.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Cart from "./Pages/Cart.jsx";
import Menu from './Pages/Menu.jsx';
import Checkout from './Pages/Checkout.jsx';
import Signin from './Pages/signin.jsx';
import Signup from './Pages/Signup.jsx';
import Profile from './Pages/profile.jsx';

import { AuthProvider } from './context/Authcontext.jsx';
import { CartProvider } from './context/Cartcontext.jsx';
import ProtectedRoute from './components/protectedrouter.jsx';
import ProductDetail from './Pages/productdetail.jsx';
import NotFound from './Pages/notfound.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/contactme.jsx';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />

          <Route
            path="/Checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />

          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;