function Primeornot(num) {
    if (num <= 1) {
        return false; 
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; 
        }
    }

    return true;
}

let num1 = 12;
let num2 = 13;

if (Primeornot(num1)) {
    console.log(`${num1} is a prime number`);
} else {
    console.log(`${num1} is not a prime number`);
}

if (Primeornot(num2)) {
    console.log(`${num2} is a prime number`);
} else {
    console.log(`${num2} is not a prime number`);
}
