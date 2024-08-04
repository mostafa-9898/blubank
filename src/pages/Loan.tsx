import { useEffect, useState } from "react";

// Router
import { Link } from "react-router-dom";

// Models
import { IStorageData } from "../interfaces/storageData";

function Loan() {

    const [userLoans, setUserLoans] = useState<IStorageData[]>()

    useEffect(() => {
        let storage = sessionStorage.getItem("userLoans")
        if (storage) {
            setUserLoans(JSON.parse(storage))
            // console.log(JSON.parse(storage));
        }
    }, [])

    return (
        <section className="flex items-center justify-center min-h-[100dvh] gap-6 flex-wrap pt-6">

            {
                userLoans?.length ? (
                    <div className="w-[1200px] text-center">
                        <Link to={"/"}>
                            <button className="w-[150px]">
                                صفحه اصلی
                            </button>
                        </Link>
                        <div className="flex flex-wrap w-full justify-center items-center gap-8 mt-8">
                            {
                                userLoans.map(item => (
                                    <div className="w-[400px] border border-gray-400 rounded-md p-3 flex flex-col gap-3">
                                        <div className="flex items-center justify-between">
                                            <h4>نام:</h4>
                                            <h5>{item?.name}</h5>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <h4>مبلغ:</h4>
                                            <h5>{item?.amount.toLocaleString()}</h5>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <h4>مدت زمان بازپرداخت:</h4>
                                            {
                                                item.repaymentType.value && (
                                                    item.repaymentType.value < 12 ? (
                                                        <h5>{item.repaymentType.value} ماهه</h5>
                                                    ) : <h5>{item.repaymentType.value / 12} ساله</h5>
                                                )
                                            }
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <h4>تعداد اقساط:</h4>
                                            <h5>{item.repaymentType.value} عدد</h5>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <h4>مبلغ قست ماهیانه:</h4>
                                            {
                                                item && item.repaymentType.value && (
                                                    <h5>
                                                        {
                                                            item.interestRate ? (
                                                                ((item.amount + (item?.amount * (item.interestRate / 100))) / item.repaymentType.value).toLocaleString()
                                                            ) : item.percentageRate ? (
                                                                ((item.amount + (item?.amount * (item.percentageRate / 100))) / item.repaymentType.value).toLocaleString()
                                                            ) : "-"
                                                        }
                                                    </h5>
                                                )
                                            }
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <h4>درصد سود سالیانه:</h4>
                                            {
                                                item && (
                                                    <h5>
                                                        {
                                                            item.interestRate ? (
                                                                (item.interestRate)
                                                            ) : item.percentageRate ? (
                                                                (item.percentageRate)
                                                            ) : "-"
                                                        }
                                                        {" "}درصد
                                                    </h5>
                                                )
                                            }
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <h4>مبلغ جریمه دیرکرد:</h4>
                                            <h5>
                                                {
                                                    item && (item?.amount * item?.penaltyRate).toLocaleString()
                                                }
                                            </h5>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ) : (
                    <div className="text-center">
                        <h3 className="mb-9 text-xl">تسهیلاتی وجود ندارد.</h3>
                        <Link to={"/"}>
                            <button>
                                صفحه اصلی
                            </button>
                        </Link>
                    </div>
                )
            }

        </section>
    );
}

export default Loan;