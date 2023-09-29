

import { useState } from "react";
import { createContext } from "react";

export const primaryContext = createContext(); 

const PrimaryContext = (props) => {

    const [currentMode, setCurrentMode] = useState("neutral")
    const [complements, setComplements] = useState(0)

    const updateMode = ()=> {
        if(complements < 5) {
            setCurrentMode("sad")
        } else if(complements >= 5 && complements <= 9) {
            setCurrentMode("fine")
        } else {
            setCurrentMode("happy")
        }
    }

    return (
        <primaryContext.Provider value={{
            currentMode,
            setCurrentMode,
            complements,
            setComplements,
            updateMode
        }}>
            {props.children}
        </primaryContext.Provider>

    )
};

export default PrimaryContext;
