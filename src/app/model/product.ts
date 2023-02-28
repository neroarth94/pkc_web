export interface Product {
    name: string;
    quantity: number;
    cost: number;
    image: string;
} 

export enum ItemType {
    Bogu,
    Shinai,
    Others
}