import swal from 'sweetalert';

 const alertChoice = (propertyAlert, callback) => {
    swal(propertyAlert)
      .then(callback)
}

const alertInfo = {
    title: "Estas seguro?",
    text: `de eliminar esta mascota`,
    icon: "warning",
    dangerMode: true,
    buttons: ["No, Cancelar", "Si, Eliminar"],
}


export {alertChoice,alertInfo}