import { useState, memo, useCallback } from 'react';

const MyComponent = memo(({ mouseEnterCallbak, content, imgSrc, imgAlt }) => {
    const [ isActive, setActive ] = useState(false);

    const mouseEnterHandler = useCallback(() => {
        setActive(true);
        mouseEnterCallbak();
    },[mouseEnterCallbak]);

    return (
        <div onMouseEnter={mouseEnterHandler} className={ isActive ? 'active': '' }>
            {content ? <p>BLock2 content: {content}</p> : <img src={imgSrc} alt={imgAlt} />}
        </div>
    )
});

/**
 * Описание:
 * Объединение двух компонентов в один
 */
