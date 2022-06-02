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