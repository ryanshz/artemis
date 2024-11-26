const Welcome = () => {
    return(
        <section className="m-8 space-y-8">
            <div className="card bg-base-100 shadow-xl rounded-none flex-initial min-h-screen">
                <article className="space-y-3 m-5">
                <h2 className="font-bold text-xl font-mono">welcome to artemis!</h2>
                <p>a cross-platform note taking and list creation app.</p>
                <p>
                    we're currently using: electron, chromium, node.js, express, tailwind,
                    firebase
                </p>
                </article>
            </div>
        </section>
    );
}

export default Welcome;