import { Routes, Route } from "react-router-dom";
import Dogs from "../pages/dogs";
import Register from "../pages/register";


function Ways() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Register />} />
                <Route exact path="/dogs" element={<Dogs />} />
            </Routes>
        </>
    )
}

export default Ways