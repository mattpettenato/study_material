// Two Sum

function twoNumberSum(array, targetSum) {
  for (let i=0; i < array.length - 1; i++) {
    const firstNum = array[i];
    for (let j=i+1; j<array.length; j++) {
      const secondNum = array[j];
      if (firstNum + secondNum === targetSum) {
        return [firstNum, secondNum];
      }
    }
  }
  return []
}

exports.twoNumberSum = twoNumberSum;

function twoNumberSum(array, targetSum) {
  const nums = {};
  for (const num of array) {
    const potentialMatch = targetSum - num;
    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true;
    }
  }
  return [];
}


exports.twoNumberSum = twoNumberSum;

// 3sum

function threeNumberSum(array, targetSum){
  array.sort((a, b) => a - b);
  const triplets = [];
  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      const currentSum = array[i] + array[left] + array[right];
      if (currentSum === targetSum) {
        triplets.push([array[i], array[left], array[right]])
        left++
        right--
      } else if (currentSum < targetSum) {
        left++
      } else if (currentSum > targetSum) {
        right--;
      }
    }
  }
  return triplets;
}
exports.threeNumberSum = threeNumberSum

// depth first search

// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name);
    for (const child of this.children) {
      child.depthFirstSearch(array)
    }
    return array;
  }
}

// Do not edit the line below.
exports.Node = Node;

// nth fibonacci

function getNthFib(n) {
  if (n === 2) {
    return 1;
  } else if (n === 1) {
    return 0;
  } else {
    return getNthFib(n - 1) + getNthFib(n-2);
  }
}

exports.getNthFib = getNthFib;

// Sorted Squared Array

function sortedSquaredArray(array) {
  const sortedSquares = new Array(array.length).fill(0);

  for (let idx = 0; idx < array.length; idx++) {
    const value = array[idx]
    sortedSquares[idx] = value * value;
  }

  sortedSquares.sort((a, b) => a - b);
  return sortedSquares;
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
