const Header = () => {
    return(
        <header className="navbar font-mono bg-base-100">
            <section className="flex-1 pt-1">
                <a href="/" className="pl-4 py-1 text-2xl font-bold">
                <img
                    id="logo-image"
                    className="inline pb-1 pr-2"
                    src="logo/android-chrome-512x512.png"
                    alt="logo"
                    width={40}
                />
                artemis
                </a>
            </section>
        </header>
    );
}

export default Header;