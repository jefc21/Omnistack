import React, { useState } from 'react';
import './styles.css';
import {Link, useHistory} from 'react-router-dom';

import logoImg from "../../assets/logo.svg";
import {FiArrowLeft} from 'react-icons/fi';

import api from '../services/api';


export default function Register(){

    const history = useHistory();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCidade] = useState('');
    const [uf, setUf] = useState('');

    async function handleRegister(e){
        e.preventDefault();
        const data = { nome, email, whatsapp, city, uf, };

       try {
            const response = await api.post('ongs', data);
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.pushState('/');           
       } catch (error) {
            alert('erro no cadastro, tente novamente');
       }

    };

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"></img>

                    <h1>Cadastro</h1>
                    <p>Faça seu Cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG</p>
                    <Link className="back-link" to="/"> <FiArrowLeft size={16} color="#E02041" /> Não tenho cadastro </Link>                    
                </section>

                <form onSubmit={handleRegister}>

                    <input placeholder="Nome" 
                    value={nome}
                    onChange={e => setNome(e.target.value) }     
                    />

                    <input type="email" 
                            placeholder="Email" 
                            value={email}
                            onChange={e => setEmail(e.target.value) }
                    />
                    
                    <input  placeholder="whatsapp" 
                            value={whatsapp}
                            onChange={e => setWhatsapp(e.target.value) }
                    />

                    <div className='input-group'>
                        <input placeholder="Cidade" 
                               value={city}
                               onChange={e => setCidade(e.target.value) } 
                        />

                        <input placeholder="UF" 
                               style={{width: 80 }}
                               value={uf}
                               onChange={e => setUf(e.target.value) }
                        />
                    </div>
                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}