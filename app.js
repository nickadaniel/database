import React from '';
import "./App.css";
import Header from'./Header';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Home from "./Home";

function App() {
    return (
        <div className="app">
            <Router>
                <Switch path="/">
                    <Route path="/">

                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

<Route path="/">
    <Header />
    <home />
</Route>

export default App;


