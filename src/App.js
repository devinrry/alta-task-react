import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./pages/App";
import Calculator from "./pages/Calculator";
import "./App.css";

const BasicExample = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/calculator">
          <Calculator />
        </Route>
      </Switch>
    </Router>
  );
};

export default BasicExample;
