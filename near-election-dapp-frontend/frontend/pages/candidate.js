import React, { useState } from 'react';
import Title from "../assets/components/title";
import Input from "../assets/components/input_form";
import { nft_mint } from '../assets/js/near/utils'

// add candidate screen
function Candidate() {
    // set input valuable of candidate image CID, candidate name, candidate manifest
    const [inputCID, setInputCID] = useState("");
    const [inputName, setInputName] = useState("");
    const [inputManifest, setInputManifest] = useState("");
    const [isLoading, setLoading] = useState(false);

    // function that add candidate info to home screen
    const addCandidate = async () => {
        // mint candidate nft
        setLoading(true);
        await nft_mint(`${inputName}(candidate)`, "", `https://gateway.pinata.cloud/ipfs/${inputCID}`, inputCID, inputName, inputManifest, "candidate", process.env.CONTRACT_NAME);
        setLoading(false);
        setInputCID("");
        setInputName("");
        setInputManifest("");
        alert("Candidate's NFT has minted! Let's Check it at Home screen!")
    }

    return (
        <div className="grid place-items-center w-full">
            <Title name="Add Candidate" />
            <div className="my-3 text-2xl text-red-400">Add candidate who you think must be a leader!</div>
            <Input title="Image URI(IPFS Content CID)" hint="QmT..." className="mb-3" input={inputCID} setInput={(event) => setInputCID(event.target.value)} />
            <div className="mb-6"></div>
            <Input title="Name" hint="Robert Downey Jr." input={inputName} setInput={(event) => setInputName(event.target.value)} />
            <div className="mb-6"></div>
            <Input title="Manifest" hint="I'm gonna prosper this city with web3 tech!" input={inputManifest} setInput={(event) => setInputManifest(event.target.value)} />
            <div className="mb-6"></div>
            {isLoading ? (
                <div>
                    <button className="button bg-gray-300" disabled>Add</button>
                    <div className="md-24 text-gray-400">minting ...</div>
                </div>
            ) : (
                <button className="button" onClick={async () => addCandidate()}>Add</button>
            )}
        </div>

    )
}
export default Candidate;