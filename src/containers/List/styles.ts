import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Lista = styled.ul`
  position: relative;
  min-height: 70vh;
  background-repeat: repeat;
  background-size: 50px 50px;
  border: 1px solid ${colors.borda};
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

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    content: '';
    z-index: 1;
  }
`

export const Contato = styled.li`
  position: relative;
  z-index: 2;
  background-color: ${colors.form};
  border: 1px solid ${colors.borda};
  border-radius: 8px;
  margin: 8px;
  padding: 4px;
  height: 166px;
`

export const Info = styled.span`
  display: block;
  padding: 2px 4px;
  font-size: 14px;
  color: ${colors.fonte};
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
