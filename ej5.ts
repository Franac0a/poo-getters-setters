class Persona {
  private readonly dni: string;
  nombre: string;
  private _edad = 0;
  private _email = "";

  constructor(dni: string, nombre: string, edad: number, email: string) {
    this.dni = dni;
    this.nombre = nombre;

    this.edad = edad;
    this.email = email;
  }

  get edad() {
    return this._edad;
  }

  set edad(valor: number) {
    if (valor < 0 || valor > 120) {
      throw new Error("la edad debe de estar entre el 0 y 120.");
    }
    this._edad = valor;
  }

  get email() {
    return this._email;
  }

  set email(valor: string) {
    if (!valor.includes("@")) {
      throw new Error("el email debe de tener un formato valido");
    }
    this._email = valor;
  }

  get esMayorDeEdad(): boolean {
    return this._edad >= 18;
  }

  get datosPublicos(): string {
    return `nombre: ${this.nombre}, es mayor de edad?: ${this.esMayorDeEdad}`;
  }
}

const persona1 = new Persona("46395379", "Facundo", 18, "facu@gmail.com");

console.log(persona1.datosPublicos);
console.log("email:", persona1.email);

// Los setters validan los datos antes de guardarlos.
try {
  persona1.edad = 150;
} catch (error) {
  console.log("Error:", (error as Error).message);
}

try {
  persona1.email = "correo-invalido";
} catch (error) {
  console.log("Error:", (error as Error).message);
}

console.log("edad sin cambios:", persona1.edad, "| email sin cambios:", persona1.email);
