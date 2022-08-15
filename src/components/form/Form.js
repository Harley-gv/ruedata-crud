import React from 'react';
import axios from 'axios';
import { variableEnvironmentDevelopment } from '../../commons/ventorno'

const Form = ({ listPets, pet, setPet, updatePet }) => {
    const add = e => {
        e.preventDefault();
        
        if (pet._id) {
            
            const petRequestUpdate = {
                id: pet._id,
                pet: {
                    name: pet.name,
                    age: pet.age,
                    breed: pet.breed
                }
            }
            updatePet(petRequestUpdate)
        }
        if (!pet._id) {
            axios.post(`${variableEnvironmentDevelopment.baseURL}/${variableEnvironmentDevelopment.token}/${variableEnvironmentDevelopment.entidad}`, pet).then(() => listPets())

        }

        const petClean = {
            'name': '',
            'age': 0,
            'breed': ''
        }
        setPet(petClean);

    }

    return (
        <div>


            <form className='form' onSubmit={add} >
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Nombre:
                    </label>

                    <input type="text"
                        className='form-control'
                        id='name'
                        placeholder='name'
                        value={pet.name}
                   
                        onChange={e => setPet(pet => ({
                            ...pet, name: e.target.value
                        }))}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="age" className="form-label">
                        Edad:
                    </label>

                    <input type="number"
                        className='form-control'
                        id='age'
                        placeholder='Edad de la mascota en años'
                        value={pet.age}
                      
                        onChange={e => setPet(pet => ({
                            ...pet, age: e.target.value
                        }))}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="breed" className="form-label">
                        Raza:
                    </label>

                    <input type="text"
                        className='form-control'
                        id='breed'
                        placeholder='Raza de la mascota'
                        value={pet.breed}
                
                        onChange={e => setPet(pet => ({
                            ...pet, breed: e.target.value
                        }))}
                    />
                </div>

                <button type='submit' id='add'>Crear Mascota</button>

            </form>
        </div>
    );
};

export default Form;