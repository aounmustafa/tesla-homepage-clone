import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";
import Acc from "./assets/Desktop-Accessories.jpg";
const App = () => {
  return (
    <div className="app">
      <Header />
      <Content title="Model 3" bg={Model3} />
      <Content title="Model Y" bg={ModelY} />
      <Content title="Model S" bg={ModelS} />
      <Content title="Model X" bg={ModelX} />
      <Content title="Solar Panels" bg={SolarPanels} />
      <Content title="Solar Roof" bg={SolarRoof} />
      <Content title="Accessories" bg={Acc} acc={true} />
    </div>
  );
};

export default App;
