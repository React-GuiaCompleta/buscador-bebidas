import { Modal, Image } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"

const ModalBebida = () => {
    const { modal, handleModalClick, receta, cargando } = useBebidas()


    const mostrarIngredientes = () => {
        // creamos arreglo de ingdredientes
        let ingredientes = []
        for (let i = 1; i < 16; i++) {
            // recorre strIngredient 1, 2, 3 hasta el 16
            if (receta[`strIngredient${i}`]) {
                // si existe el ingrediente agregalo
                ingredientes.push(
                    <li>{receta[`strIngredient${i}`]}
                        {receta[`strMeasure${i}`]}
                    </li>
                )
            }
        }
        return ingredientes
    }

    return (
        // Si no está cargando entonces muestra todo el modal
        !cargando && (
            <Modal show={modal} onHide={handleModalClick}>
                <Image
                    src={receta.strDrinkThumb}
                    alt={`Imagen receta ${receta.strDrink}`}
                />
                <Modal.Header>
                    <Modal.Title>{receta.strDrink}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="p-3">
                        <h2>Instrucciones</h2>
                        {receta.strInstructions}
                        <h2>Ingredientes y cantidades</h2>
                        {mostrarIngredientes()}
                    </div>
                </Modal.Body>
            </Modal>
        )
    )
}

export default ModalBebida

