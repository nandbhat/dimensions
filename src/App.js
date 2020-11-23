import "./App.scss";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import HomeScene from "./scenes/HomeScene";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path={"/"} component={HomeScene} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
