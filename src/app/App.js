import { BrowserRouter, Route, Switch } from "react-router-dom";
import Create from "./layouts/create";
import CardPage from "./pages/cardPage";
import React from "react";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={CardPage}/>
                <Route exact path="/create" component={Create}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
