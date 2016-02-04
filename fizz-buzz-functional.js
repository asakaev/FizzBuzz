
/**
 * @param {*} val
 * @param {string} type
 */
function checkType(val, type) {
  if (!(typeof val === type)) {
    throw new Error('Wrong type');
  }
}


/**
 * @param {number} first
 * @param {number} last
 * @return {Array.<number>}
 */
function generateArray(first, last) {
  checkType(first, 'number');
  checkType(last, 'number');

  /**
   * @param {number} head
   * @param {number} tail
   * @param {Array.<number>} list
   * @return {Array.<number>}
   */
  function recursion(head, tail, list) {
    if (head <= tail) {
      list.push(head);
      return recursion(++head, tail, list);
    } else {
      return list;
    }
  }

  return recursion(first, last, []);
}


/**
 * @param  {Array.{number}} inputList
 * @return {Array.{string}}
 */
function fizzBuzz(inputList) {
  console.log('x');


  function isModEqualZero(dividend, divisor) {
    console.log('divident: ' + dividend);
    console.log('divisor: ' + divisor);

    if (divisor === 0) {
      return false;
    }

    console.log('res: ' + ((dividend % divisor) === 0));
    return (dividend % divisor) === 0;
  }

  // TODO: find best way to check if list is empty
  function isArrayEmpty(list) {
    return list.length === 0;
  }

  // TODO: jerk with list pop/push/shift to get first element
  function getFirstArrayElement(list) {
    return list[0];
  }


  function recursion1(arrNumbers, resultList) {
    console.log('arrNumbers: ', arrNumbers);
    console.log('resultList: ', resultList);



    if (isArrayEmpty(arrNumbers)) {
      return resultList;
    }

    console.log('next');
    console.log('item1a: ' + getFirstArrayElement(arrNumbers));
    console.log('item1b: ' + getFirstArrayElement(arrNumbers));

    if (isModEqualZero(getFirstArrayElement(arrNumbers), 3) && isModEqualZero(getFirstArrayElement(arrNumbers), 5)) {

      console.log('1st');

      resultList.push('FizzBuzz');
      arrNumbers.shift();
      return recursion1(arrNumbers, resultList);
    }

    if (isModEqualZero(getFirstArrayElement(arrNumbers), 3)) {
      console.log('2st');

      resultList.push('Fizz');
      return recursion1(arrNumbers, resultList);
    }

    if (isModEqualZero(getFirstArrayElement(arrNumbers), 5)) {
      console.log('3st');
      resultList.push('Buzz');
      return recursion1(arrNumbers, resultList);
    }

    console.log('BEFORE N: ', arrNumbers);
    console.log('BEFORE S:', resultList);

    resultList.push(arrNumbers.shift());

    console.log('AFTER N: ', arrNumbers);
    console.log('AFTER S:', resultList);
    process.exit(1);

    return recursion1(arrNumbers, resultList);
  }

  return recursion1(inputList, []);
}


/**
 * @param  {Array.{string}} array
 */
function printArray(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

// printArray(fizzBuzz(getArray(1, 100)));
//
var aa = generateArray(1, 10);
console.log(aa);

var bb = fizzBuzz(aa);
console.log(bb);