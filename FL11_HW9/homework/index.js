let numTwo = 2;
let numThree = 3;
let numFive = 5;
let numEight = 8;


let getNumbers = string => {
  let arr = string.split('')
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      arr2.push(parseInt(arr[i]))
    }
  }
  return arr2;
}

getNumbers('n1um3ber95')

function findTypes() {
  let obj = {};

  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] in obj) {
      obj[typeof arguments[i]]++;
    } else {
      obj[typeof arguments[i]] = 1;
    }
  }
  return obj;
}

findTypes(null, numFive, 'hello')

let executeforEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

executeforEach([1, numTwo, numThree], function (el) {
  console.log(el)
});

let mapArray = (arr, callback) => {
  let newArr = [];
  executeforEach(arr, function (el) {
    newArr.push(callback(el));
  })
  return newArr;
}

mapArray([numTwo, numFive, numEight], function (el) {
  return el + numThree;
})

let filterArray = (arr, callback) => {
  let newArr = [];
  executeforEach(arr, function (el) {
    if (callback(el)) {
      newArr.push(el)
    }
  })
  return newArr;

}

filterArray([numTwo, numFive, numEight], function (el) {
  return el > numThree;
})

let showFormattedDate = (date) => {
  let options = { year: 'numeric', month: 'short', day: 'numeric' };
  return `Date: ${date.toLocaleDateString('en-US', options)}`.replace(',', '');
}

showFormattedDate(new Date('2019-01-27T01:10:00'))

let canConvertToDate = (date) => {
  return date instanceof Date && !isNaN(date);
}

canConvertToDate('2016-13-18T00:00:00')
canConvertToDate('2016-03-18T00:00:00')

let daysBetween = (date, date2) => {
  let a = date.getTime()
  let b = date2.getTime()
  let divider = 86400000;
  let days = a > b ? (a - b) / divider : (b - a) / divider;
  return days;
}

daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'))

let getAmountOfAdultPeople = persons => {
  let divider = 6574;
  let amount = 0;
  filterArray(persons, function (el) {
    if (daysBetween(new Date(el.birthday), new Date('2019-07-16T00:00:00')) > divider) {
      amount += 1
    }
  })
  return amount;

}

let data = [
  {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    'birthday': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    'birthday': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    'birthday': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    'birthday': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
  }
]

getAmountOfAdultPeople(data)

let keys = obj => {
  let arr = []
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      arr.push(prop);
    }
  }
  return arr;
}

keys({ keyOne: 1, keyTwo: 2, keyThree: 3 })

let values = obj => {
  let arr = []
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      arr.push(obj[prop]);
    }
  }
  return arr;
}


values({ keyOne: 1, keyTwo: 2, keyThree: 3 })


