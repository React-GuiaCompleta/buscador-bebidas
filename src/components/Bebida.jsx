// 1 
import { Col, Card, Button } from "react-bootstrap"

// extraemos prop de bebida
const Bebida = ({ bebida }) => {
    return (
        // 6 columnas, 4 columnas de las 12 columnas
        <Col md={6} lg={4}>
            <Card className="mb-4">
                <Card.Img
                    variant='top'
                    src={bebida.strDrinkThumb}
                    alt={`Imagen de ${bebida.strDrink}`}
                />

                <Card.Body>
                    <Card.Title>{bebida.strDrink}</Card.Title>
                    <Button
                        variant={'warning'}
                        className="w-100 text-uppercase mt-2"
                    >
                        Ver receta
                    </Button>
                </Card.Body>
                <Card.Text>Algo más</Card.Text>
            </Card>
        </Col>
    )
}

export default Bebida
