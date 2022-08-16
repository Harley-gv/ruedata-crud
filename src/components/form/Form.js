import React from 'react';
import './Form.css'

const Form = ({ formAction, pet, setPet, bottonFormAction }) => {
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
            formAction.updatePet(petRequestUpdate)
        }
        if (!pet._id) {
            formAction.createPet(pet)
        }

        const petClean = {
            'name': '',
            'age': '',
            'breed': ''
        }
        setPet(petClean);

    }

    return (
        <div>


            <form className='form' onSubmit={add} >
                <div className="form-container">
                    <div className='form-container-input'>
                        <label htmlFor="name" >
                            Nombre:
                        </label>

                        <input type="text"
                            className='form-control'
                            id='name'
                            placeholder='nombre de la mascota'
                            value={pet.name}

                            onChange={e => setPet(pet => ({
                                ...pet, name: e.target.value
                            }))}

                            required
                        />
                    </div>

                    <div className='form-container-input'>
                        <label htmlFor="age">
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
                            required
                        />
                    </div>

                    <div className='form-container-input'>
                        <label htmlFor="breed">
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
                            required
                        />
                    </div>
                </div>

                <button type='submit' id='add' className='btn-add'>{bottonFormAction}</button>
            </form>

        </div>
    );
};

export default Form;