const ReservationSidebar = () => {
    return (
        <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
            <h2 className="mb-5 text-2xl">$200 Per night</h2>

            <div className="mb-6 p-3 border border-gray-400 rounded-xl">
                <label className="mb-2 block font-bold text-xs">Guests</label>
                <select className="w-full -ml-1 text-xm">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                </select>
            </div>

            <div className="w-full mb-6 py-6 text-center text-white bg-airbnb hover:bg-airbnb-dark rounded-xl">
                <p className="text-lg font-bold">Book</p>
            </div>

            <div className="mb-4 flex justify-between align-center">
                <p>$200 x 2 nights</p>
                <p>$400</p>
            </div>

            <div className="mb-4 flex justify-between align-center">
                <p>Djangobnb Fee</p>
                <p>$200</p>
            </div>

            <hr />

            <div className="mb-4 flex justify-between align-center">
                <p>Total</p>
                <p>$600</p>
            </div>
        </aside>
    )
}

export default ReservationSidebar;