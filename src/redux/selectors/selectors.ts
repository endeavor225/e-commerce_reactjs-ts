import { GlobalState } from "./types/GlobalState"


export const getAuthState = (state: GlobalState) => state.auth.isAuth

export const getAuthToken = (state: GlobalState) => state.auth.token

export const getCart = (state: GlobalState) => state.cart

export const getNotification = (state: GlobalState) => state.datas.notifications

export const getWishList = (state: GlobalState) => state.storage.wishlists

export const getCompareList = (state: GlobalState) => state.storage.comparelists 

export const getSuscribed = (state: GlobalState) => state.storage?.isSuscribed 
