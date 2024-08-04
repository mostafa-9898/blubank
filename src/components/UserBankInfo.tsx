// Formik and Yup
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

interface IProps {
    nextStep: () => void
}

function UserBankInfo({ nextStep }: IProps) {

    const formSchema = Yup.object().shape({
        accountNumber: Yup.number().required("شماره حساب خود را وارد کنید"),
        ibanNumber: Yup.number().required("شماره شبا خود را وارد کنید"),
        avrageBalance: Yup.number().required("میان موجودی سالیانه خود را وارد کنید"),
    });

    return (
        <div className="flex flex-col justify-between h-full">

            <Formik
                initialValues={{
                    accountNumber: "",
                    ibanNumber: "",
                    avrageBalance: "",
                }}
                onSubmit={(values, actions) => {
                    // console.log(values);
                    nextStep()
                }}
                validationSchema={formSchema}
                validateOnChange={false}
                validateOnBlur={false}
            >
                {({ isSubmitting, errors, handleSubmit }) => (
                    <Form onSubmit={(e) => {
                        e.preventDefault()
                        handleSubmit()
                    }} className="flex flex-col items-center justify-center gap-9 w-[350px] m-auto">
                        <div className="flex flex-col gap-3 w-full">
                            <Field placeholder="شماره حساب" name="accountNumber" type="number" className={`${errors.accountNumber && "border-red-500"}`} />
                            <ErrorMessage className='text-red-400 text-xs' name="accountNumber" component="div" />
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <Field placeholder="شماره شبا" name="ibanNumber" type="number" className={`${errors.ibanNumber && "border-red-500"}`} />
                            <ErrorMessage className='text-red-400 text-xs' name="ibanNumber" component="div" />
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <Field placeholder="میانگین موجودی سالیانه" name="avrageBalance" type="number" className={`${errors.avrageBalance && "border-red-500"}`} />
                            <ErrorMessage className='text-red-400 text-xs' name="avrageBalance" component="div" />
                        </div>

                        <button type="submit" className="w-44">
                            مرحله بعد
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default UserBankInfo;