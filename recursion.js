// Nathan's Notes: Recursion, it is similar to iterative loops but usually it is used to traverse through a chain or related items to get to the bottom of it.

// For example you can traverse through a family tree using recursion to get to the top of the hierarchy. Or in our current case to list out who every body has been in contact with we can go through it recursively.

const categories = [
  {name: 'Cars', parent: null, id: 1},
  {name: 'Motorcycles', parent: null, id: 2},
  {name: 'BMW', parent: 1, id: 3},
  {name: 'Ferrari', parent: 1, id: 4},
  {name: 'Series 3', parent: 3, id: 5},
  {name: 'Testarossa', parent: 4, id: 6},
  {name: 'Harley Davidson', parent: 2, id: 7},
  {name: 'Honda Motos', parent: 2, id: 8},
  {name: 'Hyunday', parent: 1, id: 9},
  {name: 'Kona', parent: 9, id: 10},
  {name: 'x345', parent: 5, id: 11},
  {name: 'Series 5', parent: 3, id: 12},
  {name: 'x510', parent: 12, id: 13},
  {name: 'California', parent: 4, id: 14},
  {name: 'Porsche', parent: 1, id: 15},
  {name: 'Carrera', parent: 15, id: 16},
];
let categoryToParentMapping = {}
let mainCategories = []
categories.forEach(category=>{
if(category.parent){
let key = category.parent.toString()

if(categoryToParentMapping[key]){
categoryToParentMapping[key].push(category);
}else{
categoryToParentMapping[key] = [];
categoryToParentMapping[key].push(category);

}
}else{
if(categoryToParentMapping["0"]){
categoryToParentMapping["0"].push(category)
}else{
categoryToParentMapping["0"] = [category];
}
}
})

function findCategoryChildren(category, indentationLevel){

let indentedTitle = ' '.repeat(indentationLevel*2) ;
indentedTitle +=  category.name + "\n";
console.log(indentedTitle);
if(categoryToParentMapping[category.id.toString()]){
categoryToParentMapping[category.id.toString()].forEach((category)=>{
findCategoryChildren(category, indentationLevel + 1);
})
}
}

categoryToParentMapping['0'].forEach(map=>{
findCategoryChildren(map, 0);
})

// the function findCategoryChildren Method is the one which is recursive play around with the code to see how it works. 


// and below is simple search function to scan through a tree structure, which means an object which has nested object as childres

const search = (tree, target) => {
  if (tree.id === target) {
    return tree.label;
  }
  
  for (const child of tree.child) {
    const res = search(child, target);
    
    if (res) {
      return res;
    }
  }
};

const tree = {"id":1,"label":"A","child":[{"id":2,"label":"B","child":[{"id":5,"label":"E","child":[]},{"id":6,"label":"F","child":[]},{"id":7,"label":"G","child":[]}]},{"id":3,"label":"C","child":[]},{"id":4,"label":"D","child":[{"id":8,"label":"H","child":[]},{"id":9,"label":"I","child":[]}]}]};

console.log(search(tree, 1));
console.log(search(tree, 6));
console.log(search(tree, 99));
