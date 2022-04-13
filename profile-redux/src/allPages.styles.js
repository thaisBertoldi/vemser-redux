import styled from 'styled-components'

export const Button = styled.button`
  color: ${(props) => props.color};
  border: 2px solid ${(props) => props.border};
  background: ${(props) => props.background};
  cursor: pointer;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 7px;
`;
