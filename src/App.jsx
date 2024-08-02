import { useState } from "react";
import Cards from "./components/Cards.jsx";
import Topbar from "./components/Topbar.jsx";

function App() {
    const [gameOver, setGameOver] = useState(false);
    const [points, setPoints] = useState(0);
    const [highScore, setHighScore] = useState(points);

    return (
        <div className="flex-col bg-[#F0F0F3] h-lvh w-lvh">
            <Topbar points={points} highScore={highScore}/>
            <Cards
                points={points}
                setPoints={setPoints}
                gameOver={gameOver}
                setGameOver={setGameOver}
                setHighScore={setHighScore}
                highScore={highScore}
            />
        </div>
    );
}

export default App;
