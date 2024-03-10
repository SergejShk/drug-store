import { lazy } from "react";

export const ShopPage = lazy(() => import("../../pages/shop/ShopPage"));
export const ProductsByShop = lazy(() => import("../../components/products/ProductsByShop"));
export const CartPage = lazy(() => import("../../pages/cart/CartPage"));
