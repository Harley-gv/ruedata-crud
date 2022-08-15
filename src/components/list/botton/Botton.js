import React from 'react';

const Botton = ({deletePet, id, findPetById}) => {
     
    return (
        <div>
            <input type="button" value='Editar' onClick={()=> findPetById(id)}/>
            <input type="button" value='Eliminar' onClick={() => deletePet(id)}/>
        </div>
    );
};

export default Botton;