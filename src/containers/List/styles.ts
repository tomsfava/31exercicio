import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Titulo = styled.h3`
  font-weight: 800;
  justify-self: center;
  margin-top: 20px;
  font-size: 24px;
`

export const Lista = styled.ul`
  border: 1px solid red;
  border-radius: 8px;
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 8px 4px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const Contato = styled.li`
  border: 1px solid orange;
  border-radius: 8px;
  margin: 8px;
  padding: 4px;
`

export const Info = styled.span`
  display: block;
  padding: 2px 4px;
  font-size: 14px;
`

export const InfoValue = styled.span`
  font-size: 16px;
  display: block;

  @media (max-width: ${breakpoints.tablet}) {
    display: inline;
  }
`

export const ActionBar = styled.div`
  padding: 2px 4px;
  margin-top: 8px;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: flex-start;
  }
`
