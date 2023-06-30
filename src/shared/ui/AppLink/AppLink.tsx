import { classNames } from "shared/lib/classNames";
import cls from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";
import { FC } from "react";

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    RED = "red",
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}
export const AppLink: FC<AppLinkProps> = (props) => {
    const { to, children, theme = AppLinkTheme.PRIMARY, className } = props;
    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, { [cls[theme]]: true }, [
                className,
            ])}
        >
            {children}
        </Link>
    );
};
