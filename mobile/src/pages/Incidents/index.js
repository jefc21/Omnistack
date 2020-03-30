import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import api from '../../service/api'

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Incidents(){

    const navigation = useNavigation();
    const [incidents, setIncidents]= useState([]);
    const [total, setTotal]=useState(0);

    useEffect(()=> {loadIncidents();},[]);

    async function loadIncidents(){
        const response = await api.get('incidents');
        setIncidents(response.data);
        setTotal(response.headers['x-total-count']);
    }

    function navigationToDetail(incident){
        navigation.navigate('Detail', { incident });
    }

    return(
        <View style={ styles.container } >
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text>
                </Text>
            </View>
            <Text style={styles.title}> Bem-Vindo! </Text>
            <Text style={styles.description}> Escolha um dos casos abaixo e salve o dia. </Text>

            <FlatList style={styles.incidentsList}
                data={incidents.incidents} 
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item : incident })=>(
                    
                <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>ONG:</Text>
                    <Text style={styles.incidentValue}> {incident.nome} </Text>

                    <Text style={styles.incidentProperty}>Caso:</Text>
                    <Text style={styles.incidentValue}> {incident.title} </Text>

                    <Text style={styles.incidentProperty}>Value:</Text>
                    <Text style={styles.incidentValue}> {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
                                                        .format(incident.value)} </Text>

                    <TouchableOpacity 
                        style={styles.detailButton} 
                        onPress={() => navigationToDetail(incident)}>
                        <Text style={styles.detailButtonText} > Ver mais detalhes </Text>
                        <Feather name="arrow-right" size={16} color="#E02041" ></Feather>
                    </TouchableOpacity>
                </View>

                )}
            />
        </View>
    );
}