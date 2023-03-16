let nombre: string | boolean = "Hola"

let numero: number = 1231

export let cualquiera: any = 123123

cualquiera = "Fasdfas"


let buleano: boolean = true

let array: string[] = ["hola", "chau"]

let array2: (string | number | boolean | object)[] = ["lucas", 1, true, "jose", { id: 1, name: "pedro" }, 3123]

array2.push({ id: 2, name: false })

let unoUotro: "SUMAR" | "RESTAR" = "SUMAR"

type persona = {
    id: number;
    name: string;
    dni: number;
}

let otroObj = {
    dia: "lunes"
}

let initialState: persona[]

const fnc = (): void => console.log("Hola")

const soyotracosa = (): never => {
    while (true) {
        console.log("nunca salimos");
    }
}

enum SEMANAS {
    lunes = 10,
    martes,
    miercoles,
    jueves,
    viernes
}

console.log(SEMANAS.miercoles)

type soyLaTupla = [string, boolean, number]

const tupla: soyLaTupla = ["123", true, 123]


const sumar = (a: number, b: number): number => a + b


sumar(1, 3)