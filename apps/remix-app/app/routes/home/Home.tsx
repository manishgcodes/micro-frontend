import { ChangeEvent, LegacyRef, useEffect, useRef } from "react";
import Cookies from "js-cookie";

export const Home = () => {

    useEffect(() => {
        Cookies.set("CookieConsent", "true");
        Cookies.set("hostApp", "Remix-js",
            // {
            //     sameSite: "None",
            //     secure: true,
            // }
        )
    }, [])

    const ref = useRef<HTMLIFrameElement>();

    const sendMessage = (message: string) => {
        const iframe = ref.current;
        iframe?.contentWindow?.postMessage(message, "*");
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        sendMessage(value);
    }

    const hostApp = Cookies.get("hostApp")

    return (
        <div className="home-page">
            <h1> I am home page</h1>
            <p>I am hosting:{hostApp}</p>
            <input
                name="message"
                placeholder="Remix Input"
                onChange={handleChange}
                className="remix-message-input"
            />
            <iframe
                ref={ref as LegacyRef<HTMLIFrameElement>}
                // src="http://react-app:4202/"
                src="http://tapp-local.tappstr.com:4200/"
                // src="https://www.beski.in/demo/test-parent.html"
                className="iframe-container"
                title="Iframe Example"
                placeholder="react-app-src"
                allow="*"

            />
        </div>
    )
}