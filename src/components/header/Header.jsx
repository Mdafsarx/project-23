import Profile from "../../assets/images/profile.png"

const Header = () => {
    return (
        <header className="flex items-center  lg:justify-between max-w-6xl mx-auto my-5 md:border-b-2 pb-4">
            <h2 className="lg:text-2xl font-bold">Knowledge Cafe</h2>
            <img src={Profile} alt="" className="hidden md:flex" />
        </header>
    );
};

export default Header;