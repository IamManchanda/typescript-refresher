type Numbers = number[];
const numbers: Numbers = [1, 2, 3, 4, 5];
console.log(numbers);

interface User {
  id: number;
  name: string;
}
type Users = User[];
const users: Users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" }
];
console.log(users);
