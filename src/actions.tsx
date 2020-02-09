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

export type ActionTypes =
  | NavigateToCartAction
  | NavigateToProductsAction
  | NoAction;
