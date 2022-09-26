// 1 Creamos BebidasProvider
import { useState, useEffect, createContext } from "react";
import axios from "axios";

// Context
const BebidasContext = createContext()

// Provider
const BebidasProvider = ({ children }) => {
    // 11 -
    const [bebidas, setBebidas] = useState([])
    // 6
    const consultarBebida = async datos => {
        try {
            // Template de strings ``
            // i= filtra por indrediente, c= filtra por categoria
            // Datos es el objeto que tenemos en el state busqueda
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?
            i=${datos.nombre}&c=${datos.categoria}`
            const { data } = await axios(url)
            console.log("data:", data.drinks);
        } catch (error) {
            console.log(error);
        }
    }
    //
    return (
        <BebidasContext.Provider
            value={{
                // 7 -
                consultarBebida,
                // 12 -
                bebidas
            }}
        >
            {children}
        </BebidasContext.Provider>
    )
}

export {
    BebidasProvider
}

export default BebidasContext