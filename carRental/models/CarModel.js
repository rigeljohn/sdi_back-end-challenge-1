class CarModel {
  constructor() {
    this.carTypes = [
      { type: 'S', capacity: 5, cost: 5000 },
      { type: 'M', capacity: 10, cost: 8000 },
      { type: 'L', capacity: 15, cost: 12000 }
    ];
  }

  
  getOptimizedCost(seatsNeeded) {

    this.carTypes.sort((a, b) => (a.cost / a.capacity) - (b.cost / b.capacity));

    const dp = Array(seatsNeeded + 1).fill(Infinity);
    const chosenCars = Array(seatsNeeded + 1).fill(null);
    dp[0] = 0;

    for (let i = 1; i <= seatsNeeded; i++) {
      for (const car of this.carTypes) {
        if (i >= car.capacity && dp[i - car.capacity] + car.cost < dp[i]) {
          dp[i] = dp[i - car.capacity] + car.cost;
          chosenCars[i] = car;
        }
      }
    }

    const result = [];
    let i = seatsNeeded;
    while (i > 0) {
      const car = chosenCars[i];
      result.push(car.type);
      i -= car.capacity;
    }

    const carCounts = this.carTypes.reduce((acc, car) => {
      acc[car.type] = result.filter(c => c === car.type).length;
      return acc;
    }, {});

    const lCarCost = this.carTypes.find(car => car.type === 'L').cost;
    const mCarCost = this.carTypes.find(car => car.type === 'M').cost;
    const lCarsNeeded = Math.ceil(seatsNeeded / 15);
    const mCarsNeeded = Math.ceil(seatsNeeded / 10);

    if (lCarCost * lCarsNeeded <= mCarCost * mCarsNeeded) {
      carCounts['L'] = lCarsNeeded;
      carCounts['M'] = 0;
    }

    return {
      carCounts,
      totalCost: dp[seatsNeeded]
    };
  }
}

export default CarModel;
