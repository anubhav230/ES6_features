//ES6 - errow function

//******** arrow function *********//
const jobs = [
    { id: 1, isActive: true },
    { id: 1, isActive: true },
    { id: 1, isActive: false },
]

//jobs normal function
const activeJobs = jobs.filter(function(job) { return job.isActive });

//jobs arrow function
const activeJobs2 = jobs.filter(job => job.isActive);

console.log(activeJobs);
console.log(activeJobs2);

//******** this keyword *********//

const person = {
    name: 'anubhav',
    walk() {
        console.log(this) //this keyword always returs to the current object but not in javascipt
    }
};

//calling walk with .

person.walk();

// defining a new constant walk and set it to person.walk

const walk = person.walk;

walk(); // it will not return expecte result because strict mode

// but if we use .bind to define to 
const walk2 = person.walk.bind(person)

walk2(); // now it will same result as person.walk();