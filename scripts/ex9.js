// myArray = [10, 20, 30];
// console.log(myArray);
// myArray[2] = 99;
// console.log(myArray);


// function getLastValue(array){
//   let lastIndex = array.length-1;
//  return array[lastIndex];
// }
// console.log(getLastValue([1,20,22,24,5]));
// console.log(getLastValue(['hi','hello','good']));

// function arraySwap(array){
//   let lastIndex = array.length-1
//   let firstValue = array[0];
//   let lastValue = array[lastIndex];
//   array[0] = lastValue;
//   array[lastIndex] = firstValue;
//   return array;
// }
// console.log(arraySwap([1,20,22,24,5]));
// console.log(arraySwap(['hi','hello','good']));

// for(let i=0;i<=10;i+=2){
//   console.log(i);
// }

// for(let i=5;i>=0;i--){
//   console.log(i);
// }
// let i=0;
// while(i<=10){
//   console.log(i);
//   i+=2;
// }

// let i=5;
// while(i>=0){
//   console.log(i);
//   i--;
// }

// array = [1,2,3];
// let result = [];
// for(let i=0;i<array.length;i++){
//  result.push(array[i]+1);
// }
// console.log(result);


// function addOne(array){
//   let result = [];
//   for(let i=0;i<array.length;i++){
//     result.push(array[i]+1);
//   }
//  console.log(result);
// }
// addOne([1,2,3]);
// addOne([-2,-1,0,99]);

// function addNum(array,num){
//   let result = [];
//   for(let i=0;i<array.length;i++){
//     result.push(array[i]+num);
//   }
//   console.log(result);
// }
// addNum([1,2,3],2);
// addNum([1,2,3],3);
// addNum([-2,-1,0,99],2);

// function addArrays(array1,array2){
//   let result = [];
//   for(let i=0;i<array1.length;i++){
//     result.push(array1[i]+array2[i]);
//   }
//   console.log(result);
// }
// addArrays([1,1,2],[1,1,3]);
// addArrays([1,2,3],[4,5,6]);


// function countPositive(nums){
//   let num = 0;
//   for(let i=0;i<nums.length;i++){
//     if(nums[i]>0){
//       num+=1;
//     }
//   }
//   console.log(num);
// }
// countPositive([1,-3,5]);
// countPositive([-2,3,-5,7,10]);

// function minMax(nums){
//   let result = {};
//   let min = null;
//   let max = null;
//   for(let i=0;i<nums.length;i++){
//     if(nums[i]<min){
//       min = nums[i];
//     }
//   if(nums[i]>max){
//     max = nums[i];
//    }
//    if(min === null || nums[i]<min){
//     min = nums[i];
//    }
//    if(max === null || nums[i>max]){
//     max = nums[i];
//    }
//   }
  
//   result = `min:${min}, max: ${max}`
//   console.log(result);
// }
// minMax([1,-3,5]);
// minMax([-2,3,-5,7,10]);
// minMax([]);
// minMax([3]);

// function countWords(words){
//   let result ={};
//   for(let i=0;i<words.length;i++){
//     let word = words[i];

//     if(!result[word]){
//       result[word]=1;
//     }
//     else{
//       result[word]++;
//     }
//   }
//   return result;
// }
// console.log(countWords(['apple','grape','apple','apple']));


function findIndex(array,word){
let index = -1;
for(let i=0;i<array.length;i++){
  if(array[i] === word){
    index = i;
  }
}
return index;
}
// findIndex(['hello','name','search','good','search'],'search');
// findIndex(['not','found'],'name');

function unique(array){
  let result = [];
  for(let i=0; i<array.length; i++){
    const word = array[i];
    if(findIndex(result, word) === -1){
      result.push(word);
    }
  }
  return result;
}
console.log(unique(['green','red','blue','red']));
console.log(unique(['red','green','red','green']));

// function removeEgg(foods){
//   let result =[];
//   let eggsRemoved = 0;
//   let slicedFood = foods.slice();
//   for(let i=0; i<slicedFood.reverse().length; i++){
//     let word = foods[i];
//     if(word === 'egg' && eggsRemoved<2){
//       eggsRemoved++;
//       continue
//     }
//     result.push(word);
//   }
//   return result.reverse();
// }
// // removeEgg(['egg','apple','egg','egg','ham']);
// const foods = ['egg','apple','egg','egg','ham'];
// console.log(removeEgg(foods));
// console.log(foods);


// for(let i=1; i<=20; i++){
//   if(i%3===0 && i%5===0){
//     console.log(i,'FizzBuzz');
//   }
//   else if(i%3 === 0){
//   console.log(i,'Fizz');
//   }
//   else if(i%5===0){
//     console.log(i,'Buzz');
//   }
  
//   else{
//     console.log(i);
//   }
// }