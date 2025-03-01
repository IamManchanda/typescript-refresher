interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  permissions: string[];
}

const user: Admin = {
  id: 1,
  name: "John Doe",
  permissions: ["read", "write"]
};
console.log(user);
