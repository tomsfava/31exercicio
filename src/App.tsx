import List from './containers/List'
import { EstiloGlobal } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <button type="button">Adicionar novo contato</button>
      <form>
        <input type="text" />
        <input type="email" />
        <input type="tel" />
        <button type="submit">Adicionar</button>
      </form>
      <List />
    </>
  )
}

export default App
