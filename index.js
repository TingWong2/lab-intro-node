class SortedList {
  constructor(items,length) {
    this.item = [];
    this.length = 0;
  }

  add(item) {
    this.length = this.item.push(item);
    this.item.sort((a,b) => a - b));
  }
   

  get(pos) {
    if (pos < 0 || pos >= this.length) {
      throw outOfBounds();
    }
    return this.items[pos]
  }

  max() {
    if (!this.length) {
    throw new EmptySortedList()
  }
  return this.item[this.length-1];

  }

  min() {
    if (!this.length) {
      throw new EmptySortedList()
    }
    return this.item[0];
  }

  sum() {
    return this.item.reduce((acc, v) => acc + v , 0)
  }

  avg() {
    if (!this.length) {
      throw new EmptySortedList
    }
    return this.sum()/ this.length
  }


module.exports = SortedList;
