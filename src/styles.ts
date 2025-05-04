import styled, { createGlobalStyle } from 'styled-components'

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const colors = {
  fonte: 'rgb(94, 41, 32)',
  form: 'rgb(172, 117, 55)',
  borda: '#333',
  fundo: 'rgb(110, 92, 68)',
  input: 'rgb(235, 233, 154)'
}

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      width: 80%;
    }
  }

  body {
    background-color:${colors.fundo};
  }

  input {
    background-color: ${colors.input}
  }
`

export const Titulo = styled.h3`
  font-weight: 800;
  justify-self: center;
  margin-top: 20px;
  font-size: 24px;
  color: ${colors.fonte};
`

export const Botao = styled.button`
  background-color: ${colors.borda};
  color: ${colors.form};
  padding: 2px 4px;
  font-weight: bold;
  border-radius: 8px;
`

export const BotaoApagar = styled.button`
  background-color: ${colors.fonte};
  color: ${colors.form};
  padding: 2px 4px;
  font-weight: bold;
  border-radius: 8px;
`

export const BotaoCentralizado = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`
