export const NO_ACTION = 'NO_ACTION';

interface NoAction {
  type: typeof NO_ACTION;
}

export const noop: NoAction = {type: NO_ACTION};

export const NAVIGATE_TO_CART = 'NAVIGATE_TO_CART';

export interface NavigateToCartAction {
  type: typeof NAVIGATE_TO_CART;
}

export const navigateToCart = (): NavigateToCartAction => ({
  type: NAVIGATE_TO_CART,
});

export const NAVIGATE_TO_PRODUCTS = 'NAVIGATE_TO_PRODUCTS';

export interface NavigateToProductsAction {
  type: typeof NAVIGATE_TO_PRODUCTS;
}

export const navigateToProducts = (): NavigateToProductsAction => ({
  type: NAVIGATE_TO_PRODUCTS,
});

export const ADD_ITEM = 'ADD_ITEM';

export interface AddItemAction {
  type: typeof ADD_ITEM;
  productIndex: number;
}

export const addItem = (productIndex: number): AddItemAction => ({
  type: ADD_ITEM,
  productIndex,
});

export const REMOVE_ITEM = 'REMOVE_ITEM';

export interface RemoveItemAction {
  type: typeof REMOVE_ITEM;
  productIndex: number;
}

export const removeItem = (productIndex: number): RemoveItemAction => ({
  type: REMOVE_ITEM,
  productIndex,
});

export type ActionTypes =
  | AddItemAction
  | NavigateToCartAction
  | NavigateToProductsAction
  | NoAction
  | RemoveItemAction;
