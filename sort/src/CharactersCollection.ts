export class CharactersCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rigthIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rigthIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rigthIndex: number): void {
    const characters = this.data.split("");

    const leftHand = this.data[leftIndex];
    characters[leftIndex] = characters[rigthIndex];
    characters[rigthIndex] = leftHand;

    this.data = characters.join("");
  }
}
