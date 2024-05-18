// using filter //
     //ex:1

let numbers = [1,2,3,4,5,6,7,8,9,10]
let filterNumber = numbers.filter((value , index)=>{
    return value < 5 == 0
})
console.log('******using filter******')
console.log('--------EX:1---------')
console.log(filterNumber)

      //ex:2
let ex2 = document.querySelector('#ex2')
let numbrs = [10 ,11,12,13,14,15,16,17,18,19,20]
let filterEven = numbrs.filter((v,i)=>{
    return v %2 ==0
})
console.log('--------EX:2---------')
console.log(filterEven)


      //ex:3

let names =['ahmed' , 'ali' , 'adem' , 'touhami' , 'montassar' , 'sadok']

let filterNames = names.filter ((names, i)=>{
    return names.length > 5 ==0
})
console.log('--------EX:3---------')
console.log(filterNames)

               //ex:4

let people = [{name:'oussama' , age:28 , club:'softy education'},
    {name:'yasser',age:27,club:'softy education'},
    {name:'adem',age:23,club:'softy education'},
    { name:'3mor', age:52,club:'chikha bikha'},
    {name:'wael', age:7,club: 'yalla nal3ab'}]
console.log('--------EX:4---------')

console.log("---Filter Club----")
let notInClub = people.filter ((notInClub)=>{
    return notInClub.club !== 'softy education'
})
console.log(notInClub)
console.log("----Filter Age----")
let filterAge = people.filter ((enoughAge)=>{
    return enoughAge.age <=18 })
console.log(filterAge)


               //using Reduce //
    //ex: 1
    
let nums=[18,32,63,24,15,96,27,38,29,10]

let total = nums.reduce((num,index)=>{
    return num+index
},0)
console.log('******using Reduce*****')
console.log('--------EX:1---------')
console.log(total)

    //ex:2

    let numString = [19,12,11,16,36,7,85,54,33]
    let stingNum = numString.reduce((v,i)=>{
        return v + i
    },'')
    console.log('--------EX:2---------')
    console.log(stingNum)
    //ex:3 

    let voter =[{name:'jassem',age:22,sex:'male',vote:true},
        {name:'nada',age:20,sex:'female',vote:false},
        {name:'ramzi',age:33,sex:'male',vote:true},
        {name:'brahim',age:30,sex:'male',vote:false},
        {name:'siwar',age:25,sex:'female',vote:true}
    ]
    let Voted = voter.reduce((people,voter)=>{
        return people + voter.vote
    },0)
    console.log('--------EX:3---------')
    console.log(Voted)

       //ex:4
    let myWishList =[{title1:'new eearbuds',price:399},
        {title2:'some figuring' , price:200},
        {title3:'new monitor computer',price:500}
    ]
    let totalPrice = myWishList.reduce((wish,price)=>{
        return wish + price.price
    },0)
    console.log('--------EX:4---------')
    console.log(totalPrice)
    
    
