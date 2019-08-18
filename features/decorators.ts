class Boat {
  @testDecorator
  color: string = 'red';

  get formattedcolor(): string {
    return `this boats color is ${this.color}`;
  }

  @logError('Something bad!')
  pilot(): void {
    throw new Error();
    console.log('swish');
  }
}

function testDecorator(target: any, key: string) {
  console.log(target.color);
}

function logError(errorMessage: string) {
  return function(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function() {
      try {
        method();
      } catch {
        console.log(errorMessage);
      }
    };
  };
}
