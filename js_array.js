/*********** concat***********/

let hege = ["Cecilie", "Lone"];
let stale = ["Emil", "Tobias", "Linus"];
let kai = ["Robin"];

let children = hege.concat(stale, kai)
// console.log(children);

/*********copy with in****************/
let fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"]
fruits.copyWithin(4, 0, 1);
// console.log(fruits);
// console.log(fruits.length);

/********************entries*************/
let f = fruits.entries(); //no parameters
for (x of f) {
    // console.log(x) //   [0, data],[1, data],...
}

/**************fill********************/
// fruits.fill('kiwi');
// console.log(fruits)


/**********************FILTER*****************/

let arrFilter = [10, 12, 21, 24, 22];

let filter = arrFilter.filter((ele, index, arr) => ele > 10);
// console.log(filter)   

/*************FIND******************************/

let find = arrFilter.find((ele) => ele > 20);
// console.log(find) //return first true value


/***********findIndex******************/
let index = arrFilter.findIndex(ele => ele > 10);
// console.log(index);


/***************forEach******************** */

arrFilter.forEach((ele, index, arr) => {
    // console.log(ele)    //array each data in a loop
    // console.log(index)  //each data loop index value
    // console.log(arr)    //each time get hole array data
})

/****************from**********************/

let from = Array.from(arrFilter);
// console.log(from)

/*****************includes******************/
let includes = fruits.includes("Banana", 5); //check data into array element. retrun true or false
// console.log(includes)

/************indexOf*********************/
// console.log(fruits)
let indexof = fruits.indexOf("Banana")
// console.log(indexof)

/**********************isArray**********************/
let testArray = ["data"];
let isarray = Array.isArray(testArray)
// console.log(isarray)

/*************************join***************************/
let join = fruits.join("-");
// console.log(join)

/******************keys*********************************/
let keys = fruits.keys();
for (let key of keys) {
    // console.log(key)
}

/****************************length*********************/
let length = fruits.length
// console.log(length)

/**********************lastIndexOf***********************/
let lastindexof = fruits.lastIndexOf("Banana");
// console.log(lastindexof)

/************************map*****************************/
let map = arrFilter.map(Math.sqrt)
// console.log(map)

/******************pop***********************************/
// console.log(fruits)
let pop = fruits.pop(); //remove last index array data
// console.log(pop) // return remove element.

/************************push****************************/
let push = fruits;
// console.log(push)
push.push("TOMATO")
// console.log(push)

/************************reduce****************************/
let reduce = arrFilter.reduce((total, val) => total + val)
// console.log(reduce)

/******************************reduceRight********************/
let reduceright = [175, 50, 25];
reduceright = reduceright.reduceRight((total, val) => total - val)
// console.log(reduceright)

/*********************************reverse*********************/
// console.log(fruits)
fruits.reverse(); // AFFECT ORIGINAL ARRAY
// console.log(fruits)

/***************************shift*****************************/
// console.log(fruits);
fruits.shift() //AFFECT ORIGINAL ARRAY
// console.log(fruits)

/*****************************slice****************************/
console.log(fruits);
let slice = fruits.slice(2, 4); // NOT AFFECT ORIGINAL ARRAY 
//1 - start with 1 // 4 strat with 1
console.log(slice);