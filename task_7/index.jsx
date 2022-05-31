import { useState } from "react";

export const MyComponentFirst = ({ mouseEnterCallbak, children }) => {
    const [isActive, setActive] = useState(false);

    const mouseEnterHandler = () => {
        setActive(true);
        mouseEnterCallbak();
    };

    return (
        <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
            {children}
        </div>
    );
};
/**
 * Описание MyComponentFirst:
 * Вся логика трех компонент, ужата в одном, с помощью проброса children
 */


export const MyComponentSecond = ({ mouseEnterCallbak, children }) => (
    <div onMouseEnter={() => mouseEnterCallbak}>
        {children}
    </div>
);
/**
 * Описание MyComponentSecond:
 * Если флаг isActive служит исключительно для стилизации, то логику я бы вынес в стили, на псевдоэлементы
 */
