import { useState, useEffect, createContext } from "react";
import axios from "axios";

// Context
const BebidasContext = createContext()

// Provider
const BebidasProvider = ({ children }) => {
    const [bebidas, setBebidas] = useState([])
    const [modal, setModal] = useState(false)
    const [bebidaId, setBebidaId] = useState(null)
    const [receta, setReceta] = useState({})
    const [cargando, setCargando] = useState(false)

    useEffect(() => {
        setCargando(true)
        const obtenerReceta = async () => {
            // Si bebidaId está vacio
            if (!bebidaId) return
            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`
                const { data } = await axios(url)
                setReceta(data.drinks[0]);
            } catch (error) {
                console.log(error);
            } finally {
                setCargando(false)
            }

        }
        obtenerReceta()
    }, [bebidaId])
    //

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
    const handleModalClick = () => {
        // Lo contrario, si está false lo pasa a true
        setModal(!modal)
    }

    const handleBebidaIdClick = id => {
        setBebidaId(id)
    }

    return (
        <BebidasContext.Provider
            value={{
                consultarBebida,
                bebidas,
                handleModalClick,
                modal,
                handleBebidaIdClick,
                receta,
                cargando
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

