const number=prompt("print a number");
const output="";
is_prime=false;
for(let i=2;i<number;i++){
    is_prime=false;
  for( let j=2;j<i;j++){
if(i%j===0)
is_prime=true;
break;
    }
if(is_prime){
    output+=$[j]
}
}

console.log(output);
