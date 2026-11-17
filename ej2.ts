class CuentaBancaria {
  readonly titular: string;
  private saldo: number;
  private historial: string[];

  constructor(titular: string, saldoInicial: number) {
    this.titular = titular;
    this.saldo = saldoInicial;
    this.historial = [];
  }

  depositar(monto: number): void {
    if (monto <= 0) {
      throw new Error("el monto a depositar debe de ser mayor a 0");
    }
    this.saldo += monto;
    this.historial.push(`depósito: +$${monto}`);
  }

  retirar(monto: number): void {
    if (monto <= 0) {
      throw new Error("el monto a retirar debe de ser mayor a 0");
    }
    if (monto > this.saldo) {
      throw new Error("monto no disponible en tu cuenta");
    }
    this.saldo -= monto;
    this.historial.push(`retiro: -$${monto}`);
  }

  consultarSaldo(): number {
    return this.saldo;
  }
  obtenerHistorial(): string[] {
    return [...this.historial];
  }
}

const miCuenta = new CuentaBancaria("Facundo", 5000);

miCuenta.depositar(2000);
miCuenta.retirar(1500);

console.log("titular:", miCuenta.titular);
console.log("saldo actual:", miCuenta.consultarSaldo());

console.log("historial:", miCuenta.obtenerHistorial());

// Montos inválidos: se rechazan con un Error.
for (const operacion of [
  () => miCuenta.depositar(0),
  () => miCuenta.retirar(-100),
  () => miCuenta.retirar(999999),
]) {
  try {
    operacion();
  } catch (error) {
    console.log("Error:", (error as Error).message);
  }
}

// Modificar la copia devuelta no altera el historial interno.
const copia = miCuenta.obtenerHistorial();
copia.push("movimiento falso");
console.log("historial real:", miCuenta.obtenerHistorial());
