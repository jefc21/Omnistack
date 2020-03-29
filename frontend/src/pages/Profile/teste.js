import React, {useEffect, useState} from 'react'
import api from '../services/api';



export default function Teste(){
    const incidents2= [
          {
            "id": 3,
            "title": "caso 1",
            "description": "detalhes dos casos",
            "value": 120,
            "ong_id": "5be3b41c"
          },
          {
            "id": 4,
            "title": "caso 1",
            "description": "detalhes dos casos",
            "value": 120,
            "ong_id": "5be3b41c"
          },
          {
            "id": 5,
            "title": "caso 1",
            "description": "detalhes dos casos",
            "value": 120,
            "ong_id": "5be3b41c"
          },
          {
            "id": 6,
            "title": "caso 1",
            "description": "detalhes dos casos",
            "value": 120,
            "ong_id": "5be3b41c"
          },
          {
            "id": 7,
            "title": "caso 1",
            "description": "detalhes dos casos",
            "value": 120,
            "ong_id": "5be3b41c"
          },
          {
            "id": 8,
            "title": "caso 1",
            "description": "detalhes dos casos",
            "value": 120,
            "ong_id": "5be3b41c"
          },
          {
            "id": 9,
            "title": "caso 1",
            "description": "detalhes dos casos",
            "value": 120,
            "ong_id": "5be3b41c"
          },
          {
            "id": 10,
            "title": "caso 1",
            "description": "detalhes dos casos",
            "value": 120,
            "ong_id": "5be3b41c"
          },
          {
            "id": 11,
            "title": "caso 1",
            "description": "detalhes dos casos",
            "value": 120,
            "ong_id": "5be3b41c"
          },
          {
            "id": 12,
            "title": "caso 1",
            "description": "detalhes dos casos",
            "value": 120,
            "ong_id": "5be3b41c"
          },
          {
            "id": 13,
            "title": "caso 1",
            "description": "detalhes dos casos",
            "value": 120,
            "ong_id": "5be3b41c"
          },
          {
            "id": 14,
            "title": "caso 1",
            "description": "detalhes dos casos",
            "value": 120,
            "ong_id": "5be3b41c"
          },
          {
            "id": 15,
            "title": "caso 1",
            "description": "detalhes dos casos",
            "value": 120,
            "ong_id": "5be3b41c"
          },
          {
            "id": 16,
            "title": "caso 1",
            "description": "detalhes dos casos",
            "value": 120,
            "ong_id": "5be3b41c"
          },
          {
            "id": 17,
            "title": "caso 1",
            "description": "detalhes dos casos",
            "value": 120,
            "ong_id": "5be3b41c"
          },
          {
            "id": 18,
            "title": "caso 1",
            "description": "detalhes dos casos",
            "value": 120,
            "ong_id": "5be3b41c"
          },
          {
            "id": 19,
            "title": "caso 1",
            "description": "detalhes dos casos",
            "value": 120,
            "ong_id": "5be3b41c"
          }
      ]
      
     
      
    /*const results = variavel.incidents.map((result) =>
    <li>{result.title}</li>
    );    

    return (
        <div className="rst-List">
            <ul className="rst-List_Items">
              {results}
            </ul>
        </div>
    )*/

  const [incidents, setIncidents] = useState([]);
  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  useEffect(() => {
      api.get('profile', {headers:{ Authorization: ongId,}}).then(response => {setIncidents(response.data);})
  },[ongId]);


    return ( 
        
        <ul>
            {incidents.map( incident => (
                <li >
                    <strong>CASO:</strong>
                    <p>{incident.title}</p>

                    {/*<strong>DESCRIÇÂO:</strong>
                    <p>{incident.description}</p>

                    <strong>VALOR:</strong>
                    <p> {incident.value}</p>

                    <button type="button"> <FiTrash2 size={20} color="#a8a8b3" /> </button> */}
                </li>
            ))};

        
        </ul>

    );
      
}