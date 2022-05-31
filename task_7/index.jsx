import { useState } from "react";

export const MyComponent = ({ mouseEnterCallbak, children }) => {
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
 * Описание:
 * Вся логика трех компонент, ужата в одном, с помощью проброса children
 */
