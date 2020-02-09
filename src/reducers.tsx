import {combineReducers} from 'redux';
import {useSelector, TypedUseSelectorHook} from 'react-redux';
import {
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

export const rootReducer = combineReducers({
  app: appReducer,
});
type RootState = {app: AppState};
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
