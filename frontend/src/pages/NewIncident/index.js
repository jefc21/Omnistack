import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import './styles.css';
import logoImg from "../../assets/logo.svg";
import {FiArrowLeft} from 'react-icons/fi';

import api from '../services/api';


export default function Index(){

    const history = useHistory();
    const [title, setTitulo] = useState('');
    const [description, setDescrição] = useState('');
    const [value, setValor] = useState(0.0);

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e){
        e.preventDefault();
        try {
            const data={ title, description, value}
            await api.post('/incidents', data, { headers: { Authorization: ongId, } });
            history.push('/profile');
        } catch (error) {
            alert('Erro ao cadatrar caso, tente novamente');
        }
    }

    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"></img>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link className="back-link" to="/profile"> <FiArrowLeft size={16} color="#E02041" /> Voltar para home </Link>                    
                </section>

                <form onSubmit={handleNewIncident}>
                    <input placeholder="Titulo do caso" 
                           value={title}
                           onChange={e => setTitulo(e.target.value)}
                    />
                    
                    <textarea placeholder="Descrição" 
                           value={description}
                           onChange={e => setDescrição(e.target.value)}
                    />
                    <input placeholder="Valor em reais" 
                           value={value}
                           onChange={e => setValor(e.target.value)}
                    />
                    
                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
