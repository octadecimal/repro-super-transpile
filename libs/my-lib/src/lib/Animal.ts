export class Animal {
  private _name = '';

  public get name(): string {
    return this._name;
  }

  public set name(v: string) {
    this._name = v;
  }
}
