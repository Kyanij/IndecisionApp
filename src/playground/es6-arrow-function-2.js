console.log('Arrow 2 running');

// argument object  - no longer bound with arrow function

const add = (a,b) =>{
    // console.log(arguments);
    return a + b;
};
console.log(add(55,5,100));


// keyword = no longer bound

const user = {
    name: 'Kyanij',
    cities: ['Kathmandu', 'Kirtipur', 'Pokhara'],
   printPlacesLived(){
    return this.cities.map((city) => this.name + ' has lived in ' + city ); 
    }
};

console.log(user.printPlacesLived());

// Challenge
const multiplier = {
    multipleBy: 4,
    numbers: [1,2,3,4,5],
    multiply(){
      return  this.numbers.map((num) => num * this.multipleBy );
    }
}
console.log(multiplier.multiply());
