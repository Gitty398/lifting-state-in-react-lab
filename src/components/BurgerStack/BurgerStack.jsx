

// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
    return (
        <ul>
            {props.stack.map((ingredient) => {
                return (
                    <li key={ingredient.name} style={{ backgroundColor: ingredient.color }}>
                        {ingredient.name}
                        <button onClick={() => { props.removeFromBurger(ingredient) }}> -
                        </button>
                    </li>);
            })}
        </ul>
    )
};

export default BurgerStack;
