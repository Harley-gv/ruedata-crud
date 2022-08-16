import { useEffect, useState } from 'react';
import { CREATEPET, EDITPET } from '../../consts/const';
import {getPetService , putPetService, deletePetService, postPetService} from '../../service/service'
import Form from '../form/Form';
import List from '../list/List';
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
        getPetService( `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_ENTITY}`, res => setPets(res.data))
    }, [])

    const listPets = () => {
        getPetService(`${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_ENTITY}`, res => setPets(res.data))
    }
    
    const deletePet = (id) => {
        deletePetService(`${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_ENTITY}/${id}`, () => listPets())
    }

    const findPetById = (id) => {
        getPetService(`${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_ENTITY}/${id}`, res => {setPet(res.data); setBottonFormAction(EDITPET)})
    }
    
    const updatePet = (petRequest) => {
        putPetService(`${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_ENTITY}/${petRequest.id}`,petRequest.pet, () =>{listPets(); setBottonFormAction(CREATEPET)})
    }

    const createPet = () => {
        postPetService(`${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_ENTITY}`, pet,() => listPets())
    }

    return (
        <div>
            <Form  pet={pet} setPet={setPet} formAction={formAction} bottonFormAction={bottonFormAction}/>
            <List pets={pets} deletePet={deletePet} findPetById={findPetById}/>
        </div>
    );
};

export default Container;