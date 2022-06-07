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