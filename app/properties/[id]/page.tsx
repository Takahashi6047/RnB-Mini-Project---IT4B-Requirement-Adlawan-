 import Image from "next/image";
import Link from "next/link";
import ReservationSidebar from "../../components/properties/reservationSidebar";

const PropertyDetailPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6">
            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image
                    fill
                    src="/propertyItemImages/beach_1.jpg"
                    className="object-cover w-full h-full"
                    alt="Beach house"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">Property Name</h1>

                    <span className="mb-6 block text-lg text-gray-600">
                        2 guests - 1 bedrooms - 1 bathrooms
                    </span>
                    <hr />

                    <div className="py-6 flex items-center space-x-4">
                        <Image
                                src="/profilepics/landlord.jpg"
                                width={50}
                                height={50}
                                className="rounded-full"
                                alt="The user name"
                            />
                        <p><strong>Jaymei Cortez</strong> is your host</p>
                        
                    </div>
                    <hr />

                    <p className="mt-6 text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                    </p>
                </div>
                
                <ReservationSidebar />
            </div>
        </main>
    )
}

export default PropertyDetailPage;
