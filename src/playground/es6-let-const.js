
var nameVar='kyanij';
var nameVar ='caniz';
console.log('NameVar', nameVar);



let nameLet = 'julie';
nameLet = 'Harry';
console.log('NameLet', nameLet);

const nameConst = 'Anne';
console.log('nameConst', nameConst);


// Scope Blocking

const fullName = 'Kyanij Maharjan';
let firstName;

    if(fullName){
        firstName = fullName.split(' ')[0];
        return firstName;
    }

var t = (
    <div>
    <h1>ES6 lesson</h1>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(t,appRoot);
