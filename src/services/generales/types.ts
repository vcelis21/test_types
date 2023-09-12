// Tipos unicamente para servicios internos que tienen ciertos valores en INPUTS Y OUTPUTS
export type Car = {
    color: string;
    model: string;
    anio: number;
    motor: number;
    marca: string;
}

// Interfaz cuando se tienen datos mayores o se pueden compartir con algún otro servicio
export interface Car2 {
    color: string;
    model: string;
    anio: number;
    motor: number;
    marca: string;
}