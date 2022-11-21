function superbowlWin (record) {
  const found = record.find(obj => obj.result === "W")
  console.log(found);
  if (found){
    return found.year
  }
}

//const found = array1.find(element => element > 10);