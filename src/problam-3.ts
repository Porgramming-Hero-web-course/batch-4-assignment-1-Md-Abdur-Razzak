const countWordOccurrences = (sentence : string ,matchWord:string):number=>{
    const matchsRegExp = new RegExp(`\\b${matchWord}\\b`,"gi")
    const matchingWord = sentence.match(matchsRegExp)    
    return matchingWord ? matchingWord.length : 0

}
const matchwordLenth = countWordOccurrences("I love typescript", "typescript");
//console.log(matchwordLenth);