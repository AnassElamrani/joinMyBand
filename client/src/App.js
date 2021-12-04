import './App.css';
import {Home} from "./Layouts/Home"
import { CookiesProvider } from 'react-cookie';


function App() {
  return (
    <div className="App">
      <CookiesProvider>
        <Home />
      </CookiesProvider>
    </div>
  );
}

export default App;
