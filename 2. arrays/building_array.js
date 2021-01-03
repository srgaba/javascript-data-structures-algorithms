class myArr {
    constructor(){
      this.length = 0;
      this.data = {};
    }
  
    push(item){
      this.data[this.length] = item;
      this.length++;
      return item;
    }
  
    pop(item){
      const lastItem = this.data[this.length];
      delete this.data[this.length - 1];
      return lastItem;
    }
  
    delete(index){
      const item = this.data[index];
      for(let i = index; i < this.length; i++){
        this.data[i] = this.data[i+1];
      }
      delete this.data[this.length - 1];
      return item;
    }
  
    unshift(item){
      this.data[this.length] = null;
      this.length++;
  
      for(let i = this.length - 1; i > 0; i--){
        this.data[i] = this.data[i-1];
      }
  
      this.data[0] = item;
    }
  }
  
  const newArr = new myArr();
  
  newArr.push('foo');
  newArr.push('bad');
  newArr.push('good');
  newArr.push('excelent');
  newArr.unshift('work');
  
  console.log(newArr);