import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { IMeal } from "../interfaces/IMeals";

interface IRootLayoutProps {
    recipeMeal: IMeal | null,
    setRecipeMeal: React.Dispatch<React.SetStateAction<IMeal | null>>
}

const RootLayout: React.FC<IRootLayoutProps> = ({ recipeMeal, setRecipeMeal }) => {
    return (  
        <>
        <Header recipeMeal={recipeMeal} setRecipeMeal={setRecipeMeal} />
        <Outlet />
        <Footer />
        </>
    );
}

export default RootLayout;