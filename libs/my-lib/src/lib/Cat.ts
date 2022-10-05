import { Animal } from './Animal';

export class Cat extends Animal {
  public override set name(v: string) {
    super.name = v;

    console.log(`Meow: ${v}`);
  }
}
