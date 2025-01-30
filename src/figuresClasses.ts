type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';
type Area = number;
export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): Area;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a = 0,
    public b = 0,
    public c = 0,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('bad values');
    }

    if (
      this.a + this.b <= this.c ||
      this.a + this.c <= this.b ||
      this.b + this.c <= this.a
    ) {
      throw new Error('not a triangle with this values');
    }
  }

  getArea(): Area {
    const halfPerimetr = (this.a + this.b + this.c) * 0.5;

    return (
      Math.round(
        Math.sqrt(
          halfPerimetr *
            (halfPerimetr - this.a) *
            (halfPerimetr - this.b) *
            (halfPerimetr - this.c),
        ) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius = 0,
  ) {
    if (this.radius <= 0) {
      throw new Error('not a circle');
    }
  }

  getArea(): Area {
    return (
      Math.floor(
        (Math.round(Math.PI * this.radius * this.radius * 1000) / 1000) * 100,
      ) / 100
    );
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: 0,
    public height: 0,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('not a rectangle');
    }
  }

  getArea(): Area {
    return Math.round(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
