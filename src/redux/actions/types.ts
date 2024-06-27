import { Article } from '../../models/article';
import { Product } from '../../models/product';
import { ADD_NOTIFICATION, ADD_TO_CART, CLEAR_NOTIFICATIONS, CONNECTED, LOGOUT, REMOVE_FROM_CART, REMOVE_NOTIFICATION_ITEM } from './actionTypes';

interface userConnectedData {
    token: string
    userId: string
}

interface CartData {
    product: Product,
    quantity: number
}

export interface CartGlobalState {
    items: Article[],
    quantity: number,
    sub_total: number
}

export interface AuthAction {
    type: typeof CONNECTED | typeof LOGOUT,
    payload: userConnectedData | null
}

export interface CartAction {
    type: typeof ADD_TO_CART | typeof REMOVE_FROM_CART | null,
    payload: CartData | null
}

export interface NotificationItem {
    _id: string
    message: string
    status: string
    timeout: number
}
export interface NotificationData {
    notifications: NotificationItem[]
}
export interface NotificationAction {
    type: typeof ADD_NOTIFICATION | typeof REMOVE_NOTIFICATION_ITEM | typeof CLEAR_NOTIFICATIONS | null,
    payload: NotificationItem | null
}