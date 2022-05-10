import "./App.css";
import { generateRandomRGB } from "./utils/generateRandomRGB";

function App() {
  return (
    <div className="App">
      <h1 style={{ backgroundColor: generateRandomRGB() }}>
        Hola {process.env.REACT_APP_USER_NAME}
      </h1>
      <p className="importante">¿Qué tal estás?</p>
    </div>
  );
}

export default App;
