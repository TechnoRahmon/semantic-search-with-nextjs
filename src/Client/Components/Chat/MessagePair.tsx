import React from 'react'
export type IMessage = {
    prompt: string;
    answer: string;
    isLoading: boolean;
}
export default function MessagePair({
    answer,
    prompt,
    isLoading
}: IMessage) {
    return (
        <div key={prompt} className="flex mb-4 flex-col gap-3 lg:w-3/4 w-full mx-auto whitespace-pre-wrap">
            <div className="prompt bg-rose-500 text-white px-4 py-2  rounded-md mr-2 lg:w-1/2 w-full ">
                {prompt}
            </div>
            {isLoading ?
                <span className='text-center'>Loading ...</span>
                :
                <div className="answer border border-rose-400 text-rose-800 ms-auto px-4 py-2 rounded-md mr-2 lg:w-1/2 w-full">{answer}</div>
            }
        </div>
    )
}
