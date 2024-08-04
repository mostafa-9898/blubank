// Router
import { Link } from "react-router-dom";

function Home() {
    return (
        <section className="h-[100vh] flex flex-col items-center justify-center gap-12">

            <div className="flex flex-col justify-center items-center gap-5">
                <img src="src/assets/blubank.png" className="w-20 h-20" />
                <h2 className="text-xl text-blue-400">به بلو بانک خوش آمدید.</h2>
            </div>

            <div className="flex items-center justify-center gap-12">
                <Link to={"/register"}>
                    <button className="text-lg">
                        ثبت نام
                    </button>
                </Link>
                <Link to={"/loan"}>
                    <button className="text-lg">
                        تسهیلات
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default Home;