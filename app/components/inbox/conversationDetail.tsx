'use client';
import CustomBtn from "../forms/customBtn";

const ConversationDetail = () => {
    return (
        <>
            <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
                <div className="w-[80%]py-4 px-6 rounded-xl bg-gray-200">
                    <p className="font-bold text-gray-500">John Doe</p>
                    <p className="text-gray-500">this is john's msg</p>
                </div>

                <div className="w-[80%]py-4 ml-[20%] px-6 rounded-xl bg-blue-200">
                    <p className="font-bold text-gray-500">John Doe</p>
                    <p className="text-gray-500">this is my msg</p>
                </div>
            </div>

            <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl">
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="w-full p-2 bg-gray-200 rounded-xl"
                />

                <CustomBtn
                    onClick={() => console.log('clicked')}
                    label="Send"
                    className="w-[100px]"
                />

            </div>
        </>
    )
}

export default ConversationDetail;