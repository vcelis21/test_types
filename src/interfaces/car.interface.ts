export interface Car {
    id: number;
    brand: string;
    model: string;
    year: number;
    color: string;
    price: number;
    sold: boolean;
    creator: Object;
    email: string;
    landlordData: Object;
    references: Array<Object>;
    startDate: Date;
}