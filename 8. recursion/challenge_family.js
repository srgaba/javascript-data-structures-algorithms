const bigFamily = [
  {
    id: 1,
    name: "Gaba",
    parent: null,
    childrens: [],
  },
  {
    id: 2,
    name: "Piu",
    parent: 1,
    childrens: [],
  },
  {
    id: 3,
    name: "Bel",
    parent: 1,
    childrens: [],
  },
  {
    id: 4,
    name: "Khai",
    parent: 2,
    childrens: [],
  },
  {
    id: 5,
    name: "Lu",
    parent: 2,
    childrens: [],
  },
  {
    id: 6,
    name: "Teco",
    parent: 3,
    childrens: [],
  },
  {
    id: 7,
    name: "Mari",
    parent: 3,
    childrens: [],
  },
];

const recursiveParent = (parentId) => {
  const pair = [[], []];

  const parent = bigFamily.find((person) => person.id === parentId);
  const children = bigFamily.filter((person) => person.parent === parentId);

  pair[0].push(parent);

  children.forEach((person) => {
    const others = recursiveParent(person.id);
    pair[1].push(others);
  });

  return pair;
};

const family = recursiveParent(1);
console.log(family);
