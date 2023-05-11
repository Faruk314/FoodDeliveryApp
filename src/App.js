import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MealsSlider from "./components/MealsSlider";
import FilterMeals from "./components/FilterMeals";
import GoToTopBtn from "./components/GoToTopBtn";
import Cart from "./components/Cart";
import { useSelector } from "react-redux";
import MobileNav from "./components/MobileNav";
import OrderForm from "./components/OrderForm";

function App() {
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const isNavOpen = useSelector((state) => state.nav.isNavOpen);
  const isFormOpen = useSelector((state) => state.cart.isFormOpen);

  return (
    <div className="container">
      <Header />
      {isCartOpen && <Cart />}
      {isNavOpen && <MobileNav />}
      {isFormOpen && <OrderForm />}
      <Hero />
      <MealsSlider />
      <FilterMeals />
      <GoToTopBtn />
    </div>
  );
}

export default App;
