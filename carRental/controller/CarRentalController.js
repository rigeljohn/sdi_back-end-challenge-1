import { CarModel } from '../models/index.js';
import { CarView } from '../views/index.js';

class CarRentalController {
  constructor() {
    this.carModel = new CarModel();
  }

  handleRequest(seatsNeeded) {
    const { carCounts, totalCost } = this.carModel.getOptimizedCost(seatsNeeded);
    CarView.displayResult(carCounts, totalCost);
  }
}

export default CarRentalController;