import readline from 'readline';
import CarRentalController from './controller/CarRentalController.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const carController = new CarRentalController();

rl.question('Please input number (seat): ', (input) => {
  const seatsNeeded = parseInt(input);
  carController.handleRequest(seatsNeeded);
  rl.close();
});
