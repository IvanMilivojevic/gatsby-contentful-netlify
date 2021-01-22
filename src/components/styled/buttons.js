import styled from "styled-components"

export const PrimaryButton = styled.button`
  background-color: orange;
  font-size: 20px;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.3s ease;

  &:hover {
    background-color: maroon;
    color: white;
  }
`

export const AddCart = styled.button`
  background-color: orange;
  font-size: 16px;
  cursor: pointer;
  padding: 7px 10px;
  text-transform: uppercase;
  transition: all 0.3s ease;

  &:hover {
    background-color: #6b5226;
    color: white;
  }
`
