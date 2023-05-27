const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

var team = players;
var team1 = players.slice(); // Creating a shallow copy of players
var cap1 = Object.assign({}, person); // Creating a shallow copy of person

console.log(team);   // Output: ['John', 'Mike', 'Sarah']
console.log(team1);  // Output: ['John', 'Mike', 'Sarah']
console.log(cap1);   // Output: { name: 'Alice', age: 25, city: 'New York' }

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
