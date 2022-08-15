import React, { useState } from 'react';
import Botton from './botton/Botton';
import './List.css'

const List = ({ pets }) => {

 
    const [atributo, setAtributo] = useState({ 'value': 'editar' })

    return (
        <div className='colum'>

            <table>
                <thead>
                    <tr>
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
                                <td>{pet.nombre}</td>
                                <td>{pet.edad}</td>
                                <td>{pet.raza}</td>
                                <td><Botton atributo={atributo} /></td>
                            </tr>
                        ))
                    }
                </tbody>





            </table>
        </div>
    );
};

export default List;