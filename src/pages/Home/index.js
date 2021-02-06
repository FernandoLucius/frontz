import React from 'react';

import { URL_PROD as herokuAPI } from '../../services/api';

function Home() {
  const [responseData, setResponseData] = React.useState([]);

  React.useEffect(() => {
    fetch(`${herokuAPI}/users`) 
      .then(response => {
        if (response.status !== 200) {
          console.log("Deu ruim");
          return;
        }

        response.json().then(data => setResponseData(data));
      })
      .catch(error => console.log("Erro: ", error));
  }, []);

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul style={{ listStyle: 'decimal' }}>
        {responseData.map(user => {
          return(
            <li key={user.id}>
              <p>{user.firstName}</p>
            </li>          
          )
        })}
      </ul>
    </div>
  );
}

export default Home;
