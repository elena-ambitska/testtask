export const getPosition = () => {
  return fetch("https://frontend-test-assignment-api.abz.agency/api/v1/positions")
      .then((response)=>response.json())
}