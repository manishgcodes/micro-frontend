export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Welcome to Remix</h1>
      <iframe
        src="http://tapp-local.tappstr.com:4200/"
        className="iframe-container"
        title="Iframe Example"
        style={{ height: "100vh", width: "100vw" }}
      />
    </div>
  );
}
