
const jwt=require('jsonwebtoken')

const verifyToken=(req,res,next)=>{
    const authHeader=req.headers['authorization'];
    const token= authHeader && authHeader.split(' ')[1]

    if(!token){
        return res.status(401).json({message:"acces denied : token missing"})
    }

    try{
        const verifiedData=jwt.verify(token,process.env.jWT_SECRET)
        req.user=verifiedData
        next()
    }catch(error){
        return res.status(403).json({message:"session expire ya invalid dobara login kro"})
    }
}

module.exports=verifyToken