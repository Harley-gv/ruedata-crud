import { useEffect, useState } from 'react';
import axios from 'axios';
import Form from '../form/Form';
import List from '../list/List';
import {variableEnvironmentDevelopment} from '../../commons/ventorno'


const Container = () => {
    
    const [pets, setPets] = useState([])

    useEffect(() => {
        axios.get(`${variableEnvironmentDevelopment.baseURL}/${variableEnvironmentDevelopment.token}/${variableEnvironmentDevelopment.entidad}`).then(res => setPets(res.data))
    }, [])

    const listPets = () => {
        axios.get(`${variableEnvironmentDevelopment.baseURL}/${variableEnvironmentDevelopment.token}/${variableEnvironmentDevelopment.entidad}`).then(res => setPets(res.data))
    }

    return (
        <div>
            <Form listPets={listPets}/>
            <List pets={pets}/>
        </div>
    );
};

export default Container;