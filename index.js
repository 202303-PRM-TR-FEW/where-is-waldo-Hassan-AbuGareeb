const example = [
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["P", "O", "O", "O"],
  ["O", "O", "O", "O"]
];

const whereIsWaldo = (matrix) => {
  for(let i = 0 ; i<matrix.length;i++){
   if(matrix[i].filter((element, index, array)=> array.indexOf(element)===index).length > 1)
   {
      const tempArray= Array.from(matrix[i]);
      tempArray.sort();
      console.log(tempArray)
      if(tempArray[0]!==tempArray[1]){
        return [i+1,matrix[i].indexOf(tempArray[0])+1];
      }
      else{
        return [i+1,matrix[i].indexOf(tempArray[tempArray.length-1])+1];
      }
   }
  }
}

console.log(whereIsWaldo(example));