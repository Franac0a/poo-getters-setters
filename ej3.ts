export class Empleado {
  protected nombre: string;
  protected antiguedad: number;

  constructor(nombre: string, antiguedad: number) {
    this.nombre = nombre;
    this.antiguedad = antiguedad;
  }

  calcularSueldo(): number {
    return 0;
  }

  describir(): string {
    return `${this.nombre} (${this.antiguedad} años) - sueldo $${this.calcularSueldo()}`;
  }
}

export class EmpleadoFijo extends Empleado {
  sueldoBase: number;

  constructor(nombre: string, antiguedad: number, sueldoBase: number) {
    super(nombre, antiguedad);

    this.sueldoBase = sueldoBase;
  }
  calcularSueldo(): number {
    const bonoAntiguedad = this.sueldoBase * (0.02 * this.antiguedad);
    return this.sueldoBase + bonoAntiguedad;
  }
}

const empFijo = new EmpleadoFijo("Facundo", 3, 500000);

console.log(empFijo.describir());
