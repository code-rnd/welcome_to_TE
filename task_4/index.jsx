import { Component, createRef, forwardRef } from 'react';

class MainComponent extends Component {
    myRef = createRef(); // create simple ref

    toggleChildVisibility = () => this.myRef.current.toggleButton(); // method to hide or show child component

    render() {
        return (
            <>
                <button onClick={this.toggleChildVisibility}>toggle child component</button>
                <ChildComponent ref={this.myRef} />  {/* set ref for controlling child component */}
            </>
        );
    }
};

const ChildComponent = forwardRef((props,ref) => {
    const [isActive, setIsActive] = useState(true);

    useImperativeHandle(
        ref,
        () => ({ toggleButton: () => setIsActive((prev) => !prev) }),
        []
    );

    return <div ref={ref}>{isActive ? <div>child component</div> : null}</div>;
});

/**
 * Описание:
 * С помощью хука `useImperativeHandle` создаем и дополняем набор общедоступных методов
 * у функционального компонента, для взаимодействия с ними из родительского компонента
 */
