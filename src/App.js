import './App.css';
import HeaderComponent from './header-components/HeaderComponent.js';
import ImageSectionComponent from './image-section-components/ImageSectionComponent.js';
import RecipeComponent from './RecipeComponent.js';


function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <ImageSectionComponent />
      <RecipeComponent />
    </div>
  );
}

export default App;
