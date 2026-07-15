const bcrypt=require('bcrypt')

const plainPassword="Umair@123"

async function registerUmair(){
    try {
        saltRound=10

        const hashedPassword=await bcrypt.hash(plainPassword,saltRound)
        console.log("Hamar password jo humne bhja: ",plainPassword)
        console.log("db me save hone wala password: ",hashedPassword)
    }catch(error){
        console.error("bhai koi gadbad hai yr")
    }
}
registerUmair()