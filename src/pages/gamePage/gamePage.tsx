import React from 'react';
import GameButtons from "../../components/gameButtons/gameButtons";
import './style.scss';

function GamePage() {
  return (
    <div className="App">
        <div className={'title'}>Match country and city</div>
        <GameButtons />
    </div>
  );
}





export default GamePage;
