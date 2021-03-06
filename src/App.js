import './App.css';
import FooterComponent from './footer-components/FooterComponent.js';
import HeaderComponent from './header-components/HeaderComponent.js';
import ImageSectionComponent from './image-section-components/ImageSectionComponent.js';
import IngredientsSectionComponent from './ingredients-list-components/IngredientsSectionComponent.js';
import RecipeComponent from './recipe-components/RecipeComponent.js';


function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <ImageSectionComponent />
      <RecipeComponent />
      <IngredientsSectionComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
