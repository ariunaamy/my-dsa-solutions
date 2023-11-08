let nums = [1,2,5,2,3]; target = 2; 
// Output: [1,2]; 


var targetIndices = function(nums, target) {
    let countBeforeTarget = 0;
    let countTargetValues = 0; 

    for (let i=0; i<nums.length; i++){
        if(nums[i] < target)countBeforeTarget++; 
        else if(nums[i] === target)  countTargetValues++;
    }

    let result = [];
    let currentTargetIndex = countBeforeTarget; 

    for (let i=0; i<countTargetValues; i++){
        result.push(currentTargetIndex);
        currentTargetIndex++; 
    }

    return result;
}


console.log(targetIndices(nums, target));