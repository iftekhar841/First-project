// Q:1 wap to print substring to others 

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


// Ques: 2 WAP to print a string without any extra spaces without using any functions.

// For eg: he__llo w____orl_d should be printed as he_llo_w_orl_d

// var chr = "h__e__l lo w____orl_d";
// var str ="";
// for(var i=0; i<chr.length; i++) {
//     if(chr[i] == "_" && chr[i] == chr[i-1]) {
//         continue;
//     }
//      if(chr[i] == " ") {
//          str += "_";
//      }else {
//          str += chr[i]
//      }
// }
// console.log(str);


// Ques :-3 wap to print factioral no 

// var n = 5;
// var i,fact=1;

// if(n<0) {
//     console.log("inter the positive no");
//  } else {
//      for(i=1;i<=n; i++) {
//          fact = fact*i;
//      }
//  }
//  console.log(fact);


// function fact (n) {
//     if(n == 0 || n==1) {
//         return 1;
//     } else {
//         return n*fact(n-1);
//     }
// }
// let n =5;
// let ans = fact(n);
// console.log(ans);

// Ques :4  wap to print fibonacci series ;

// var n1=0,n2 = 1, next;
// var num =5;
// for(var i=1; i<=num; i++) {
//     console.log(n1);
//     next = n1+n2;
//     n1 = n2;
//     n2 = next
// }
// console.log(n1);

// Ques : 5 wap to print fabonacci series using recursion;

// function fab(n) {
//     if(n<2) {
//         return n;
//     }
//     else {
//         return fab(n-1) + fab(n-2);
//     }
// }
// let n =5;
// if(n<=0) {
//     console.log("posotive no");
// }
// else {
//     for(var i=0; i<n; i++) {
//         console.log(fab(i));
//     }
// }

// Ques : 6 wap to remove extra spaces.

// var str = " Hello Geeks . welcome  to .  "
// out =Hello Geeks.welcome to."

// var str1 = "";

// for(var i =0; i<str.length; i++) {

//     if(i==0 && str[i]==" ") {
//         continue;
//     }
//     if((str[i]==" " && str[i+1]==" ") || (str[i]==" " && str[i+1]==".")) {
//         continue;
//     }

//     if(str[i]=="." && str[i+1]==" ") {
//         str1 += ".";
//         i++;
//     } else {
//         str1 += str[i];
//     }

// }
// console.log(str1);



// Ques :- 7 wap to print hollow triangle pattern;


// var start = 1;
// var space = 5;
// var out = '';
// for(let i=0;i<6;i++) {
//     for(let j=0;j<space;j++) {
//         out += " ";
//     }

//     for(let j=1;j<i+1;j++) {
//         if(i==5) {
//             out += " "+j;
//         } else {
//             if(j>1 && j<start-1) {
//                 out += "  ";
//             } else {
//                 out += " " + j;
//             }
//         }
//     }
//     out += "\n";
//     space--;
//     start++;
// }
// console.log(out);


// Ques :- 8 wap to print square hollow patterns;
// let  n =5;
// let str = "";
// for(let i =1; i<=n; i++) {
//     for(let j = 1; j<=n; j++) {
//         //    if(j==1 || j==5) {
//             if(i == 1|| j ==1 || i ==n || j ==n ) {
//                str += j + "  ";
//             } else {
//                 str += "   ";
//             }
//         }
//     str += "\n";
// }
// console.log(str);


// Ques :- 9 wap to print triangle hollow patterns 

// let n =5;
// let str = "";

// for(let i =1; i<=n; i++) {
//     for(let j =1; j<=i; j++) {
//         if( i == n || j == i || j == 1)  {
//          str += j + " ";
//     } else {
//         str += "  ";
//     }
// }
//     str += "\n";
// }
// console.log(str);

const arr  = [1,2,3,4,5];
console.log(arr);