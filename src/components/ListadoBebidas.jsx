import { Row } from "react-bootstrap"
// importamos hook para extraer los datos
import useBebidas from "../hooks/useBebidas"
import Bebida from "./Bebida"

const ListadoBebidas = () => {
    // el listado está en "bebidas", así que extraemos
    const { bebidas } = useBebidas()
    console.log("si está llegando", bebidas);
    return (
        <Row>
            {bebidas.map(bebida => (
                <Bebida
                    key={bebida.idDrink}
                    // colocamos prop de bebida y le pasamos la bebida
                    bebida={bebida}
                />
            ))}
        </Row>
        //
    )
}

export default ListadoBebidas

