interface User {
  name: string;
  age: number;
}

interface WithEmail {
  email: string;
}

interface WithOptionalEmail {
  email?: string;
}

type OptionalEmail<T> = T extends WithEmail 
  ? T & WithEmail 
  : T & WithOptionalEmail;

function processUser(user: OptionalEmail<User>) {
  console.log("User name: ", user.name);
  console.log("User age: ", user.age);

  if ("email" in user) {
    console.log("User email: ", user.email);
  }
}

const userWithEmail: OptionalEmail<User> = {
  name: "Alice",
  age: 30,
  email: "alice@example.com"
}; 

const userWithoutEmail: OptionalEmail<User> = {
  name: "Bob",
  age: 25
};

processUser(userWithEmail);
processUser(userWithoutEmail);
