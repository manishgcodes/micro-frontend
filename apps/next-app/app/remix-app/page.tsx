import './remixPage.css';

export default async function Page() {
    return (
        <div className="remix-page">
            <iframe
                src="http://localhost:4203/"
                className="iframe-container"
                title="Iframe Example"
            />
        </div>
    );
}
