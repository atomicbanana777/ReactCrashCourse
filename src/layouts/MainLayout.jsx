import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
    return(
        <>
            <Navbar />
            <Outlet />
            <ToastContainer />
        </>
    );
}

export default MainLayout;