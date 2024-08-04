// Router
import { Link } from "react-router-dom";

function FinishLoanSteps() {
    return (
        <div className="text-center">
            <h4 className="mb-10 text-green-600">
                درخواست شما با موفقیت ثبت شد.
            </h4>
            <Link to={'/'}>
                <button>
                    صفحه اصلی
                </button>
            </Link>
        </div>
    );
}

export default FinishLoanSteps;