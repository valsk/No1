'use strict';

function thousands_separators(num) {
 var str=num.toString();
 var newStr = "";
var count = 0;
 
if(str.indexOf(".")==-1){
   for(var i=str.length-1;i>=0;i--){
 if(count % 3 == 0 && count != 0){
   newStr = str.charAt(i) + "," + newStr;
 }else{
   newStr = str.charAt(i) + newStr;
 }
 count++;
   }
   str = newStr + ".00"; //自动补小数点后两位
   console.log(str)
}
else
{
   for(var i = str.indexOf(".")-1;i>=0;i--){
 if(count % 3 == 0 && count != 0){
   newStr = str.charAt(i) + "," + newStr;
 }else{
   newStr = str.charAt(i) + newStr; //逐个字符相接起来
 }
 count++;
   }
   str = newStr + (str + "00").substr((str + "00").indexOf("."),3);
   console.log(str)
 } 
}
formatNum('100'); 
formatNum('1000');  
formatNum('100000');  
formatNum('1000.0');
formatNUm('100.2342');
module.exports = thousands_separators;
