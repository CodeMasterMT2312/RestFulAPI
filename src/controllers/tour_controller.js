import tourModel from "../models/tour.js";
import { v4 as uuidv4 } from 'uuid';

const getAllToursController = async(req,res) =>
    {
        try {
            const tours = await tourModel.getAllToursModel()
            res.status(200).json(tours)
        } catch (error) {
            console.log(error);
        }
    }

const createTourController = async (req,res) => {

    const newTourData={
        id:uuidv4(),
        ...req.body
    }
    try {
        const tour = await tourModel.createTourModel(newTourData)
        res.status(201).json(tour)
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateTourController= async (req,res) =>{
    
    const {id}=req.params

    try {
        const tour = await tourModel.updateTourModel(id,req.body)
        res.status(200).json(tour)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteTourController = async (req,res) =>{
    const {id}=req.params
    try {
            const tour = await tourModel.deleteTourModel(id)
            res.status(200).json(
                {msg:"Tour eliminado correctamente"}
            )
        } catch (error) {
            res.status(500).json(error)
        }
}

const findTourController = async (req,res) =>{

    const {id}=req.params
    try {
        const tour = await tourModel.findTourModel(id)
        res.status(200).json(tour)
    } catch (error) {
        res.status(500).json(error)
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