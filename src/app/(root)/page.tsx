import HeaderBox from "@/components/HeaderBox";

export const Home = () => {
    const loggedIn = { firstName: 'Gustavo'}

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox 
                    type="greeting"
                    title="Welcome"
                    user={ loggedIn?.firstName || 'Guest'}
                    subtext="Acess and manage your account and transactions efficiently."
                    />
                </header>
            </div>
        </section>
    );
}

export default Home
