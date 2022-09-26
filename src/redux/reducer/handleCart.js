const cart = [];

const handleCart = (state=cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            //Check if product is already on cart
            const exist = state.find((x) => x.id === product.id);
                if(exist) {
                    // Increase the quantity
                    return state.map((x) => 
                    x.id === product.id ? {...x, qty: x.qty + 1} : x
                    );
                } else {
                    const product = action.payload;
                    return [...state, {...product,qty: 1,}]
                }
                break;
            
        case "DELITEM":
            

        default:
            break;
    }
}