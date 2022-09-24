import { Button, Form, Row, Col } from 'react-bootstrap'
// 4 -
import useCategorias from '../hooks/useCategorias'

const Formulario = () => {
    // 5 - 
    const { categorias } = useCategorias()

    return (
        <Form>
            <Row>
                <Col md={6}>
                    {/* Agrupa un label y un input */}
                    <Form.Group className="mb-3">
                        {/* htmlFor al dar click en el label pone un focus en el input
                        se coloca el id="nombre" en el input */}
                        <Form.Label htmlFor="nombre">Nombre bebida</Form.Label>
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
                        <Form.Label htmlFor="categoria">Categoria bebida</Form.Label>
                        {/* input */}
                        <Form.Select id="categoria" name="categoria">
                            <option>- Selecciona categoria</option>
                            {/* 6 - */}
                            {categorias.map(categoria => (
                                <option
                                    key={categoria.strCategory}
                                    value={categoria.strCategory}
                                >{categoria.strCategory}
                                </option>
                            ))}
                            {/* // */}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            {/* 7  justify coloca el boton al final*/}
            <Row className='justify-content-end'>
                {/* Toma 3 de las 12 columnas */}
                <Col md={3}>
                    <Button
                    variant='danger'
                    // w-100 ocupa todo el ancho del md-3
                    className='text-uppercase w-100'
                    >
                        Buscar bebidas
                    </Button>
                </Col>
            </Row>
            {/* // */}
        </Form>
    )
}

export default Formulario
