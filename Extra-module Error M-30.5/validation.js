const number = 22;
// String, number, boolean
if(typeof number === 'number'){
    console.log('Value is a number');
}
else{
    console.log('Value is not a number');
}


//upor er moto onek somoy array er typeof jante cile kintu array na ese object asbe.
const numbers = [2, 3, 4, 5, 7];
console.log(typeof numbers);
// tai Array.isArray use korte hobe
console.log(Array.isArray(numbers));

const student = {name: 'Rongila Rafsan', job: 'Khawa-dawa furti'};
console.log(typeof student);