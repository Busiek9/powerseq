import {selector} from "../common/types";
import {Enumerable} from "../enumerable";

export function flatmap<T,TCollection>(source: Iterable<T>, collectionSelector:selector<T, Iterable<TCollection>>) : Iterable<TCollection>;
export function flatmap<T,TCollection, TResult>(source: Iterable<T>, collectionSelector:selector<T, Iterable<TCollection>>, resultSelector: (item:T, collectionItem:TCollection) => TResult) : Iterable<TResult>;
export function* flatmap<T,TCollection, TResult>(source: Iterable<T>, collectionSelector:selector<T, Iterable<TCollection>>, resultSelector?: (item:T, collectionItem:TCollection) => TResult) : Iterable<TResult>{
    var index = 0; 
    if(typeof resultSelector === "undefined"){
        for(let item of source){
            let collection = collectionSelector(item, index++);
            yield* <any> collection;
        }
    }
    else{
        for(let item of source){
            let collection = collectionSelector(item, index++);
            for(let collectionItem of collection){
                yield resultSelector(item, collectionItem);
            }
        }
    }
}
declare module '../enumerable' {
    interface Enumerable<T> {
        flatmap<TCollection>(collectionSelector:selector<T, Iterable<TCollection>>) : Enumerable<TCollection>;
        flatmap<TCollection, TResult>(collectionSelector:selector<T, Iterable<TCollection>>, resultSelector: (item:T, collectionItem:TCollection) => TResult) : Enumerable<TResult>;
    }
}
Enumerable.prototype.flatmap = function<T,TCollection, TResult>(this:Enumerable<T>, collectionSelector:selector<T, Iterable<TCollection>>, resultSelector?: (item:T, collectionItem:TCollection) => TResult) : Enumerable<TResult>{
    return new Enumerable<TResult>(flatmap(this,collectionSelector, resultSelector)); 
};