import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { BotaoCentralizado, Botao, Titulo } from '../../styles'
import { FormContainer, InputContainer, Modal } from './styles'
import close from '../../assets/images/close.png'
import { cadastrar } from '../../store/reducers/contatos'

const Form = () => {
  const dispatch = useDispatch()
  const [modalVisivel, setModalVisivel] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        email,
        telefone
      })
    )
    setModalVisivel(false)
    setNome('')
    setEmail('')
    setTelefone('')
  }

  return (
    <>
      <BotaoCentralizado>
        <Botao onClick={() => setModalVisivel(true)} type="button">
          Adicionar novo contato
        </Botao>
      </BotaoCentralizado>
      <Modal className={modalVisivel ? 'is-visible' : ''}>
        <FormContainer onSubmit={cadastrarContato}>
          <Titulo>Informações de contato</Titulo>
          <img src={close} alt="" onClick={() => setModalVisivel(false)} />
          <InputContainer>
            <div>
              <label htmlFor="nome">Nome:</label>
              <input
                value={nome}
                onChange={(evento) => setNome(evento.target.value)}
                id="nome"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="email">E-mail:</label>
              <input
                value={email}
                onChange={(evento) => setEmail(evento.target.value)}
                type="email"
              />
            </div>
            <div>
              <label htmlFor="tel">Telefone:</label>
              <input
                value={telefone}
                onChange={(evento) => setTelefone(evento.target.value)}
                id="tel"
                type="tel"
              />
            </div>
          </InputContainer>
          <BotaoCentralizado>
            <Botao type="submit">Adicionar</Botao>
          </BotaoCentralizado>
        </FormContainer>
        <div className="overlay" onClick={() => setModalVisivel(false)}></div>
      </Modal>
    </>
  )
}

export default Form
