import tourModel from "../models/tour.js";
import { v4 as uuidv4 } from 'uuid';
import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs-extra'


const getAllToursController = async(req,res) =>
    {
        try {
            const tours = await tourModel.getAllToursModel()
            res.status(200).json(tours)
        } catch (error) {
            console.log(error.message);
        }
    }

const createTourController = async (req,res) => {

    const newTourData={
        id:uuidv4(),
        ...req.body
    }
    try {

        const cloudinaryResponse =  await cloudinary.uploader.upload(req.files.imagen.tempFilePath,{folder:'tours'})
        newTourData.imagen = cloudinaryResponse.secure_url
        newTourData.public_id= cloudinaryResponse.public_id
        const tour = await tourModel.createTourModel(newTourData)

        await fs.unlink(req.files.imagen.tempFilePath)
        res.status(201).json(tour)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const updateTourController= async (req,res) =>{
    
    const {id}=req.params

    try {
        const tour = await tourModel.updateTourModel(id,req.body)
        res.status(200).json(tour)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const deleteTourController = async (req, res) => {
    const { id } = req.params;
    try {
        // Intentamos encontrar el tour antes de eliminar la imagen
        const tourfind = await tourModel.findTourModel(id); // Usar un método para encontrar el tour primero

        if (!tourfind) {
            return res.status(404).json({ error: "Tour no encontrado" });
        }

        // Eliminar la imagen de Cloudinary
        await cloudinary.uploader.destroy(tourfind.public_id);

        // Ahora eliminamos el tour de la base de datos
        await tourModel.deleteTourModel(id);

        res.status(200).json({ msg: "Tour eliminado correctamente" });
    } catch (error) {
        console.error(error); // Para debug
        res.status(500).json({ error: error.message || "Error interno del servidor" });
    }
}


const findTourController = async (req,res) =>{

    const {id}=req.params
    try {
        const tour = await tourModel.findTourModel(id)
        res.status(200).json(tour)
    } catch (error) {
        res.status(500).json(error.message)
    }
}



//* Exportancion nombreada
export{
    getAllToursController,
    createTourController,
    updateTourController,
    deleteTourController,
    findTourController
}
