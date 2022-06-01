export class CounterService {
  toActiveCounter = 0;
  toInactiveCounter = 0;

  countToActiveClick() {
    this.toActiveCounter++;
    console.log('Inactive to Active User Counter: ' + this.toActiveCounter);
  }

  countToInactiveClick() {
    this.toInactiveCounter++;
    console.log('Active to Inactive User Counter: ' + this.toInactiveCounter);
  }
}
