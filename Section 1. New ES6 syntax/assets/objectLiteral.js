function createMachine(name, status) {
  return {
    name: name,
    status: status,
  };
}

console.log(createMachine("Devil", "Online"));

let name = "machine name";
let machine = {
  [name]: "server",
  "machine hours": 10000,
};
console.log(machine[name]);
console.log(machine["machine hours"]);

let server = {
  name: "Server",
  restart() {
    console.log(`The ${this.name} is restarting...`);
  },

  "starting up"() {
    console.log(`The ${this.name} is starting up!`);
  },
};

server["starting up"]();
