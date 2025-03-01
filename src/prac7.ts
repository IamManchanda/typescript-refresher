/* interface Person {
  name: string;
  greet(): void;
} */

type Person = {
  name: string;
  greet(): void;
}

class Student implements Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

const student = new Student('Taro');
student.greet(); // Hello, I'm Taro
