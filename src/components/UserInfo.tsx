// Formik and Yup
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

interface IProps {
    nextStep: () => void
}

function UserInfo({ nextStep }: IProps) {

    const formSchema = Yup.object().shape({
        name: Yup.string().required("نام خود را وارد کنید"),
        family: Yup.string().required("نام خانوادگی خود را وارد کنید"),
        nationalId: Yup.number().required("کد ملی خود را وارد کنید"),
        birthDate: Yup.number().required("تاریخ تولد خود را وارد کنید"),
        phone: Yup.number().required("شماره تماس خود را وارد کنید"),
    });

    return (
        <div className="flex flex-col justify-between h-full">

            <Formik
                initialValues={{
                    name: "",
                    family: "",
                    nationalId: "",
                    birthDate: "",
                    phone: "",
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
                            <Field placeholder="نام: مصطفی" name="name" className={`${errors.name && "border-red-500"}`} />
                            <ErrorMessage className='text-red-400 text-xs' name="name" component="div" />
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <Field placeholder="نام خانوادگی: روحانی" name="family" className={`${errors.family && "border-red-500"}`} />
                            <ErrorMessage className='text-red-400 text-xs' name="family" component="div" />
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <Field placeholder="کد ملی: ...067" name="nationalId" type="number" className={`${errors.nationalId && "border-red-500"}`} />
                            <ErrorMessage className='text-red-400 text-xs' name="nationalId" component="div" />
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <Field placeholder="تاریخ تولد: 13770925" name="birthDate" type="number" className={`${errors.birthDate && "border-red-500"}`} />
                            <ErrorMessage className='text-red-400 text-xs' name="birthDate" component="div" />
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <Field placeholder="شماره تماس: 09369117184" name="phone" type="number" className={`${errors.phone && "border-red-500"}`} />
                            <ErrorMessage className='text-red-400 text-xs' name="phone" component="div" />
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

export default UserInfo;