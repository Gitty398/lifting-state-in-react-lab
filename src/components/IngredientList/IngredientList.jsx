

// src/components/IngredientList/IngredientList.jsx


const IngredientList = (props) => {
    return (
        <ul>
            {props.ingredients.map((ingredient) => {
                return (
                    <li key={ingredient.name}
                        style={{ backgroundColor: ingredient.color }}>
                        {ingredient.name}
                        <button
                            onClick={() => { props.addToBurger(ingredient) }}>
                            + </button>
                    </li>
                )
            })}
        </ul>
    )
}

export default IngredientList;
