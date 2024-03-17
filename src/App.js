import { useFormik } from "formik";
import { useState } from "react";

function App() {
    const [submittedData, setSubmittedData] = useState(null);

    const formik = useFormik({
        initialValues: {
            name: "",
            surname: "",
            email: "",
            orderCode: "",
            textInfo: "",
            terms: false,
        },

        onSubmit: (values, { resetForm }) => {
            setSubmittedData(values);
            resetForm();
        },
    });

    return (
        <div>
            <main className="min-h-screen flex items-center justify-center p-8">
                <form
                    className="bg-white flex flex-col rounded-lg w-full mx-auto p-6"
                    onSubmit={formik.handleSubmit}
                >
                    <div className="flex-1 p-4">
                        <h2 className="font-bold text-xl pb-6 text-center">
                            Φόρμα επικοινωνίας
                        </h2>
                        <div className="mb-4">
                            <select
                                className="border-2 border-black p-2 rounded-lg w-full"
                                name="contactMe"
                            >
                                <option>
                                    Επικοινωνία με το τμήμα προσωπικού
                                </option>
                            </select>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <input
                                className="bg-gray-200 p-2 rounded-lg"
                                type="text"
                                name="name"
                                required
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                placeholder="Όνομα*"
                            />
                            <input
                                className="bg-gray-200 p-2 rounded-lg"
                                type="text"
                                name="surname"
                                required
                                value={formik.values.surname}
                                onChange={formik.handleChange}
                                placeholder="Επώνυμο*"
                            />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <input
                                className="bg-gray-200 p-2 rounded-lg"
                                type="email"
                                name="email"
                                required
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                placeholder="Email*"
                            />
                            <input
                                className="bg-gray-200 p-2 rounded-lg"
                                type="number"
                                name="orderCode"
                                required
                                value={formik.values.orderCode}
                                onChange={formik.handleChange}
                                placeholder="Κωδικός Παραγγελίας*"
                            />
                        </div>
                        <div className="mb-4">
                            <textarea
                                className="bg-gray-200 p-2 rounded-xl h-24 w-full resize-none"
                                type="text"
                                name="textInfo"
                                required
                                value={formik.values.textInfo}
                                onChange={formik.handleChange}
                                placeholder="Γράψε μας..."
                            />
                        </div>
                        <div className="text-sm flex flex-col sm:flex-row items-center justify-between mb-4">
                            <p className="text-gray-500 mb-2">
                                *Όλα τα πεδία είναι υποχρεωτικά
                            </p>
                            <div className="flex items-center mt-2 sm:mt-0">
                                <input
                                    onChange={formik.handleChange}
                                    name="terms"
                                    value="checked"
                                    type="checkbox"
                                    required
                                />
                                <label className="pl-1">
                                    Αποδέχομαι τους <u>Όρους Χρήσης</u>
                                </label>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-black text-white rounded-lg py-2 px-6"
                            >
                                Υποβολή
                            </button>
                        </div>
                    </div>
                </form>
            </main>

            {submittedData && (
                <div>
                    <main className="flex items-center justify-center p-8">
                        <div className="bg-white flex flex-col rounded-lg w-full mx-auto p-6">
                            <h2 className="font-bold text-xl pb-6 text-center">
                                Υποβληθέντα στοιχεία:
                            </h2>
                            <div className="flex justify-around flex-col sm:flex-row gap-6 bg-gray-200 p-4 rounded-xl mb-4">
                                <p>{submittedData.name}</p>
                                <p>{submittedData.surname}</p>
                                <p>{submittedData.email}</p>
                                <p>#{submittedData.orderCode}</p>
                            </div>
                            <div>
                                <p className="bg-gray-200 p-2 rounded-xl h-24 w-full">
                                    {submittedData.textInfo}
                                </p>
                            </div>
                        </div>
                    </main>
                </div>
            )}
        </div>
    );
}

export default App;
