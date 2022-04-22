//Este seria como un hook que se crea para que lo podamos utilizar

import { useContext } from "react";
import KioskoContext from "../context/KioskoProvider";



const useKiosko = () => {
    return useContext(KioskoContext)
    
}

export default useKiosko;
