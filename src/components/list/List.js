import React from 'react';
import Botton from './botton/Botton';
import './List.css'

const List = ({ pets, deletePet,findPetById}) => {
    console.log(pets)
    
    return (
        <div className='container-list'>

            <table className='list-table'>
                <thead >
                    <tr className='list-thead'>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Raza</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        pets.map(pet => (
                            <tr key={pet._id} className=''>
                                <td>{pet.name}</td>
                                <td>{pet.age}</td>
                                <td>{pet.breed}</td>
                                <td><Botton id={pet._id} deletePet={deletePet} findPetById={findPetById}/></td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>
    );
};

export default List;