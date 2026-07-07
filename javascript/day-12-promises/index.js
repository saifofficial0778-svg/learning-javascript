// Topic 1: Callbacks aur "Callback Hell" 😈

function getUserName(Callback){
    setTimeout(()=>{
        name="Saif"
        Callback(name);
    },3000);
}
getUserName(function(name){
    console.log("Welcome "+name) 
})

//  "Callback Hell" 

// getUserDate(userId, function(user){
//     console.log("User aa gya:"+user.name); 

//     createOrder(user.cart, function(order){
//         console.log("Order ban gaya , iD hai ",+order.id);

//         checkPayment(order.id, function(paymentStatus) {
//             console.log("Payment status:", paymentStatus);

//             assignDeliveryBoy(order.id, function(delivery) {
//                 console.log("Delivery partner is on the way: ", delivery.driverName)
//             })
//         })
//     })
// })

// Topic 2: Promises (resolve, reject, .then, .catch)
// 2. Promise Banate Kaise Hain? (Syntax

const myPromise = new Promise((resolve,reject)=>{
    let khanaMilGaya= true;
    if(khanaMilGaya){
        resolve("Pizza tyar hai bhai!")
    }
    else{
        reject("Dukan band thi , khana nhi mila !")
    }
})

myPromise
    .then((msg)=>{console.log(msg);})
    .catch((msg)=>{console.log(msg);})

// Topic 3: Promise Chaining ⛓️
// ==========================================
// 1. Pehle hum functions banate hain jo Promise RETURN karenge
// ==========================================

function getUserDate(userId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("1. Database se user mil gaya");
            
            resolve({id:userId,name:"Rahul",cart:"Pizza"})
        },2000)
    });
}

function createOrder(cartItem){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            
        
        console.log(`2. ${cartItem} ke liye order create ho gya`);
        resolve({orederId:999,item:cartItem});
        
    }, 2000);
    })
}

function checkPayment(orederId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`3.Order Id ${orederId} ke liye payment success ho chuki hai`);

            resolve("PAID");
        },2000)
    })
}

function assignDeliveryBoy(orederId){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(`4. Delivery partnet ${orederId} lekar nikal gya`);
            resolve({driverName:"Saif"});
        }, 2000);
    })
}

// ==========================================
// 2. Ab yahan se asli Relay Race (Chaining) shuru hoti hai
// ==========================================

console.log("App shuru hua... Promise Chain chal rahi hai...");

getUserDate(101)
    .then((user)=>{
        console.log(`-> hello ${user.name} apka process shuru krate hai`);

        return createOrder(user.cart);
    })
    .then((order)=>{
         return checkPayment(order.orederId);
    })
    .then((paymentStatus)=>{
        console.log(`->status check: ${paymentStatus}`);

        return assignDeliveryBoy(999);
    })
    .then((delivery)=>{
        console.log(`congratulation ${delivery.driverName} khana lekar nikal gya`)
    })
    .catch((error)=>{
        console.log("kuch gadbad ho gai bhai"+error);
    })
    
// Topic 4: Promise.all aur Promise.race
// 1. Promise.all
const p1 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Cold drink aa gai")
    },2000);
})
const p2 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Samosa aa gaya")
    },3000);
})
const p3 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Cake aa gaya")
    },5000);
})

Promise.all([p1,p2,p3])
    .then((result)=>{
        console.log("Party start ho gai! saman ki list",result);
    })
    .catch((error)=>{
        console.log("Ek dost fail ho gya party cancel!",error);
    })

// 2. Promise.race
const swiggy = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Swiggy wala pehle aaya! 🍕")

    },200)
})
const zomato = new Promise((resolve)=>{
    setInterval(() => {
        resolve("Zomato wala pehle aaya! 🍔");
    }, 5000);
})

Promise.race([swiggy,zomato])
    .then((winner)=>{
        console.log("race winner is : ",winner)
    })
    .catch((error)=>{
        console.log("Jo phle aya wo fail ho gya",error)
    })

// Topic 5: Error Handling in Promises 🛠️
function checkExamResult(rollNo){
    return new Promise((resolve, reject)=>{
        setInterval(()=>{
            let serverDown=false;
            if(serverDown){
                resolve("Bhdhai ho ! ap pass ho gaye")
            }
            else{
                reject(new Error("Database connection failed! Ek baar Principal sir se sampark karein."))
            }
        },2000);
    });
}

checkExamResult(101)
.then((result)=>{
    console.log("success",result)
})
.catch((error)=>{
    console.log("erp alert",error.message)
})
