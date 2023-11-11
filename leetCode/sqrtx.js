// this solution works but takes too much time; 

const roundDown = (num) => {
    if (num % 1 === 0) {
    return num;
  }
  let integerCount = 0;
    while (num > 0) {
      num--;          
      integerCount++;  
    } 
    while (num )
  return integerCount;
 }

var mySqrt = function(x) {
if(x<2) return x;
let result = 0; 

let start = 1;
let end = x/2; 

while (start <= end){
  let mid = roundDown((start+end)/2); 
  if(mid*mid === x){ 
    return mid
  }; 
  if(mid*mid < x){
    start = mid + 1; 
    result = mid;
  } else {
     end = mid - 1; 
  }
}
 return result;
};