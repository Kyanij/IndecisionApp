
class Person {
    constructor(name='Anonymous',age=0) {
        this.name = name;
        this.age = age;
    }
    getGretting(){
        return `Hi I'm ${this.name}`;
    }
    getDescription(){
        return `${this.name} is  ${this.age} year(s) old`;
    }

}

class Student extends Person{
    constructor(name,age,major){
        super(name,age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor())
        {
            return description += ` My major is ${this.major}`;
   
        }
        return description;
      }

}

class Traveler extends Person{
    constructor(name,age,homeLocation) {
        super(name,age);
        this.homeLocation = homeLocation;
    }
    getGretting(){
        let gret = super.getGretting();
        if(this.homeLocation){
         return gret += ` I'm Visiting from ${this.homeLocation}`;
        }
        return gret;
    }

}


const me = new Traveler('Kyanij Maharjan',22, 'New York');
console.log(me.getGretting());

const other = new Traveler(undefined,undefined,'Nowhere');
console.log(other.getGretting());