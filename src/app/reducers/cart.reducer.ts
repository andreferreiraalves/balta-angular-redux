import { createReducer, on } from '@ngrx/store';
import { ActionType, add, clear, remove } from '../actions/cart.action';
import { CartModel } from '../models/cart.model';
import { ProductModel } from '../models/product.model';

export const cart = new CartModel();

const _cartReducer = createReducer(
    cart,
    on(add, (state, payload) => {
        // state.products.push(payload.product);
        // state.total = calculateTotal(state.products);
        // state.add(payload.product);
        console.log(payload);
        state.products.push(payload);

        return state;
    }),
    on(remove, (state) => {
        // const index = state.products.indexOf(action.payload);
        // state.products.splice(index, 1);
        // state.total = calculateTotal(state.products);

        // console.log(state);

        return state;
    }),
    on(clear, (state) => {
        return state;
    })
)

export function cartReducer(state, action) {
    return _cartReducer(state, action);
}

// export function cartReducer(state = cart, action: ActionModel) {
//     switch (action.type) {
//         case ActionType.Add:
//             {
//                 console.log(state.products);
//                 console.log(action.payload);

//                 // state.products.push(action.payload);
//                 state.total = calculateTotal(state.products);

//                 return state;
//             }

//         case ActionType.Remove:
//             {
//                 const index = state.products.indexOf(action.payload);
//                 state.products.splice(index, 1);
//                 state.total = calculateTotal(state.products);

//                 console.log(state);
//                 return state;
//             }

//         case ActionType.Clear:
//             {
//                 state = new CartModel();
//                 state.total = calculateTotal(state.products);

//                 console.log(state);
//                 return state;
//             }

//         default: return state;
//     }
// }

function calculateTotal(products: ProductModel[]): number {
    let total: number = 0;

    products.forEach(product => {
        total += product.price;
    });

    return total;
}