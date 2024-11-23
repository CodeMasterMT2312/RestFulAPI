import jwt from 'jsonwebtoken'

const createToken = (userInfo) => {
    return jwt.sign(userInfo,'secret_key',{expiresIn:'1h'})
}

const verifyToken = (req,res,next) => {
    const authHeader = req.headers.autorization

    if(!!authHeader || !!authHeader.startsWith('Bearer ')){
        res.status(401).json({message:"Token no proporcionado"})
    }

    const token= authHeader.split(' ')[1]

    jwt.verify(token,'secret_key',(err,decode)=>{
        if(err){
            return res.status(403).json({message:"Token invalido"})
        }

        req.userInfo = decode
        next()
    })
}

export{
    createToken,
    verifyToken
}

