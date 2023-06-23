import { Counter } from "./Counter";
import "../index.scss";
import { Route, Routes, Link } from "react-router-dom";
import { AboutPageAsync } from "../pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "../pages/MainPage/MainPage.async";
import React, { Suspense } from "react";

const App = () => {
    return (
        <div className="app">
            <Link to={"/"}>to main</Link>
            <Counter />
            <br />
            <Link to={"/about"}>to about</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/about" element={<AboutPageAsync />} />
                    <Route path="/" element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};
export default App;
