// to add or merge string 
// where first value is abc
// second value is pqr 



// // firstmethod
// let firstname="Peppa";
// let secondname="Pig";

// let fullname=firstname.concat(secondname);

// console.log(fullname);


//apbqcr

// second way
let str1="abc";
let str2="pqr";

function mergedstringsrandom(str1,str2)
{
    let str3='';
    let mlength=Math.max(str1.length,str2.length);
    for(let i=0;i<mlength;i++)
    {
        if(i<str1.length){
            str3+=str1[i];
        }
        if(i<str2.length)
        {
            str3+=str2[i];
        }
    }
    return str3;
}

console.log(mergedstringsrandom(str1,str2));
