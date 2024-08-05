import { useMemo, useState } from "react";

// Models
import { IJsonData } from "../interfaces/jsonData";
import { IStorageData } from "../interfaces/storageData";

interface IProps {
    userLoamInfo: IJsonData | undefined
    nextStep: () => void
}

function LoanInfo({ nextStep, userLoamInfo }: IProps) {

    const [loanData, setLoanData] = useState(userLoamInfo?.repaymentType[0].value)

    const payment = useMemo(() => {
        if (userLoamInfo?.interestRate && loanData) {
            return (
                <h5>{((userLoamInfo.amount + (userLoamInfo?.amount * (userLoamInfo.interestRate / 100))) / loanData).toLocaleString()}</h5>
            )
        }

        if (userLoamInfo?.percentageRate && loanData) {
            return (
                <h5>{((userLoamInfo.amount + (userLoamInfo?.amount * (userLoamInfo.percentageRate / 100))) / loanData).toLocaleString()}</h5>
            )
        }
    }, [loanData])

    const penalty = useMemo(() => {
        if (userLoamInfo) {
            return (
                <h5>{(userLoamInfo?.amount * userLoamInfo?.penaltyRate).toLocaleString()}</h5>
            )
        }
    }, [])

    const submitLoan = () => {
        let storage = sessionStorage.getItem("userLoans")

        if (!storage && userLoamInfo) {
            let saveCurrentData = []
            let newRepaymentType = userLoamInfo.repaymentType.find(item => item.value === loanData)
            saveCurrentData.push({
                amount: userLoamInfo.amount,
                id: userLoamInfo.id,
                interestRate: userLoamInfo.interestRate,
                persentageRate: userLoamInfo.percentageRate,
                name: userLoamInfo.name,
                penaltyRate: userLoamInfo.penaltyRate,
                repaymentType: newRepaymentType
            })
            sessionStorage.setItem("userLoans", JSON.stringify(saveCurrentData))
            nextStep()
        }

        if (storage && userLoamInfo) {
            let parsedStorage = JSON.parse(storage)
            let newRepaymentType = userLoamInfo.repaymentType.find(item => item.value === loanData)
            let isExist = parsedStorage.find((item: IStorageData) => item.repaymentType.value === loanData)
            if (isExist) {
                alert("این مورد قبلا ثبت شده است.")
            } else {
                parsedStorage.push({
                    amount: userLoamInfo.amount,
                    id: userLoamInfo.id,
                    interestRate: userLoamInfo.interestRate,
                    persentageRate: userLoamInfo.percentageRate,
                    name: userLoamInfo.name,
                    penaltyRate: userLoamInfo.penaltyRate,
                    repaymentType: newRepaymentType
                })
                sessionStorage.setItem("userLoans", JSON.stringify(parsedStorage))
                nextStep()
            }
        }
    }

    return (
        <section className="h-full w-[500px] m-auto">

            <div className="flex items-center justify-between w-full mb-10">
                <h4 className="w-full">انتخاب زمان باز پرداخت</h4>
                <select className="w-full p-2 cursor-pointer"
                    onChange={(e) => { if (loanData) setLoanData(Number(e.target.value)) }}
                >
                    {
                        userLoamInfo?.repaymentType.map(item => (
                            <option value={item.value}>{item.name}</option>
                        ))
                    }
                </select>
            </div>

            <div className="w-full flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <h4>مبلغ:</h4>
                    <h5>{userLoamInfo?.amount.toLocaleString()}</h5>
                </div>
                <div className="flex items-center justify-between">
                    <h4>مدت زمان بازپرداخت:</h4>
                    {
                        loanData && (
                            loanData < 12 ? (
                                <h5>{loanData} ماهه</h5>
                            ) : <h5>{loanData / 12} ساله</h5>
                        )
                    }
                </div>
                <div className="flex items-center justify-between">
                    <h4>تعداد اقساط:</h4>
                    <h5>{loanData} عدد</h5>
                </div>
                <div className="flex items-center justify-between">
                    <h4>مبلغ قست ماهیانه:</h4>
                    {payment}
                </div>
                <div className="flex items-center justify-between">
                    <h4>درصد سود سالیانه:</h4>
                    {
                        userLoamInfo && (
                            <h5>
                                {userLoamInfo.percentageRate && userLoamInfo.percentageRate}
                                {userLoamInfo.interestRate && userLoamInfo.interestRate}
                                {" "}درصد
                            </h5>
                        )
                    }
                </div>
                <div className="flex items-center justify-between">
                    <h4>مبلغ جریمه دیرکرد:</h4>
                    {penalty}
                </div>
            </div>

            <div className="text-center mt-10">
                <button onClick={submitLoan} className="w-44">
                    ثبت درخواست
                </button>
            </div>

        </section>
    );
}

export default LoanInfo;