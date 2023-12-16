import styled from 'styled-components'

export const VisitedCountriesListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  list-style-type: none;
  margin: 5px;
  max-width: 350px;
  max-height: 300px;
`
export const CountriesImage = styled.img`
  height: 70%;
  width: 100%;
`
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 20%;
  width: 100%;
`
export const Name = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  color: #ffffff;
  margin: 5px;
`
export const RemoveButton = styled.button`
  font-size: 20px;
  font-family: 'Roboto';
  color: #ffffff;
  background-color: transparent;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  border: 1px solid #94a3b8;
  margin: 5px;
  height: 35px;
  width: 100px;
`
