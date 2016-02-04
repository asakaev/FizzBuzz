
/**
 * @param {number} first
 * @param {number} last
 * @return {Array.<number>}
 */
function generateArray(first, last) {

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

// TODO: find best way to check if list is empty
function isArrayEmpty(list) {
  return list.length === 0;
}


/**
 * @param  {Array.<number>} inputList
 * @return {Array.<string>}
 */
function fizzBuzz(inputList) {

  /**
   * @param {number} dividend
   * @param {number} divisor
   * @return {boolean}
   */
  function isModEqualZero(dividend, divisor) {
    return (dividend % divisor) === 0;
  }


  // TODO: jerk with list pop/push/shift to get first element
  function getFirstArrayElement(list) {
    return list[0];
  }


  /**
   * @param {Array.<number>} inputList
   * @param {Array.<string>} resultList
   * @return {Array.<string>}
   */
  function fizzBuzzRecursion(inputList, resultList) {

    if (isArrayEmpty(inputList)) {
      return resultList;
    }

    if (isModEqualZero(getFirstArrayElement(inputList), 3) &&
        isModEqualZero(getFirstArrayElement(inputList), 5)) {

      resultList.push('FizzBuzz');
      inputList.shift();
      return fizzBuzzRecursion(inputList, resultList);
    }

    if (isModEqualZero(getFirstArrayElement(inputList), 3)) {
      resultList.push('Fizz');
      inputList.shift();
      return fizzBuzzRecursion(inputList, resultList);
    }

    if (isModEqualZero(getFirstArrayElement(inputList), 5)) {
      resultList.push('Buzz');
      inputList.shift();
      return fizzBuzzRecursion(inputList, resultList);
    }

    resultList.push(String(inputList.shift()));
    return fizzBuzzRecursion(inputList, resultList);
  }

  return fizzBuzzRecursion(inputList, []);
}


/**
 * @param {Array.<string>} array
 * @return {number}
 */
function printList(array) {
  if (isArrayEmpty(array)) {
    return 0;
  }

  console.log(array.shift());
  return printList(array);
}


printList(fizzBuzz(generateArray(1, 100)));
