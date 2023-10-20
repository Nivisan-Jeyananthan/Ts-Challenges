import { type GlobalReducer} from './Types'

declare global {
    interface GlobalReducerEvent {
        ADD_TODO: {
            text:string
        }
    }
}

const todosReducer: GlobalReducer<{todos: {id: string}[]}> = (state,event) => return state; };