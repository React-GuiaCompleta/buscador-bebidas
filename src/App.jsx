import { Container } from 'react-bootstrap'
import Formulario from './components/Formulario'
import { CategoriasProvider } from './context/CategoriasProvider'
// 2 -
import { BebidasProvider } from './context/BebidasProvider'

function App() {

  return (
    <CategoriasProvider>
      {/* 3 - */}
      <BebidasProvider>
        {/* Padding vertical arriba y abajo */}
        <header className="py-5" >
          <h1>Buscador de bebidas</h1>
        </header >

        <Container className="mt-5">
          <Formulario />
        </Container>
        {/* 4 -  */}
      </BebidasProvider>
    </CategoriasProvider>
  )
}

export default App
