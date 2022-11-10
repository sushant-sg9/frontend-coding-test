import "./App.css"
import Routes from "./routes/routes"
import { BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <div id="body">
      <Router>     
        <Routes />
      </Router>
    </div>
  );
}

export default App