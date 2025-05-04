import styled from 'styled-components'
import { colors } from '../../styles'

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  align-items: center;
  justify-content: center;

  &.is-visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const FormContainer = styled.form`
  position: relative;
  z-index: 1;
  border: 1px solid ${colors.borda};
  background-color: ${colors.form};
  border-radius: 8px;
  padding: 10px 0;

  img {
    position: absolute;
    top: 8px;
    right: 8px;
  }
`

export const InputContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;

  label {
    display: block;
  }
`
