interface User {
  id: number;
  name: string;
}

let foo: string = "foo";
foo = "bar";
console.log({ foo });

const isActive: boolean = true;
console.log({ isActive });

const age: number = 42;
console.log({ age });

const user1 = {
  id: 1,
  name: "Jack",
};
const user2: User = {
  id: 2,
  name: "John",
};
const users: User[] = [user1, user2];
console.log({ users });
