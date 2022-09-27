import { useState, useEffect, createContext } from "react";
import axios from "axios";

// Context
const BebidasContext = createContext()

// Provider
const BebidasProvider = ({ children }) => {
    const [bebidas, setBebidas] = useState([])
    const consultarBebida = async datos => {
        try {
            // Template de strings ``
            // i= filtra por indrediente, c= filtra por categoria
            // Datos es el objeto que tenemos en el state busqueda
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?
            i=${datos.nombre}&c=${datos.categoria}`
            const { data } = await axios(url)
            setBebidas(data.drinks)
        } catch (error) {
            console.log(error);
        }
    }
    //
    return (
        <BebidasContext.Provider
            value={{
                consultarBebida,
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

