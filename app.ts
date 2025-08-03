interface student{
    name:string;
    age: number;
    ispassed:boolean
}

let s1:student= {
    name:"muhammad waleed",
    age:20,
    ispassed:true

}
console.log(s1);

// ✅ Practice Tasks for You

interface car{
    brand:string;
    model:number;
    iselectric?:boolean
}

let c1:car ={
    brand:"honda",
    model:2025,
    iselectric:true

}

let c2:car={
    brand:"MG",
    model:2024,
    iselectric:false
}

// 🔸 Task 2:

interface teacher{
    readonly id:number;
    name:string;
    subject:string
}

let teacher1:teacher={
    id:2323,
    name:"khan",
    subject:"english"
}

function carinfo(car:car){
    console.log(`brand:${car.brand},model${car.model},iselectric${car.iselectric}`);
    

}
carinfo(c1)