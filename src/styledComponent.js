import styled from 'styled-components'

export const TextArea = styled.textarea`
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  font-family: 'Roboto';
  text-decoration: ${props => (props.isUnderline ? 'underline' : 'normal')};
`
export const Button = styled.button`
  color: #f1f5f9;
  color: ${props => props.isBold && '#faff00'};
  color: ${props => props.isItalic && '#faff00'};
  color: ${props => props.isUnderline && '#faff00'};
  font-size: 1rem;
  border: none;
  background-color: transparent;
`
