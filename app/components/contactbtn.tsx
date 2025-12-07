'use client';

import useLoginModal from "../hooks/useLoginModal";
import { useRouter } from "next/navigation";
import apiService from "../services/apiService";

interface ContactButtonProps {
    userId: string | null;
    landlordId: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({
    userId,
    landlordId
}) => {
    return (
        <button className="mt-6 py-4 px-6 cursor-pointer bg-airbnb text-white rounded-xl hover:bg-airbnb-dark transition">
            Contact
        </button>
    )
}

export default ContactButton
