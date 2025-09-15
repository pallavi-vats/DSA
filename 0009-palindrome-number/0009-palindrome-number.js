/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){
        return false;
    }
   let rev=0;
   let final = x;
   while(x>0){
    let rem=x%10;
    rev=(10*rev)+rem;
    x=Math.floor(x/10);
   }
  
    return rev==final;
};
