const arr  = [21,31,41,51,2,42,4,5,3,7,54,1,10,20];
const arr2 = [25,26,45,28,16,19,12,15,3,4,7,5,6,9];
const arr3 = [22,35,65,4,2,4,12,12,54,23,35,65];
const strarr = ['hari','haran','sekar','fsc','madam','level'];

function Br(){
    console.log("------------------------------------------------------------------");
    console.log("------------------------------------------------------------------");
}

// Print Odd number in Array

console.log("Odd Numbers in Array");
(function (){
    arr.forEach(e => {
        if(e%2){
            console.log(e);
        }
    });
})();
Br();

// Converting Strings

console.log("Converting String of Array to Upper ");
(function(){
    strarr.forEach(e => {
        console.log(e.toUpperCase());
    })
})();

// sum of all number in array
console.log("Sum of all numbers in Array: ");
(function(){
    var sum=0;
    arr.forEach(e => {
        sum += e;
    });
    console.log(sum);
})();
Br();

// Prime Numbers in Array

console.log("Prime Number in Array: ");
(function(){
    let primearr=[];
    function checkprime(num) {
        for (let i = 2; i < num; i++){
            if(num%i == 0)
                return false
        }
        return true
    }
    arr.forEach(e => {
        if(checkprime(e))
            console.log(`${e} is a Prime Number`);
        else
            console.log(`${e} is not a Prime Number`);
    });
})();
Br();

// Median of two sorted Array of Same Size

(function () {
    var concat = arr.concat(arr2);
    concat.sort(((x,y) => {return x-y}))
    console.log(concat);
    var length = concat.length;

    if (length % 2 == 1) {
        console.log(concat[(length / 2) - .5])
        return concat[(length / 2) - .5]

    }
    else {
        console.log((concat[length / 2] 
            + concat[(length / 2) - 1]) / 2); 
        return (concat[length / 2] 
            + concat[(length / 2) - 1]) / 2;
    }
})();
Br();

// Removing Duplicates in Array

console.log("Before removing the Duplicates");
console.log(arr3);
(function(){
    console.log("After Removing Duplicates");
    let removedduparr =[];
    arr3.forEach(e => {
        if (!(removedduparr.includes(e))) {
            removedduparr.push(e);
        } 
});
console.log(removedduparr);
})();
Br();

// Palindrome
console.log("Checking Palindrome:");
(function(){
    strarr.forEach(e => {
        const conarr =  e.split('');
        const revarr =  conarr.reverse();
        const revstr = revarr.join('');

        if(revstr === e)
            console.log(e,"is Palindrome");
        else
            console.log(e,"is not Palindrome"); 

    });
})();
Br();

// Rotate array

(function (){console.log("Array Before Rotating:", arr3);
for (let i = 0; i < 3;i++) {
    arr3.unshift(arr3.pop());
}

console.log(arr3);})();
Br();

// Arrow Funcions 
// Print Odd number in Array

const oddnum = () => {
    arr.forEach(e => {
    if(e%2){
        console.log(e);
    }
})}
console.log("Odd number in array");
oddnum();
Br();

// Converting Strings

const convertedstr = () => {  
    strarr.forEach(e => {
    console.log(e.toUpperCase());
})}

console.log("Upper Case converted Strings:")
convertedstr();

// Sum of all numbers in array

const total = () => {
    let sum = 0;
    arr.forEach(e => {
        sum += e;
    });
    console.log(sum);
}

console.log("Total of Array:");
total();
Br();

//Checking Prime number

const prime = () => {
    let primearr=[];
    function checkprime(num) {
        for (let i = 2; i < num; i++){
            if(num%i == 0)
                return false
        }
        return true
    }
    arr.forEach(e => {
        if(checkprime(e))
            console.log(`${e} is a Prime Number`);
        else
            console.log(`${e} is not a Prime Number`);
    });
}
console.log("Prime Numbers");
prime();
Br();

// Palindrome 

const palindrome = () => {
    strarr.forEach(e => {
        const conarr =  e.split('');
        const revarr =  conarr.reverse();
        const revstr = revarr.join('');

        if(revstr === e)
            console.log(e,"is Palindrome");
        else
            console.log(e,"is not Palindrome"); 

    });
}

console.log("Checking Palindrome:");
palindrome();