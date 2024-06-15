import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

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

                    <TotalBalanceBox />
                </header>
            </div>
        </section>
    );
}

export default Home
