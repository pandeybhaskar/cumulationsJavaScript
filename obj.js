let bikes = new Object();
 bikes = {
    name: 'Royal Enfield',
    type: 'Cruiser',
    fuel: 5
}
function Person(n, place, cost){
this.name = n;
this.place = place
this.cost = cost;
}

bikes['dealer name'] = 'HIGHWAY MOTORS';
bikes.color = 'Red'

function Cars(company, name, type, val){
    this.company = company;
    this.name = name;
    this.type = type;
    this.val = val;
}
const person = new Person('Rajat', 'New Delhi', 150000 );

const carBal = new Cars('Maruti', 'Baleno', 'HatchBack', person);
const carInn = new Cars('Toyota', 'Innova', 'SUV',bikes.color)
Cars();
console.log(carBal);
console.log(carInn);