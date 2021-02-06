const bigFamily = [
  {
    id: 1,
    name: "Gaba",
    parent: null,
  },
  {
    id: 2,
    name: "Piu",
    parent: 1,
  },
  {
    id: 3,
    name: "Bel",
    parent: 1,
  },
  {
    id: 4,
    name: "Khai",
    parent: 2,
  },
  {
    id: 5,
    name: "Lu",
    parent: 2,
  },
  {
    id: 6,
    name: "Teco",
    parent: 3,
  },
  {
    id: 7,
    name: "Mari",
    parent: 3,
  },
];

const recursiveParent = (parentId) => {
  const pair = {
    parent: null,
    childrens: [],
  };

  pair.parent = bigFamily.find((person) => person.id === parentId);
  const children = bigFamily.filter((person) => person.parent === parentId);

  children.forEach((person) => {
    const others = recursiveParent(person.id);
    pair.childrens.push(others);
  });

  return pair;
};

const family = recursiveParent(1);
console.log(family);
