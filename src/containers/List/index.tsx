import { ActionBar, Contato, Info, InfoValue, Lista } from './styles'
import { Botao, BotaoApagar, Titulo } from '../../styles'
import fundo from '../../assets/images/fundo.png'

const List = () => (
  <div className="container">
    <Titulo>Lista de contatos</Titulo>
    <Lista style={{ backgroundImage: `url(${fundo})` }}>
      <Contato>
        <Info>
          Nome: <InfoValue>João</InfoValue>
        </Info>
        <Info>
          E-mail: <InfoValue>joaozinhojj@gmail.com</InfoValue>
        </Info>
        <Info>
          Telefone: <InfoValue>11987359163</InfoValue>
        </Info>
        <ActionBar>
          <Botao>Editar Contato</Botao>
          <BotaoApagar>Apagar Contato</BotaoApagar>
        </ActionBar>
      </Contato>
      <Contato>
        <Info>
          Nome: <InfoValue>João</InfoValue>
        </Info>
        <Info>
          E-mail: <InfoValue>joaozinhojj@gmail.com</InfoValue>
        </Info>
        <Info>
          Telefone: <InfoValue>11987359163</InfoValue>
        </Info>
        <ActionBar>
          <Botao>Editar Contato</Botao>
          <BotaoApagar>Apagar Contato</BotaoApagar>
        </ActionBar>
      </Contato>
    </Lista>
  </div>
)

export default List
