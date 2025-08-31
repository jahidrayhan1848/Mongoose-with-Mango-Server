export interface IMango {
    name : string,
    variety : string,
    unit : "kg" | "ton",
    price: number,
    stock : number,
    origin :  string ,
    season : "Summer" | "Winter"
}