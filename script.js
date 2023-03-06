"use strict";

// 1. Fetch unique users by descending order (descending order by name).
// 2. fetch particular user by id.

let arr = [
  {
    id: 1,
    name: "Aman",
  },
  {
    id: 2,
    name: "Priya",
  },
  {
    id: 3,
    name: "Urvashi",
  },
  {
    id: 4,
    name: "Jay",
  },
  {
    id: 5,
    name: "Aman",
  },
  {
    id: 6,
    name: "Roshni",
  },
  {
    id: 7,
    name: "Nikita",
  },
  {
    id: 7,
    name: "Shiv",
  },
  {
    id: 8,
    name: "Teena",
  },
  {
    id: 9,
    name: "Roshni",
  },
  {
    id: 10,
    name: "Preeti",
  },
];

// part A

const key = "name";

const uniqueArray = [...new Map(arr.map((item) => [item[key], item])).values()];
console.log(uniqueArray);


// part B  sorting

let sortArr = (arr) => {
  let result = arr.sort((a, b) => a.name < b.name);
  return result;
};

let sortedArray = sortArr(uniqueArray);
console.log(sortedArray);

// answer no 2

const findElement = (id) => {
  let requiredObj;

  arr.find((x) => {
    if (id === x.id) {
      requiredObj = x;
    }
  });

  if (requiredObj) {
    return requiredObj;
  } else {
    return `There is no User with ${id} id no please enter valid user id`;
  }
};

let userData = findElement(10);
console.log(userData);
