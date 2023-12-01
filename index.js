//qst1
function isEven(num) {
  if (num % 2 === 0) {
    return 'even'
  }
  return 'odd'
}
console.log(isEven(4))
console.log(isEven(9))

//qst2
function countB(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'A' && str[i] <= 'Z') {
      count++
    }
  }
  return count;
}

console.log(countB('Hello w'))
console.log(countB('Hello world Rabase'))
console.log(countB('JACK'))

//qst3

function countChar(num, carl) {
  let count = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] == carl) {
      count++
    }
  }
  return count;
}
console.log(countChar('nuM', 'M'))

//qst4

function range(start, end) {
  const a = []
  for (let i = start; i <= end; i++) {
    a.push(i)
  }
  return a
}
const result = range(1, 5)
console.log(result)

function stepRange(start, end, two) {
  const a = []
  for (let i = start; i < end; i += two) {

    a.push(i)
  }
  return a
}
let resul = stepRange(1, 10, 2)
console.log(resul)

//qst8

function sumOfFunction (sum) {
  let b = 0
  for (let i = 0; i < sum.length; i++) {
    b += sum[i]
  }
  return b
}

let number = [1, 2, 3, 4, 5]
let resu = sumOfFunction (number)
console.log(resu)

function averageOfFunction (average) {
  let c = 0
  for (let i = 0; i < average.length; i++) {
    c += average[i]
  }
  let nm = c / average.length
  return nm
}
let numb = [1, 2, 3, 4, 5]
let res = averageOfFunction(numb)
console.log(res)

//qst9

function unEqual (value1, value2) {
  if (value1 === value2 || value1 === value2) {
    return true
  } else {
    return false
  }
}

console.log(unEqual('9', 9))
console.log(unEqual(9, 9))

const key = new Object()
const key2 = new Object()
key.name = 'van'
key2.name = 'van'
console.log(unEqual(key, key2))
