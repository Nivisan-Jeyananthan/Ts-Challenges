export type ReactReducer<TState, TEvent> = (
  state: TState,
  event: {
    [EventType in keyof TEvent]: {
      type: EventType;
    } & TEvent[EventType];
  }[keyof TEvent]
) => TState;

type Todo = {
  ADD_TODO: {
    text: string;
  };
};

const todos: ReactReducer<{ todos: { id: string }[] }, Todo> = (
  state,
  event
) => {
  // autocompletion for addtodo check
  return event.type == "ADD_TODO" ? state : state;
};
