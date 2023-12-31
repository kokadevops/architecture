import { classNames } from "shared/lib/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

export enum themeButton {
    CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: themeButton;
}
export const Button: FC<ButtonProps> = (props) => {
    const { className, theme, children, ...otherProps } = props;
    return (
        <button
            className={classNames(cls.Button, { [cls[theme]]: true }, [])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
