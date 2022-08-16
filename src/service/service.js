import axios from 'axios'

const getPetService = (url, callback) => {
   axios.get(url).then(callback)
}

const postPetService = (url, body,  callback) => {
    axios.post(url,body).then(callback)
}

const putPetService = (url, body, callback) => {
    axios.put(url,body).then(callback)
}

const deletePetService = (url, callback) => {
    axios.delete(url).then(callback)
}

export {getPetService , postPetService,putPetService,deletePetService}