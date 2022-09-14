export const makeKeyRemover =
  <Key extends string>(keys: Key[]) =>
  <Obj>(obj: Obj): Omit<Object, Key> => {
    return {} as any;
  };

const keyRemover = makeKeyRemover(["a", "b"]);

const newObj = keyRemover({ a: 1, b: 2, c: 3 });
