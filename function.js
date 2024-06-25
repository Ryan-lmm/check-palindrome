let input = prompt('Insert one word')

let newW = input.split('')
let newreverse = newW.reverse()
let newjoined = newreverse.join('')
console.log(newjoined)
if(newjoined == input){
  console.log('this word is a palindrome')

}else{
  console.log('this word is not palindrome')
}
//console.log(input.split('').reverse().join(''))
