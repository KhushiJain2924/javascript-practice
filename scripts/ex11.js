let multiply = (a,b) => a*b;

console.log(multiply(2,3));
console.log(multiply(7,10));

function countPositive(nums){
  let count =0;
  nums.forEach((value)=>{
    if(value>0){
       count++;
    }
  });
  return count;
}

console.log(countPositive([1,-3,5]));
console.log(countPositive([-2,3,-5,7,10]));

function addNum(array,num){
  return array.map(value => value + num);
}
console.log(addNum([1,2,3],2));
console.log(addNum([-2,-1,0,99],2));

function removeEgg(foods){
  return foods.filter(value=> value!='egg');
}
console.log(removeEgg(['egg','apple','egg','egg','ham']));

function removeEgg2(foods){
  let removeFirst = 0;
  return foods.filter((value)=>{
    if(value === 'egg' && removeFirst<2){
      removeFirst++;
      return false;
    }
    return true;
  });
}
console.log(removeEgg2(['egg','apple','egg','egg','ham']))
