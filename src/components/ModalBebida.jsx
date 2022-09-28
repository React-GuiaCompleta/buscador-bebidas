import { Modal, Image } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"

const ModalBebida = () => {
    const { modal, handleModalClick } = useBebidas()

    return (
        <div>
            {/* onHide cambia de true a false */}
            <Modal show={modal} onHide={handleModalClick}>
                <Modal.Body>
                    Cuerpo de modal
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ModalBebida

