class SortedList {
  constructor() {
    this.items = [];
    this.length = 0
  }
  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => { return a - b });
    this.length += this.items.length
  }
  get(pos) {
    if (pos > this.items.length) {
      throw new Error('OutOfBounds')
    } else {
      return this.items[pos]
    }
  }
  max() {
    if (this.items.length == 0) {
      throw new Error('EmptySortedList');
    }
    let maxValue = 0
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] > maxValue) {
        maxValue = this.items[i]
      }
    } return maxValue
  }
  min() {
    if (this.items.length == 0) {
      throw new Error('EmptySortedList');
    }
    let minValue = 10
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] < minValue) {
        minValue = this.items[i]
      }
    } return minValue
  }
  sum() {
    if (this.items.length == 0) {
      return 0
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return this.items.reduce(reducer)
  }
  avg() {
    if (this.items.length == 0) {
      throw new Error('EmptySortedList');
    }
    // const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let average = this.sum() / 3
    return average
  }
}
module.exports = SortedList;