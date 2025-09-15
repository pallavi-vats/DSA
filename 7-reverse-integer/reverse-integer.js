/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev=0
    let xcopy=x;
    let n=Math.abs(x);// negative positive convertion
    while(n>0){
        let rem=n%10;
        rev=(10*rev)+rem;
        n=Math.floor(n/10);
    }
    let limit=Math.pow(2,31);//if outside this range than return 0
    if(rev<-limit||rev>limit)
    return 0;
    return(xcopy<0)?-rev:rev;//ternery operator(if xcopy<0 than rturn negative number else positive )
    
};