//Task 1

console.log("Task 1");

let arr1 = new Array(15);

for(let i = 0; i < arr1.length; i++){
    arr1[i] = Math.random() * 200 - 100;
}
console.log(arr1);
Array.prototype.calculationPositiveNegativeZero = function() {
    let result = {
        countPlus: 0,
        countMinus: 0,
        countZero: 0
    }
    this.forEach( function(item) {
        if(item > 0){
            result.countPlus++;
        }else if(item < 0){
            result.countMinus++;
        }else{
            result.countZero++;
        }
    });
    return result;
}

console.log(arr1.calculationPositiveNegativeZero());

//Task 5

console.log("Task 5");

let str5 = "ererAvvbdffd";

String.prototype.stringFilter = function(flag) {
    if(flag.toUpperCase() == "AZ"){
        return this.split('').sort().join('');
    }else if(flag.toUpperCase() == "ZA"){
        return this.split('').sort().reverse().join('');
    }else{
        console.log("неправильный флаг");
        return;
    }
}

console.log(str5.stringFilter("za"));

//Task 7

console.log("Task 7");

let num7 = 6425456645223;

Number.prototype.sumNumber = function() {
    let result = 0;
    let x = this.toString();

    for(let i = 0; i < x.length; i++){
        if(i == 0 || i == 1 || i == x.length - 1 || i == x.length - 2){
            result += +x[i];
        }
    }
    return result;
}

console.log(num7.sumNumber());

//Task 8

console.log("Task 8");

let str8 = "hello, world!!!22323efellllll";

String.prototype.removeRepeat = function() {
    let result = '';
    let temp = this;
    for(let i = 0; i < temp.length; i++){
        if(temp[i] == temp[i + 1] || temp[i] == temp[i - 1]){
            
        }else{
            result += temp[i];
        }
    }
    return result;
}
console.log(str8.removeRepeat());

//Task 10 

console.log("Task 10");

let arr10 = [2, 3, 6, 8343434545, 454546510, 56565645, 6];


Array.prototype.deleteRepeatNumber = function() {
    let temp = false;
    for(let i = 0; i < this.length; i++){
        let strSymbol = this[i].toString();
        if(this[i] != +strSymbol.findCharacters()){
            temp = true;
        }
        this[i] = +strSymbol.findCharacters();
        if(isNaN(this[i])){
            this.splice(i, 1);
        }
    }
    return temp;
}

String.prototype.findCharacters = function() {
        let unique = '';
        for (let i = 0; i < this.length; i++) {
            if (this.lastIndexOf(this[i]) == this.indexOf(this[i])) {
                unique += this[i];
            }
        }
        return unique == 0 ? undefined : unique;
    }

console.log(arr10.deleteRepeatNumber());
console.log(arr10);

//Task 6 additional

console.log("Task6 additional");

let arr6 = [{ name: "one", age: 30 }, { name: "two", age: 35 }, { name: "three", age: 40 }, { age: 45}];
Array.prototype.arrayProcessing = function(fieldName) {
    let arr = [];
    this.forEach( (item) => {
        if(item.hasOwnProperty(fieldName)){
            arr.push(item[fieldName]);
        }
    });
    return arr;
}

console.log(arr6.arrayProcessing("name"));

//Task 7 additional

console.log("Task7 additional");

let arr7 = [10, 5, 15, 20];

Array.prototype.multiplicity = function(number) {
    let countResult = 0;
    this.forEach( function(item) {
        if(item % number){
            countResult++;
        }else{
            
        }
    });
    return countResult > 0 ? false : true;
}

console.log(arr7.multiplicity(5));

//Task 8 additional

console.log("Task8 additional");

let string8 = "sfdfdfd43434fd";

String.prototype.searchString = function(subtext) {
    let regex = new RegExp('' + subtext, 'g');
    let result = this.match(regex);

    return result.length;
}

console.log(string8.searchString("df"));

//Task 9 additional 

console.log("Task 9 additional");

let string9 = "hello, world";

String.prototype.insertStrTo = function(pos, subtext) {
    let arr = this.split('');
    if(pos < 0){
        arr.splice(0, 0, subtext);
    }else if(pos > this.length){
        arr.splice(this.length, 0, subtext);
    }else{
        arr.splice(pos, 0, subtext);
    }    
    return arr.join('');
}
string9 = string9.insertStrTo(3, "1212232");
console.log(string9);



