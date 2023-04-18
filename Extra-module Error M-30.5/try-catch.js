try{
    console.log('inside try');
    console.log(district);
    let district = 'Brahman Baria';
    console.log('after error');
}
catch (error){
    console.log('inside catch');
    console.log(error);
}
finally{
    console.log('finally done');
}

console.log('last line of the code');