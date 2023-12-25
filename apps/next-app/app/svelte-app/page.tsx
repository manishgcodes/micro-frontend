"use client"
import { ChangeEvent, LegacyRef, useRef } from 'react';
import './sveltePage.css';

export default async function Page() {
    const ref = useRef<HTMLIFrameElement>();

    const sendMessage = (message: string) => {
        const iframe = ref.current;
        iframe?.contentWindow?.postMessage(message, "*");
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        sendMessage(value);
    }
    return (
        <div className="svelte-page">
            <input name="message" placeholder='next-js input' onChange={handleChange} />
            <iframe
                ref={ref as LegacyRef<HTMLIFrameElement>}
                src="http://localhost:5173/"
                className="iframe-container"
                title="Iframe Example"
            />
        </div>
    );
}
