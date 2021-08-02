//*************** task1 ***************//

// Define the following classes that inherit from Animal.
//     I. Shark
// The constructor function for Shark should accept 3 arguments in total in the following order: name, age, status.
// All sharks should have a leg count of 0 (since they obviously do not have any legs) and should have a species of "shark".
//     II. Cat
// The constructor function for Cat should accept the same 3 arguments as with Shark: name, age, status. Cats should
// always have a leg count of 4 and a species of "cat". Furthermore, the introduce/Introduce method for Cat should be
// identical to the original except there should be exactly 2 spaces and the words "Meow meow!" after the phrase.
//     III. Dog
// The Dog constructor should accept 4 arguments in the specified order: name, age, status, master. master is the name
// of the dog's master which will be a string. Furthermore, dogs should have 4 legs and a species of "dog". Dogs have
// an identical introduce/Introduce method as any other animal, but they have their own method called greetMaster/GreetMaster
// which accepts no arguments and returns "Hello (insert_master_name_here)" with the name of the dog's master).

class Animal {
    constructor(name, age, legs, species, status) {
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.species = species;
        this.status = status;
    }

    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`
    }
}

class Shark extends Animal {
    constructor(name, age, status) {
        super(name, age, 0, 'sharks', status);
    }
}

class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age, 4, 'cats', status);
    }

    introduce() {
        return super.introduce() + '  Meow meow!';
    }
}

class Dog extends Animal {
    constructor(name, age, status, master) {
        super(name, age, 4, 'dogs', status);
        this.master = master;
    }

    greetMaster() {
        return 'Hello, ' + this.master;
    }
}

const shark = new Shark('s', 5, 'happy');
console.log(shark.introduce());
const cat = new Cat('c', 8, 'hungry');
console.log(cat.introduce());
const dog = new Dog('d', 15, 'happy', 'Ben');
console.log(dog.greetMaster());


//*************** task2 ***************//

// The task here is to create a class that maintains a sorted list of numbers in ascending order.
// The class will have two methods: • add(x) will add x to the list  • get(i) will get the ith value in the list
// You should also provide a length property that gives the length of the list. Efficiency matters!

class List{
    constructor(array) {
        this.list = array.sort((a,b) => a - b);
        this.length = this.list.length;
    }
    add(x) {
        this.list.push(x);
        this.list = this.list.sort((a,b) => a - b);
    }
    get(i) {
        return this.list[i];
    }
}

let l = new List([45,86,89,7,657,1]);
console.log(l.list, l.length, l.get(2));

//*************** task3 ***************//

// Your task is to complete this Class, the Person class has been created. You must fill in the Constructor
// method to accept a name as string and an age as number, complete the get Info property and getInfo method/
// Info getter which should return johns age is 20

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getInfo() {
        return `${this.name}'s age is ${this.age}`;
    }
}

const p = new Person('Den', 25);
console.log(p.getInfo())


//*************** task4 ***************//

class HallOfFame {
    constructor(size, players) {
        this.size = size ?? 5;
        this.players = players ? this.sort(players) : Array(size);
    }
    list() {
        let list = this.players.map(p => `${p[0]}: ${p[1]}`);
        return list.slice(0,this.size);
    }
    add(player){
        this.players.push(player);
        this.players = this.sort(this.players);
    }
    sort(players) {
        return players.sort((a, b) => {
            if (b[1] == a[1]) {
                if (a[0] < b[0]) {
                    return -1;
                }
                if (a[0] > b[0]) {
                    return 1;
                }
                return 0;
            }
            return b[1] - a[1];
        });
    }
}

const top3 = new HallOfFame(3,[['Ada',99],['Bob',42],['Alo',42],['Dan',3]]);
console.log(top3.list());
top3.add(['Dan',54]);
console.log(top3.list());
const top5 = new HallOfFame();


//*************** task5 ***************//

// Football Task:
// Most football fans love it for the goals and excitement. You are to handle the referee's little notebook and
// count the players who were sent off for fouls and misbehavior. The rules: Two teams, named "A" and "B" have
// 11 players each; players on each team are numbered from 1 to 11. Any player may be sent off the field by being
// given a red card. A player can also receive a yellow warning card, which is fine, but if he receives another
// yellow card, he is sent off immediately (no need for a red card in that case). If one of the teams has less
// than 7 players remaining, the game is stopped immediately by the referee, and the team with less than 7
// players loses. A card is a string with the team's letter ('A' or 'B'), player's number, and card's color
// ('Y' or 'R') - all concatenated and capitalized. e.g the card 'B7Y' means player #7 from team B received a
// yellow card. The task: Given a list of cards (could be empty), return the number of remaining players on
// each team at the end of the game (as a tuple of 2 integers, team "A" first). If the game was terminated
// by the referee for insufficient number of players, you are to stop the game immediately, and ignore any
// further possible cards. If a player that has already been sent off receives another card - ignore it.

function football(list) {
    let teamA = 11;
    let teamB = 11;
    let yellowCards = [];
    let playersOff = [];
    for (let card of list) {
        if (teamA < 7 || teamB < 7) {
            break;
        }
        let team = card[0];
        let player = card[0] + card.match(/\d+/);
        let color = card[card.length - 1];
        if (!playersOff.includes(player)) {
            if (color === "R") {
                team === "A" ? teamA-- : teamB--;
                playersOff.push(player);
            } else {
                if (yellowCards.includes(player)) {
                    team === "A" ? teamA-- : teamB--;
                    playersOff.push(player);
                } else {
                    yellowCards.push(player);
                }
            }
        }
    }
    return [teamA, teamB]
}

console.log(football(["A4Y", "A4Y"]));
console.log(football(["A4Y", "A4R"]));
console.log(football(["A4Y", "A5R", "B5R", "A4Y", "B6Y"]));
console.log(football(["A4R", "A4R", "A4R"]));
console.log(football(["A4R", "A6R", "A8R", "A10R", "A11R"]));


//*************** task6 ***************//

function showProps(obj) {
    console.log('Keys: ', Object.keys(obj));
    console.log('Values: ', Object.values(obj));
}

let student = {
    firstName: "Diana",
    lastName: "Bondarenko",
    group: "121-18-2",
    age: 20,
    course: 4
}
showProps(student);


//*************** task7 ***************//

class Worker {
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    showSalary() {
        console.log(this.fullName + ' salary:  ' + this.dayRate * this.workingDays);
    }

    _experience = 1.2;

    showSalaryWithExperience() {
        console.log(this.fullName + ' salary:  ' + this.dayRate * this.workingDays * this._experience);
    }

    getSalaryWithExperience() {
        return this.dayRate * this.workingDays * this._experience;
    }

    setExperience(value) {
        if (value < 0) throw new Error('Negative value');
        this._experience = value;
    }

    getExperience() {
        return this._experience;
    }
}

const worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.getExperience());
worker1.showSalaryWithExperience();
worker1.setExperience(1.5);
console.log("New experience: " + worker1.getExperience());
worker1.showSalaryWithExperience();
const worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
worker2.showSalary();
worker2.setExperience(1.5);
console.log("New experience: " + worker2.getExperience());
worker2.showSalaryWithExperience();
const worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
worker3.showSalary();
worker3.setExperience(1.5);
console.log("New experience: " + worker3.getExperience());
worker3.showSalaryWithExperience();

console.log("Sorted salary: ");
const workers = [worker1, worker2, worker3];
workers.sort((a, b) => {
    return a.getSalaryWithExperience() - b.getSalaryWithExperience();
})
workers.map(w => w.showSalaryWithExperience());
