//ES6 - errow function
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