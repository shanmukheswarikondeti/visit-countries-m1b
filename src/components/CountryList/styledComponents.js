import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  margin: 5px;
  margin-left: 10px;
  min-width: 80vw;
`
export const CountryName = styled.p`
  font-size: 26px;
  font-style: normal;
  font-family: 'Roboto';
  color: #ffffff;
  margin: 5px;
`
export const VisitedText = styled.p`
  font-size: 24px;
  font-style: normal;
  font-family: 'Roboto';
  color: #94a3b8;
  margin: 5px;
  margin-right: 20px;
`
export const VisitedButton = styled.button`
  font-size: 26px;
  font-family: 'Roboto';
  border: none;
  outline: none;
  cursor: pointer;
  min-width: 120px;
  max-width: 150px;
  border-radius: 12px;
  height: 45px;
  margin: 5px;
  color: ${props => (props.color ? '#334155' : '#ffffff')};
  background-color: ${props => (props.bgColor ? 'transparent' : '#3b82f6')};
`
