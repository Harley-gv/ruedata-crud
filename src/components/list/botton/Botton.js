import React from 'react';
import {RiDeleteBin6Line} from 'react-icons/ri'
import {BsPencilSquare} from 'react-icons/bs'
import './Botton.css'

const Botton = ({deletePet, id, findPetById}) => {
     
    return (
        <div className='container-button'>
            <button type="button" onClick={()=> findPetById(id)} className='btn'><BsPencilSquare/></button>
            <button type="button" onClick={() => deletePet(id)} className='btn btn-del'><RiDeleteBin6Line/></button>
        </div>
    );
};

export default Botton;