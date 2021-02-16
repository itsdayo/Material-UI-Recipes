import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Ingredients from "./components/IngredientsPage";
import Directions from "./components/DirectionsPage";
import Specials from "./components/SpecialsPage";

import Home from "./components/Home";
import { store, persistor } from "./state/store";
//import persistor from "../state/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ingredients/:recipeId" component={Ingredients} />
          <Route exact path="/directions/:recipeId" component={Directions} />
          <Route exact path="/specials" component={Specials} />
        </Switch>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

export default App;
