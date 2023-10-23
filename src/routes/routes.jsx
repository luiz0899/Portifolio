import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gmail from "../components/Gmail";
import MainContext from "../components/MainContext";

export default function MainRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<MainContext/>} />
                <Route path="/Portifolio/Gmail" element={<Gmail />} />
            </Routes>
        </BrowserRouter>
    )
}