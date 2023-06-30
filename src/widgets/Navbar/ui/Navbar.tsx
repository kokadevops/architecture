import { classNames } from "shared/lib/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitch } from "shared/ui/themeSwitch";

interface NavbarProps {
    className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [])}>
            <ThemeSwitch />
            <div className={cls.links}></div>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                className={cls.mainLink}
                to={"/"}
            >
                main
            </AppLink>
            <br />
            <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
                about
            </AppLink>
        </div>
    );
};
