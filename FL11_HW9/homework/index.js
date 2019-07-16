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

let executeforEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

let mapArray = (arr, callback) => {
  let newArr = [];
  executeforEach(arr, function (el) {
    newArr.push(callback(el));
  })
  return newArr;
}

let filterArray = (arr, callback) => {
  let newArr = [];
  executeforEach(arr, function (el) {
    if (callback(el)) {
      newArr.push(el)
    }
  })
  return newArr;

}

let showFormattedDate = date => {
  let options = { year: 'numeric', month: 'short', day: 'numeric' };
  return `Date: ${date.toLocaleDateString('en-US', options)}`.replace(',', '');
}

let canConvertToDate = date => {
  return !isNaN(Date.parse(date));
}

let daysBetween = (date, date2) => {
  let a = date.getTime()
  let b = date2.getTime()
  let divider = 86400000;
  let days = a > b ? (a - b) / divider : (b - a) / divider;
  return days;
}

let getAmountOfAdultPeople = persons => {
  let adult = 6574;
  let amount = 0;
  filterArray(persons, function (el) {
    if (daysBetween(new Date(el.birthday), new Date('2019-07-16T00:00:00')) > adult) {
      amount += 1
    }
  })
  return amount;

}

let keys = obj => {
  let arr = []
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      arr.push(prop);
    }
  }
  return arr;
}

let values = obj => {
  let arr = []
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      arr.push(obj[prop]);
    }
  }
  return arr;
}
