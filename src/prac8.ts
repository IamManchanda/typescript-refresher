const getIdAsNum = (id: string | number) => {
  if (typeof id === "string") {
    return parseInt(id, 10);
  }

  return id;
};
console.log(getIdAsNum("123")); // 123
console.log(getIdAsNum(123)); // 123

const getIdAsStr = (id: string | number) => {
  if (typeof id === "number") {
    return id.toString();
  }

  return id;
};
console.log(getIdAsStr("123")); // '123'
console.log(getIdAsStr(123)); // '123'
