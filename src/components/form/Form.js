import React, {useState } from 'react';
import axios from 'axios';
import {variableEnvironmentDevelopment} from '../../commons/ventorno'

const Form = ({listPets}) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [breed, setBreed] = useState('')

    const add = e => {
        e.preventDefault();
        console.log('add pets')
        const pets = {
            nombre: name,
            edad: age,
            raza: breed,
        }
        
            axios.post(`${variableEnvironmentDevelopment.baseURL}/${variableEnvironmentDevelopment.token}/${variableEnvironmentDevelopment.entidad}`,pets).then(() => listPets())

        setName('')
        setAge(0)
        setBreed('')
    }

    return (
        <div>
            <h3>Crear Mascota</h3>

            <form className='form' onSubmit={add} >
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Nombre:
                    </label>

                    <input type="text"
                        className='form-control'
                        id='name'
                        placeholder='name'
                        value={name}
                        onChange={e => setName(e.target.value)}
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
                        value={age}
                        onChange={e => setAge(e.target.value)}
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
                        value={breed}
                        onChange={e => setBreed(e.target.value)}
                    />
                </div>

                    <button type='submit' id='add' >Crear Mascota</button>
               
            </form>
        </div>
    );
};

export default Form;