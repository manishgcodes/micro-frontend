"use client"
import { ChangeEvent, LegacyRef, useRef } from 'react';
import './chatPage.css';

export default async function Page() {

    const ref = useRef<HTMLIFrameElement>();

    const sendMessage = (token: string) => {
        const iframe = ref.current;
        iframe?.contentWindow?.postMessage(token, "*");
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        sendMessage(value);
    }


    return (
        <div className="chat-page">
            <input name="token" placeholder='authorization-token' onChange={handleChange} />
            <iframe
                ref={ref as LegacyRef<HTMLIFrameElement>}
                src="http://localhost:5173/"
                className="iframe-container"
                title="Iframe Example"
            />
        </div>
    );
}
