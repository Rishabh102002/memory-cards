import { useEffect, useState } from "react";
import Card from "./Card.jsx";
import PopUp from "./PopUp.jsx";

const Cards = ({ points, setPoints, gameOver, setGameOver , setHighScore, highScore}) => {
    const [Arr, setArr] = useState([]);
    const [UnClickedArr, setUnClickedArr] = useState([]);
    const [loading, setLoading] = useState(true);
    const [fetchAgain, setFetchAgain] = useState(false);
    const [callPopUP, setCallPopUP] = useState(false)

    const fetchData = async () => {
        let pokeSet = new Set();

        while (pokeSet.size < 10) {
            let num = Math.floor(Math.random() * 1025) + 1;           // Creating unique IDs for all 10 Pokémon
            pokeSet.add(num);
        }

        const tempArr = [];
        for (let pokeID of pokeSet) {
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${pokeID}`
            );
            const data = await response.json();
            const pokemon = {
                name: data.name,
                imageUrl: data.sprites.front_default,
            };
            tempArr.push(pokemon);
        }

        setArr(tempArr);
        setUnClickedArr(tempArr);
        setLoading(false);
    };

    useEffect(()=> {
        if(UnClickedArr.length<=0 && points>0){
            setCallPopUP(true)
        }
    },[UnClickedArr])

    useEffect(() => {
        setLoading(true);
        if (fetchAgain || Arr.length <= 0) fetchData();
        setFetchAgain(false);
    }, [fetchAgain]);

    useEffect(() => {
        if (points > highScore) {
            setHighScore(points);
        }
    }, [points]);

    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    function pokemonClicked(name) {
        if (UnClickedArr.some((item) => item.name === name)) {
            setUnClickedArr(UnClickedArr.filter((item) => item.name !== name));
            setPoints((points) => points + 1);
            setArr(shuffle(Arr));
        } else {
            setGameOver(true);
            setCallPopUP(true);
        }
        
    }

    return (
        <div className="flex justify-center flex-wrap gap-6 mx-[314px] my-16">
            {loading ? (
                <div className="h-full w-full flex flex-col items-center gap-1 justify-center">
                    <div className=" w-[39px] h-[39px] flex justify-center items-center">
                        <svg
                            className="absolute"
                            width="39"
                            height="39"
                            viewBox="0 0 39 39"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="Ellipse 2" filter="url(#filter0_dd_99_32)">
                                <path
                                    d="M31 19C31 25.6274 25.6274 31 19 31C12.3726 31 7 25.6274 7 19C7 12.3726 12.3726 7 19 7C25.6274 7 31 12.3726 31 19ZM11.003 19C11.003 23.4166 14.5834 26.997 19 26.997C23.4166 26.997 26.997 23.4166 26.997 19C26.997 14.5834 23.4166 11.003 19 11.003C14.5834 11.003 11.003 14.5834 11.003 19Z"
                                    fill="#F0F0F3"
                                />
                            </g>
                            <defs>
                                <filter
                                    id="filter0_dd_99_32"
                                    x="0"
                                    y="0"
                                    width="39"
                                    height="39"
                                    filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="sRGB"
                                >
                                    <feFlood
                                        flood-opacity="0"
                                        result="BackgroundImageFix"
                                    />
                                    <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                    />
                                    <feOffset dx="3" dy="3" />
                                    <feGaussianBlur stdDeviation="2.5" />
                                    <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 0.682353 0 0 0 0 0.682353 0 0 0 0 0.752941 0 0 0 0.4 0"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in2="BackgroundImageFix"
                                        result="effect1_dropShadow_99_32"
                                    />
                                    <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                    />
                                    <feOffset dx="-2" dy="-2" />
                                    <feGaussianBlur stdDeviation="2.5" />
                                    <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in2="effect1_dropShadow_99_32"
                                        result="effect2_dropShadow_99_32"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect2_dropShadow_99_32"
                                        result="shape"
                                    />
                                </filter>
                            </defs>
                        </svg>
                        <div className="w-[22px] h-[22px] absolute animate-spin">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="22"
                                viewBox="0 0 20 22"
                                fill="none"
                            >
                                <path
                                    d="M18.9145 4.89527C19.3538 4.55638 19.4385 3.92184 19.0609 3.51523C17.9891 2.36096 16.6791 1.44733 15.2171 0.840475C13.445 0.104889 11.5113 -0.154373 9.60801 0.0884301C7.70472 0.331234 5.89804 1.06766 4.36735 2.22458C2.83666 3.38151 1.63522 4.91869 0.882296 6.68351C0.129376 8.44833 -0.148826 10.3794 0.0753109 12.285C0.299448 14.1906 1.01813 16.0044 2.16 17.5463C3.30186 19.0883 4.8272 20.3047 6.58455 21.0749C8.03436 21.7103 9.60047 22.0237 11.1754 21.9986C11.7302 21.9898 12.1297 21.4895 12.0703 20.9379V20.9379C12.0109 20.3862 11.5147 19.993 10.9598 19.9906C9.73464 19.9851 8.51976 19.7292 7.39111 19.2346C5.95477 18.6051 4.70806 17.6108 3.77478 16.3505C2.84149 15.0902 2.25409 13.6077 2.0709 12.0503C1.8877 10.4928 2.11509 8.91444 2.73047 7.47199C3.34586 6.02955 4.32784 4.77316 5.57892 3.82757C6.83 2.88197 8.30666 2.28007 9.86228 2.08162C11.4179 1.88317 12.9984 2.09507 14.4468 2.69629C15.5849 3.16871 16.6104 3.8686 17.4622 4.74925C17.848 5.14807 18.4751 5.23416 18.9145 4.89527V4.89527Z"
                                    fill="#CECEDA"
                                />
                            </svg>
                        </div>
                    </div>
                    <p className="font-jura font-bold text-[#8c8c93] ">
                        LOADING...
                    </p>
                </div>
            ) : (
                Arr.map((pokemon) => {
                    return (
                        <Card
                            key={pokemon.imageUrl}
                            imageUrl={pokemon.imageUrl}
                            name={pokemon.name}
                            handleClick={pokemonClicked}
                        />
                    );
                })
            )}
            <div className="absolute top-80">
                {callPopUP ? (
                    <PopUp
                        points={points}
                        gameOver={gameOver}
                        setGameOver={setGameOver}
                        setFetchAgain={setFetchAgain}
                        setPoints={setPoints}
                        setHighScore={setHighScore}
                        setCallPopUP={setCallPopUP}
                    />
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default Cards;
