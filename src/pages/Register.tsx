import { useState } from 'react';

// Components
import LoanCards from '../components/LoanCards';
import UserInfo from '../components/UserInfo';
import UserBankInfo from '../components/UserBankInfo';
import LoanInfo from '../components/LoanInfo';
import FinishLoanSteps from '../components/FinishLoanSteps';

const steps = [
    { id: 1, title: "انتخاب تسهیلات" },
    { id: 2, title: "اطلاعات متقاضی" },
    { id: 3, title: "اطلاعات بانکی" },
    { id: 4, title: "نوع تسهیلات" },
    { id: 5, title: "اتمام" }
]

function Register() {

    const [currentStep, setCurrentStep] = useState(0)

    const nextStep = () => {
        setCurrentStep(prev => {
            if (prev >= steps.length - 1) return prev
            return prev + 1
        })
    }

    return (
        <main className="relative flex items-center justify-center min-h-[100vh]">

            <div className='relative w-[1200px] min-h-[800px]'>

                <nav className='flex items-center justify-center flex-col mb-24'>
                    <h4 className='text-lg'>{steps.length} / {currentStep + 1}</h4>
                    <h4 className='text-xl'>{steps.map((item, index) => index === currentStep && item.title)}</h4>
                </nav>
                {currentStep === 0 && <LoanCards nextStep={nextStep} />}
                {currentStep === 1 && <UserInfo nextStep={nextStep} />}
                {currentStep === 2 && <UserBankInfo nextStep={nextStep} />}
                {currentStep === 3 && <LoanInfo nextStep={nextStep} />}
                {currentStep === 4 && <FinishLoanSteps />}
            </div>

        </main>
    );
}

export default Register;