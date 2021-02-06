import React from 'react';


function App() {

  const [responseData, setResponseData] = React.useState([]);

  React.useEffect(() => {
    fetch('https://nodejs-express-api2.herokuapp.com/users')
      // fetch('https://api.github.com/users/guilhermesantoss')  
      .then(response => {
        if (response.status !== 200) {
          console.log("Deu ruim");
          return;
        }

        response.json().then(data => setResponseData(data))
      })
      .catch(error => console.log("Erro: ", error));

  }, []);

  return (
    <div>
      <h1>Hello world</h1>
      <ul>
        {responseData.map(user => {
          return(
            <li key={user.id}>{`Nome: ${user.firstName}`}</li>          
          )
        }) }
      </ul>
    </div>
  );

}

export default App;
