import { Empleado, EmpleadoFijo } from "./ej3.ts";

class EmpleadoPorHoras extends Empleado {
  private horasTrabajadas: number;
  private valorHora: number;

  constructor(
    nombre: string,
    antiguedad: number,
    horasTrabajadas: number,
    valorHora: number,
  ) {
    super(nombre, antiguedad);

    this.horasTrabajadas = horasTrabajadas;
    this.valorHora = valorHora;
  }

  calcularSueldo(): number {
    return this.horasTrabajadas * this.valorHora;
  }
}

class EmpleadoPorComision extends Empleado {
  private ventasDelMes: number;
  private porcentajeComision: number;

  constructor(
    nombre: string,
    antiguedad: number,
    ventasDelMes: number,
    porcentajeComision: number,
  ) {
    super(nombre, antiguedad);

    this.ventasDelMes = ventasDelMes;
    this.porcentajeComision = porcentajeComision;
  }

  calcularSueldo(): number {
    return this.ventasDelMes * (this.porcentajeComision / 100);
  }
}

function calcularNomina(empleados: Empleado[]): number {
  let total = 0;

  for (const emp of empleados) {
    total += emp.calcularSueldo();
  }
  return total;
}

const empleados: Empleado[] = [
  new EmpleadoFijo("Facu", 5, 600000),
  new EmpleadoPorHoras("Luis", 2, 160, 3500),
  new EmpleadoPorComision("Maria", 1, 2000000, 10),
];

for (const emp of empleados) {
  console.log(emp.describir());
}

console.log("Total nomina a pagar:", calcularNomina(empleados));
