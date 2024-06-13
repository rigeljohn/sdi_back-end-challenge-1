class CarView {
  static formatResult(carCounts, totalCost) {
    let result = '';
    for (const [type, count] of Object.entries(carCounts)) {
      if (count > 0) {
        result += `${type} x ${count}\n`;
      }
    }
    result += `Total = PHP ${totalCost}`;
    return result;
  }

  static displayResult(carCounts, totalCost) {
    console.log(this.formatResult(carCounts, totalCost));
  }
}

export default CarView;
