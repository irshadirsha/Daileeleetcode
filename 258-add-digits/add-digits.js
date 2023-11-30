/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
     
      
    let str=`${num}`
    let ar=[...str] ;

    let sum=0 ;
    let i=0

while (i<ar.length) {   
        sum +=parseInt(ar[i]) ;
        if(sum>9 && i==ar.length-1){
            str=`${sum}`;
            ar=[...str];
            sum=0;
           i=0
        }else{

            i++
        }
    }
    return sum
}; 