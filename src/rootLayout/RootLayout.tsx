import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { IMeal } from "../interfaces/IMeals";

interface IRootLayoutProps {
    setRecipeMeal: React.Dispatch<React.SetStateAction<IMeal | null>>
}

const RootLayout: React.FC<IRootLayoutProps> = ({ setRecipeMeal }) => {
    return (  
        <>
        <Header setRecipeMeal={setRecipeMeal} />
        <Outlet />
        <Footer />
        </>
    );
}

export default RootLayout;