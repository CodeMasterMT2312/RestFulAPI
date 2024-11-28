
//* Obtener Tours de la Base de datos
import dotenv from 'dotenv'

dotenv.config()

const tourModel = {
    async getAllToursModel(){
        try {
            const peticion = await fetch(process.env.URL_BDD_TOURS)
            const tours = await peticion.json()
            return tours
        } catch (error) {
            console.error(error)
        }
    },

    async createTourModel(newTour){
        //* 1.- CONEXION A BDD
        const url = process.env.URL_BDD_TOURS
        //* 2.- ENVIAR DATA A LA BDD
        const peticion = await fetch(url, {
            method: 'POST',
            body:JSON.stringify(newTour),
            headers: {"Content-Type":"application/json"}
        })
        //* 3.- OBTENER RESPUESTA A LA BDD
        const data = await peticion.json()
        //* 4.- MANDAR RESPUESTA AL CONTROLADOR
        return data
    },

    async updateTourModel(tourId,updatedTour){
        //* 1.- CONEXION A BDD
        const url = `${process.env.URL_BDD_TOURS}${tourId}`
        //* 2.- ENVIAR DATA A LA BDD
        const peticion = await fetch(url, {
            method: 'PUT',
            body:JSON.stringify(updatedTour),
            headers: {"Content-Type":"application/json"}
        })
        //* 3.- OBTENER RESPUESTA A LA BDD
        const data = await peticion.json()
        //* 4.- MANDAR RESPUESTA AL CONTROLADOR
        return data
    },

    async deleteTourModel(tourId){
        //* 1.- CONEXION A BDD
        const url = `${process.env.URL_BDD_TOURS}${tourId}`
        //* 2.- ENVIAR DATA A LA BDD
        const peticion = await fetch(url, {
            method: 'DELETE',
            })
        //* 3.- OBTENER RESPUESTA A LA BDD
        const data = await peticion.json()
        //* 4.- MANDAR RESPUESTA AL CONTROLADOR
        return data
    },

    async findTourModel(tourId){
        //* 1.- CONEXION A BDD
        const url = `${process.env.URL_BDD_TOURS}${tourId}`
        //* 2.- ENVIAR DATA A LA BDD
        const peticion = await fetch(url)
        //* 3.- OBTENER RESPUESTA A LA BDD
        const data = await peticion.json()
        //* 4.- MANDAR RESPUESTA AL CONTROLADOR
        return data
    }
}

export default tourModel

