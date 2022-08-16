import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri'
import { BsPencilSquare } from 'react-icons/bs'
import { alertChoice, alertInfo } from '../../../adapter/alert/alert';
import './Botton.css'

const Botton = ({ deletePet, id, findPetById }) => {

    
    const showAlertDelete = () => {
        alertChoice(alertInfo, (action) => {
            
            if (action) {
                deletePet(id)
            } 
        })
    }

    return (
        <div className='container-button'>
            <button type="button" onClick={() => findPetById(id)} className='btn'><BsPencilSquare /></button>
            <button type="button" onClick={() => showAlertDelete()} className='btn btn-del'><RiDeleteBin6Line /></button>
        </div>
    );
};

export default Botton;