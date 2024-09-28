// To get the nearst number in context to zero
let arrs=[-3,-2,-4,4,6,8];
let closest=arrs[0];
//0--->1
//0--->-3
function getsnumber(arrs)
{
  for(let i=1;i<arrs.length;i++)
  {
    if
    (
    Math.abs(arrs[i])<Math.abs(closest)||
    (Math.abs(arrs[i])===Math.abs(closest) && arrs[i]>closest)
    )
{
 closest=arrs[i];
}

}
return closest;
}
console.log(getsnumber(arrs));