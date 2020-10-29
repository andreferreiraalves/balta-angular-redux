import { Action, createAction, props } from '@ngrx/store'
import { ProductModel } from '../models/product.model';

export enum ActionType {
    Add = "ADD",
    Remove = "REM",
    Clear = "CLE"
}

// export const add = (product: any) => {
//     return <Action>{ type: ActionType.Add, payload: product };
// }

// export const remove = (product: any) => {
//     return <Action>{ type: ActionType.Remove, payload: product };
// }

// export const clear = (product: any) => {
//     return <Action>{ type: ActionType.Clear, payload: null };
// }

export const add = createAction(ActionType.Add, (product: ProductModel) => product);
export const remove = createAction(ActionType.Remove);
export const clear = createAction(ActionType.Clear);