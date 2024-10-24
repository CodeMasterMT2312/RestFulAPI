
//* Obtener Tours de la Base de datos

const tourModel = {
    async getAllToursModel(){
        try {
            const peticion = await fetch('http://localhost:4000/tours')
            const tours = await peticion.json()
            return tours
        } catch (error) {
            console.error(error)
        }
    }
}

export default tourModel

