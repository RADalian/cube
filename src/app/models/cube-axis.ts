export class CubeAxis {
    x = 0;
    y = 0;
    z = 0;

    toString(): string {
        return `(${this.x}, ${this.y}, ${this.z})`;
    }
}