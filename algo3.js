// convert numbers into roman values

function convertroman(num)
{
    const romannumbers=[
        {value:1000,symbol:"M"},
        {value:500,symbol:"D"},
        {value:100,symbol:"C"},
        {value:50,symbol:"L"},
        {value:5,symbol:"V"},
        {value:1,symbol:"I"}
    ];

let rs="";
for(let i=0;i<romannumbers.length;i++)
{
    while(num>=romannumbers[i].value)
        {
            rs+=romannumbers[i].symbol;
            num-=romannumbers[i].value;
        }
}
return rs;
}


console.log(convertroman(150));