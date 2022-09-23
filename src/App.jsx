import { Container } from 'react-bootstrap'
// 4 
import Formulario from './components/Formulario'

function App() {

  return (
    <>
      {/* Padding vertical arriba y abajo */}
      <header className='py-5'>
        <h1>Buscador de bebidas</h1>
      </header>

      <Container className="mt-5">
        {/* 5 */}
        <Formulario />
      </Container>

    </>
  )
}

export default App
