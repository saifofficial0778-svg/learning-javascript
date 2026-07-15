const rawData = "Rahul,20,Pending";

const data=rawData.split(',')
const importFile={
    name:data[0],
    age:data[1],
    feeStatus:data[2]
}
console.log(importFile)
