import { useEffect, useState } from 'react';
import { CREATEPET, EDITPET } from '../../consts/const';
import {getPetService , putPetService, deletePetService, postPetService} from '../../adapter/adapter'
import Form from '../form/Form';
import List from '../list/List';
import {variableEnvironmentDevelopment} from '../../commons/ventorno'
import {petModel} from '../../models/pet'


const Container = () => {
    
    const [pets, setPets] = useState([])
    const [bottonFormAction, setBottonFormAction] = useState(CREATEPET)
    const [pet, setPet] = useState(petModel)
    const formAction = {
        createPet: (pet) => {
            createPet(pet)
        },
        updatePet: (petRequest) => {
            updatePet(petRequest)
        }
    }
    useEffect(() => {
        getPetService( `${variableEnvironmentDevelopment.baseURL}/${variableEnvironmentDevelopment.token}/${variableEnvironmentDevelopment.entidad}`, res => setPets(res.data))
    }, [])

    const listPets = () => {
        getPetService(`${variableEnvironmentDevelopment.baseURL}/${variableEnvironmentDevelopment.token}/${variableEnvironmentDevelopment.entidad}`, res => setPets(res.data))
    }
    
    const deletePet = (id) => {
        deletePetService(`${variableEnvironmentDevelopment.baseURL}/${variableEnvironmentDevelopment.token}/${variableEnvironmentDevelopment.entidad}/${id}`, () => listPets())
    }

    const findPetById = (id) => {
        getPetService(`${variableEnvironmentDevelopment.baseURL}/${variableEnvironmentDevelopment.token}/${variableEnvironmentDevelopment.entidad}/${id}`, res => {setPet(res.data); setBottonFormAction(EDITPET)})
    }
    
    const updatePet = (petRequest) => {
        putPetService(`${variableEnvironmentDevelopment.baseURL}/${variableEnvironmentDevelopment.token}/${variableEnvironmentDevelopment.entidad}/${petRequest.id}`,petRequest.pet, () =>{listPets(); setBottonFormAction(CREATEPET)})
    }

    const createPet = () => {
        postPetService(`${variableEnvironmentDevelopment.baseURL}/${variableEnvironmentDevelopment.token}/${variableEnvironmentDevelopment.entidad}`, pet,() => listPets())
    }

    return (
        <div>
            <Form  pet={pet} setPet={setPet} formAction={formAction} bottonFormAction={bottonFormAction}/>
            <List pets={pets} deletePet={deletePet} findPetById={findPetById}/>
        </div>
    );
};

export default Container;