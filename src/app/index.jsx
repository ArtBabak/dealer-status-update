import React from "react";
import MainPage from "../ui/MainPage";
import { Provider } from "react-redux";
import { actions, store } from "../store";

const App = () => {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
};

export default App;
