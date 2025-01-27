import { useSelector } from 'react-redux';

// our redux state
reduxState = {
    isOnline: true,
    userData: {
        name: 'Peter',
        surname: 'Pen'
    }
}

const getUserData = () => useSelector(reduxState => reduxState.userData);
const isEqualityUserData = (prev, next) => JSON.stringify(prev) === JSON.stringify(next)

const MainComponent = () => {
    const userData = useSelector(getUserData, isEqualityUserData); // subscribe and get only userData object

    // ... other code
};

/**
 * Описание:
 * С помощью второго аргумента хука `useSelector` задаем условие строгого равенства контрактов,
 * с которыми хотим работать внутри компонента, игнорируя остальные изменения
 */
