function reverse(str){
    if(!str || str.length < 2 || typeof str !== 'string'){
      return 'ho no';
    }
  
    const reversed = [];
    for(let i = str.length - 1; i >= 0; i--){
      reversed.push(str[i]);
    }
    return reversed.toString();
}
  
reverse('Gabriel');