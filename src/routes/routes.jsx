import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gmail from "../components/Gmail";
import MainContext from "../components/MainContext";

export default function MainRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<MainContext />} />
                <Route path="/Gmail" element={<Gmail/>} />
            </Routes>
        </BrowserRouter>
    )
}