"use client"
import { ChangeEvent, LegacyRef, useEffect, useRef } from 'react';
import Cookies from "js-cookie";
import './reactPage.css';

export default async function Page() {

    const ref = useRef<HTMLIFrameElement>();

    useEffect(() => {
        Cookies.set("Test-1", "with config", {
            sameSite: "None",
            secure: true,
        })
        Cookies.set("Test-2", "No config")
    }, [])

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
                src="https://react-app-eta-roan.vercel.app/"
                // src="http://localhost:4202"
                className="iframe-container"
                title="Iframe Example"
            />
        </div>
    );
}
