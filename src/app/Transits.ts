export interface Transits {
    date : string;
    numberCard: {
        firstField : number;
        secondField: number;
        thirdField: number;
        fourthField: number;
        fio: string;
        activeMonth: string;
        activeYear: string;
    }
    numberCardto: {
        firstField: number;
        secondField: number;
        thirdField: number;
        fourthField: number;
    } 
    sumary: number;
}