function takeANumber(lineOfPeople, newName){
  lineOfPeople.push(`${newName}`);
  return(`Welcome, ${newName}. You are number ${lineOfPeople.length} in line.`);
}

function nowServing(lineOfPeople){
  let i = 0;
  while (i < lineOfPeople.length){
    i++;
  }
  if (lineOfPeople.length === 0){
    return "There is nobody waiting to be served!"
  }else {
    return `Currently serving ${lineOfPeople.shift()}.`;
  }
}