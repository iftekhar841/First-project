// Q1. To print the following pattern
// 1
// 12
// 123
// 1234
// 12345

// let n= 5;
// let str = "";
// for(let i=1; i<=5; i++) {
//     for(let j=1; j<=i; j++) {
//         str+= j;   
//     }
//      str+="\n";
// }
// console.log(str);

// Ques :2 to print diamond patterns

//  const size =5;
//     let space = "";
//     for ( let i = 1; i <= size; i++ ) {
//     for ( let j = size; j > i; j-- ) {
//     diamond += " ";
//     }
//     for ( let k = 0; k < i; k++ ) {
//     diamond += "* ";
//     }
//     diamond += "\n";
//     }
//     for ( let i = 1; i <= size - 1; i++ ) {
//     for ( let j = 0; j < i; j++ ) {
//     diamond += " ";
//     }
//     for ( let k = (size - i); k > 0; k-- ) {
//     diamond += "* ";
//     }
//     diamond += "\n";
//     }
//     console.log(diamond);

// Ques :- 3 Reverse of the triangle;

// var n = 5;
// var str = ""
// for(let i=n; i>=0; i--) {
//     for(let j=1; j<=i; j++) {
//         str+= "*";
//     }
//     str+= "\n";
// }
// console.log(str);


// Ques :- 4 wap to print 3rd largest no in the array ?

// var a = [12,34,62,-71,2,3];
// var len = a.length;
// var f = a[0], s = -1000000000, t = -1000000000;

// for(let i = 1; i <len; i++) {
//     if(a[i]>f) {
//         t = s;
//         s = f;
//         f = a[i];
//     }
//     else if (a[i]>s) {
//         t = s;
//         s = a[i];
//     }
//     else if(a[i]>t) {
//         t = a[i]    
//     }
// }
// console.log("third largest no is", t);


// Ques :-5 wap to check prime no or not ? 

// var n = 2, count = 0;;
// for(let i=2; i<=n; i++) {
//     if(n%i==0) {
//         count++;
//     }

// }
// if(count == 2) {
//     console.log('pm');
// }
// else{
//     console.log('np',);
// }

// Ques:-6 wap to check no of even and no of odd given the positive no? 

// var n = 7;
// var e_count =0, o_count=0;
// for(let i=1; i<=n; i++) {
//     if(i%2 == 0) {
//         e_count++;
//     }
//     else{
//         o_count++
//     }
// }
// 

// console.log('the total even no is', e_count);
// console.log('the total odd no is', o_count);


// Ques :- 6 reverse traingle patterns

// var n = 5, space = 0,star = 5;
// var str = "";
// for(let i=0; i<n; i++) {
//     for(let j=0;j<space;j++) {
//         str+= " ";
//     }
//     for(let k=0;k<star; k++) {
//         str+= "*";
//     }
//     str+="\n"
//     space++;
//     star--;
// }
// console.log(str);


// Ques :-7 to print full tringle with different no 

// var arr = [2,3,4,1,0,5];
// var str = "";
// var max = -1;
// for(var i=0; i <arr.length; i++) {
//     // max = max(arr[i], max);

//     if(max<arr[i]) {
//         max = arr[i];
//     }
//     str += arr[i];
// }
// str += "\n";

// for(var i=0;i<max;i++) {
//     for(var j=0;j<arr.length;j++) {
//         if(arr[j]<=0) {
//             str += " ";
//         } else {

//             str += "*";
//         }
//         arr[j]--;
//     }
//     str += "\n";
// }
// console.log(str);


// Ques:-8  given the some random no in the array print the star according to no: 


// var arr = [3,4,1,0,7];
// var str = "";
// var max = -1;

// for(var i=0; i<arr.length;i++) {
//     if(arr[i]>max) {
//         max = arr[i];
//     }
//     str+= arr[i];
// }
// str+= '\n'
// for(var i=0; i<max; i++) {
//     for(var j=0; j<arr.length;j++) {
//         if(arr[j]<=0) {
//             str+= " ";
//         }
//         else{
//             str+= "*";
//         }
//         arr[j]--;
//     }
//     str+='\n';
// }
// console.log(str);

// Ques : 9 print opposite traingle star 

// var n = 4, space = 3, star =1;
// let str = "";
// for(var i=0; i<n; i++) {
//     for(var j=0; j<space; j++) {
//         str+= " ";
//     }
//     for(var k =0; k<star; k++) {
//         str+= "*";
//     }
//     str+= "\n"
//     star++;
//     space--;
// }
// console.log(str);


