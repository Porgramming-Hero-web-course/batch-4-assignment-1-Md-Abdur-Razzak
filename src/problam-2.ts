const removeDuplicates = (removeDuplicateArray : number[]):number[]=>{
    return [...new Set(removeDuplicateArray)]
}
const newArrayItem = removeDuplicates([1, 2, 2, 3, 4, 4, 5])
//console.log(newArrayItem);