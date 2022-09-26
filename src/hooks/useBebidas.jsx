// 5 creamos useBebidas.jsx en hooks
import { useContext } from "react";
import BebidasContext from "../context/BebidasProvider";

const useBebidas = () => {
    return useContext(BebidasContext)
}

export default useBebidas
