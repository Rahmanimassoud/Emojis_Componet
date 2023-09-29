
import { useContext } from "react";
import { primaryContext } from "../../context/primaryContext";


export const Complements = () => {

    const { complements, setComplements, updateMode} = useContext(primaryContext)


    const handleComplement = () => {
        setComplements(complements + 1)
        updateMode()
    }


    return <div>
        <button onClick={handleComplement}>Give a compliment</button>
    </div>;
};
