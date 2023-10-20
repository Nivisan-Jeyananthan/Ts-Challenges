type AsArray<T> = T extends any ? Array<T> : never;

/*
 distributive conditional type will iterate over each member
 and apply the given type check on all of them.
 this leaves us with
 string[] | number[]
 instead of an array where both are inside.
*/
type StrArrOrNumArr = AsArray<string | number>;

/*
if we wanted to have an array where we can have both types
we can "disable" the distributive check by simply adding square
brackets.
*/
type AsNonDistArray<T> = [T] extends [any] ? T[] : never;
type StrArrOrNumNonDist = AsNonDistArray<string | number>;
//    ^?
