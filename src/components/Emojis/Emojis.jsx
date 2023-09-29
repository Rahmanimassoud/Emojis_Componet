
import { useContext, useEffect } from "react";
import { primaryContext } from "../../context/primaryContext";

const Emojis = () => {

    const {currentMode} = useContext(primaryContext)
    console.log(currentMode);

    return (
        <div>
            <h1>Emoji's Component</h1>
            {currentMode === 'happy' && <span>😃</span>}
            {currentMode === 'fine' && <span>😐</span>}
            {currentMode === 'sad' && <span>😞</span>}
        </div>
    )
};

export default Emojis;
