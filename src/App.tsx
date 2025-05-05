import { Provider } from 'react-redux'

import store from './store'

import Form from './containers/Form'
import List from './containers/List'
import { EstiloGlobal } from './styles'

export type Contato = {
  id: number
  nome: string
  email: string
  telefone: string
}

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Form />
      <List />
    </Provider>
  )
}

export default App
