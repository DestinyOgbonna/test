function gameArr(min, max){
  const enterUsername = prompt('Pls enter your userName');
 totalPoints = 0;
 
  let result = [];
  for(i = min; i <= max; i++)
    result.push(i);

  for(totalPoints >= 0; totalPoints ++;);
  
  const greeting = result[  
 Math.floor(Math.random() * result.length)
 ]
 const enterFirstNumber= prompt('Pls Number');
  switch(greeting){
      case 5:
      if(enterFirstNumber == 5){
console.log(`U have been awarded ${totalPoints} point(s) `)     
      };
      break;
    case 6:
      if(enterFirstNumber == 6){
console.log(`U have been awarded ${totalPoints} point(s) `)     
      };
      break;
    case 7:
     if(enterFirstNumber == 7){
console.log(`U have been awarded ${totalPoints} point(s) `)     
      };
      break;
    case 8:
     if(enterFirstNumber == 8){
console.log(`U have been awarded ${totalPoints} point(s) `)     
      };
    default:
      if(enterFirstNumber!= greeting){
       console.log (` E b things `);
      }
  }
   return greeting;
}
console.log(gameArr(5,8))