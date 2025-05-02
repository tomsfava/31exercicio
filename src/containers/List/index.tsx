import { ActionBar, Contato, Info, InfoValue, Lista, Titulo } from './styles'

const List = () => (
  <div className="container">
    <Titulo>Lista de contatos</Titulo>
    <Lista>
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
          <button>Editar Contato</button>
          <button>Apagar Contato</button>
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
          <button>Editar Contato</button>
          <button>Apagar Contato</button>
        </ActionBar>
      </Contato>
    </Lista>
  </div>
)

export default List
