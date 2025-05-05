import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Contato } from '../../App'

type ContatosState = {
  items: Contato[]
}

const initialState: ContatosState = {
  items: [
    {
      id: 1,
      nome: 'João',
      email: 'joaozinhojj@gmail.com',
      telefone: '11 987434022'
    },
    {
      id: 2,
      nome: 'Maria',
      email: 'mamazinhazita@gmail.com',
      telefone: '21 985479252'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((tarefa) => tarefa.id !== action.payload)
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoExiste = state.items.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoExiste) {
        alert('Já existe um contato com esse nome')
      } else {
        const ultimoContato = state.items[state.items.length - 1]
        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.items.push(contatoNovo)
      }
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.items.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.items[indexDoContato] = action.payload
      }
    }
  }
})

export const { remover, cadastrar, editar } = contatosSlice.actions

export default contatosSlice.reducer
