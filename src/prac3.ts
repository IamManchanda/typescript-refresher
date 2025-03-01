interface User {
  id: number;
  name: string;
}

const getName = (user: User) => {
  return user.name;
};

const user = {
  id: 1,
  name: "John Doe"
};

console.log(getName(user));
