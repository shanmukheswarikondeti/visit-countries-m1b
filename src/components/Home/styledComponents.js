import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #161624;
  padding: 20px;
  height: 100vh;
  width: 100vw;
`
export const CountriesHeading = styled.h1`
  font-size: 28px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #ffffff;
  margin: 5px;
`

export const NoCountriesVisitedText = styled.p`
  font-size: 36px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #ffffff;
  margin: 10px;
  text-align: center;
`
export const CountriesListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  margin: 10px;
  margin-left: 30px;
  max-height: 40vh;
  overflow-y: scroll;
`
export const VisitedCountriesList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  border: none;
  width: 90%;
  padding: 10px;
  margin: 5px;
  margin-left: 30px;
  max-height: 50vh;
  overflow-y: scroll;
`
