import "./styles/index.scss";
import { Route, Routes, Link } from "react-router-dom";
import { AboutPage } from "../pages/AboutPage";
import { MainPage } from "../pages/MainPage";
import { Suspense } from "react";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "../shared/lib/classNames";
import { AppRouter } from "./providers/router";

const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>toggle theme</button>
            <Link to={"/"}>to main</Link>
            <br />
            <Link to={"/about"}>to about</Link>
            <AppRouter />
        </div>
    );
};
export default App;
