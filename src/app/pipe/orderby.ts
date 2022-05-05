export class Train{
    trainId:number;
    trainType:string;
    trainRoute: string;
    trainFare:number;

    constructor(id:number, type:string, route:string, fare:number){
        this.trainId = id;
        this.trainType = type;
        this.trainRoute = route;
        this.trainFare = fare;
    }
    
}