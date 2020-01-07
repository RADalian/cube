import { IPoint } from './cube-point';
export class CubeAxis {
    name: string;
    x = 0;
    y = 0;
    z = 0;

    constructor(name: string) {
        this.name = name;
    }

    toString(): string {
        return `(${this.x}, ${this.y}, ${this.z})`;
    }
}