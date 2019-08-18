class Boat {
  color: string = 'red';

  get formattedcolor(): string {
    return `this boats color is ${this.color}`;
  }

  @logError
  pilot(): void {
    throw new Error();
    console.log('swish');
  }
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
  const method = desc.value;

  desc.value = function() {
    try {
      method();
    } catch {
      console.log('Oops, boat was sunk');
    }
  };
}

new Boat().pilot();
