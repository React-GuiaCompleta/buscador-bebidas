// 1 Crear Formulario.jsx en components
// 2 importar
import { Button, Form, Row, Col } from "react-bootstrap"

const Formulario = () => {
    return (
        // 3
        <Form>
            <Row>
                <Col md={6}>
                    {/* Agrupa un label y un input */}
                    <Form.Group className="mb-3">
                        {/* htmlFor al dar click en el label pone un focus en el input
                        se coloca el id="nombre" en el input */}
                        <Form.Label htmlFor='nombre'>Nombre bebida</Form.Label>
                        {/* input */}
                        <Form.Control
                            id="nombre"
                            type="text"
                            placeholder="Ej: tequila, vodka,etc"
                            name="nombre"
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        {/* htmlFor al dar click en el label pone un focus en el input
                        se coloca el id="nombre" en el input */}
                        <Form.Label htmlFor='nombre'>Categoria</Form.Label>
                        {/* input */}
                        <Form.Select
                            id="categoria"
                            name="categoria"
                        >
                            <option>- Selecciona categoria</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    )
}

export default Formulario