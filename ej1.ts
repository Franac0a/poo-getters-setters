class Producto {
  nombre: string;
  precio: number;
  categoria: string;
  stock: number;

  constructor(
    nombre: string,
    precio: number,
    categoria: string,
    stock: number,
  ) {
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.stock = stock;
  }

  // Método describir() que devuelva un string tipo "Teclado ($electrónica): $10000 — 5 unidades".
  describir(): string {
    return `${this.nombre} (${this.categoria}): $${this.precio} — ${this.stock} unidades`;
  }

  //Método hayStock(cantidad: number): boolean que diga si se puede vender esa cantidad sin quedar en negativo.
  hayStock(cantidad: number): boolean {
    return this.stock >= cantidad;
  }

  //Método venderUnidades(cantidad: number): si hayStock(cantidad) es true, descuenta del stock; si no, no vende nada
  // Decisión: avisa con un mensaje en vez de lanzar un Error. Quedarse sin stock es una
  // situación normal del negocio (no un error del programa), así que no se corta la ejecución:
  // se informa y el stock queda igual.
  venderUnidades(cantidad: number): void {
    if (this.hayStock(cantidad)) {
      this.stock = this.stock - cantidad;
    } else {
      console.log(
        `No se pudo vender ${cantidad} unidades de ${this.nombre}: solo hay ${this.stock} en stock.`,
      );
    }
  }

  //Método aplicarDescuento(porcentaje: number): number que devuelva el precio final sin modificar el precio original del producto (el descuento es una simulación, no un cambio permanente).
  aplicarDescuento(porcentaje: number): number {
    return this.precio - (this.precio * porcentaje) / 100;
  }
}

const nuevoProducto = new Producto(
  "Teclado Redragon",
  25000,
  "electronica",
  10,
);

console.log(nuevoProducto.describir());
console.log(nuevoProducto.aplicarDescuento(20));
console.log(nuevoProducto.describir()); // el descuento no cambia el precio original
nuevoProducto.venderUnidades(3);
console.log(nuevoProducto.describir());
nuevoProducto.venderUnidades(50); // no hay stock suficiente: no vende nada
console.log(nuevoProducto.describir());
