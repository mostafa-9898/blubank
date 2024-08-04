export interface IStorageData {
    amount: number,
    id: string,
    interestRate?: number,
    percentageRate?: number,
    name: string,
    penaltyRate: number,
    repaymentType: { name: string, value: number }
}