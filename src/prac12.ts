interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}


async function getUser(): Promise<User> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  // Here we cast the JSON response to the User interface
  return response.json() as Promise<User>;

} 

type FetchedUser = Awaited<ReturnType<typeof getUser>>; 

async function printUser(): Promise<void> { 
  const user: FetchedUser = await getUser();
  console.log("User name: ", user.name);
} 

printUser();