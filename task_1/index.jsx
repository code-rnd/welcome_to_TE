import { Component, memo } from 'react';

// functional component
const FirstComponent = memo(({ name }) => (
    <div>my name is {name}</div>
));

// class component
class SecondComponent extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return !nextProps === nextState;
    }
    render() {
        return (
            <div>my name is {this.props.name}</div>
        )
    }
}

/**
 * Описание:
 * Добавлена мемоизация (func)
 * Указана необходимость следующего реренда на основе изменений состояния и пропсов (class)
 */
