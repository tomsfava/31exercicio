import { useState } from 'react'

import { BotaoCentralizado, Botao, Titulo } from '../../styles'
import { FormContainer, InputContainer, Modal } from './styles'
import close from '../../assets/images/close.png'

const Form = () => {
  const [modalVisivel, setModalVisivel] = useState(false)

  return (
    <>
      <BotaoCentralizado>
        <Botao onClick={() => setModalVisivel(true)} type="button">
          Adicionar novo contato
        </Botao>
      </BotaoCentralizado>
      <Modal className={modalVisivel ? 'is-visible' : ''}>
        <FormContainer>
          <Titulo>Informações de contato</Titulo>
          <img src={close} alt="" onClick={() => setModalVisivel(false)} />
          <InputContainer>
            <div>
              <label htmlFor="nome">Nome:</label>
              <input id="nome" type="text" />
            </div>
            <div>
              <label htmlFor="email">E-mail:</label>
              <input type="email" />
            </div>
            <div>
              <label htmlFor="tel">Telefone:</label>
              <input id="tel" type="tel" />
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
