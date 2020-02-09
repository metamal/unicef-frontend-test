import {combineReducers} from 'redux';
import {useSelector, TypedUseSelectorHook} from 'react-redux';
import {products} from './mock-data/product-list';
import {
  ADD_ITEM,
  ActionTypes,
  NAVIGATE_TO_CART,
  NAVIGATE_TO_PRODUCTS,
  noop,
} from './actions';

export enum AppState {
  PRODUCTS_VIEW = 'PRODUCTS_VIEW',
  CART_VIEW = 'CART_VIEW',
}

const appReducer = (
  state = AppState.PRODUCTS_VIEW,
  action: ActionTypes = noop,
): AppState => {
  switch (action.type) {
    case NAVIGATE_TO_PRODUCTS:
      return AppState.PRODUCTS_VIEW;
    case NAVIGATE_TO_CART:
      return AppState.CART_VIEW;
  }
  return state;
};

export type CartState = number[];
const makeInitialCartState = (): CartState => products.map(_ => 0);
const initialCartState = makeInitialCartState();

const cartReducer = (
  state = initialCartState,
  action: ActionTypes = noop,
): CartState => {
  switch (action.type) {
    case ADD_ITEM: {
      const newState = [...state];
      newState[action.productIndex] += 1;
      return newState;
    }
  }
  return state;
};

export const rootReducer = combineReducers({
  app: appReducer,
  cart: cartReducer,
});
type RootState = {app: AppState; cart: CartState};
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
