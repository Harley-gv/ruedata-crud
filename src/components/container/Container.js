import { useEffect, useState } from 'react';
import axios from 'axios';
import Form from '../form/Form';
import List from '../list/List';
import {variableEnvironmentDevelopment} from '../../commons/ventorno'
import {petModel} from '../../models/pet'


const Container = () => {
    
    const [pets, setPets] = useState([])
    const [pet, setPet] = useState(petModel)

    useEffect(() => {
        axios.get(`${variableEnvironmentDevelopment.baseURL}/${variableEnvironmentDevelopment.token}/${variableEnvironmentDevelopment.entidad}`).then(res => setPets(res.data))
    }, [])

    const listPets = () => {
        axios.get(`${variableEnvironmentDevelopment.baseURL}/${variableEnvironmentDevelopment.token}/${variableEnvironmentDevelopment.entidad}`).then(res => setPets(res.data))
    }
    
    const deletePet = (id) => {
        axios.delete(`${variableEnvironmentDevelopment.baseURL}/${variableEnvironmentDevelopment.token}/${variableEnvironmentDevelopment.entidad}/${id}`).then(() => listPets())
    }

    const findPetById = (id) => {
        axios.get(`${variableEnvironmentDevelopment.baseURL}/${variableEnvironmentDevelopment.token}/${variableEnvironmentDevelopment.entidad}/${id}`).then(res => setPet(res.data))
        
    }
    
    const updatePet = (petRequest) => {
        // console.log(id)
        axios.put(`${variableEnvironmentDevelopment.baseURL}/${variableEnvironmentDevelopment.token}/${variableEnvironmentDevelopment.entidad}/${petRequest.id}`,petRequest.pet).then(() => listPets())
    }



    return (
        <div>
            <Form listPets={listPets} pet={pet} setPet={setPet} updatePet={updatePet} />
            <List pets={pets} deletePet={deletePet} findPetById={findPetById}/>
        </div>
    );
};

export default Container;