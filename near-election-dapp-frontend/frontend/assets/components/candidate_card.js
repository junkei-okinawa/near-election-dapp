import React from "react";
import { IpfsImage } from 'react-ipfs-image';

// template  candidate card template
const CandidateCard = (props) => {
    return (
        <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
            <IpfsImage className="w-full rounded-md" hash={props.CID} gatewayUrl='https://gateway.pinata.cloud/ipfs/' alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.name}</div>
                <p className="text-gray-700 text-base">
                    {props.manifest}
                </p>
            </div>
        </div>
    )

}

export default CandidateCard;