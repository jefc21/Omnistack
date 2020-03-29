import React, { useState } from 'react';
import './styles.css';
import {Link, useHistory} from 'react-router-dom';

import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";
import {FiLogIn} from 'react-icons/fi';
import api from '../services/api';

export default function Logon(){

    const history = useHistory();
    const [id, setId] = useState('');

    async function handleLogin(e){
        e.preventDefault();
        try {
            const response = await api.post('sessions', { id } );
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.nome);
            console.log({
                id
            }, response.data.nome);
            history.push('/profile');
        } catch (error) {
            alert('Falha no Login, tente novamente');
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"></img>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>

                    <input placeholder="Sua ID"
                           value={id}
                           onChange={e => setId(e.target.value)} 
                    />

                    <button type="submit" className="button">Entrar</button>
                    <Link to="/register" className="back-link"> <FiLogIn size="16" color="#E02041" /> Não tenho cadastro</Link>
                </form>
            </section>
            <img src={heroesImg} alt="heroes"></img>
        </div>
    );
}