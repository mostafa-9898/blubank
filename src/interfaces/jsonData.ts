export interface IJsonData {
    id: string;
    createdDate: string;
    name: string;
    repaymentType: {
        name: string;
        value: number
    }[];
    amount: number;
    interestRate?: number
    penaltyRate: number;
    percentageRate?: number
}