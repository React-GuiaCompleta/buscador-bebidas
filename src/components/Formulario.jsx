import { useState } from 'react'
import { Button, Form, Row, Col, Alert } from 'react-bootstrap'
import useCategorias from '../hooks/useCategorias'
import useBebidas from '../hooks/useBebidas'

const Formulario = () => {
    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ' '
    })

    const [alerta, setAlerta] = useState('')
    const { categorias } = useCategorias()
    const { consultarBebida } = useBebidas()

    const handleSubmit = e => {
        e.preventDefault()
        if (Object.values(busqueda).includes('')) {
            setAlerta('Todos los campos son obligatorios')
            return
        }
        // borrar la alerta si sí hay algo
        setAlerta('')
        consultarBebida(busqueda)
    }
    return (
        <Form
            onSubmit={handleSubmit}
        >
            {/*nsi alerta tiene algo */}
            {alerta && <Alert variant='danger' className='text-center'>{alerta}</Alert>}
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
                            value={busqueda.nombre}
                            onChange={e => setBusqueda({
                                ...busqueda,
                                [e.target.name]: e.target.value
                            })}
                        //
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        {/* htmlFor al dar click en el label pone un focus en el input
                        se coloca el id="nombre" en el input */}
                        <Form.Label htmlFor="categoria">Categoria bebida</Form.Label>
                        {/* input */}
                        <Form.Select
                            id="categoria"
                            name="categoria"
                            value={busqueda.categoria}
                            onChange={e => setBusqueda({
                                ...busqueda,
                                [e.target.name]: e.target.value
                            })}
                        //
                        >
                            <option>- Selecciona categoria</option>
                            {categorias.map(categoria => (
                                <option
                                    key={categoria.strCategory}
                                    value={categoria.strCategory}
                                >{categoria.strCategory}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            {/*justify coloca el boton al final*/}
            <Row className='justify-content-end'>
                {/* Toma 3 de las 12 columnas */}
                <Col md={3}>
                    <Button
                        variant='danger'
                        // w-100 ocupa todo el ancho del md-3
                        className='text-uppercase w-100'
                        type="submit"
                    >
                        Buscar bebidas
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default Formulario
