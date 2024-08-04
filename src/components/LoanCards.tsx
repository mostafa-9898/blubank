// Data
import loamsData from '../../data.json'

// Models
import { IJsonData } from '../interfaces/jsonData';


interface IProps {
    setUserLoamInfo: React.Dispatch<React.SetStateAction<IJsonData | undefined>>
    nextStep: () => void
}


function LoanCards({ setUserLoamInfo, nextStep }: IProps) {
    return (
        <section className='flex items-center justify-center gap-10 flex-wrap'>
            {
                loamsData.data.map(item => (
                    <div className='border border-gray-500 hover:border-blue-500
                     cursor-pointer rounded-md p-6 min-w-[30%] flex flex-col gap-4'
                        onClick={() => {
                            setUserLoamInfo(item)
                            nextStep()
                        }}
                    >

                        <div className='flex items-center gap-2'>
                            <h6 className=''>{item.name}</h6>
                        </div>

                        <div className='flex items-center justify-between gap-2'>
                            <h5>مبلغ:</h5>
                            <h6>{item.amount.toLocaleString()}</h6>
                        </div>

                        {
                            item.percentageRate ? (
                                <div className='flex items-center justify-between gap-2'>
                                    <h5>درصد سود سالیانه + کارمزد:</h5>
                                    <h6>{item.percentageRate?.toLocaleString()}</h6>
                                </div>
                            ) : (
                                <div className='flex items-center justify-between gap-2'>
                                    <h5>درصد سود سالیانه:</h5>
                                    <h6>{item.interestRate?.toLocaleString()}</h6>
                                </div>
                            )
                        }

                    </div>
                ))
            }
        </section>
    );
}

export default LoanCards;