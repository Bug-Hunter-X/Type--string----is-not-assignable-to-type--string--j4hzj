function greeter(person: string | string[]) {
    if (typeof person === 'string') {
        return "Hello, " + person;
    } else {
        return "Hello, " + person.join(' ');
    }
}

let user = ["Jane", "Doe"];

console.log(greeter(user)); // Works correctly now

let singleUser = "Jane Doe";
console.log(greeter(singleUser)); // Works correctly as well