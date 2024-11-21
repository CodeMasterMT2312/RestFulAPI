import bcrypt from 'bcrypt'
import {v4 as uuidv4} from 'uuid'
import UserModel from '../models/user.js'
const saltRounds= 10


const registerController = async (req,res) => {
    const {password, ...OtherDataUser} = req.body
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    const userData={
        id:uuidv4(),
        password:hashedPassword,
        ...OtherDataUser
    }
    try {
        const user = await UserModel.registerUserModel(userData)
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}

const loginController = async (req,res) => {
    const {username,password} = req.body
    try {
        const user = await UserModel.loginUserModel(username,password)
        res.status(200).json(user)

    } catch (error) {
        res.status(500).json(error)
    }
}

export {
    registerController,
    loginController
}