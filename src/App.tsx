import './index.css'
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import Benefits from "./components/sections/Benefits";
import ProductHighlight from "./components/sections/ProductHighlight";
import TextureDivider from "./components/sections/TextureDivider";
import Ritual from "./components/sections/Ritual";
import Ingredients from "./components/sections/Ingredients";
import Testimonials from "./components/sections/Testimonials";
import Journal from "./components/sections/Journal";

export default function App() {
  return (
    <div className="min-h-screen bg-ls-bg text-ls-text">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <ProductHighlight />
        <TextureDivider />
        <Ritual />
        <Ingredients />
        <Testimonials />
        <Journal />
      </main>
      <Footer />
    </div>
  );
}
