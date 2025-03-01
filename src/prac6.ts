type User = {
  id: number;
  name: string;
};

type Admin = User & {
  permissions: string[];
}; // intersection type

const user: Admin = {
  id: 1,
  name: "John Doe",
  permissions: ["read", "write"]
};
console.log(user);