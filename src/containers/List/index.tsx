import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

import { RootReducer } from '../../store'
import { editar } from '../../store/reducers/contatos'

import { ActionBar, Contato, Info, InfoValue, Lista } from './styles'
import { Botao, BotaoApagar, Titulo } from '../../styles'
import fundo from '../../assets/images/fundo.png'
import { remover } from '../../store/reducers/contatos'

const List = () => {
  const { items } = useSelector((state: RootReducer) => state.contatos)
  const dispatch = useDispatch()
  const [idEditando, setIdEditando] = useState<number | null>(null)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  return (
    <div className="container">
      <Titulo>Lista de contatos</Titulo>
      <Lista style={{ backgroundImage: `url(${fundo})` }}>
        {items.map((c) => (
          <Contato key={c.id}>
            <Info>
              Nome:{' '}
              {idEditando === c.id ? (
                <input
                  type="text"
                  value={nome}
                  onChange={(evento) => setNome(evento.target.value)}
                />
              ) : (
                <InfoValue>{c.nome}</InfoValue>
              )}
            </Info>
            <Info>
              E-mail:{' '}
              {idEditando === c.id ? (
                <input
                  type="text"
                  value={email}
                  onChange={(evento) => setEmail(evento.target.value)}
                />
              ) : (
                <InfoValue>{c.email}</InfoValue>
              )}
            </Info>
            <Info>
              Telefone:{' '}
              {idEditando === c.id ? (
                <input
                  type="text"
                  value={telefone}
                  onChange={(evento) => setTelefone(evento.target.value)}
                />
              ) : (
                <InfoValue>{c.telefone}</InfoValue>
              )}
            </Info>
            <ActionBar>
              {idEditando !== c.id ? (
                <>
                  <Botao
                    onClick={() => {
                      setIdEditando(c.id)
                      setNome(c.nome)
                      setEmail(c.email)
                      setTelefone(c.telefone)
                    }}
                  >
                    Editar Contato
                  </Botao>
                  <BotaoApagar onClick={() => dispatch(remover(c.id))}>
                    Apagar Contato
                  </BotaoApagar>
                </>
              ) : (
                <>
                  <Botao
                    onClick={() => {
                      dispatch(
                        editar({ id: idEditando!, nome, email, telefone })
                      )
                      setIdEditando(null)
                    }}
                  >
                    Salvar Edição
                  </Botao>
                  <BotaoApagar onClick={() => setIdEditando(null)}>
                    Cancelar Edição
                  </BotaoApagar>
                </>
              )}
            </ActionBar>
          </Contato>
        ))}
      </Lista>
    </div>
  )
}

export default List
