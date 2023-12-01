// qst1

function isEven(num) {
  if (num % 2 === 0) {
    return 'even'
  }
  return 'odd'
}
console.log(isEven(4))
console.log(isEven(9))

// qst2

function countB (str) {
  const count = 0;
  for (const i = 0; i < str.length; i++) {
    if (str[i] >= 'A' && str[i] <= 'Z') {
      count++
    }
  }
  return count;
}

console.log(countB('Hello w'))
console.log(countB('Hello world Rabase'))
console.log(countB('JACK'))

// qst3

function countChar (num, carl) {
  const count = 0;
  for (const i = 0; i < num.length; i++) {
    if (num[i] == carl) {
      count++
    }
  }
  return count;
}
console.log(countChar('nuM', 'M'))

// qst4

function range (start, end) {
  const a = []
  for (const i = start; i <= end; i++) {
    a.push(i)
  }
  return a
}
const result = range(1, 5)
console.log(result)

function stepRange (start, end, two) {
  const a = []
  for (const i = start; i < end; i += two) {

    a.push(i)
  }
  return a
}
const resul = stepRange(1, 10, 2)
console.log(resul)

// qst8

function sumOfFunction (sum) {
  const b = 0
  for (const i = 0; i < sum.length; i++) {
    b += sum[i]
  }
  return b
}

const number = [1, 2, 3, 4, 5]
const resu = sumOfFunction (number)
console.log(resu)

function averageOfFunction (average) {
  const c = 0
  for (const i = 0; i < average.length; i++) {
    c += average[i]
  }
  const nm = c / average.length
  return nm
}
const numb = [1, 2, 3, 4, 5]
const res = averageOfFunction(numb)
console.log(res)

// qst9

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
