import {basketStateModel} from "./basket.state.model";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {AddProduct} from "../action/AddProduct.action";
import {DelProduct} from "../action/DelProduct";


@State<basketStateModel>({
  name: 'basket',
  defaults: {
    basket: []
  }
})

export class BasketState {
  @Selector()
    static getBasket(state: basketStateModel){
    return state.basket;
  }

  @Action(AddProduct)
    add({getState, patchState}: StateContext<basketStateModel>, {payload}: AddProduct){
    const state = getState();
    patchState({
      basket: [...state.basket, payload]
    });
  }

  @Action(DelProduct)
  del({getState, patchState}: StateContext<basketStateModel>, {payload} : DelProduct){
    const state = getState();
    patchState({
      basket: [...(state.basket.filter(p => !(p.name.match(payload.name))))]
    });
  }
}
