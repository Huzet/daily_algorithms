// Multiples of Three – but Not All
// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6

for(let i=-300;i<=0;i+=3){
    if(i == -3 | i == -6){
        continue;
    }
    else{
        console.log(i);
    }
}