'use client';


import { useEffect, useState } from 'react';
import PropertyListItems from "./propertylistitems"
import apiService from '@/app/services/apiService';

export type PropertyType = {
    id: string;
    title: string;
    image_url: string;
    price_per_night: number;
    is_favorite: boolean;
}

interface PropertyListProps {
    landlord_id?: string | null;
    favorites?: boolean | null;
}

const PropertyList: React.FC<PropertyListProps> = ({
    landlord_id,
    favorites
}) => {

    const [properties, setProperties] = useState<PropertyType[]>([]);

    const getProperties = async () => {
        let url = '/api/properties/';

        if (landlord_id) {
            url += `?landlord_id=${landlord_id}`
        }

        const tmpProperties = await apiService.get(url)

        setProperties(tmpProperties.data);
    };


    useEffect(() => {
        getProperties();
    }, []);


    return (
        <>
            {properties.map((property) => {
                return (
                    <PropertyListItems
                        key={property.id}
                        property={property}
                    />
                )
            })}


        </>
    )
}

export default PropertyList