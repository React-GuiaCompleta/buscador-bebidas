import { useState, useEffect, createContext } from "react";
import axios from "axios";

// Context
const CategoriasContext = createContext()

// Provider
const CategoriasProvider = ({ children }) => {
    // 1 -
    const [categorias, setCategorias] = useState([])
    const obtenerCategorias = async () => {
        try {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
            const { data } = await axios(url)
            // 2 -
            setCategorias(data.drinks)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        obtenerCategorias()
        // solo se ejecuta 1 vez
    }, [])
    //
    return (
        <CategoriasContext.Provider
            value={{
                // 3 -
                categorias
            }}
        >
            {children}
        </CategoriasContext.Provider>
    )
}

export {
    CategoriasProvider
}

export default CategoriasContext

