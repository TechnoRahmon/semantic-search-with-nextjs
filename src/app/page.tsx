'use client'
import PromptInput from "@/Client/Components/Chat/PromptInput";
import { getChannelName } from "@/server/semanticRouterAction";
import { useState } from "react";


export default function Home() {

  const [isLoading, setLoading] = useState(false);
  const [channelName, setChannelName] = useState('');


  const onSubmit = async (newMessage: string) => {
    setLoading(true);
    const channelName = await getChannelName(newMessage)
    setChannelName(channelName);
    setLoading(false);
  }

  return (
    <>
      <div className="container mx-auto flex-grow flex flex-col items-center  bg-gray-100 h-screen ">
        <div className="container mx-auto flex justify-center">
          <PromptInput onSubmit={onSubmit} isLoading={isLoading} />
        </div>
        <div className="answer border border-rose-400 text-rose-800 px-4 text-center py-2 rounded-md mr-2  w-fit my-auto">
          {isLoading ? <p className="text-2xl mb-2">Loading...</p> :
            channelName.length ?
              <>
                channel name : {channelName}
              </>
              :
              <>
                <h2 className="text-3xl mb-3">Hey! </h2>
                <p className="text-2xl mb-2">Check the semantic of your prompt.</p>
              </>
          }
        </div>
      </div>
    </>
  );
}
