import { classNames } from "shared/lib/classNames";
import cls from "./ThemeSwitch.module.scss";
import { useTheme, Theme } from "app/providers/ThemeProvider";
import Lightmode from "shared/assets/icons/light-bulb.svg";
import Darkmode from "shared/assets/icons/dark-bulb.svg";
import { Button, themeButton } from "shared/ui/Button/Button";

interface ThemeSwitchProps {
    className?: string;
}
export const ThemeSwitch = ({ className }: ThemeSwitchProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={themeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitch, {}, [className])}
        >
            {theme === Theme.DARK ? <Darkmode /> : <Lightmode />}
        </Button>
    );
};
