export interface Action {
    type: string;
    payload?: any;
}

export interface Reducer<T> {
    //() -> porque es una función
    ( state: T, action: Action ): T
}