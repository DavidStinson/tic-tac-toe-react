import * as React from "react";
import "./App.css";

import Header from "./components/common/structure/Header/Header";
import GameBoard from "./components/App/GameBoard/GameBoard";
import Message from "./components/App/Message/Message";
import TextInputPlayerOne from "./components/App/TextInputPlayerOne/TextInputPlayerOne";
import TextInputPlayerTwo from "./components/App/TextInputPlayerTwo/TextInputPlayerTwo";
import StartGameButton from "./components/App/StartGameButton/StartGameButton";

const App = () => {
  return (
    <div className="app">
      <div className="app-header">
        <Header />
      </div>
      <div className="app-player-names">
        <TextInputPlayerOne />
        <TextInputPlayerTwo />
      </div>
      <GameBoard />
      <Message />
      <StartGameButton />
    </div>
  );
};

export default App;