// Ques:- 10 to print full pyramid diamond start   

// var n = 4, space = 3, star =4,max =4;
// let str = "";
// for(var i=0; i<n; i++) {
//     for(var j=0; j<space; j++) {
//         str+= " ";
//     }
//     for(var j = star; j<max; j++) {
//         str+= "*";
//     }
//     for(var j=max; j>=star; j--){
//         str+="*";
//     }
//     if(i<3) {
//         str+= "\n"
//     }

//     star--;
//     space--;
// }
// console.log(str);
// n =4 , space =0, star = 4; 
// str= "";

// for(var i=0; i<n; i++) {
//     for(var j=0; j<space; j++) {
//         str+=" ";
//     }
//     for(var k = 0; k<star; k++) {
//          str+= "*";
//     }
//     for(var k=star; k>1; k--) {
//         str+="*";
//     }

//     str+="\n";
//     star--;
//     space++;
// }
// console.log(str);



// Ques:11 wap to print traingle with different no

// var n = 9, max_val = 1, start_val = 1 , space = 8;
// var str = "";
// var space = 8;
// var cur_val = 1;
// for(var i=0;i<9; i++) { 
//     for(var j=0;j<space;j++) {
//         str += " ";
//     }
//     for(var j=1;j<i+1;j++) {
//         str += j;
//     }
//     for(var j=i+1;j>=1;j--) {
//         str += j;
//     }
//     str += "\n";
//     cur_val++;
//     space--;
// }
// console.log(str);





// Ques: 12 Write a program to reverse the string?


// var chr= "HELLO WORLD";
// var str = "";

// var st = chr.split(" ");
// console.log(st);
// for(var i=st.length-1;i>=0;i--) {
//     str += st[i];
//     str += " ";
// }
// console.log(str);


// Ques:- 13  delete the second position element in the array. ?

// var a = [12,34,62,-71,2,3];
// var len = a.length;
// var f = a[0], s = -1000000000;

// for(let i = 1; i <len; i++) {
//     if(a[i]>f) {
//         s = f;
//         f = a[i];
//     }
//     else if (a[i]>s) {
//         s = a[i];
//     }
// }

// console.log("second largest no is", s);


// Ques:-14 Program to reverse a number and print its sum

// var a = [3,4,5,6,7];
// var sum = 0, str= "";

// for( var i=a.length-1; i>=0; i--) {
//     sum += a[i] ;      
// }
// console.log(sum);


//Ques:- 15 find the program of palindrom number

// var n = 151;
// var temp = n, sum =0, rem = 0;

// while(n>0) {
//     rem = n % 10;
//     console.log('rem,', rem);
//     sum = sum*10+rem;
//     n = n/10;
// }
// console.log(sum);
// if(temp == sum) {
//     console.log("no is palindrome");
// }
// else {
//     console.log(" no  is not palindrome");
// }



//Ques:- 16 check if string is substring of other string using inbuilt functions ?


// var s1 = 'for';
// var s2 = 'geeksforgeeks';

// if(s2.includes(s1)) {
//     console.log("s1 is presert is s2");
// } else {
//     console.log("s1 is not present in s2");
// }


//Ques:- 17 check if string is substring of other string without using inbuilt functions ?

// var s1 = 'for';
// var s2 = 'geeksforgeeks';
// var found = false;
// for(let i=0;i<s2.length;i++) {
//     if(s1[0]==s2[i]) {
//         var sub = s2.substr(i, s1.length);
//         if(sub==s1) {
//             found = true;
//             break;
//         }
//     }
// }
// if(found) {
//     console.log("yes", s1, "is present in ", s2);
// } else {
//     console.log('no');
// }


//Ques:- 17 check if string is substring of other string and 
// only matched firs and last character ?


// var s1 = 'far';
// var s2 = 'geeksforgeeks';
// var found = false;

// for(let i=0;i<s2.length;i++) {
//     if(s1[0]==s2[i] && s1[s1.length-1]==s2[i+s1.length-1]) {
//         found = true;
//         break;
//     }
// }

// if(found) {
//     console.log("yes", s1, "is present in ", s2);
// } else {
//     console.log('no');
// }


function josephus(n, k) {
        if (n == 1) 
                return 1;
        else 
                return (josephus(n - 1,k) + (k - 1)) % (n + 1);
       
}
let n = 8;
let k = 2;
console.log("the chosen place of josephus:" , josephus(n, k));
