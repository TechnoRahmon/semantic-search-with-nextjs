'use client'
import React, { ChangeEventHandler, FormEventHandler, useState } from 'react'
export type IPromptInput = {
    onSubmit: (newMessage: string) => void;
    isLoading: boolean;
}
export default function PromptInput({
    onSubmit,
    isLoading
}: IPromptInput) {
    const [newMessage, setNewMessage] = useState('');

    const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setNewMessage(event.target.value);
    };

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        if (newMessage.length > 0) {
            onSubmit(newMessage);
            setNewMessage('');

            // Scroll to the bottom of the page
            window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
        }
    };

    return (
        <form className="flex items-center justify-center lg:w-3/4 w-full py-4 bg-gray-100 " onSubmit={handleSubmit}>
            <input
                type="text"
                value={newMessage}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 border"
                placeholder="Type your message..."
            />
            <button type="submit" disabled={!newMessage.length || isLoading} className="disabled:bg-rose-300 ml-4 bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-700">
                Send
            </button>
        </form>

    )
}
