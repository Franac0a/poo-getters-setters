class cuentaBancaria {
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
      throw new Error("El monto ingresado no puede ser negativo");
    }
    this.saldo += monto;
    this.historial.push(`deposito: $${monto}`);
  }

  retirar(monto: number): void {
    if (monto > this.saldo) {
      throw new Error("monto no disponible en tu cuenta");
    }
    if (monto <= 0) {
      throw new Error("el monto a retirar debe de ser mayor a 0");
    }
    this.saldo -= monto;
    this.historial.push(`Retiro: -$${monto} `);
  }

  consultarSaldo(): number {
    return this.saldo;
  }
  obtenerHistorial(): string[] {
    return [...this.historial];
  }
}

const miCuenta = new cuentaBancaria("Facundo", 5000);

miCuenta.depositar(2000);
miCuenta.retirar(1500);

console.log("titular:", miCuenta.titular);
console.log("saldo actual:", miCuenta.consultarSaldo());

console.log("historial:", miCuenta.obtenerHistorial());
