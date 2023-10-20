export type GlobalReducer<T> = (
  state: T,
  event: {
    [EventType in keyof GlobalReducerEvent]: {
      type: EventType;
    } & GlobalReducerEvent[EventType];
  }[keyof GlobalReducerEvent]
) => T;
