"use client"
import { ChangeEvent, LegacyRef, useRef } from 'react';
import './reactPage.css';

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
        <div className="react-page">
            <input name="message" placeholder='next-js input' onChange={handleChange} />
            <iframe
                ref={ref as LegacyRef<HTMLIFrameElement>}
                src="https://micro-frontend-six.vercel.app/"
                // src="http://localhost:4202"
                className="iframe-container"
                title="Iframe Example"
            />
        </div>
    );
}
