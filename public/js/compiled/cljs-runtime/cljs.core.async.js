goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__43469 = arguments.length;
switch (G__43469) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43487 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43487 = (function (f,blockable,meta43488){
this.f = f;
this.blockable = blockable;
this.meta43488 = meta43488;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43489,meta43488__$1){
var self__ = this;
var _43489__$1 = this;
return (new cljs.core.async.t_cljs$core$async43487(self__.f,self__.blockable,meta43488__$1));
}));

(cljs.core.async.t_cljs$core$async43487.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43489){
var self__ = this;
var _43489__$1 = this;
return self__.meta43488;
}));

(cljs.core.async.t_cljs$core$async43487.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43487.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43487.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async43487.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async43487.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta43488","meta43488",-1797550216,null)], null);
}));

(cljs.core.async.t_cljs$core$async43487.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43487.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43487");

(cljs.core.async.t_cljs$core$async43487.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async43487");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43487.
 */
cljs.core.async.__GT_t_cljs$core$async43487 = (function cljs$core$async$__GT_t_cljs$core$async43487(f__$1,blockable__$1,meta43488){
return (new cljs.core.async.t_cljs$core$async43487(f__$1,blockable__$1,meta43488));
});

}

return (new cljs.core.async.t_cljs$core$async43487(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__43536 = arguments.length;
switch (G__43536) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__43542 = arguments.length;
switch (G__43542) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__43552 = arguments.length;
switch (G__43552) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_48433 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_48433) : fn1.call(null,val_48433));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_48433) : fn1.call(null,val_48433));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__43565 = arguments.length;
switch (G__43565) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___48452 = n;
var x_48453 = (0);
while(true){
if((x_48453 < n__4741__auto___48452)){
(a[x_48453] = x_48453);

var G__48454 = (x_48453 + (1));
x_48453 = G__48454;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43605 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43605 = (function (flag,meta43606){
this.flag = flag;
this.meta43606 = meta43606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43607,meta43606__$1){
var self__ = this;
var _43607__$1 = this;
return (new cljs.core.async.t_cljs$core$async43605(self__.flag,meta43606__$1));
}));

(cljs.core.async.t_cljs$core$async43605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43607){
var self__ = this;
var _43607__$1 = this;
return self__.meta43606;
}));

(cljs.core.async.t_cljs$core$async43605.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43605.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43605.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43605.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async43605.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta43606","meta43606",-843054531,null)], null);
}));

(cljs.core.async.t_cljs$core$async43605.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43605");

(cljs.core.async.t_cljs$core$async43605.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async43605");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43605.
 */
cljs.core.async.__GT_t_cljs$core$async43605 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async43605(flag__$1,meta43606){
return (new cljs.core.async.t_cljs$core$async43605(flag__$1,meta43606));
});

}

return (new cljs.core.async.t_cljs$core$async43605(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43637 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43637 = (function (flag,cb,meta43638){
this.flag = flag;
this.cb = cb;
this.meta43638 = meta43638;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43639,meta43638__$1){
var self__ = this;
var _43639__$1 = this;
return (new cljs.core.async.t_cljs$core$async43637(self__.flag,self__.cb,meta43638__$1));
}));

(cljs.core.async.t_cljs$core$async43637.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43639){
var self__ = this;
var _43639__$1 = this;
return self__.meta43638;
}));

(cljs.core.async.t_cljs$core$async43637.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43637.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43637.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43637.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async43637.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta43638","meta43638",1224892076,null)], null);
}));

(cljs.core.async.t_cljs$core$async43637.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43637.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43637");

(cljs.core.async.t_cljs$core$async43637.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async43637");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43637.
 */
cljs.core.async.__GT_t_cljs$core$async43637 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async43637(flag__$1,cb__$1,meta43638){
return (new cljs.core.async.t_cljs$core$async43637(flag__$1,cb__$1,meta43638));
});

}

return (new cljs.core.async.t_cljs$core$async43637(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43669_SHARP_){
var G__43701 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43669_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43701) : fret.call(null,G__43701));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43670_SHARP_){
var G__43708 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43670_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43708) : fret.call(null,G__43708));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__48480 = (i + (1));
i = G__48480;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48485 = arguments.length;
var i__4865__auto___48489 = (0);
while(true){
if((i__4865__auto___48489 < len__4864__auto___48485)){
args__4870__auto__.push((arguments[i__4865__auto___48489]));

var G__48490 = (i__4865__auto___48489 + (1));
i__4865__auto___48489 = G__48490;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43765){
var map__43770 = p__43765;
var map__43770__$1 = cljs.core.__destructure_map(map__43770);
var opts = map__43770__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43735){
var G__43736 = cljs.core.first(seq43735);
var seq43735__$1 = cljs.core.next(seq43735);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43736,seq43735__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__43817 = arguments.length;
switch (G__43817) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__43329__auto___48497 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43330__auto__ = (function (){var switch__42383__auto__ = (function (state_44117){
var state_val_44131 = (state_44117[(1)]);
if((state_val_44131 === (7))){
var inst_44052 = (state_44117[(2)]);
var state_44117__$1 = state_44117;
var statearr_44231_48500 = state_44117__$1;
(statearr_44231_48500[(2)] = inst_44052);

(statearr_44231_48500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44131 === (1))){
var state_44117__$1 = state_44117;
var statearr_44240_48504 = state_44117__$1;
(statearr_44240_48504[(2)] = null);

(statearr_44240_48504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44131 === (4))){
var inst_43977 = (state_44117[(7)]);
var inst_43977__$1 = (state_44117[(2)]);
var inst_44001 = (inst_43977__$1 == null);
var state_44117__$1 = (function (){var statearr_44259 = state_44117;
(statearr_44259[(7)] = inst_43977__$1);

return statearr_44259;
})();
if(cljs.core.truth_(inst_44001)){
var statearr_44261_48505 = state_44117__$1;
(statearr_44261_48505[(1)] = (5));

} else {
var statearr_44264_48506 = state_44117__$1;
(statearr_44264_48506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44131 === (13))){
var state_44117__$1 = state_44117;
var statearr_44278_48507 = state_44117__$1;
(statearr_44278_48507[(2)] = null);

(statearr_44278_48507[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44131 === (6))){
var inst_43977 = (state_44117[(7)]);
var state_44117__$1 = state_44117;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44117__$1,(11),to,inst_43977);
} else {
if((state_val_44131 === (3))){
var inst_44075 = (state_44117[(2)]);
var state_44117__$1 = state_44117;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44117__$1,inst_44075);
} else {
if((state_val_44131 === (12))){
var state_44117__$1 = state_44117;
var statearr_44300_48517 = state_44117__$1;
(statearr_44300_48517[(2)] = null);

(statearr_44300_48517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44131 === (2))){
var state_44117__$1 = state_44117;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44117__$1,(4),from);
} else {
if((state_val_44131 === (11))){
var inst_44028 = (state_44117[(2)]);
var state_44117__$1 = state_44117;
if(cljs.core.truth_(inst_44028)){
var statearr_44314_48520 = state_44117__$1;
(statearr_44314_48520[(1)] = (12));

} else {
var statearr_44316_48521 = state_44117__$1;
(statearr_44316_48521[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44131 === (9))){
var state_44117__$1 = state_44117;
var statearr_44322_48522 = state_44117__$1;
(statearr_44322_48522[(2)] = null);

(statearr_44322_48522[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44131 === (5))){
var state_44117__$1 = state_44117;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44329_48524 = state_44117__$1;
(statearr_44329_48524[(1)] = (8));

} else {
var statearr_44334_48526 = state_44117__$1;
(statearr_44334_48526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44131 === (14))){
var inst_44050 = (state_44117[(2)]);
var state_44117__$1 = state_44117;
var statearr_44342_48528 = state_44117__$1;
(statearr_44342_48528[(2)] = inst_44050);

(statearr_44342_48528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44131 === (10))){
var inst_44025 = (state_44117[(2)]);
var state_44117__$1 = state_44117;
var statearr_44343_48530 = state_44117__$1;
(statearr_44343_48530[(2)] = inst_44025);

(statearr_44343_48530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44131 === (8))){
var inst_44015 = cljs.core.async.close_BANG_(to);
var state_44117__$1 = state_44117;
var statearr_44347_48531 = state_44117__$1;
(statearr_44347_48531[(2)] = inst_44015);

(statearr_44347_48531[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42384__auto__ = null;
var cljs$core$async$state_machine__42384__auto____0 = (function (){
var statearr_44362 = [null,null,null,null,null,null,null,null];
(statearr_44362[(0)] = cljs$core$async$state_machine__42384__auto__);

(statearr_44362[(1)] = (1));

return statearr_44362;
});
var cljs$core$async$state_machine__42384__auto____1 = (function (state_44117){
while(true){
var ret_value__42385__auto__ = (function (){try{while(true){
var result__42386__auto__ = switch__42383__auto__(state_44117);
if(cljs.core.keyword_identical_QMARK_(result__42386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42386__auto__;
}
break;
}
}catch (e44363){var ex__42387__auto__ = e44363;
var statearr_44365_48532 = state_44117;
(statearr_44365_48532[(2)] = ex__42387__auto__);


if(cljs.core.seq((state_44117[(4)]))){
var statearr_44366_48534 = state_44117;
(statearr_44366_48534[(1)] = cljs.core.first((state_44117[(4)])));

} else {
throw ex__42387__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48537 = state_44117;
state_44117 = G__48537;
continue;
} else {
return ret_value__42385__auto__;
}
break;
}
});
cljs$core$async$state_machine__42384__auto__ = function(state_44117){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42384__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42384__auto____1.call(this,state_44117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42384__auto____0;
cljs$core$async$state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42384__auto____1;
return cljs$core$async$state_machine__42384__auto__;
})()
})();
var state__43331__auto__ = (function (){var statearr_44369 = f__43330__auto__();
(statearr_44369[(6)] = c__43329__auto___48497);

return statearr_44369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43331__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__44384){
var vec__44385 = p__44384;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44385,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44385,(1),null);
var job = vec__44385;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__43329__auto___48539 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43330__auto__ = (function (){var switch__42383__auto__ = (function (state_44400){
var state_val_44401 = (state_44400[(1)]);
if((state_val_44401 === (1))){
var state_44400__$1 = state_44400;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44400__$1,(2),res,v);
} else {
if((state_val_44401 === (2))){
var inst_44397 = (state_44400[(2)]);
var inst_44398 = cljs.core.async.close_BANG_(res);
var state_44400__$1 = (function (){var statearr_44409 = state_44400;
(statearr_44409[(7)] = inst_44397);

return statearr_44409;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44400__$1,inst_44398);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42384__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42384__auto____0 = (function (){
var statearr_44417 = [null,null,null,null,null,null,null,null];
(statearr_44417[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42384__auto__);

(statearr_44417[(1)] = (1));

return statearr_44417;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42384__auto____1 = (function (state_44400){
while(true){
var ret_value__42385__auto__ = (function (){try{while(true){
var result__42386__auto__ = switch__42383__auto__(state_44400);
if(cljs.core.keyword_identical_QMARK_(result__42386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42386__auto__;
}
break;
}
}catch (e44420){var ex__42387__auto__ = e44420;
var statearr_44422_48549 = state_44400;
(statearr_44422_48549[(2)] = ex__42387__auto__);


if(cljs.core.seq((state_44400[(4)]))){
var statearr_44426_48550 = state_44400;
(statearr_44426_48550[(1)] = cljs.core.first((state_44400[(4)])));

} else {
throw ex__42387__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48551 = state_44400;
state_44400 = G__48551;
continue;
} else {
return ret_value__42385__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42384__auto__ = function(state_44400){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42384__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42384__auto____1.call(this,state_44400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42384__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42384__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42384__auto__;
})()
})();
var state__43331__auto__ = (function (){var statearr_44430 = f__43330__auto__();
(statearr_44430[(6)] = c__43329__auto___48539);

return statearr_44430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43331__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__44438){
var vec__44439 = p__44438;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44439,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44439,(1),null);
var job = vec__44439;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___48556 = n;
var __48557 = (0);
while(true){
if((__48557 < n__4741__auto___48556)){
var G__44447_48558 = type;
var G__44447_48559__$1 = (((G__44447_48558 instanceof cljs.core.Keyword))?G__44447_48558.fqn:null);
switch (G__44447_48559__$1) {
case "compute":
var c__43329__auto___48561 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48557,c__43329__auto___48561,G__44447_48558,G__44447_48559__$1,n__4741__auto___48556,jobs,results,process,async){
return (function (){
var f__43330__auto__ = (function (){var switch__42383__auto__ = ((function (__48557,c__43329__auto___48561,G__44447_48558,G__44447_48559__$1,n__4741__auto___48556,jobs,results,process,async){
return (function (state_44464){
var state_val_44465 = (state_44464[(1)]);
if((state_val_44465 === (1))){
var state_44464__$1 = state_44464;
var statearr_44481_48562 = state_44464__$1;
(statearr_44481_48562[(2)] = null);

(statearr_44481_48562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (2))){
var state_44464__$1 = state_44464;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44464__$1,(4),jobs);
} else {
if((state_val_44465 === (3))){
var inst_44461 = (state_44464[(2)]);
var state_44464__$1 = state_44464;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44464__$1,inst_44461);
} else {
if((state_val_44465 === (4))){
var inst_44452 = (state_44464[(2)]);
var inst_44453 = process(inst_44452);
var state_44464__$1 = state_44464;
if(cljs.core.truth_(inst_44453)){
var statearr_44491_48564 = state_44464__$1;
(statearr_44491_48564[(1)] = (5));

} else {
var statearr_44492_48565 = state_44464__$1;
(statearr_44492_48565[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (5))){
var state_44464__$1 = state_44464;
var statearr_44493_48566 = state_44464__$1;
(statearr_44493_48566[(2)] = null);

(statearr_44493_48566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (6))){
var state_44464__$1 = state_44464;
var statearr_44497_48567 = state_44464__$1;
(statearr_44497_48567[(2)] = null);

(statearr_44497_48567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44465 === (7))){
var inst_44458 = (state_44464[(2)]);
var state_44464__$1 = state_44464;
var statearr_44499_48570 = state_44464__$1;
(statearr_44499_48570[(2)] = inst_44458);

(statearr_44499_48570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__48557,c__43329__auto___48561,G__44447_48558,G__44447_48559__$1,n__4741__auto___48556,jobs,results,process,async))
;
return ((function (__48557,switch__42383__auto__,c__43329__auto___48561,G__44447_48558,G__44447_48559__$1,n__4741__auto___48556,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42384__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42384__auto____0 = (function (){
var statearr_44500 = [null,null,null,null,null,null,null];
(statearr_44500[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42384__auto__);

(statearr_44500[(1)] = (1));

return statearr_44500;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42384__auto____1 = (function (state_44464){
while(true){
var ret_value__42385__auto__ = (function (){try{while(true){
var result__42386__auto__ = switch__42383__auto__(state_44464);
if(cljs.core.keyword_identical_QMARK_(result__42386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42386__auto__;
}
break;
}
}catch (e44505){var ex__42387__auto__ = e44505;
var statearr_44506_48571 = state_44464;
(statearr_44506_48571[(2)] = ex__42387__auto__);


if(cljs.core.seq((state_44464[(4)]))){
var statearr_44508_48573 = state_44464;
(statearr_44508_48573[(1)] = cljs.core.first((state_44464[(4)])));

} else {
throw ex__42387__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48574 = state_44464;
state_44464 = G__48574;
continue;
} else {
return ret_value__42385__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42384__auto__ = function(state_44464){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42384__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42384__auto____1.call(this,state_44464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42384__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42384__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42384__auto__;
})()
;})(__48557,switch__42383__auto__,c__43329__auto___48561,G__44447_48558,G__44447_48559__$1,n__4741__auto___48556,jobs,results,process,async))
})();
var state__43331__auto__ = (function (){var statearr_44515 = f__43330__auto__();
(statearr_44515[(6)] = c__43329__auto___48561);

return statearr_44515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43331__auto__);
});})(__48557,c__43329__auto___48561,G__44447_48558,G__44447_48559__$1,n__4741__auto___48556,jobs,results,process,async))
);


break;
case "async":
var c__43329__auto___48575 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48557,c__43329__auto___48575,G__44447_48558,G__44447_48559__$1,n__4741__auto___48556,jobs,results,process,async){
return (function (){
var f__43330__auto__ = (function (){var switch__42383__auto__ = ((function (__48557,c__43329__auto___48575,G__44447_48558,G__44447_48559__$1,n__4741__auto___48556,jobs,results,process,async){
return (function (state_44541){
var state_val_44542 = (state_44541[(1)]);
if((state_val_44542 === (1))){
var state_44541__$1 = state_44541;
var statearr_44546_48576 = state_44541__$1;
(statearr_44546_48576[(2)] = null);

(statearr_44546_48576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44542 === (2))){
var state_44541__$1 = state_44541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44541__$1,(4),jobs);
} else {
if((state_val_44542 === (3))){
var inst_44539 = (state_44541[(2)]);
var state_44541__$1 = state_44541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44541__$1,inst_44539);
} else {
if((state_val_44542 === (4))){
var inst_44528 = (state_44541[(2)]);
var inst_44529 = async(inst_44528);
var state_44541__$1 = state_44541;
if(cljs.core.truth_(inst_44529)){
var statearr_44551_48578 = state_44541__$1;
(statearr_44551_48578[(1)] = (5));

} else {
var statearr_44553_48579 = state_44541__$1;
(statearr_44553_48579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44542 === (5))){
var state_44541__$1 = state_44541;
var statearr_44556_48581 = state_44541__$1;
(statearr_44556_48581[(2)] = null);

(statearr_44556_48581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44542 === (6))){
var state_44541__$1 = state_44541;
var statearr_44559_48583 = state_44541__$1;
(statearr_44559_48583[(2)] = null);

(statearr_44559_48583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44542 === (7))){
var inst_44534 = (state_44541[(2)]);
var state_44541__$1 = state_44541;
var statearr_44563_48588 = state_44541__$1;
(statearr_44563_48588[(2)] = inst_44534);

(statearr_44563_48588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__48557,c__43329__auto___48575,G__44447_48558,G__44447_48559__$1,n__4741__auto___48556,jobs,results,process,async))
;
return ((function (__48557,switch__42383__auto__,c__43329__auto___48575,G__44447_48558,G__44447_48559__$1,n__4741__auto___48556,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42384__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42384__auto____0 = (function (){
var statearr_44564 = [null,null,null,null,null,null,null];
(statearr_44564[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42384__auto__);

(statearr_44564[(1)] = (1));

return statearr_44564;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42384__auto____1 = (function (state_44541){
while(true){
var ret_value__42385__auto__ = (function (){try{while(true){
var result__42386__auto__ = switch__42383__auto__(state_44541);
if(cljs.core.keyword_identical_QMARK_(result__42386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42386__auto__;
}
break;
}
}catch (e44565){var ex__42387__auto__ = e44565;
var statearr_44567_48594 = state_44541;
(statearr_44567_48594[(2)] = ex__42387__auto__);


if(cljs.core.seq((state_44541[(4)]))){
var statearr_44573_48595 = state_44541;
(statearr_44573_48595[(1)] = cljs.core.first((state_44541[(4)])));

} else {
throw ex__42387__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48596 = state_44541;
state_44541 = G__48596;
continue;
} else {
return ret_value__42385__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42384__auto__ = function(state_44541){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42384__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42384__auto____1.call(this,state_44541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42384__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42384__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42384__auto__;
})()
;})(__48557,switch__42383__auto__,c__43329__auto___48575,G__44447_48558,G__44447_48559__$1,n__4741__auto___48556,jobs,results,process,async))
})();
var state__43331__auto__ = (function (){var statearr_44578 = f__43330__auto__();
(statearr_44578[(6)] = c__43329__auto___48575);

return statearr_44578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43331__auto__);
});})(__48557,c__43329__auto___48575,G__44447_48558,G__44447_48559__$1,n__4741__auto___48556,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44447_48559__$1)].join('')));

}

var G__48597 = (__48557 + (1));
__48557 = G__48597;
continue;
} else {
}
break;
}

var c__43329__auto___48598 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43330__auto__ = (function (){var switch__42383__auto__ = (function (state_44606){
var state_val_44607 = (state_44606[(1)]);
if((state_val_44607 === (7))){
var inst_44601 = (state_44606[(2)]);
var state_44606__$1 = state_44606;
var statearr_44614_48601 = state_44606__$1;
(statearr_44614_48601[(2)] = inst_44601);

(statearr_44614_48601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44607 === (1))){
var state_44606__$1 = state_44606;
var statearr_44618_48605 = state_44606__$1;
(statearr_44618_48605[(2)] = null);

(statearr_44618_48605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44607 === (4))){
var inst_44583 = (state_44606[(7)]);
var inst_44583__$1 = (state_44606[(2)]);
var inst_44584 = (inst_44583__$1 == null);
var state_44606__$1 = (function (){var statearr_44620 = state_44606;
(statearr_44620[(7)] = inst_44583__$1);

return statearr_44620;
})();
if(cljs.core.truth_(inst_44584)){
var statearr_44621_48614 = state_44606__$1;
(statearr_44621_48614[(1)] = (5));

} else {
var statearr_44622_48615 = state_44606__$1;
(statearr_44622_48615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44607 === (6))){
var inst_44583 = (state_44606[(7)]);
var inst_44588 = (state_44606[(8)]);
var inst_44588__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_44589 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44593 = [inst_44583,inst_44588__$1];
var inst_44594 = (new cljs.core.PersistentVector(null,2,(5),inst_44589,inst_44593,null));
var state_44606__$1 = (function (){var statearr_44627 = state_44606;
(statearr_44627[(8)] = inst_44588__$1);

return statearr_44627;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44606__$1,(8),jobs,inst_44594);
} else {
if((state_val_44607 === (3))){
var inst_44603 = (state_44606[(2)]);
var state_44606__$1 = state_44606;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44606__$1,inst_44603);
} else {
if((state_val_44607 === (2))){
var state_44606__$1 = state_44606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44606__$1,(4),from);
} else {
if((state_val_44607 === (9))){
var inst_44598 = (state_44606[(2)]);
var state_44606__$1 = (function (){var statearr_44630 = state_44606;
(statearr_44630[(9)] = inst_44598);

return statearr_44630;
})();
var statearr_44632_48622 = state_44606__$1;
(statearr_44632_48622[(2)] = null);

(statearr_44632_48622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44607 === (5))){
var inst_44586 = cljs.core.async.close_BANG_(jobs);
var state_44606__$1 = state_44606;
var statearr_44635_48624 = state_44606__$1;
(statearr_44635_48624[(2)] = inst_44586);

(statearr_44635_48624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44607 === (8))){
var inst_44588 = (state_44606[(8)]);
var inst_44596 = (state_44606[(2)]);
var state_44606__$1 = (function (){var statearr_44637 = state_44606;
(statearr_44637[(10)] = inst_44596);

return statearr_44637;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44606__$1,(9),results,inst_44588);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42384__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42384__auto____0 = (function (){
var statearr_44640 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44640[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42384__auto__);

(statearr_44640[(1)] = (1));

return statearr_44640;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42384__auto____1 = (function (state_44606){
while(true){
var ret_value__42385__auto__ = (function (){try{while(true){
var result__42386__auto__ = switch__42383__auto__(state_44606);
if(cljs.core.keyword_identical_QMARK_(result__42386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42386__auto__;
}
break;
}
}catch (e44641){var ex__42387__auto__ = e44641;
var statearr_44642_48631 = state_44606;
(statearr_44642_48631[(2)] = ex__42387__auto__);


if(cljs.core.seq((state_44606[(4)]))){
var statearr_44643_48632 = state_44606;
(statearr_44643_48632[(1)] = cljs.core.first((state_44606[(4)])));

} else {
throw ex__42387__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48633 = state_44606;
state_44606 = G__48633;
continue;
} else {
return ret_value__42385__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42384__auto__ = function(state_44606){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42384__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42384__auto____1.call(this,state_44606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42384__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42384__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42384__auto__;
})()
})();
var state__43331__auto__ = (function (){var statearr_44650 = f__43330__auto__();
(statearr_44650[(6)] = c__43329__auto___48598);

return statearr_44650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43331__auto__);
}));


var c__43329__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43330__auto__ = (function (){var switch__42383__auto__ = (function (state_44692){
var state_val_44693 = (state_44692[(1)]);
if((state_val_44693 === (7))){
var inst_44688 = (state_44692[(2)]);
var state_44692__$1 = state_44692;
var statearr_44698_48636 = state_44692__$1;
(statearr_44698_48636[(2)] = inst_44688);

(statearr_44698_48636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44693 === (20))){
var state_44692__$1 = state_44692;
var statearr_44700_48638 = state_44692__$1;
(statearr_44700_48638[(2)] = null);

(statearr_44700_48638[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44693 === (1))){
var state_44692__$1 = state_44692;
var statearr_44701_48639 = state_44692__$1;
(statearr_44701_48639[(2)] = null);

(statearr_44701_48639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44693 === (4))){
var inst_44654 = (state_44692[(7)]);
var inst_44654__$1 = (state_44692[(2)]);
var inst_44655 = (inst_44654__$1 == null);
var state_44692__$1 = (function (){var statearr_44705 = state_44692;
(statearr_44705[(7)] = inst_44654__$1);

return statearr_44705;
})();
if(cljs.core.truth_(inst_44655)){
var statearr_44706_48646 = state_44692__$1;
(statearr_44706_48646[(1)] = (5));

} else {
var statearr_44707_48647 = state_44692__$1;
(statearr_44707_48647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44693 === (15))){
var inst_44669 = (state_44692[(8)]);
var state_44692__$1 = state_44692;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44692__$1,(18),to,inst_44669);
} else {
if((state_val_44693 === (21))){
var inst_44683 = (state_44692[(2)]);
var state_44692__$1 = state_44692;
var statearr_44710_48648 = state_44692__$1;
(statearr_44710_48648[(2)] = inst_44683);

(statearr_44710_48648[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44693 === (13))){
var inst_44685 = (state_44692[(2)]);
var state_44692__$1 = (function (){var statearr_44711 = state_44692;
(statearr_44711[(9)] = inst_44685);

return statearr_44711;
})();
var statearr_44712_48650 = state_44692__$1;
(statearr_44712_48650[(2)] = null);

(statearr_44712_48650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44693 === (6))){
var inst_44654 = (state_44692[(7)]);
var state_44692__$1 = state_44692;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44692__$1,(11),inst_44654);
} else {
if((state_val_44693 === (17))){
var inst_44678 = (state_44692[(2)]);
var state_44692__$1 = state_44692;
if(cljs.core.truth_(inst_44678)){
var statearr_44719_48655 = state_44692__$1;
(statearr_44719_48655[(1)] = (19));

} else {
var statearr_44720_48657 = state_44692__$1;
(statearr_44720_48657[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44693 === (3))){
var inst_44690 = (state_44692[(2)]);
var state_44692__$1 = state_44692;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44692__$1,inst_44690);
} else {
if((state_val_44693 === (12))){
var inst_44665 = (state_44692[(10)]);
var state_44692__$1 = state_44692;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44692__$1,(14),inst_44665);
} else {
if((state_val_44693 === (2))){
var state_44692__$1 = state_44692;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44692__$1,(4),results);
} else {
if((state_val_44693 === (19))){
var state_44692__$1 = state_44692;
var statearr_44725_48660 = state_44692__$1;
(statearr_44725_48660[(2)] = null);

(statearr_44725_48660[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44693 === (11))){
var inst_44665 = (state_44692[(2)]);
var state_44692__$1 = (function (){var statearr_44727 = state_44692;
(statearr_44727[(10)] = inst_44665);

return statearr_44727;
})();
var statearr_44728_48666 = state_44692__$1;
(statearr_44728_48666[(2)] = null);

(statearr_44728_48666[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44693 === (9))){
var state_44692__$1 = state_44692;
var statearr_44729_48668 = state_44692__$1;
(statearr_44729_48668[(2)] = null);

(statearr_44729_48668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44693 === (5))){
var state_44692__$1 = state_44692;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44730_48670 = state_44692__$1;
(statearr_44730_48670[(1)] = (8));

} else {
var statearr_44732_48671 = state_44692__$1;
(statearr_44732_48671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44693 === (14))){
var inst_44671 = (state_44692[(11)]);
var inst_44669 = (state_44692[(8)]);
var inst_44669__$1 = (state_44692[(2)]);
var inst_44670 = (inst_44669__$1 == null);
var inst_44671__$1 = cljs.core.not(inst_44670);
var state_44692__$1 = (function (){var statearr_44736 = state_44692;
(statearr_44736[(11)] = inst_44671__$1);

(statearr_44736[(8)] = inst_44669__$1);

return statearr_44736;
})();
if(inst_44671__$1){
var statearr_44738_48676 = state_44692__$1;
(statearr_44738_48676[(1)] = (15));

} else {
var statearr_44739_48677 = state_44692__$1;
(statearr_44739_48677[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44693 === (16))){
var inst_44671 = (state_44692[(11)]);
var state_44692__$1 = state_44692;
var statearr_44740_48683 = state_44692__$1;
(statearr_44740_48683[(2)] = inst_44671);

(statearr_44740_48683[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44693 === (10))){
var inst_44662 = (state_44692[(2)]);
var state_44692__$1 = state_44692;
var statearr_44741_48686 = state_44692__$1;
(statearr_44741_48686[(2)] = inst_44662);

(statearr_44741_48686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44693 === (18))){
var inst_44674 = (state_44692[(2)]);
var state_44692__$1 = state_44692;
var statearr_44745_48687 = state_44692__$1;
(statearr_44745_48687[(2)] = inst_44674);

(statearr_44745_48687[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44693 === (8))){
var inst_44658 = cljs.core.async.close_BANG_(to);
var state_44692__$1 = state_44692;
var statearr_44749_48689 = state_44692__$1;
(statearr_44749_48689[(2)] = inst_44658);

(statearr_44749_48689[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42384__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42384__auto____0 = (function (){
var statearr_44756 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44756[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42384__auto__);

(statearr_44756[(1)] = (1));

return statearr_44756;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42384__auto____1 = (function (state_44692){
while(true){
var ret_value__42385__auto__ = (function (){try{while(true){
var result__42386__auto__ = switch__42383__auto__(state_44692);
if(cljs.core.keyword_identical_QMARK_(result__42386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42386__auto__;
}
break;
}
}catch (e44758){var ex__42387__auto__ = e44758;
var statearr_44759_48694 = state_44692;
(statearr_44759_48694[(2)] = ex__42387__auto__);


if(cljs.core.seq((state_44692[(4)]))){
var statearr_44761_48696 = state_44692;
(statearr_44761_48696[(1)] = cljs.core.first((state_44692[(4)])));

} else {
throw ex__42387__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48697 = state_44692;
state_44692 = G__48697;
continue;
} else {
return ret_value__42385__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42384__auto__ = function(state_44692){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42384__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42384__auto____1.call(this,state_44692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42384__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42384__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42384__auto__;
})()
})();
var state__43331__auto__ = (function (){var statearr_44768 = f__43330__auto__();
(statearr_44768[(6)] = c__43329__auto__);

return statearr_44768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43331__auto__);
}));

return c__43329__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__44774 = arguments.length;
switch (G__44774) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__44780 = arguments.length;
switch (G__44780) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__44800 = arguments.length;
switch (G__44800) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__43329__auto___48724 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43330__auto__ = (function (){var switch__42383__auto__ = (function (state_44839){
var state_val_44840 = (state_44839[(1)]);
if((state_val_44840 === (7))){
var inst_44832 = (state_44839[(2)]);
var state_44839__$1 = state_44839;
var statearr_44841_48726 = state_44839__$1;
(statearr_44841_48726[(2)] = inst_44832);

(statearr_44841_48726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44840 === (1))){
var state_44839__$1 = state_44839;
var statearr_44844_48730 = state_44839__$1;
(statearr_44844_48730[(2)] = null);

(statearr_44844_48730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44840 === (4))){
var inst_44810 = (state_44839[(7)]);
var inst_44810__$1 = (state_44839[(2)]);
var inst_44811 = (inst_44810__$1 == null);
var state_44839__$1 = (function (){var statearr_44845 = state_44839;
(statearr_44845[(7)] = inst_44810__$1);

return statearr_44845;
})();
if(cljs.core.truth_(inst_44811)){
var statearr_44848_48733 = state_44839__$1;
(statearr_44848_48733[(1)] = (5));

} else {
var statearr_44850_48734 = state_44839__$1;
(statearr_44850_48734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44840 === (13))){
var state_44839__$1 = state_44839;
var statearr_44851_48736 = state_44839__$1;
(statearr_44851_48736[(2)] = null);

(statearr_44851_48736[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44840 === (6))){
var inst_44810 = (state_44839[(7)]);
var inst_44817 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44810) : p.call(null,inst_44810));
var state_44839__$1 = state_44839;
if(cljs.core.truth_(inst_44817)){
var statearr_44852_48739 = state_44839__$1;
(statearr_44852_48739[(1)] = (9));

} else {
var statearr_44854_48740 = state_44839__$1;
(statearr_44854_48740[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44840 === (3))){
var inst_44834 = (state_44839[(2)]);
var state_44839__$1 = state_44839;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44839__$1,inst_44834);
} else {
if((state_val_44840 === (12))){
var state_44839__$1 = state_44839;
var statearr_44856_48743 = state_44839__$1;
(statearr_44856_48743[(2)] = null);

(statearr_44856_48743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44840 === (2))){
var state_44839__$1 = state_44839;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44839__$1,(4),ch);
} else {
if((state_val_44840 === (11))){
var inst_44810 = (state_44839[(7)]);
var inst_44822 = (state_44839[(2)]);
var state_44839__$1 = state_44839;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44839__$1,(8),inst_44822,inst_44810);
} else {
if((state_val_44840 === (9))){
var state_44839__$1 = state_44839;
var statearr_44862_48747 = state_44839__$1;
(statearr_44862_48747[(2)] = tc);

(statearr_44862_48747[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44840 === (5))){
var inst_44814 = cljs.core.async.close_BANG_(tc);
var inst_44815 = cljs.core.async.close_BANG_(fc);
var state_44839__$1 = (function (){var statearr_44865 = state_44839;
(statearr_44865[(8)] = inst_44814);

return statearr_44865;
})();
var statearr_44866_48750 = state_44839__$1;
(statearr_44866_48750[(2)] = inst_44815);

(statearr_44866_48750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44840 === (14))){
var inst_44829 = (state_44839[(2)]);
var state_44839__$1 = state_44839;
var statearr_44867_48751 = state_44839__$1;
(statearr_44867_48751[(2)] = inst_44829);

(statearr_44867_48751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44840 === (10))){
var state_44839__$1 = state_44839;
var statearr_44868_48753 = state_44839__$1;
(statearr_44868_48753[(2)] = fc);

(statearr_44868_48753[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44840 === (8))){
var inst_44824 = (state_44839[(2)]);
var state_44839__$1 = state_44839;
if(cljs.core.truth_(inst_44824)){
var statearr_44870_48755 = state_44839__$1;
(statearr_44870_48755[(1)] = (12));

} else {
var statearr_44871_48756 = state_44839__$1;
(statearr_44871_48756[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42384__auto__ = null;
var cljs$core$async$state_machine__42384__auto____0 = (function (){
var statearr_44875 = [null,null,null,null,null,null,null,null,null];
(statearr_44875[(0)] = cljs$core$async$state_machine__42384__auto__);

(statearr_44875[(1)] = (1));

return statearr_44875;
});
var cljs$core$async$state_machine__42384__auto____1 = (function (state_44839){
while(true){
var ret_value__42385__auto__ = (function (){try{while(true){
var result__42386__auto__ = switch__42383__auto__(state_44839);
if(cljs.core.keyword_identical_QMARK_(result__42386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42386__auto__;
}
break;
}
}catch (e44876){var ex__42387__auto__ = e44876;
var statearr_44880_48758 = state_44839;
(statearr_44880_48758[(2)] = ex__42387__auto__);


if(cljs.core.seq((state_44839[(4)]))){
var statearr_44881_48762 = state_44839;
(statearr_44881_48762[(1)] = cljs.core.first((state_44839[(4)])));

} else {
throw ex__42387__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48764 = state_44839;
state_44839 = G__48764;
continue;
} else {
return ret_value__42385__auto__;
}
break;
}
});
cljs$core$async$state_machine__42384__auto__ = function(state_44839){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42384__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42384__auto____1.call(this,state_44839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42384__auto____0;
cljs$core$async$state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42384__auto____1;
return cljs$core$async$state_machine__42384__auto__;
})()
})();
var state__43331__auto__ = (function (){var statearr_44884 = f__43330__auto__();
(statearr_44884[(6)] = c__43329__auto___48724);

return statearr_44884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43331__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__43329__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43330__auto__ = (function (){var switch__42383__auto__ = (function (state_44920){
var state_val_44921 = (state_44920[(1)]);
if((state_val_44921 === (7))){
var inst_44916 = (state_44920[(2)]);
var state_44920__$1 = state_44920;
var statearr_44926_48772 = state_44920__$1;
(statearr_44926_48772[(2)] = inst_44916);

(statearr_44926_48772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44921 === (1))){
var inst_44897 = init;
var inst_44898 = inst_44897;
var state_44920__$1 = (function (){var statearr_44929 = state_44920;
(statearr_44929[(7)] = inst_44898);

return statearr_44929;
})();
var statearr_44930_48778 = state_44920__$1;
(statearr_44930_48778[(2)] = null);

(statearr_44930_48778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44921 === (4))){
var inst_44901 = (state_44920[(8)]);
var inst_44901__$1 = (state_44920[(2)]);
var inst_44902 = (inst_44901__$1 == null);
var state_44920__$1 = (function (){var statearr_44932 = state_44920;
(statearr_44932[(8)] = inst_44901__$1);

return statearr_44932;
})();
if(cljs.core.truth_(inst_44902)){
var statearr_44934_48782 = state_44920__$1;
(statearr_44934_48782[(1)] = (5));

} else {
var statearr_44936_48783 = state_44920__$1;
(statearr_44936_48783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44921 === (6))){
var inst_44905 = (state_44920[(9)]);
var inst_44898 = (state_44920[(7)]);
var inst_44901 = (state_44920[(8)]);
var inst_44905__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_44898,inst_44901) : f.call(null,inst_44898,inst_44901));
var inst_44906 = cljs.core.reduced_QMARK_(inst_44905__$1);
var state_44920__$1 = (function (){var statearr_44940 = state_44920;
(statearr_44940[(9)] = inst_44905__$1);

return statearr_44940;
})();
if(inst_44906){
var statearr_44941_48808 = state_44920__$1;
(statearr_44941_48808[(1)] = (8));

} else {
var statearr_44942_48809 = state_44920__$1;
(statearr_44942_48809[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44921 === (3))){
var inst_44918 = (state_44920[(2)]);
var state_44920__$1 = state_44920;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44920__$1,inst_44918);
} else {
if((state_val_44921 === (2))){
var state_44920__$1 = state_44920;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44920__$1,(4),ch);
} else {
if((state_val_44921 === (9))){
var inst_44905 = (state_44920[(9)]);
var inst_44898 = inst_44905;
var state_44920__$1 = (function (){var statearr_44943 = state_44920;
(statearr_44943[(7)] = inst_44898);

return statearr_44943;
})();
var statearr_44946_48825 = state_44920__$1;
(statearr_44946_48825[(2)] = null);

(statearr_44946_48825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44921 === (5))){
var inst_44898 = (state_44920[(7)]);
var state_44920__$1 = state_44920;
var statearr_44949_48831 = state_44920__$1;
(statearr_44949_48831[(2)] = inst_44898);

(statearr_44949_48831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44921 === (10))){
var inst_44914 = (state_44920[(2)]);
var state_44920__$1 = state_44920;
var statearr_44950_48838 = state_44920__$1;
(statearr_44950_48838[(2)] = inst_44914);

(statearr_44950_48838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44921 === (8))){
var inst_44905 = (state_44920[(9)]);
var inst_44908 = cljs.core.deref(inst_44905);
var state_44920__$1 = state_44920;
var statearr_44954_48847 = state_44920__$1;
(statearr_44954_48847[(2)] = inst_44908);

(statearr_44954_48847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__42384__auto__ = null;
var cljs$core$async$reduce_$_state_machine__42384__auto____0 = (function (){
var statearr_44955 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44955[(0)] = cljs$core$async$reduce_$_state_machine__42384__auto__);

(statearr_44955[(1)] = (1));

return statearr_44955;
});
var cljs$core$async$reduce_$_state_machine__42384__auto____1 = (function (state_44920){
while(true){
var ret_value__42385__auto__ = (function (){try{while(true){
var result__42386__auto__ = switch__42383__auto__(state_44920);
if(cljs.core.keyword_identical_QMARK_(result__42386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42386__auto__;
}
break;
}
}catch (e44956){var ex__42387__auto__ = e44956;
var statearr_44957_48852 = state_44920;
(statearr_44957_48852[(2)] = ex__42387__auto__);


if(cljs.core.seq((state_44920[(4)]))){
var statearr_44958_48853 = state_44920;
(statearr_44958_48853[(1)] = cljs.core.first((state_44920[(4)])));

} else {
throw ex__42387__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48857 = state_44920;
state_44920 = G__48857;
continue;
} else {
return ret_value__42385__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__42384__auto__ = function(state_44920){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__42384__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__42384__auto____1.call(this,state_44920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__42384__auto____0;
cljs$core$async$reduce_$_state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__42384__auto____1;
return cljs$core$async$reduce_$_state_machine__42384__auto__;
})()
})();
var state__43331__auto__ = (function (){var statearr_44959 = f__43330__auto__();
(statearr_44959[(6)] = c__43329__auto__);

return statearr_44959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43331__auto__);
}));

return c__43329__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__43329__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43330__auto__ = (function (){var switch__42383__auto__ = (function (state_44967){
var state_val_44968 = (state_44967[(1)]);
if((state_val_44968 === (1))){
var inst_44962 = cljs.core.async.reduce(f__$1,init,ch);
var state_44967__$1 = state_44967;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44967__$1,(2),inst_44962);
} else {
if((state_val_44968 === (2))){
var inst_44964 = (state_44967[(2)]);
var inst_44965 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_44964) : f__$1.call(null,inst_44964));
var state_44967__$1 = state_44967;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44967__$1,inst_44965);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__42384__auto__ = null;
var cljs$core$async$transduce_$_state_machine__42384__auto____0 = (function (){
var statearr_44982 = [null,null,null,null,null,null,null];
(statearr_44982[(0)] = cljs$core$async$transduce_$_state_machine__42384__auto__);

(statearr_44982[(1)] = (1));

return statearr_44982;
});
var cljs$core$async$transduce_$_state_machine__42384__auto____1 = (function (state_44967){
while(true){
var ret_value__42385__auto__ = (function (){try{while(true){
var result__42386__auto__ = switch__42383__auto__(state_44967);
if(cljs.core.keyword_identical_QMARK_(result__42386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42386__auto__;
}
break;
}
}catch (e44984){var ex__42387__auto__ = e44984;
var statearr_44991_48876 = state_44967;
(statearr_44991_48876[(2)] = ex__42387__auto__);


if(cljs.core.seq((state_44967[(4)]))){
var statearr_44992_48877 = state_44967;
(statearr_44992_48877[(1)] = cljs.core.first((state_44967[(4)])));

} else {
throw ex__42387__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48878 = state_44967;
state_44967 = G__48878;
continue;
} else {
return ret_value__42385__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__42384__auto__ = function(state_44967){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__42384__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__42384__auto____1.call(this,state_44967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__42384__auto____0;
cljs$core$async$transduce_$_state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__42384__auto____1;
return cljs$core$async$transduce_$_state_machine__42384__auto__;
})()
})();
var state__43331__auto__ = (function (){var statearr_44993 = f__43330__auto__();
(statearr_44993[(6)] = c__43329__auto__);

return statearr_44993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43331__auto__);
}));

return c__43329__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__44999 = arguments.length;
switch (G__44999) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__43329__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43330__auto__ = (function (){var switch__42383__auto__ = (function (state_45044){
var state_val_45046 = (state_45044[(1)]);
if((state_val_45046 === (7))){
var inst_45024 = (state_45044[(2)]);
var state_45044__$1 = state_45044;
var statearr_45054_48882 = state_45044__$1;
(statearr_45054_48882[(2)] = inst_45024);

(statearr_45054_48882[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45046 === (1))){
var inst_45015 = cljs.core.seq(coll);
var inst_45016 = inst_45015;
var state_45044__$1 = (function (){var statearr_45056 = state_45044;
(statearr_45056[(7)] = inst_45016);

return statearr_45056;
})();
var statearr_45057_48884 = state_45044__$1;
(statearr_45057_48884[(2)] = null);

(statearr_45057_48884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45046 === (4))){
var inst_45016 = (state_45044[(7)]);
var inst_45022 = cljs.core.first(inst_45016);
var state_45044__$1 = state_45044;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45044__$1,(7),ch,inst_45022);
} else {
if((state_val_45046 === (13))){
var inst_45036 = (state_45044[(2)]);
var state_45044__$1 = state_45044;
var statearr_45061_48890 = state_45044__$1;
(statearr_45061_48890[(2)] = inst_45036);

(statearr_45061_48890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45046 === (6))){
var inst_45027 = (state_45044[(2)]);
var state_45044__$1 = state_45044;
if(cljs.core.truth_(inst_45027)){
var statearr_45064_48893 = state_45044__$1;
(statearr_45064_48893[(1)] = (8));

} else {
var statearr_45065_48894 = state_45044__$1;
(statearr_45065_48894[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45046 === (3))){
var inst_45040 = (state_45044[(2)]);
var state_45044__$1 = state_45044;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45044__$1,inst_45040);
} else {
if((state_val_45046 === (12))){
var state_45044__$1 = state_45044;
var statearr_45076_48899 = state_45044__$1;
(statearr_45076_48899[(2)] = null);

(statearr_45076_48899[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45046 === (2))){
var inst_45016 = (state_45044[(7)]);
var state_45044__$1 = state_45044;
if(cljs.core.truth_(inst_45016)){
var statearr_45078_48900 = state_45044__$1;
(statearr_45078_48900[(1)] = (4));

} else {
var statearr_45080_48902 = state_45044__$1;
(statearr_45080_48902[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45046 === (11))){
var inst_45033 = cljs.core.async.close_BANG_(ch);
var state_45044__$1 = state_45044;
var statearr_45085_48908 = state_45044__$1;
(statearr_45085_48908[(2)] = inst_45033);

(statearr_45085_48908[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45046 === (9))){
var state_45044__$1 = state_45044;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45087_48915 = state_45044__$1;
(statearr_45087_48915[(1)] = (11));

} else {
var statearr_45088_48916 = state_45044__$1;
(statearr_45088_48916[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45046 === (5))){
var inst_45016 = (state_45044[(7)]);
var state_45044__$1 = state_45044;
var statearr_45089_48917 = state_45044__$1;
(statearr_45089_48917[(2)] = inst_45016);

(statearr_45089_48917[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45046 === (10))){
var inst_45038 = (state_45044[(2)]);
var state_45044__$1 = state_45044;
var statearr_45090_48918 = state_45044__$1;
(statearr_45090_48918[(2)] = inst_45038);

(statearr_45090_48918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45046 === (8))){
var inst_45016 = (state_45044[(7)]);
var inst_45029 = cljs.core.next(inst_45016);
var inst_45016__$1 = inst_45029;
var state_45044__$1 = (function (){var statearr_45095 = state_45044;
(statearr_45095[(7)] = inst_45016__$1);

return statearr_45095;
})();
var statearr_45098_48919 = state_45044__$1;
(statearr_45098_48919[(2)] = null);

(statearr_45098_48919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42384__auto__ = null;
var cljs$core$async$state_machine__42384__auto____0 = (function (){
var statearr_45099 = [null,null,null,null,null,null,null,null];
(statearr_45099[(0)] = cljs$core$async$state_machine__42384__auto__);

(statearr_45099[(1)] = (1));

return statearr_45099;
});
var cljs$core$async$state_machine__42384__auto____1 = (function (state_45044){
while(true){
var ret_value__42385__auto__ = (function (){try{while(true){
var result__42386__auto__ = switch__42383__auto__(state_45044);
if(cljs.core.keyword_identical_QMARK_(result__42386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42386__auto__;
}
break;
}
}catch (e45102){var ex__42387__auto__ = e45102;
var statearr_45103_48926 = state_45044;
(statearr_45103_48926[(2)] = ex__42387__auto__);


if(cljs.core.seq((state_45044[(4)]))){
var statearr_45104_48927 = state_45044;
(statearr_45104_48927[(1)] = cljs.core.first((state_45044[(4)])));

} else {
throw ex__42387__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48930 = state_45044;
state_45044 = G__48930;
continue;
} else {
return ret_value__42385__auto__;
}
break;
}
});
cljs$core$async$state_machine__42384__auto__ = function(state_45044){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42384__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42384__auto____1.call(this,state_45044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42384__auto____0;
cljs$core$async$state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42384__auto____1;
return cljs$core$async$state_machine__42384__auto__;
})()
})();
var state__43331__auto__ = (function (){var statearr_45107 = f__43330__auto__();
(statearr_45107[(6)] = c__43329__auto__);

return statearr_45107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43331__auto__);
}));

return c__43329__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__45118 = arguments.length;
switch (G__45118) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_48946 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_48946(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_48950 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_48950(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_48957 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_48957(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_48961 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_48961(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45179 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45179 = (function (ch,cs,meta45180){
this.ch = ch;
this.cs = cs;
this.meta45180 = meta45180;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45181,meta45180__$1){
var self__ = this;
var _45181__$1 = this;
return (new cljs.core.async.t_cljs$core$async45179(self__.ch,self__.cs,meta45180__$1));
}));

(cljs.core.async.t_cljs$core$async45179.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45181){
var self__ = this;
var _45181__$1 = this;
return self__.meta45180;
}));

(cljs.core.async.t_cljs$core$async45179.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45179.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45179.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45179.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async45179.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async45179.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async45179.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45180","meta45180",-2024578505,null)], null);
}));

(cljs.core.async.t_cljs$core$async45179.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45179.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45179");

(cljs.core.async.t_cljs$core$async45179.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async45179");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45179.
 */
cljs.core.async.__GT_t_cljs$core$async45179 = (function cljs$core$async$mult_$___GT_t_cljs$core$async45179(ch__$1,cs__$1,meta45180){
return (new cljs.core.async.t_cljs$core$async45179(ch__$1,cs__$1,meta45180));
});

}

return (new cljs.core.async.t_cljs$core$async45179(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__43329__auto___48984 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43330__auto__ = (function (){var switch__42383__auto__ = (function (state_45350){
var state_val_45351 = (state_45350[(1)]);
if((state_val_45351 === (7))){
var inst_45340 = (state_45350[(2)]);
var state_45350__$1 = state_45350;
var statearr_45358_48988 = state_45350__$1;
(statearr_45358_48988[(2)] = inst_45340);

(statearr_45358_48988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (20))){
var inst_45234 = (state_45350[(7)]);
var inst_45246 = cljs.core.first(inst_45234);
var inst_45247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45246,(0),null);
var inst_45248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45246,(1),null);
var state_45350__$1 = (function (){var statearr_45361 = state_45350;
(statearr_45361[(8)] = inst_45247);

return statearr_45361;
})();
if(cljs.core.truth_(inst_45248)){
var statearr_45364_48993 = state_45350__$1;
(statearr_45364_48993[(1)] = (22));

} else {
var statearr_45367_48994 = state_45350__$1;
(statearr_45367_48994[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (27))){
var inst_45201 = (state_45350[(9)]);
var inst_45282 = (state_45350[(10)]);
var inst_45284 = (state_45350[(11)]);
var inst_45290 = (state_45350[(12)]);
var inst_45290__$1 = cljs.core._nth(inst_45282,inst_45284);
var inst_45291 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45290__$1,inst_45201,done);
var state_45350__$1 = (function (){var statearr_45375 = state_45350;
(statearr_45375[(12)] = inst_45290__$1);

return statearr_45375;
})();
if(cljs.core.truth_(inst_45291)){
var statearr_45376_48997 = state_45350__$1;
(statearr_45376_48997[(1)] = (30));

} else {
var statearr_45377_48998 = state_45350__$1;
(statearr_45377_48998[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (1))){
var state_45350__$1 = state_45350;
var statearr_45378_48999 = state_45350__$1;
(statearr_45378_48999[(2)] = null);

(statearr_45378_48999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (24))){
var inst_45234 = (state_45350[(7)]);
var inst_45258 = (state_45350[(2)]);
var inst_45259 = cljs.core.next(inst_45234);
var inst_45211 = inst_45259;
var inst_45212 = null;
var inst_45213 = (0);
var inst_45214 = (0);
var state_45350__$1 = (function (){var statearr_45381 = state_45350;
(statearr_45381[(13)] = inst_45212);

(statearr_45381[(14)] = inst_45214);

(statearr_45381[(15)] = inst_45213);

(statearr_45381[(16)] = inst_45258);

(statearr_45381[(17)] = inst_45211);

return statearr_45381;
})();
var statearr_45387_49000 = state_45350__$1;
(statearr_45387_49000[(2)] = null);

(statearr_45387_49000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (39))){
var state_45350__$1 = state_45350;
var statearr_45398_49003 = state_45350__$1;
(statearr_45398_49003[(2)] = null);

(statearr_45398_49003[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (4))){
var inst_45201 = (state_45350[(9)]);
var inst_45201__$1 = (state_45350[(2)]);
var inst_45203 = (inst_45201__$1 == null);
var state_45350__$1 = (function (){var statearr_45399 = state_45350;
(statearr_45399[(9)] = inst_45201__$1);

return statearr_45399;
})();
if(cljs.core.truth_(inst_45203)){
var statearr_45400_49007 = state_45350__$1;
(statearr_45400_49007[(1)] = (5));

} else {
var statearr_45401_49011 = state_45350__$1;
(statearr_45401_49011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (15))){
var inst_45212 = (state_45350[(13)]);
var inst_45214 = (state_45350[(14)]);
var inst_45213 = (state_45350[(15)]);
var inst_45211 = (state_45350[(17)]);
var inst_45230 = (state_45350[(2)]);
var inst_45231 = (inst_45214 + (1));
var tmp45388 = inst_45212;
var tmp45389 = inst_45213;
var tmp45390 = inst_45211;
var inst_45211__$1 = tmp45390;
var inst_45212__$1 = tmp45388;
var inst_45213__$1 = tmp45389;
var inst_45214__$1 = inst_45231;
var state_45350__$1 = (function (){var statearr_45402 = state_45350;
(statearr_45402[(18)] = inst_45230);

(statearr_45402[(13)] = inst_45212__$1);

(statearr_45402[(14)] = inst_45214__$1);

(statearr_45402[(15)] = inst_45213__$1);

(statearr_45402[(17)] = inst_45211__$1);

return statearr_45402;
})();
var statearr_45404_49022 = state_45350__$1;
(statearr_45404_49022[(2)] = null);

(statearr_45404_49022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (21))){
var inst_45262 = (state_45350[(2)]);
var state_45350__$1 = state_45350;
var statearr_45408_49027 = state_45350__$1;
(statearr_45408_49027[(2)] = inst_45262);

(statearr_45408_49027[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (31))){
var inst_45290 = (state_45350[(12)]);
var inst_45294 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45290);
var state_45350__$1 = state_45350;
var statearr_45411_49036 = state_45350__$1;
(statearr_45411_49036[(2)] = inst_45294);

(statearr_45411_49036[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (32))){
var inst_45282 = (state_45350[(10)]);
var inst_45283 = (state_45350[(19)]);
var inst_45284 = (state_45350[(11)]);
var inst_45281 = (state_45350[(20)]);
var inst_45296 = (state_45350[(2)]);
var inst_45297 = (inst_45284 + (1));
var tmp45405 = inst_45282;
var tmp45406 = inst_45283;
var tmp45407 = inst_45281;
var inst_45281__$1 = tmp45407;
var inst_45282__$1 = tmp45405;
var inst_45283__$1 = tmp45406;
var inst_45284__$1 = inst_45297;
var state_45350__$1 = (function (){var statearr_45412 = state_45350;
(statearr_45412[(21)] = inst_45296);

(statearr_45412[(10)] = inst_45282__$1);

(statearr_45412[(19)] = inst_45283__$1);

(statearr_45412[(11)] = inst_45284__$1);

(statearr_45412[(20)] = inst_45281__$1);

return statearr_45412;
})();
var statearr_45414_49041 = state_45350__$1;
(statearr_45414_49041[(2)] = null);

(statearr_45414_49041[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (40))){
var inst_45313 = (state_45350[(22)]);
var inst_45317 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45313);
var state_45350__$1 = state_45350;
var statearr_45419_49046 = state_45350__$1;
(statearr_45419_49046[(2)] = inst_45317);

(statearr_45419_49046[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (33))){
var inst_45301 = (state_45350[(23)]);
var inst_45303 = cljs.core.chunked_seq_QMARK_(inst_45301);
var state_45350__$1 = state_45350;
if(inst_45303){
var statearr_45420_49048 = state_45350__$1;
(statearr_45420_49048[(1)] = (36));

} else {
var statearr_45421_49049 = state_45350__$1;
(statearr_45421_49049[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (13))){
var inst_45224 = (state_45350[(24)]);
var inst_45227 = cljs.core.async.close_BANG_(inst_45224);
var state_45350__$1 = state_45350;
var statearr_45424_49050 = state_45350__$1;
(statearr_45424_49050[(2)] = inst_45227);

(statearr_45424_49050[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (22))){
var inst_45247 = (state_45350[(8)]);
var inst_45255 = cljs.core.async.close_BANG_(inst_45247);
var state_45350__$1 = state_45350;
var statearr_45426_49053 = state_45350__$1;
(statearr_45426_49053[(2)] = inst_45255);

(statearr_45426_49053[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (36))){
var inst_45301 = (state_45350[(23)]);
var inst_45305 = cljs.core.chunk_first(inst_45301);
var inst_45306 = cljs.core.chunk_rest(inst_45301);
var inst_45308 = cljs.core.count(inst_45305);
var inst_45281 = inst_45306;
var inst_45282 = inst_45305;
var inst_45283 = inst_45308;
var inst_45284 = (0);
var state_45350__$1 = (function (){var statearr_45428 = state_45350;
(statearr_45428[(10)] = inst_45282);

(statearr_45428[(19)] = inst_45283);

(statearr_45428[(11)] = inst_45284);

(statearr_45428[(20)] = inst_45281);

return statearr_45428;
})();
var statearr_45429_49060 = state_45350__$1;
(statearr_45429_49060[(2)] = null);

(statearr_45429_49060[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (41))){
var inst_45301 = (state_45350[(23)]);
var inst_45319 = (state_45350[(2)]);
var inst_45320 = cljs.core.next(inst_45301);
var inst_45281 = inst_45320;
var inst_45282 = null;
var inst_45283 = (0);
var inst_45284 = (0);
var state_45350__$1 = (function (){var statearr_45435 = state_45350;
(statearr_45435[(10)] = inst_45282);

(statearr_45435[(19)] = inst_45283);

(statearr_45435[(11)] = inst_45284);

(statearr_45435[(25)] = inst_45319);

(statearr_45435[(20)] = inst_45281);

return statearr_45435;
})();
var statearr_45436_49065 = state_45350__$1;
(statearr_45436_49065[(2)] = null);

(statearr_45436_49065[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (43))){
var state_45350__$1 = state_45350;
var statearr_45437_49066 = state_45350__$1;
(statearr_45437_49066[(2)] = null);

(statearr_45437_49066[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (29))){
var inst_45328 = (state_45350[(2)]);
var state_45350__$1 = state_45350;
var statearr_45438_49068 = state_45350__$1;
(statearr_45438_49068[(2)] = inst_45328);

(statearr_45438_49068[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (44))){
var inst_45337 = (state_45350[(2)]);
var state_45350__$1 = (function (){var statearr_45439 = state_45350;
(statearr_45439[(26)] = inst_45337);

return statearr_45439;
})();
var statearr_45440_49071 = state_45350__$1;
(statearr_45440_49071[(2)] = null);

(statearr_45440_49071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (6))){
var inst_45273 = (state_45350[(27)]);
var inst_45272 = cljs.core.deref(cs);
var inst_45273__$1 = cljs.core.keys(inst_45272);
var inst_45274 = cljs.core.count(inst_45273__$1);
var inst_45275 = cljs.core.reset_BANG_(dctr,inst_45274);
var inst_45280 = cljs.core.seq(inst_45273__$1);
var inst_45281 = inst_45280;
var inst_45282 = null;
var inst_45283 = (0);
var inst_45284 = (0);
var state_45350__$1 = (function (){var statearr_45445 = state_45350;
(statearr_45445[(10)] = inst_45282);

(statearr_45445[(19)] = inst_45283);

(statearr_45445[(11)] = inst_45284);

(statearr_45445[(28)] = inst_45275);

(statearr_45445[(27)] = inst_45273__$1);

(statearr_45445[(20)] = inst_45281);

return statearr_45445;
})();
var statearr_45447_49077 = state_45350__$1;
(statearr_45447_49077[(2)] = null);

(statearr_45447_49077[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (28))){
var inst_45301 = (state_45350[(23)]);
var inst_45281 = (state_45350[(20)]);
var inst_45301__$1 = cljs.core.seq(inst_45281);
var state_45350__$1 = (function (){var statearr_45449 = state_45350;
(statearr_45449[(23)] = inst_45301__$1);

return statearr_45449;
})();
if(inst_45301__$1){
var statearr_45450_49079 = state_45350__$1;
(statearr_45450_49079[(1)] = (33));

} else {
var statearr_45451_49082 = state_45350__$1;
(statearr_45451_49082[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (25))){
var inst_45283 = (state_45350[(19)]);
var inst_45284 = (state_45350[(11)]);
var inst_45286 = (inst_45284 < inst_45283);
var inst_45287 = inst_45286;
var state_45350__$1 = state_45350;
if(cljs.core.truth_(inst_45287)){
var statearr_45452_49089 = state_45350__$1;
(statearr_45452_49089[(1)] = (27));

} else {
var statearr_45453_49094 = state_45350__$1;
(statearr_45453_49094[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (34))){
var state_45350__$1 = state_45350;
var statearr_45454_49095 = state_45350__$1;
(statearr_45454_49095[(2)] = null);

(statearr_45454_49095[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (17))){
var state_45350__$1 = state_45350;
var statearr_45456_49098 = state_45350__$1;
(statearr_45456_49098[(2)] = null);

(statearr_45456_49098[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (3))){
var inst_45342 = (state_45350[(2)]);
var state_45350__$1 = state_45350;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45350__$1,inst_45342);
} else {
if((state_val_45351 === (12))){
var inst_45268 = (state_45350[(2)]);
var state_45350__$1 = state_45350;
var statearr_45457_49106 = state_45350__$1;
(statearr_45457_49106[(2)] = inst_45268);

(statearr_45457_49106[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (2))){
var state_45350__$1 = state_45350;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45350__$1,(4),ch);
} else {
if((state_val_45351 === (23))){
var state_45350__$1 = state_45350;
var statearr_45458_49107 = state_45350__$1;
(statearr_45458_49107[(2)] = null);

(statearr_45458_49107[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (35))){
var inst_45326 = (state_45350[(2)]);
var state_45350__$1 = state_45350;
var statearr_45460_49108 = state_45350__$1;
(statearr_45460_49108[(2)] = inst_45326);

(statearr_45460_49108[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (19))){
var inst_45234 = (state_45350[(7)]);
var inst_45238 = cljs.core.chunk_first(inst_45234);
var inst_45239 = cljs.core.chunk_rest(inst_45234);
var inst_45240 = cljs.core.count(inst_45238);
var inst_45211 = inst_45239;
var inst_45212 = inst_45238;
var inst_45213 = inst_45240;
var inst_45214 = (0);
var state_45350__$1 = (function (){var statearr_45464 = state_45350;
(statearr_45464[(13)] = inst_45212);

(statearr_45464[(14)] = inst_45214);

(statearr_45464[(15)] = inst_45213);

(statearr_45464[(17)] = inst_45211);

return statearr_45464;
})();
var statearr_45467_49113 = state_45350__$1;
(statearr_45467_49113[(2)] = null);

(statearr_45467_49113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (11))){
var inst_45234 = (state_45350[(7)]);
var inst_45211 = (state_45350[(17)]);
var inst_45234__$1 = cljs.core.seq(inst_45211);
var state_45350__$1 = (function (){var statearr_45473 = state_45350;
(statearr_45473[(7)] = inst_45234__$1);

return statearr_45473;
})();
if(inst_45234__$1){
var statearr_45474_49114 = state_45350__$1;
(statearr_45474_49114[(1)] = (16));

} else {
var statearr_45475_49115 = state_45350__$1;
(statearr_45475_49115[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (9))){
var inst_45270 = (state_45350[(2)]);
var state_45350__$1 = state_45350;
var statearr_45479_49116 = state_45350__$1;
(statearr_45479_49116[(2)] = inst_45270);

(statearr_45479_49116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (5))){
var inst_45209 = cljs.core.deref(cs);
var inst_45210 = cljs.core.seq(inst_45209);
var inst_45211 = inst_45210;
var inst_45212 = null;
var inst_45213 = (0);
var inst_45214 = (0);
var state_45350__$1 = (function (){var statearr_45480 = state_45350;
(statearr_45480[(13)] = inst_45212);

(statearr_45480[(14)] = inst_45214);

(statearr_45480[(15)] = inst_45213);

(statearr_45480[(17)] = inst_45211);

return statearr_45480;
})();
var statearr_45481_49124 = state_45350__$1;
(statearr_45481_49124[(2)] = null);

(statearr_45481_49124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (14))){
var state_45350__$1 = state_45350;
var statearr_45482_49126 = state_45350__$1;
(statearr_45482_49126[(2)] = null);

(statearr_45482_49126[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (45))){
var inst_45334 = (state_45350[(2)]);
var state_45350__$1 = state_45350;
var statearr_45484_49129 = state_45350__$1;
(statearr_45484_49129[(2)] = inst_45334);

(statearr_45484_49129[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (26))){
var inst_45273 = (state_45350[(27)]);
var inst_45330 = (state_45350[(2)]);
var inst_45331 = cljs.core.seq(inst_45273);
var state_45350__$1 = (function (){var statearr_45486 = state_45350;
(statearr_45486[(29)] = inst_45330);

return statearr_45486;
})();
if(inst_45331){
var statearr_45489_49133 = state_45350__$1;
(statearr_45489_49133[(1)] = (42));

} else {
var statearr_45490_49134 = state_45350__$1;
(statearr_45490_49134[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (16))){
var inst_45234 = (state_45350[(7)]);
var inst_45236 = cljs.core.chunked_seq_QMARK_(inst_45234);
var state_45350__$1 = state_45350;
if(inst_45236){
var statearr_45491_49139 = state_45350__$1;
(statearr_45491_49139[(1)] = (19));

} else {
var statearr_45493_49140 = state_45350__$1;
(statearr_45493_49140[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (38))){
var inst_45323 = (state_45350[(2)]);
var state_45350__$1 = state_45350;
var statearr_45494_49141 = state_45350__$1;
(statearr_45494_49141[(2)] = inst_45323);

(statearr_45494_49141[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (30))){
var state_45350__$1 = state_45350;
var statearr_45495_49143 = state_45350__$1;
(statearr_45495_49143[(2)] = null);

(statearr_45495_49143[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (10))){
var inst_45212 = (state_45350[(13)]);
var inst_45214 = (state_45350[(14)]);
var inst_45223 = cljs.core._nth(inst_45212,inst_45214);
var inst_45224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45223,(0),null);
var inst_45225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45223,(1),null);
var state_45350__$1 = (function (){var statearr_45499 = state_45350;
(statearr_45499[(24)] = inst_45224);

return statearr_45499;
})();
if(cljs.core.truth_(inst_45225)){
var statearr_45500_49144 = state_45350__$1;
(statearr_45500_49144[(1)] = (13));

} else {
var statearr_45502_49146 = state_45350__$1;
(statearr_45502_49146[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (18))){
var inst_45265 = (state_45350[(2)]);
var state_45350__$1 = state_45350;
var statearr_45503_49147 = state_45350__$1;
(statearr_45503_49147[(2)] = inst_45265);

(statearr_45503_49147[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (42))){
var state_45350__$1 = state_45350;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45350__$1,(45),dchan);
} else {
if((state_val_45351 === (37))){
var inst_45201 = (state_45350[(9)]);
var inst_45313 = (state_45350[(22)]);
var inst_45301 = (state_45350[(23)]);
var inst_45313__$1 = cljs.core.first(inst_45301);
var inst_45314 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45313__$1,inst_45201,done);
var state_45350__$1 = (function (){var statearr_45505 = state_45350;
(statearr_45505[(22)] = inst_45313__$1);

return statearr_45505;
})();
if(cljs.core.truth_(inst_45314)){
var statearr_45506_49151 = state_45350__$1;
(statearr_45506_49151[(1)] = (39));

} else {
var statearr_45507_49152 = state_45350__$1;
(statearr_45507_49152[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45351 === (8))){
var inst_45214 = (state_45350[(14)]);
var inst_45213 = (state_45350[(15)]);
var inst_45217 = (inst_45214 < inst_45213);
var inst_45218 = inst_45217;
var state_45350__$1 = state_45350;
if(cljs.core.truth_(inst_45218)){
var statearr_45508_49153 = state_45350__$1;
(statearr_45508_49153[(1)] = (10));

} else {
var statearr_45511_49155 = state_45350__$1;
(statearr_45511_49155[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__42384__auto__ = null;
var cljs$core$async$mult_$_state_machine__42384__auto____0 = (function (){
var statearr_45513 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45513[(0)] = cljs$core$async$mult_$_state_machine__42384__auto__);

(statearr_45513[(1)] = (1));

return statearr_45513;
});
var cljs$core$async$mult_$_state_machine__42384__auto____1 = (function (state_45350){
while(true){
var ret_value__42385__auto__ = (function (){try{while(true){
var result__42386__auto__ = switch__42383__auto__(state_45350);
if(cljs.core.keyword_identical_QMARK_(result__42386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42386__auto__;
}
break;
}
}catch (e45515){var ex__42387__auto__ = e45515;
var statearr_45518_49159 = state_45350;
(statearr_45518_49159[(2)] = ex__42387__auto__);


if(cljs.core.seq((state_45350[(4)]))){
var statearr_45519_49162 = state_45350;
(statearr_45519_49162[(1)] = cljs.core.first((state_45350[(4)])));

} else {
throw ex__42387__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49163 = state_45350;
state_45350 = G__49163;
continue;
} else {
return ret_value__42385__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__42384__auto__ = function(state_45350){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__42384__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__42384__auto____1.call(this,state_45350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__42384__auto____0;
cljs$core$async$mult_$_state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__42384__auto____1;
return cljs$core$async$mult_$_state_machine__42384__auto__;
})()
})();
var state__43331__auto__ = (function (){var statearr_45521 = f__43330__auto__();
(statearr_45521[(6)] = c__43329__auto___48984);

return statearr_45521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43331__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__45531 = arguments.length;
switch (G__45531) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_49174 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_49174(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_49180 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_49180(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_49184 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_49184(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_49185 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_49185(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_49191 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_49191(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___49193 = arguments.length;
var i__4865__auto___49194 = (0);
while(true){
if((i__4865__auto___49194 < len__4864__auto___49193)){
args__4870__auto__.push((arguments[i__4865__auto___49194]));

var G__49195 = (i__4865__auto___49194 + (1));
i__4865__auto___49194 = G__49195;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45614){
var map__45615 = p__45614;
var map__45615__$1 = cljs.core.__destructure_map(map__45615);
var opts = map__45615__$1;
var statearr_45618_49198 = state;
(statearr_45618_49198[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts((function (val){
var statearr_45621_49201 = state;
(statearr_45621_49201[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_45622_49203 = state;
(statearr_45622_49203[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45604){
var G__45605 = cljs.core.first(seq45604);
var seq45604__$1 = cljs.core.next(seq45604);
var G__45606 = cljs.core.first(seq45604__$1);
var seq45604__$2 = cljs.core.next(seq45604__$1);
var G__45608 = cljs.core.first(seq45604__$2);
var seq45604__$3 = cljs.core.next(seq45604__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45605,G__45606,G__45608,seq45604__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45638 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45638 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45639){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta45639 = meta45639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45640,meta45639__$1){
var self__ = this;
var _45640__$1 = this;
return (new cljs.core.async.t_cljs$core$async45638(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta45639__$1));
}));

(cljs.core.async.t_cljs$core$async45638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45640){
var self__ = this;
var _45640__$1 = this;
return self__.meta45639;
}));

(cljs.core.async.t_cljs$core$async45638.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45638.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async45638.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45638.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45638.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45638.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45638.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45638.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45638.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta45639","meta45639",-1210383041,null)], null);
}));

(cljs.core.async.t_cljs$core$async45638.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45638.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45638");

(cljs.core.async.t_cljs$core$async45638.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async45638");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45638.
 */
cljs.core.async.__GT_t_cljs$core$async45638 = (function cljs$core$async$mix_$___GT_t_cljs$core$async45638(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45639){
return (new cljs.core.async.t_cljs$core$async45638(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45639));
});

}

return (new cljs.core.async.t_cljs$core$async45638(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43329__auto___49233 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43330__auto__ = (function (){var switch__42383__auto__ = (function (state_45747){
var state_val_45748 = (state_45747[(1)]);
if((state_val_45748 === (7))){
var inst_45701 = (state_45747[(2)]);
var state_45747__$1 = state_45747;
if(cljs.core.truth_(inst_45701)){
var statearr_45772_49234 = state_45747__$1;
(statearr_45772_49234[(1)] = (8));

} else {
var statearr_45773_49235 = state_45747__$1;
(statearr_45773_49235[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45748 === (20))){
var inst_45693 = (state_45747[(7)]);
var state_45747__$1 = state_45747;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45747__$1,(23),out,inst_45693);
} else {
if((state_val_45748 === (1))){
var inst_45675 = calc_state();
var inst_45676 = cljs.core.__destructure_map(inst_45675);
var inst_45677 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45676,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45678 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45676,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45679 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45676,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45680 = inst_45675;
var state_45747__$1 = (function (){var statearr_45792 = state_45747;
(statearr_45792[(8)] = inst_45677);

(statearr_45792[(9)] = inst_45679);

(statearr_45792[(10)] = inst_45680);

(statearr_45792[(11)] = inst_45678);

return statearr_45792;
})();
var statearr_45793_49243 = state_45747__$1;
(statearr_45793_49243[(2)] = null);

(statearr_45793_49243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45748 === (24))){
var inst_45683 = (state_45747[(12)]);
var inst_45680 = inst_45683;
var state_45747__$1 = (function (){var statearr_45805 = state_45747;
(statearr_45805[(10)] = inst_45680);

return statearr_45805;
})();
var statearr_45812_49246 = state_45747__$1;
(statearr_45812_49246[(2)] = null);

(statearr_45812_49246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45748 === (4))){
var inst_45693 = (state_45747[(7)]);
var inst_45695 = (state_45747[(13)]);
var inst_45692 = (state_45747[(2)]);
var inst_45693__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45692,(0),null);
var inst_45694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45692,(1),null);
var inst_45695__$1 = (inst_45693__$1 == null);
var state_45747__$1 = (function (){var statearr_45822 = state_45747;
(statearr_45822[(7)] = inst_45693__$1);

(statearr_45822[(13)] = inst_45695__$1);

(statearr_45822[(14)] = inst_45694);

return statearr_45822;
})();
if(cljs.core.truth_(inst_45695__$1)){
var statearr_45827_49247 = state_45747__$1;
(statearr_45827_49247[(1)] = (5));

} else {
var statearr_45828_49248 = state_45747__$1;
(statearr_45828_49248[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45748 === (15))){
var inst_45721 = (state_45747[(15)]);
var inst_45684 = (state_45747[(16)]);
var inst_45721__$1 = cljs.core.empty_QMARK_(inst_45684);
var state_45747__$1 = (function (){var statearr_45831 = state_45747;
(statearr_45831[(15)] = inst_45721__$1);

return statearr_45831;
})();
if(inst_45721__$1){
var statearr_45835_49251 = state_45747__$1;
(statearr_45835_49251[(1)] = (17));

} else {
var statearr_45836_49252 = state_45747__$1;
(statearr_45836_49252[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45748 === (21))){
var inst_45683 = (state_45747[(12)]);
var inst_45680 = inst_45683;
var state_45747__$1 = (function (){var statearr_45837 = state_45747;
(statearr_45837[(10)] = inst_45680);

return statearr_45837;
})();
var statearr_45843_49253 = state_45747__$1;
(statearr_45843_49253[(2)] = null);

(statearr_45843_49253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45748 === (13))){
var inst_45708 = (state_45747[(2)]);
var inst_45709 = calc_state();
var inst_45680 = inst_45709;
var state_45747__$1 = (function (){var statearr_45848 = state_45747;
(statearr_45848[(17)] = inst_45708);

(statearr_45848[(10)] = inst_45680);

return statearr_45848;
})();
var statearr_45853_49259 = state_45747__$1;
(statearr_45853_49259[(2)] = null);

(statearr_45853_49259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45748 === (22))){
var inst_45741 = (state_45747[(2)]);
var state_45747__$1 = state_45747;
var statearr_45857_49260 = state_45747__$1;
(statearr_45857_49260[(2)] = inst_45741);

(statearr_45857_49260[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45748 === (6))){
var inst_45694 = (state_45747[(14)]);
var inst_45699 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45694,change);
var state_45747__$1 = state_45747;
var statearr_45860_49261 = state_45747__$1;
(statearr_45860_49261[(2)] = inst_45699);

(statearr_45860_49261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45748 === (25))){
var state_45747__$1 = state_45747;
var statearr_45861_49262 = state_45747__$1;
(statearr_45861_49262[(2)] = null);

(statearr_45861_49262[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45748 === (17))){
var inst_45685 = (state_45747[(18)]);
var inst_45694 = (state_45747[(14)]);
var inst_45723 = (inst_45685.cljs$core$IFn$_invoke$arity$1 ? inst_45685.cljs$core$IFn$_invoke$arity$1(inst_45694) : inst_45685.call(null,inst_45694));
var inst_45724 = cljs.core.not(inst_45723);
var state_45747__$1 = state_45747;
var statearr_45866_49267 = state_45747__$1;
(statearr_45866_49267[(2)] = inst_45724);

(statearr_45866_49267[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45748 === (3))){
var inst_45745 = (state_45747[(2)]);
var state_45747__$1 = state_45747;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45747__$1,inst_45745);
} else {
if((state_val_45748 === (12))){
var state_45747__$1 = state_45747;
var statearr_45869_49271 = state_45747__$1;
(statearr_45869_49271[(2)] = null);

(statearr_45869_49271[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45748 === (2))){
var inst_45683 = (state_45747[(12)]);
var inst_45680 = (state_45747[(10)]);
var inst_45683__$1 = cljs.core.__destructure_map(inst_45680);
var inst_45684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45683__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45683__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45683__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45747__$1 = (function (){var statearr_45875 = state_45747;
(statearr_45875[(18)] = inst_45685);

(statearr_45875[(16)] = inst_45684);

(statearr_45875[(12)] = inst_45683__$1);

return statearr_45875;
})();
return cljs.core.async.ioc_alts_BANG_(state_45747__$1,(4),inst_45687);
} else {
if((state_val_45748 === (23))){
var inst_45732 = (state_45747[(2)]);
var state_45747__$1 = state_45747;
if(cljs.core.truth_(inst_45732)){
var statearr_45879_49274 = state_45747__$1;
(statearr_45879_49274[(1)] = (24));

} else {
var statearr_45880_49275 = state_45747__$1;
(statearr_45880_49275[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45748 === (19))){
var inst_45727 = (state_45747[(2)]);
var state_45747__$1 = state_45747;
var statearr_45881_49282 = state_45747__$1;
(statearr_45881_49282[(2)] = inst_45727);

(statearr_45881_49282[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45748 === (11))){
var inst_45694 = (state_45747[(14)]);
var inst_45705 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_45694);
var state_45747__$1 = state_45747;
var statearr_45884_49284 = state_45747__$1;
(statearr_45884_49284[(2)] = inst_45705);

(statearr_45884_49284[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45748 === (9))){
var inst_45694 = (state_45747[(14)]);
var inst_45684 = (state_45747[(16)]);
var inst_45717 = (state_45747[(19)]);
var inst_45717__$1 = (inst_45684.cljs$core$IFn$_invoke$arity$1 ? inst_45684.cljs$core$IFn$_invoke$arity$1(inst_45694) : inst_45684.call(null,inst_45694));
var state_45747__$1 = (function (){var statearr_45886 = state_45747;
(statearr_45886[(19)] = inst_45717__$1);

return statearr_45886;
})();
if(cljs.core.truth_(inst_45717__$1)){
var statearr_45888_49285 = state_45747__$1;
(statearr_45888_49285[(1)] = (14));

} else {
var statearr_45890_49289 = state_45747__$1;
(statearr_45890_49289[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45748 === (5))){
var inst_45695 = (state_45747[(13)]);
var state_45747__$1 = state_45747;
var statearr_45891_49290 = state_45747__$1;
(statearr_45891_49290[(2)] = inst_45695);

(statearr_45891_49290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45748 === (14))){
var inst_45717 = (state_45747[(19)]);
var state_45747__$1 = state_45747;
var statearr_45897_49291 = state_45747__$1;
(statearr_45897_49291[(2)] = inst_45717);

(statearr_45897_49291[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45748 === (26))){
var inst_45737 = (state_45747[(2)]);
var state_45747__$1 = state_45747;
var statearr_45904_49298 = state_45747__$1;
(statearr_45904_49298[(2)] = inst_45737);

(statearr_45904_49298[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45748 === (16))){
var inst_45729 = (state_45747[(2)]);
var state_45747__$1 = state_45747;
if(cljs.core.truth_(inst_45729)){
var statearr_45911_49301 = state_45747__$1;
(statearr_45911_49301[(1)] = (20));

} else {
var statearr_45913_49302 = state_45747__$1;
(statearr_45913_49302[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45748 === (10))){
var inst_45743 = (state_45747[(2)]);
var state_45747__$1 = state_45747;
var statearr_45918_49305 = state_45747__$1;
(statearr_45918_49305[(2)] = inst_45743);

(statearr_45918_49305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45748 === (18))){
var inst_45721 = (state_45747[(15)]);
var state_45747__$1 = state_45747;
var statearr_45919_49306 = state_45747__$1;
(statearr_45919_49306[(2)] = inst_45721);

(statearr_45919_49306[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45748 === (8))){
var inst_45693 = (state_45747[(7)]);
var inst_45703 = (inst_45693 == null);
var state_45747__$1 = state_45747;
if(cljs.core.truth_(inst_45703)){
var statearr_45920_49311 = state_45747__$1;
(statearr_45920_49311[(1)] = (11));

} else {
var statearr_45921_49312 = state_45747__$1;
(statearr_45921_49312[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__42384__auto__ = null;
var cljs$core$async$mix_$_state_machine__42384__auto____0 = (function (){
var statearr_45924 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45924[(0)] = cljs$core$async$mix_$_state_machine__42384__auto__);

(statearr_45924[(1)] = (1));

return statearr_45924;
});
var cljs$core$async$mix_$_state_machine__42384__auto____1 = (function (state_45747){
while(true){
var ret_value__42385__auto__ = (function (){try{while(true){
var result__42386__auto__ = switch__42383__auto__(state_45747);
if(cljs.core.keyword_identical_QMARK_(result__42386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42386__auto__;
}
break;
}
}catch (e45925){var ex__42387__auto__ = e45925;
var statearr_45926_49315 = state_45747;
(statearr_45926_49315[(2)] = ex__42387__auto__);


if(cljs.core.seq((state_45747[(4)]))){
var statearr_45927_49316 = state_45747;
(statearr_45927_49316[(1)] = cljs.core.first((state_45747[(4)])));

} else {
throw ex__42387__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49317 = state_45747;
state_45747 = G__49317;
continue;
} else {
return ret_value__42385__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__42384__auto__ = function(state_45747){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__42384__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__42384__auto____1.call(this,state_45747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__42384__auto____0;
cljs$core$async$mix_$_state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__42384__auto____1;
return cljs$core$async$mix_$_state_machine__42384__auto__;
})()
})();
var state__43331__auto__ = (function (){var statearr_45928 = f__43330__auto__();
(statearr_45928[(6)] = c__43329__auto___49233);

return statearr_45928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43331__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_49319 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_49319(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_49320 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_49320(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_49323 = (function() {
var G__49324 = null;
var G__49324__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__49324__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__49324 = function(p,v){
switch(arguments.length){
case 1:
return G__49324__1.call(this,p);
case 2:
return G__49324__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__49324.cljs$core$IFn$_invoke$arity$1 = G__49324__1;
G__49324.cljs$core$IFn$_invoke$arity$2 = G__49324__2;
return G__49324;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__45986 = arguments.length;
switch (G__45986) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_49323(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_49323(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__46007 = arguments.length;
switch (G__46007) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__46003_SHARP_){
if(cljs.core.truth_((p1__46003_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__46003_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__46003_SHARP_.call(null,topic)))){
return p1__46003_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__46003_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46015 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46015 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46016){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46016 = meta46016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46017,meta46016__$1){
var self__ = this;
var _46017__$1 = this;
return (new cljs.core.async.t_cljs$core$async46015(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46016__$1));
}));

(cljs.core.async.t_cljs$core$async46015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46017){
var self__ = this;
var _46017__$1 = this;
return self__.meta46016;
}));

(cljs.core.async.t_cljs$core$async46015.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46015.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46015.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46015.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async46015.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async46015.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async46015.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async46015.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46016","meta46016",194401731,null)], null);
}));

(cljs.core.async.t_cljs$core$async46015.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46015.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46015");

(cljs.core.async.t_cljs$core$async46015.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async46015");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46015.
 */
cljs.core.async.__GT_t_cljs$core$async46015 = (function cljs$core$async$__GT_t_cljs$core$async46015(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46016){
return (new cljs.core.async.t_cljs$core$async46015(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46016));
});

}

return (new cljs.core.async.t_cljs$core$async46015(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43329__auto___49354 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43330__auto__ = (function (){var switch__42383__auto__ = (function (state_46156){
var state_val_46157 = (state_46156[(1)]);
if((state_val_46157 === (7))){
var inst_46145 = (state_46156[(2)]);
var state_46156__$1 = state_46156;
var statearr_46168_49355 = state_46156__$1;
(statearr_46168_49355[(2)] = inst_46145);

(statearr_46168_49355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46157 === (20))){
var state_46156__$1 = state_46156;
var statearr_46171_49357 = state_46156__$1;
(statearr_46171_49357[(2)] = null);

(statearr_46171_49357[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46157 === (1))){
var state_46156__$1 = state_46156;
var statearr_46183_49358 = state_46156__$1;
(statearr_46183_49358[(2)] = null);

(statearr_46183_49358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46157 === (24))){
var inst_46126 = (state_46156[(7)]);
var inst_46137 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_46126);
var state_46156__$1 = state_46156;
var statearr_46193_49362 = state_46156__$1;
(statearr_46193_49362[(2)] = inst_46137);

(statearr_46193_49362[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46157 === (4))){
var inst_46052 = (state_46156[(8)]);
var inst_46052__$1 = (state_46156[(2)]);
var inst_46054 = (inst_46052__$1 == null);
var state_46156__$1 = (function (){var statearr_46201 = state_46156;
(statearr_46201[(8)] = inst_46052__$1);

return statearr_46201;
})();
if(cljs.core.truth_(inst_46054)){
var statearr_46203_49363 = state_46156__$1;
(statearr_46203_49363[(1)] = (5));

} else {
var statearr_46204_49364 = state_46156__$1;
(statearr_46204_49364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46157 === (15))){
var inst_46108 = (state_46156[(2)]);
var state_46156__$1 = state_46156;
var statearr_46207_49365 = state_46156__$1;
(statearr_46207_49365[(2)] = inst_46108);

(statearr_46207_49365[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46157 === (21))){
var inst_46142 = (state_46156[(2)]);
var state_46156__$1 = (function (){var statearr_46209 = state_46156;
(statearr_46209[(9)] = inst_46142);

return statearr_46209;
})();
var statearr_46210_49367 = state_46156__$1;
(statearr_46210_49367[(2)] = null);

(statearr_46210_49367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46157 === (13))){
var inst_46079 = (state_46156[(10)]);
var inst_46081 = cljs.core.chunked_seq_QMARK_(inst_46079);
var state_46156__$1 = state_46156;
if(inst_46081){
var statearr_46211_49372 = state_46156__$1;
(statearr_46211_49372[(1)] = (16));

} else {
var statearr_46212_49373 = state_46156__$1;
(statearr_46212_49373[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46157 === (22))){
var inst_46134 = (state_46156[(2)]);
var state_46156__$1 = state_46156;
if(cljs.core.truth_(inst_46134)){
var statearr_46224_49374 = state_46156__$1;
(statearr_46224_49374[(1)] = (23));

} else {
var statearr_46225_49375 = state_46156__$1;
(statearr_46225_49375[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46157 === (6))){
var inst_46052 = (state_46156[(8)]);
var inst_46126 = (state_46156[(7)]);
var inst_46129 = (state_46156[(11)]);
var inst_46126__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_46052) : topic_fn.call(null,inst_46052));
var inst_46128 = cljs.core.deref(mults);
var inst_46129__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46128,inst_46126__$1);
var state_46156__$1 = (function (){var statearr_46232 = state_46156;
(statearr_46232[(7)] = inst_46126__$1);

(statearr_46232[(11)] = inst_46129__$1);

return statearr_46232;
})();
if(cljs.core.truth_(inst_46129__$1)){
var statearr_46234_49385 = state_46156__$1;
(statearr_46234_49385[(1)] = (19));

} else {
var statearr_46235_49386 = state_46156__$1;
(statearr_46235_49386[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46157 === (25))){
var inst_46139 = (state_46156[(2)]);
var state_46156__$1 = state_46156;
var statearr_46236_49391 = state_46156__$1;
(statearr_46236_49391[(2)] = inst_46139);

(statearr_46236_49391[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46157 === (17))){
var inst_46079 = (state_46156[(10)]);
var inst_46089 = cljs.core.first(inst_46079);
var inst_46090 = cljs.core.async.muxch_STAR_(inst_46089);
var inst_46091 = cljs.core.async.close_BANG_(inst_46090);
var inst_46102 = cljs.core.next(inst_46079);
var inst_46063 = inst_46102;
var inst_46064 = null;
var inst_46065 = (0);
var inst_46066 = (0);
var state_46156__$1 = (function (){var statearr_46239 = state_46156;
(statearr_46239[(12)] = inst_46065);

(statearr_46239[(13)] = inst_46066);

(statearr_46239[(14)] = inst_46064);

(statearr_46239[(15)] = inst_46091);

(statearr_46239[(16)] = inst_46063);

return statearr_46239;
})();
var statearr_46240_49397 = state_46156__$1;
(statearr_46240_49397[(2)] = null);

(statearr_46240_49397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46157 === (3))){
var inst_46147 = (state_46156[(2)]);
var state_46156__$1 = state_46156;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46156__$1,inst_46147);
} else {
if((state_val_46157 === (12))){
var inst_46113 = (state_46156[(2)]);
var state_46156__$1 = state_46156;
var statearr_46244_49398 = state_46156__$1;
(statearr_46244_49398[(2)] = inst_46113);

(statearr_46244_49398[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46157 === (2))){
var state_46156__$1 = state_46156;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46156__$1,(4),ch);
} else {
if((state_val_46157 === (23))){
var state_46156__$1 = state_46156;
var statearr_46250_49399 = state_46156__$1;
(statearr_46250_49399[(2)] = null);

(statearr_46250_49399[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46157 === (19))){
var inst_46052 = (state_46156[(8)]);
var inst_46129 = (state_46156[(11)]);
var inst_46132 = cljs.core.async.muxch_STAR_(inst_46129);
var state_46156__$1 = state_46156;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46156__$1,(22),inst_46132,inst_46052);
} else {
if((state_val_46157 === (11))){
var inst_46079 = (state_46156[(10)]);
var inst_46063 = (state_46156[(16)]);
var inst_46079__$1 = cljs.core.seq(inst_46063);
var state_46156__$1 = (function (){var statearr_46256 = state_46156;
(statearr_46256[(10)] = inst_46079__$1);

return statearr_46256;
})();
if(inst_46079__$1){
var statearr_46262_49404 = state_46156__$1;
(statearr_46262_49404[(1)] = (13));

} else {
var statearr_46266_49405 = state_46156__$1;
(statearr_46266_49405[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46157 === (9))){
var inst_46115 = (state_46156[(2)]);
var state_46156__$1 = state_46156;
var statearr_46272_49406 = state_46156__$1;
(statearr_46272_49406[(2)] = inst_46115);

(statearr_46272_49406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46157 === (5))){
var inst_46060 = cljs.core.deref(mults);
var inst_46061 = cljs.core.vals(inst_46060);
var inst_46062 = cljs.core.seq(inst_46061);
var inst_46063 = inst_46062;
var inst_46064 = null;
var inst_46065 = (0);
var inst_46066 = (0);
var state_46156__$1 = (function (){var statearr_46276 = state_46156;
(statearr_46276[(12)] = inst_46065);

(statearr_46276[(13)] = inst_46066);

(statearr_46276[(14)] = inst_46064);

(statearr_46276[(16)] = inst_46063);

return statearr_46276;
})();
var statearr_46288_49410 = state_46156__$1;
(statearr_46288_49410[(2)] = null);

(statearr_46288_49410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46157 === (14))){
var state_46156__$1 = state_46156;
var statearr_46296_49411 = state_46156__$1;
(statearr_46296_49411[(2)] = null);

(statearr_46296_49411[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46157 === (16))){
var inst_46079 = (state_46156[(10)]);
var inst_46083 = cljs.core.chunk_first(inst_46079);
var inst_46084 = cljs.core.chunk_rest(inst_46079);
var inst_46085 = cljs.core.count(inst_46083);
var inst_46063 = inst_46084;
var inst_46064 = inst_46083;
var inst_46065 = inst_46085;
var inst_46066 = (0);
var state_46156__$1 = (function (){var statearr_46305 = state_46156;
(statearr_46305[(12)] = inst_46065);

(statearr_46305[(13)] = inst_46066);

(statearr_46305[(14)] = inst_46064);

(statearr_46305[(16)] = inst_46063);

return statearr_46305;
})();
var statearr_46309_49416 = state_46156__$1;
(statearr_46309_49416[(2)] = null);

(statearr_46309_49416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46157 === (10))){
var inst_46065 = (state_46156[(12)]);
var inst_46066 = (state_46156[(13)]);
var inst_46064 = (state_46156[(14)]);
var inst_46063 = (state_46156[(16)]);
var inst_46071 = cljs.core._nth(inst_46064,inst_46066);
var inst_46072 = cljs.core.async.muxch_STAR_(inst_46071);
var inst_46073 = cljs.core.async.close_BANG_(inst_46072);
var inst_46076 = (inst_46066 + (1));
var tmp46293 = inst_46065;
var tmp46294 = inst_46064;
var tmp46295 = inst_46063;
var inst_46063__$1 = tmp46295;
var inst_46064__$1 = tmp46294;
var inst_46065__$1 = tmp46293;
var inst_46066__$1 = inst_46076;
var state_46156__$1 = (function (){var statearr_46323 = state_46156;
(statearr_46323[(12)] = inst_46065__$1);

(statearr_46323[(13)] = inst_46066__$1);

(statearr_46323[(14)] = inst_46064__$1);

(statearr_46323[(17)] = inst_46073);

(statearr_46323[(16)] = inst_46063__$1);

return statearr_46323;
})();
var statearr_46330_49421 = state_46156__$1;
(statearr_46330_49421[(2)] = null);

(statearr_46330_49421[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46157 === (18))){
var inst_46105 = (state_46156[(2)]);
var state_46156__$1 = state_46156;
var statearr_46331_49423 = state_46156__$1;
(statearr_46331_49423[(2)] = inst_46105);

(statearr_46331_49423[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46157 === (8))){
var inst_46065 = (state_46156[(12)]);
var inst_46066 = (state_46156[(13)]);
var inst_46068 = (inst_46066 < inst_46065);
var inst_46069 = inst_46068;
var state_46156__$1 = state_46156;
if(cljs.core.truth_(inst_46069)){
var statearr_46335_49427 = state_46156__$1;
(statearr_46335_49427[(1)] = (10));

} else {
var statearr_46336_49428 = state_46156__$1;
(statearr_46336_49428[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42384__auto__ = null;
var cljs$core$async$state_machine__42384__auto____0 = (function (){
var statearr_46342 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46342[(0)] = cljs$core$async$state_machine__42384__auto__);

(statearr_46342[(1)] = (1));

return statearr_46342;
});
var cljs$core$async$state_machine__42384__auto____1 = (function (state_46156){
while(true){
var ret_value__42385__auto__ = (function (){try{while(true){
var result__42386__auto__ = switch__42383__auto__(state_46156);
if(cljs.core.keyword_identical_QMARK_(result__42386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42386__auto__;
}
break;
}
}catch (e46349){var ex__42387__auto__ = e46349;
var statearr_46350_49433 = state_46156;
(statearr_46350_49433[(2)] = ex__42387__auto__);


if(cljs.core.seq((state_46156[(4)]))){
var statearr_46352_49434 = state_46156;
(statearr_46352_49434[(1)] = cljs.core.first((state_46156[(4)])));

} else {
throw ex__42387__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49435 = state_46156;
state_46156 = G__49435;
continue;
} else {
return ret_value__42385__auto__;
}
break;
}
});
cljs$core$async$state_machine__42384__auto__ = function(state_46156){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42384__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42384__auto____1.call(this,state_46156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42384__auto____0;
cljs$core$async$state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42384__auto____1;
return cljs$core$async$state_machine__42384__auto__;
})()
})();
var state__43331__auto__ = (function (){var statearr_46355 = f__43330__auto__();
(statearr_46355[(6)] = c__43329__auto___49354);

return statearr_46355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43331__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__46370 = arguments.length;
switch (G__46370) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__46410 = arguments.length;
switch (G__46410) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__46441 = arguments.length;
switch (G__46441) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__43329__auto___49456 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43330__auto__ = (function (){var switch__42383__auto__ = (function (state_46586){
var state_val_46587 = (state_46586[(1)]);
if((state_val_46587 === (7))){
var state_46586__$1 = state_46586;
var statearr_46598_49457 = state_46586__$1;
(statearr_46598_49457[(2)] = null);

(statearr_46598_49457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (1))){
var state_46586__$1 = state_46586;
var statearr_46603_49458 = state_46586__$1;
(statearr_46603_49458[(2)] = null);

(statearr_46603_49458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (4))){
var inst_46484 = (state_46586[(7)]);
var inst_46483 = (state_46586[(8)]);
var inst_46486 = (inst_46484 < inst_46483);
var state_46586__$1 = state_46586;
if(cljs.core.truth_(inst_46486)){
var statearr_46622_49460 = state_46586__$1;
(statearr_46622_49460[(1)] = (6));

} else {
var statearr_46623_49462 = state_46586__$1;
(statearr_46623_49462[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (15))){
var inst_46558 = (state_46586[(9)]);
var inst_46567 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_46558);
var state_46586__$1 = state_46586;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46586__$1,(17),out,inst_46567);
} else {
if((state_val_46587 === (13))){
var inst_46558 = (state_46586[(9)]);
var inst_46558__$1 = (state_46586[(2)]);
var inst_46562 = cljs.core.some(cljs.core.nil_QMARK_,inst_46558__$1);
var state_46586__$1 = (function (){var statearr_46627 = state_46586;
(statearr_46627[(9)] = inst_46558__$1);

return statearr_46627;
})();
if(cljs.core.truth_(inst_46562)){
var statearr_46630_49463 = state_46586__$1;
(statearr_46630_49463[(1)] = (14));

} else {
var statearr_46631_49464 = state_46586__$1;
(statearr_46631_49464[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (6))){
var state_46586__$1 = state_46586;
var statearr_46632_49468 = state_46586__$1;
(statearr_46632_49468[(2)] = null);

(statearr_46632_49468[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (17))){
var inst_46569 = (state_46586[(2)]);
var state_46586__$1 = (function (){var statearr_46655 = state_46586;
(statearr_46655[(10)] = inst_46569);

return statearr_46655;
})();
var statearr_46660_49469 = state_46586__$1;
(statearr_46660_49469[(2)] = null);

(statearr_46660_49469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (3))){
var inst_46577 = (state_46586[(2)]);
var state_46586__$1 = state_46586;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46586__$1,inst_46577);
} else {
if((state_val_46587 === (12))){
var _ = (function (){var statearr_46664 = state_46586;
(statearr_46664[(4)] = cljs.core.rest((state_46586[(4)])));

return statearr_46664;
})();
var state_46586__$1 = state_46586;
var ex46646 = (state_46586__$1[(2)]);
var statearr_46667_49472 = state_46586__$1;
(statearr_46667_49472[(5)] = ex46646);


if((ex46646 instanceof Object)){
var statearr_46672_49475 = state_46586__$1;
(statearr_46672_49475[(1)] = (11));

(statearr_46672_49475[(5)] = null);

} else {
throw ex46646;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (2))){
var inst_46482 = cljs.core.reset_BANG_(dctr,cnt);
var inst_46483 = cnt;
var inst_46484 = (0);
var state_46586__$1 = (function (){var statearr_46679 = state_46586;
(statearr_46679[(7)] = inst_46484);

(statearr_46679[(11)] = inst_46482);

(statearr_46679[(8)] = inst_46483);

return statearr_46679;
})();
var statearr_46683_49478 = state_46586__$1;
(statearr_46683_49478[(2)] = null);

(statearr_46683_49478[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (11))){
var inst_46519 = (state_46586[(2)]);
var inst_46522 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_46586__$1 = (function (){var statearr_46687 = state_46586;
(statearr_46687[(12)] = inst_46519);

return statearr_46687;
})();
var statearr_46688_49479 = state_46586__$1;
(statearr_46688_49479[(2)] = inst_46522);

(statearr_46688_49479[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (9))){
var inst_46484 = (state_46586[(7)]);
var _ = (function (){var statearr_46691 = state_46586;
(statearr_46691[(4)] = cljs.core.cons((12),(state_46586[(4)])));

return statearr_46691;
})();
var inst_46537 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_46484) : chs__$1.call(null,inst_46484));
var inst_46538 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_46484) : done.call(null,inst_46484));
var inst_46539 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_46537,inst_46538);
var ___$1 = (function (){var statearr_46692 = state_46586;
(statearr_46692[(4)] = cljs.core.rest((state_46586[(4)])));

return statearr_46692;
})();
var state_46586__$1 = state_46586;
var statearr_46693_49482 = state_46586__$1;
(statearr_46693_49482[(2)] = inst_46539);

(statearr_46693_49482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (5))){
var inst_46550 = (state_46586[(2)]);
var state_46586__$1 = (function (){var statearr_46696 = state_46586;
(statearr_46696[(13)] = inst_46550);

return statearr_46696;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46586__$1,(13),dchan);
} else {
if((state_val_46587 === (14))){
var inst_46564 = cljs.core.async.close_BANG_(out);
var state_46586__$1 = state_46586;
var statearr_46704_49484 = state_46586__$1;
(statearr_46704_49484[(2)] = inst_46564);

(statearr_46704_49484[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (16))){
var inst_46573 = (state_46586[(2)]);
var state_46586__$1 = state_46586;
var statearr_46707_49485 = state_46586__$1;
(statearr_46707_49485[(2)] = inst_46573);

(statearr_46707_49485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (10))){
var inst_46484 = (state_46586[(7)]);
var inst_46542 = (state_46586[(2)]);
var inst_46544 = (inst_46484 + (1));
var inst_46484__$1 = inst_46544;
var state_46586__$1 = (function (){var statearr_46713 = state_46586;
(statearr_46713[(7)] = inst_46484__$1);

(statearr_46713[(14)] = inst_46542);

return statearr_46713;
})();
var statearr_46714_49486 = state_46586__$1;
(statearr_46714_49486[(2)] = null);

(statearr_46714_49486[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46587 === (8))){
var inst_46548 = (state_46586[(2)]);
var state_46586__$1 = state_46586;
var statearr_46716_49487 = state_46586__$1;
(statearr_46716_49487[(2)] = inst_46548);

(statearr_46716_49487[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42384__auto__ = null;
var cljs$core$async$state_machine__42384__auto____0 = (function (){
var statearr_46726 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46726[(0)] = cljs$core$async$state_machine__42384__auto__);

(statearr_46726[(1)] = (1));

return statearr_46726;
});
var cljs$core$async$state_machine__42384__auto____1 = (function (state_46586){
while(true){
var ret_value__42385__auto__ = (function (){try{while(true){
var result__42386__auto__ = switch__42383__auto__(state_46586);
if(cljs.core.keyword_identical_QMARK_(result__42386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42386__auto__;
}
break;
}
}catch (e46738){var ex__42387__auto__ = e46738;
var statearr_46745_49489 = state_46586;
(statearr_46745_49489[(2)] = ex__42387__auto__);


if(cljs.core.seq((state_46586[(4)]))){
var statearr_46746_49490 = state_46586;
(statearr_46746_49490[(1)] = cljs.core.first((state_46586[(4)])));

} else {
throw ex__42387__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49491 = state_46586;
state_46586 = G__49491;
continue;
} else {
return ret_value__42385__auto__;
}
break;
}
});
cljs$core$async$state_machine__42384__auto__ = function(state_46586){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42384__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42384__auto____1.call(this,state_46586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42384__auto____0;
cljs$core$async$state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42384__auto____1;
return cljs$core$async$state_machine__42384__auto__;
})()
})();
var state__43331__auto__ = (function (){var statearr_46761 = f__43330__auto__();
(statearr_46761[(6)] = c__43329__auto___49456);

return statearr_46761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43331__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__46777 = arguments.length;
switch (G__46777) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43329__auto___49494 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43330__auto__ = (function (){var switch__42383__auto__ = (function (state_46826){
var state_val_46827 = (state_46826[(1)]);
if((state_val_46827 === (7))){
var inst_46794 = (state_46826[(7)]);
var inst_46795 = (state_46826[(8)]);
var inst_46794__$1 = (state_46826[(2)]);
var inst_46795__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46794__$1,(0),null);
var inst_46796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46794__$1,(1),null);
var inst_46798 = (inst_46795__$1 == null);
var state_46826__$1 = (function (){var statearr_46844 = state_46826;
(statearr_46844[(7)] = inst_46794__$1);

(statearr_46844[(9)] = inst_46796);

(statearr_46844[(8)] = inst_46795__$1);

return statearr_46844;
})();
if(cljs.core.truth_(inst_46798)){
var statearr_46848_49496 = state_46826__$1;
(statearr_46848_49496[(1)] = (8));

} else {
var statearr_46850_49497 = state_46826__$1;
(statearr_46850_49497[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46827 === (1))){
var inst_46782 = cljs.core.vec(chs);
var inst_46783 = inst_46782;
var state_46826__$1 = (function (){var statearr_46855 = state_46826;
(statearr_46855[(10)] = inst_46783);

return statearr_46855;
})();
var statearr_46858_49498 = state_46826__$1;
(statearr_46858_49498[(2)] = null);

(statearr_46858_49498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46827 === (4))){
var inst_46783 = (state_46826[(10)]);
var state_46826__$1 = state_46826;
return cljs.core.async.ioc_alts_BANG_(state_46826__$1,(7),inst_46783);
} else {
if((state_val_46827 === (6))){
var inst_46819 = (state_46826[(2)]);
var state_46826__$1 = state_46826;
var statearr_46867_49500 = state_46826__$1;
(statearr_46867_49500[(2)] = inst_46819);

(statearr_46867_49500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46827 === (3))){
var inst_46823 = (state_46826[(2)]);
var state_46826__$1 = state_46826;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46826__$1,inst_46823);
} else {
if((state_val_46827 === (2))){
var inst_46783 = (state_46826[(10)]);
var inst_46785 = cljs.core.count(inst_46783);
var inst_46786 = (inst_46785 > (0));
var state_46826__$1 = state_46826;
if(cljs.core.truth_(inst_46786)){
var statearr_46870_49503 = state_46826__$1;
(statearr_46870_49503[(1)] = (4));

} else {
var statearr_46871_49505 = state_46826__$1;
(statearr_46871_49505[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46827 === (11))){
var inst_46783 = (state_46826[(10)]);
var inst_46810 = (state_46826[(2)]);
var tmp46868 = inst_46783;
var inst_46783__$1 = tmp46868;
var state_46826__$1 = (function (){var statearr_46874 = state_46826;
(statearr_46874[(10)] = inst_46783__$1);

(statearr_46874[(11)] = inst_46810);

return statearr_46874;
})();
var statearr_46875_49507 = state_46826__$1;
(statearr_46875_49507[(2)] = null);

(statearr_46875_49507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46827 === (9))){
var inst_46795 = (state_46826[(8)]);
var state_46826__$1 = state_46826;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46826__$1,(11),out,inst_46795);
} else {
if((state_val_46827 === (5))){
var inst_46817 = cljs.core.async.close_BANG_(out);
var state_46826__$1 = state_46826;
var statearr_46887_49509 = state_46826__$1;
(statearr_46887_49509[(2)] = inst_46817);

(statearr_46887_49509[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46827 === (10))){
var inst_46813 = (state_46826[(2)]);
var state_46826__$1 = state_46826;
var statearr_46889_49510 = state_46826__$1;
(statearr_46889_49510[(2)] = inst_46813);

(statearr_46889_49510[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46827 === (8))){
var inst_46794 = (state_46826[(7)]);
var inst_46783 = (state_46826[(10)]);
var inst_46796 = (state_46826[(9)]);
var inst_46795 = (state_46826[(8)]);
var inst_46803 = (function (){var cs = inst_46783;
var vec__46788 = inst_46794;
var v = inst_46795;
var c = inst_46796;
return (function (p1__46775_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__46775_SHARP_);
});
})();
var inst_46806 = cljs.core.filterv(inst_46803,inst_46783);
var inst_46783__$1 = inst_46806;
var state_46826__$1 = (function (){var statearr_46904 = state_46826;
(statearr_46904[(10)] = inst_46783__$1);

return statearr_46904;
})();
var statearr_46905_49511 = state_46826__$1;
(statearr_46905_49511[(2)] = null);

(statearr_46905_49511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42384__auto__ = null;
var cljs$core$async$state_machine__42384__auto____0 = (function (){
var statearr_46914 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46914[(0)] = cljs$core$async$state_machine__42384__auto__);

(statearr_46914[(1)] = (1));

return statearr_46914;
});
var cljs$core$async$state_machine__42384__auto____1 = (function (state_46826){
while(true){
var ret_value__42385__auto__ = (function (){try{while(true){
var result__42386__auto__ = switch__42383__auto__(state_46826);
if(cljs.core.keyword_identical_QMARK_(result__42386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42386__auto__;
}
break;
}
}catch (e46920){var ex__42387__auto__ = e46920;
var statearr_46922_49516 = state_46826;
(statearr_46922_49516[(2)] = ex__42387__auto__);


if(cljs.core.seq((state_46826[(4)]))){
var statearr_46923_49517 = state_46826;
(statearr_46923_49517[(1)] = cljs.core.first((state_46826[(4)])));

} else {
throw ex__42387__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49523 = state_46826;
state_46826 = G__49523;
continue;
} else {
return ret_value__42385__auto__;
}
break;
}
});
cljs$core$async$state_machine__42384__auto__ = function(state_46826){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42384__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42384__auto____1.call(this,state_46826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42384__auto____0;
cljs$core$async$state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42384__auto____1;
return cljs$core$async$state_machine__42384__auto__;
})()
})();
var state__43331__auto__ = (function (){var statearr_46925 = f__43330__auto__();
(statearr_46925[(6)] = c__43329__auto___49494);

return statearr_46925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43331__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__46943 = arguments.length;
switch (G__46943) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43329__auto___49526 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43330__auto__ = (function (){var switch__42383__auto__ = (function (state_46985){
var state_val_46986 = (state_46985[(1)]);
if((state_val_46986 === (7))){
var inst_46967 = (state_46985[(7)]);
var inst_46967__$1 = (state_46985[(2)]);
var inst_46968 = (inst_46967__$1 == null);
var inst_46969 = cljs.core.not(inst_46968);
var state_46985__$1 = (function (){var statearr_46996 = state_46985;
(statearr_46996[(7)] = inst_46967__$1);

return statearr_46996;
})();
if(inst_46969){
var statearr_46999_49536 = state_46985__$1;
(statearr_46999_49536[(1)] = (8));

} else {
var statearr_47002_49538 = state_46985__$1;
(statearr_47002_49538[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46986 === (1))){
var inst_46959 = (0);
var state_46985__$1 = (function (){var statearr_47008 = state_46985;
(statearr_47008[(8)] = inst_46959);

return statearr_47008;
})();
var statearr_47010_49539 = state_46985__$1;
(statearr_47010_49539[(2)] = null);

(statearr_47010_49539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46986 === (4))){
var state_46985__$1 = state_46985;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46985__$1,(7),ch);
} else {
if((state_val_46986 === (6))){
var inst_46980 = (state_46985[(2)]);
var state_46985__$1 = state_46985;
var statearr_47012_49543 = state_46985__$1;
(statearr_47012_49543[(2)] = inst_46980);

(statearr_47012_49543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46986 === (3))){
var inst_46982 = (state_46985[(2)]);
var inst_46983 = cljs.core.async.close_BANG_(out);
var state_46985__$1 = (function (){var statearr_47021 = state_46985;
(statearr_47021[(9)] = inst_46982);

return statearr_47021;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46985__$1,inst_46983);
} else {
if((state_val_46986 === (2))){
var inst_46959 = (state_46985[(8)]);
var inst_46963 = (inst_46959 < n);
var state_46985__$1 = state_46985;
if(cljs.core.truth_(inst_46963)){
var statearr_47023_49547 = state_46985__$1;
(statearr_47023_49547[(1)] = (4));

} else {
var statearr_47025_49548 = state_46985__$1;
(statearr_47025_49548[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46986 === (11))){
var inst_46959 = (state_46985[(8)]);
var inst_46972 = (state_46985[(2)]);
var inst_46973 = (inst_46959 + (1));
var inst_46959__$1 = inst_46973;
var state_46985__$1 = (function (){var statearr_47026 = state_46985;
(statearr_47026[(10)] = inst_46972);

(statearr_47026[(8)] = inst_46959__$1);

return statearr_47026;
})();
var statearr_47035_49550 = state_46985__$1;
(statearr_47035_49550[(2)] = null);

(statearr_47035_49550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46986 === (9))){
var state_46985__$1 = state_46985;
var statearr_47041_49551 = state_46985__$1;
(statearr_47041_49551[(2)] = null);

(statearr_47041_49551[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46986 === (5))){
var state_46985__$1 = state_46985;
var statearr_47043_49552 = state_46985__$1;
(statearr_47043_49552[(2)] = null);

(statearr_47043_49552[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46986 === (10))){
var inst_46977 = (state_46985[(2)]);
var state_46985__$1 = state_46985;
var statearr_47045_49554 = state_46985__$1;
(statearr_47045_49554[(2)] = inst_46977);

(statearr_47045_49554[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46986 === (8))){
var inst_46967 = (state_46985[(7)]);
var state_46985__$1 = state_46985;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46985__$1,(11),out,inst_46967);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42384__auto__ = null;
var cljs$core$async$state_machine__42384__auto____0 = (function (){
var statearr_47050 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47050[(0)] = cljs$core$async$state_machine__42384__auto__);

(statearr_47050[(1)] = (1));

return statearr_47050;
});
var cljs$core$async$state_machine__42384__auto____1 = (function (state_46985){
while(true){
var ret_value__42385__auto__ = (function (){try{while(true){
var result__42386__auto__ = switch__42383__auto__(state_46985);
if(cljs.core.keyword_identical_QMARK_(result__42386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42386__auto__;
}
break;
}
}catch (e47056){var ex__42387__auto__ = e47056;
var statearr_47061_49558 = state_46985;
(statearr_47061_49558[(2)] = ex__42387__auto__);


if(cljs.core.seq((state_46985[(4)]))){
var statearr_47062_49559 = state_46985;
(statearr_47062_49559[(1)] = cljs.core.first((state_46985[(4)])));

} else {
throw ex__42387__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49561 = state_46985;
state_46985 = G__49561;
continue;
} else {
return ret_value__42385__auto__;
}
break;
}
});
cljs$core$async$state_machine__42384__auto__ = function(state_46985){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42384__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42384__auto____1.call(this,state_46985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42384__auto____0;
cljs$core$async$state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42384__auto____1;
return cljs$core$async$state_machine__42384__auto__;
})()
})();
var state__43331__auto__ = (function (){var statearr_47065 = f__43330__auto__();
(statearr_47065[(6)] = c__43329__auto___49526);

return statearr_47065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43331__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47074 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47074 = (function (f,ch,meta47075){
this.f = f;
this.ch = ch;
this.meta47075 = meta47075;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47076,meta47075__$1){
var self__ = this;
var _47076__$1 = this;
return (new cljs.core.async.t_cljs$core$async47074(self__.f,self__.ch,meta47075__$1));
}));

(cljs.core.async.t_cljs$core$async47074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47076){
var self__ = this;
var _47076__$1 = this;
return self__.meta47075;
}));

(cljs.core.async.t_cljs$core$async47074.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47074.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47074.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47074.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47074.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47104 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47104 = (function (f,ch,meta47075,_,fn1,meta47105){
this.f = f;
this.ch = ch;
this.meta47075 = meta47075;
this._ = _;
this.fn1 = fn1;
this.meta47105 = meta47105;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47106,meta47105__$1){
var self__ = this;
var _47106__$1 = this;
return (new cljs.core.async.t_cljs$core$async47104(self__.f,self__.ch,self__.meta47075,self__._,self__.fn1,meta47105__$1));
}));

(cljs.core.async.t_cljs$core$async47104.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47106){
var self__ = this;
var _47106__$1 = this;
return self__.meta47105;
}));

(cljs.core.async.t_cljs$core$async47104.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47104.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async47104.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47104.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__47071_SHARP_){
var G__47133 = (((p1__47071_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__47071_SHARP_) : self__.f.call(null,p1__47071_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__47133) : f1.call(null,G__47133));
});
}));

(cljs.core.async.t_cljs$core$async47104.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47075","meta47075",-1966301970,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47074","cljs.core.async/t_cljs$core$async47074",1639368163,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47105","meta47105",397082537,null)], null);
}));

(cljs.core.async.t_cljs$core$async47104.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47104.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47104");

(cljs.core.async.t_cljs$core$async47104.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47104");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47104.
 */
cljs.core.async.__GT_t_cljs$core$async47104 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47104(f__$1,ch__$1,meta47075__$1,___$2,fn1__$1,meta47105){
return (new cljs.core.async.t_cljs$core$async47104(f__$1,ch__$1,meta47075__$1,___$2,fn1__$1,meta47105));
});

}

return (new cljs.core.async.t_cljs$core$async47104(self__.f,self__.ch,self__.meta47075,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__47159 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__47159) : self__.f.call(null,G__47159));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async47074.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47074.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async47074.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47075","meta47075",-1966301970,null)], null);
}));

(cljs.core.async.t_cljs$core$async47074.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47074.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47074");

(cljs.core.async.t_cljs$core$async47074.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47074");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47074.
 */
cljs.core.async.__GT_t_cljs$core$async47074 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47074(f__$1,ch__$1,meta47075){
return (new cljs.core.async.t_cljs$core$async47074(f__$1,ch__$1,meta47075));
});

}

return (new cljs.core.async.t_cljs$core$async47074(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47186 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47186 = (function (f,ch,meta47187){
this.f = f;
this.ch = ch;
this.meta47187 = meta47187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47188,meta47187__$1){
var self__ = this;
var _47188__$1 = this;
return (new cljs.core.async.t_cljs$core$async47186(self__.f,self__.ch,meta47187__$1));
}));

(cljs.core.async.t_cljs$core$async47186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47188){
var self__ = this;
var _47188__$1 = this;
return self__.meta47187;
}));

(cljs.core.async.t_cljs$core$async47186.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47186.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47186.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47186.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47186.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47186.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async47186.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47187","meta47187",2127900466,null)], null);
}));

(cljs.core.async.t_cljs$core$async47186.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47186.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47186");

(cljs.core.async.t_cljs$core$async47186.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47186");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47186.
 */
cljs.core.async.__GT_t_cljs$core$async47186 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47186(f__$1,ch__$1,meta47187){
return (new cljs.core.async.t_cljs$core$async47186(f__$1,ch__$1,meta47187));
});

}

return (new cljs.core.async.t_cljs$core$async47186(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47228 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47228 = (function (p,ch,meta47229){
this.p = p;
this.ch = ch;
this.meta47229 = meta47229;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47230,meta47229__$1){
var self__ = this;
var _47230__$1 = this;
return (new cljs.core.async.t_cljs$core$async47228(self__.p,self__.ch,meta47229__$1));
}));

(cljs.core.async.t_cljs$core$async47228.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47230){
var self__ = this;
var _47230__$1 = this;
return self__.meta47229;
}));

(cljs.core.async.t_cljs$core$async47228.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47228.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47228.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47228.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47228.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47228.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47228.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async47228.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47229","meta47229",805247743,null)], null);
}));

(cljs.core.async.t_cljs$core$async47228.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47228.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47228");

(cljs.core.async.t_cljs$core$async47228.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47228");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47228.
 */
cljs.core.async.__GT_t_cljs$core$async47228 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47228(p__$1,ch__$1,meta47229){
return (new cljs.core.async.t_cljs$core$async47228(p__$1,ch__$1,meta47229));
});

}

return (new cljs.core.async.t_cljs$core$async47228(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__47280 = arguments.length;
switch (G__47280) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43329__auto___49595 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43330__auto__ = (function (){var switch__42383__auto__ = (function (state_47310){
var state_val_47311 = (state_47310[(1)]);
if((state_val_47311 === (7))){
var inst_47306 = (state_47310[(2)]);
var state_47310__$1 = state_47310;
var statearr_47324_49598 = state_47310__$1;
(statearr_47324_49598[(2)] = inst_47306);

(statearr_47324_49598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47311 === (1))){
var state_47310__$1 = state_47310;
var statearr_47326_49599 = state_47310__$1;
(statearr_47326_49599[(2)] = null);

(statearr_47326_49599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47311 === (4))){
var inst_47291 = (state_47310[(7)]);
var inst_47291__$1 = (state_47310[(2)]);
var inst_47292 = (inst_47291__$1 == null);
var state_47310__$1 = (function (){var statearr_47338 = state_47310;
(statearr_47338[(7)] = inst_47291__$1);

return statearr_47338;
})();
if(cljs.core.truth_(inst_47292)){
var statearr_47341_49600 = state_47310__$1;
(statearr_47341_49600[(1)] = (5));

} else {
var statearr_47342_49601 = state_47310__$1;
(statearr_47342_49601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47311 === (6))){
var inst_47291 = (state_47310[(7)]);
var inst_47297 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47291) : p.call(null,inst_47291));
var state_47310__$1 = state_47310;
if(cljs.core.truth_(inst_47297)){
var statearr_47348_49603 = state_47310__$1;
(statearr_47348_49603[(1)] = (8));

} else {
var statearr_47350_49604 = state_47310__$1;
(statearr_47350_49604[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47311 === (3))){
var inst_47308 = (state_47310[(2)]);
var state_47310__$1 = state_47310;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47310__$1,inst_47308);
} else {
if((state_val_47311 === (2))){
var state_47310__$1 = state_47310;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47310__$1,(4),ch);
} else {
if((state_val_47311 === (11))){
var inst_47300 = (state_47310[(2)]);
var state_47310__$1 = state_47310;
var statearr_47369_49605 = state_47310__$1;
(statearr_47369_49605[(2)] = inst_47300);

(statearr_47369_49605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47311 === (9))){
var state_47310__$1 = state_47310;
var statearr_47371_49606 = state_47310__$1;
(statearr_47371_49606[(2)] = null);

(statearr_47371_49606[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47311 === (5))){
var inst_47294 = cljs.core.async.close_BANG_(out);
var state_47310__$1 = state_47310;
var statearr_47375_49608 = state_47310__$1;
(statearr_47375_49608[(2)] = inst_47294);

(statearr_47375_49608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47311 === (10))){
var inst_47303 = (state_47310[(2)]);
var state_47310__$1 = (function (){var statearr_47379 = state_47310;
(statearr_47379[(8)] = inst_47303);

return statearr_47379;
})();
var statearr_47380_49610 = state_47310__$1;
(statearr_47380_49610[(2)] = null);

(statearr_47380_49610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47311 === (8))){
var inst_47291 = (state_47310[(7)]);
var state_47310__$1 = state_47310;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47310__$1,(11),out,inst_47291);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42384__auto__ = null;
var cljs$core$async$state_machine__42384__auto____0 = (function (){
var statearr_47384 = [null,null,null,null,null,null,null,null,null];
(statearr_47384[(0)] = cljs$core$async$state_machine__42384__auto__);

(statearr_47384[(1)] = (1));

return statearr_47384;
});
var cljs$core$async$state_machine__42384__auto____1 = (function (state_47310){
while(true){
var ret_value__42385__auto__ = (function (){try{while(true){
var result__42386__auto__ = switch__42383__auto__(state_47310);
if(cljs.core.keyword_identical_QMARK_(result__42386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42386__auto__;
}
break;
}
}catch (e47389){var ex__42387__auto__ = e47389;
var statearr_47390_49614 = state_47310;
(statearr_47390_49614[(2)] = ex__42387__auto__);


if(cljs.core.seq((state_47310[(4)]))){
var statearr_47391_49616 = state_47310;
(statearr_47391_49616[(1)] = cljs.core.first((state_47310[(4)])));

} else {
throw ex__42387__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49617 = state_47310;
state_47310 = G__49617;
continue;
} else {
return ret_value__42385__auto__;
}
break;
}
});
cljs$core$async$state_machine__42384__auto__ = function(state_47310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42384__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42384__auto____1.call(this,state_47310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42384__auto____0;
cljs$core$async$state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42384__auto____1;
return cljs$core$async$state_machine__42384__auto__;
})()
})();
var state__43331__auto__ = (function (){var statearr_47396 = f__43330__auto__();
(statearr_47396[(6)] = c__43329__auto___49595);

return statearr_47396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43331__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__47399 = arguments.length;
switch (G__47399) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__43329__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43330__auto__ = (function (){var switch__42383__auto__ = (function (state_47497){
var state_val_47498 = (state_47497[(1)]);
if((state_val_47498 === (7))){
var inst_47493 = (state_47497[(2)]);
var state_47497__$1 = state_47497;
var statearr_47503_49623 = state_47497__$1;
(statearr_47503_49623[(2)] = inst_47493);

(statearr_47503_49623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47498 === (20))){
var inst_47458 = (state_47497[(7)]);
var inst_47473 = (state_47497[(2)]);
var inst_47474 = cljs.core.next(inst_47458);
var inst_47428 = inst_47474;
var inst_47429 = null;
var inst_47430 = (0);
var inst_47431 = (0);
var state_47497__$1 = (function (){var statearr_47507 = state_47497;
(statearr_47507[(8)] = inst_47428);

(statearr_47507[(9)] = inst_47430);

(statearr_47507[(10)] = inst_47473);

(statearr_47507[(11)] = inst_47429);

(statearr_47507[(12)] = inst_47431);

return statearr_47507;
})();
var statearr_47511_49626 = state_47497__$1;
(statearr_47511_49626[(2)] = null);

(statearr_47511_49626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47498 === (1))){
var state_47497__$1 = state_47497;
var statearr_47512_49628 = state_47497__$1;
(statearr_47512_49628[(2)] = null);

(statearr_47512_49628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47498 === (4))){
var inst_47417 = (state_47497[(13)]);
var inst_47417__$1 = (state_47497[(2)]);
var inst_47418 = (inst_47417__$1 == null);
var state_47497__$1 = (function (){var statearr_47514 = state_47497;
(statearr_47514[(13)] = inst_47417__$1);

return statearr_47514;
})();
if(cljs.core.truth_(inst_47418)){
var statearr_47515_49630 = state_47497__$1;
(statearr_47515_49630[(1)] = (5));

} else {
var statearr_47518_49631 = state_47497__$1;
(statearr_47518_49631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47498 === (15))){
var state_47497__$1 = state_47497;
var statearr_47527_49633 = state_47497__$1;
(statearr_47527_49633[(2)] = null);

(statearr_47527_49633[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47498 === (21))){
var state_47497__$1 = state_47497;
var statearr_47529_49634 = state_47497__$1;
(statearr_47529_49634[(2)] = null);

(statearr_47529_49634[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47498 === (13))){
var inst_47428 = (state_47497[(8)]);
var inst_47430 = (state_47497[(9)]);
var inst_47429 = (state_47497[(11)]);
var inst_47431 = (state_47497[(12)]);
var inst_47450 = (state_47497[(2)]);
var inst_47455 = (inst_47431 + (1));
var tmp47522 = inst_47428;
var tmp47523 = inst_47430;
var tmp47524 = inst_47429;
var inst_47428__$1 = tmp47522;
var inst_47429__$1 = tmp47524;
var inst_47430__$1 = tmp47523;
var inst_47431__$1 = inst_47455;
var state_47497__$1 = (function (){var statearr_47534 = state_47497;
(statearr_47534[(14)] = inst_47450);

(statearr_47534[(8)] = inst_47428__$1);

(statearr_47534[(9)] = inst_47430__$1);

(statearr_47534[(11)] = inst_47429__$1);

(statearr_47534[(12)] = inst_47431__$1);

return statearr_47534;
})();
var statearr_47535_49639 = state_47497__$1;
(statearr_47535_49639[(2)] = null);

(statearr_47535_49639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47498 === (22))){
var state_47497__$1 = state_47497;
var statearr_47539_49641 = state_47497__$1;
(statearr_47539_49641[(2)] = null);

(statearr_47539_49641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47498 === (6))){
var inst_47417 = (state_47497[(13)]);
var inst_47426 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47417) : f.call(null,inst_47417));
var inst_47427 = cljs.core.seq(inst_47426);
var inst_47428 = inst_47427;
var inst_47429 = null;
var inst_47430 = (0);
var inst_47431 = (0);
var state_47497__$1 = (function (){var statearr_47540 = state_47497;
(statearr_47540[(8)] = inst_47428);

(statearr_47540[(9)] = inst_47430);

(statearr_47540[(11)] = inst_47429);

(statearr_47540[(12)] = inst_47431);

return statearr_47540;
})();
var statearr_47542_49645 = state_47497__$1;
(statearr_47542_49645[(2)] = null);

(statearr_47542_49645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47498 === (17))){
var inst_47458 = (state_47497[(7)]);
var inst_47466 = cljs.core.chunk_first(inst_47458);
var inst_47467 = cljs.core.chunk_rest(inst_47458);
var inst_47468 = cljs.core.count(inst_47466);
var inst_47428 = inst_47467;
var inst_47429 = inst_47466;
var inst_47430 = inst_47468;
var inst_47431 = (0);
var state_47497__$1 = (function (){var statearr_47544 = state_47497;
(statearr_47544[(8)] = inst_47428);

(statearr_47544[(9)] = inst_47430);

(statearr_47544[(11)] = inst_47429);

(statearr_47544[(12)] = inst_47431);

return statearr_47544;
})();
var statearr_47548_49646 = state_47497__$1;
(statearr_47548_49646[(2)] = null);

(statearr_47548_49646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47498 === (3))){
var inst_47495 = (state_47497[(2)]);
var state_47497__$1 = state_47497;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47497__$1,inst_47495);
} else {
if((state_val_47498 === (12))){
var inst_47482 = (state_47497[(2)]);
var state_47497__$1 = state_47497;
var statearr_47561_49649 = state_47497__$1;
(statearr_47561_49649[(2)] = inst_47482);

(statearr_47561_49649[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47498 === (2))){
var state_47497__$1 = state_47497;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47497__$1,(4),in$);
} else {
if((state_val_47498 === (23))){
var inst_47491 = (state_47497[(2)]);
var state_47497__$1 = state_47497;
var statearr_47569_49653 = state_47497__$1;
(statearr_47569_49653[(2)] = inst_47491);

(statearr_47569_49653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47498 === (19))){
var inst_47477 = (state_47497[(2)]);
var state_47497__$1 = state_47497;
var statearr_47571_49655 = state_47497__$1;
(statearr_47571_49655[(2)] = inst_47477);

(statearr_47571_49655[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47498 === (11))){
var inst_47428 = (state_47497[(8)]);
var inst_47458 = (state_47497[(7)]);
var inst_47458__$1 = cljs.core.seq(inst_47428);
var state_47497__$1 = (function (){var statearr_47578 = state_47497;
(statearr_47578[(7)] = inst_47458__$1);

return statearr_47578;
})();
if(inst_47458__$1){
var statearr_47580_49656 = state_47497__$1;
(statearr_47580_49656[(1)] = (14));

} else {
var statearr_47582_49657 = state_47497__$1;
(statearr_47582_49657[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47498 === (9))){
var inst_47484 = (state_47497[(2)]);
var inst_47485 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_47497__$1 = (function (){var statearr_47586 = state_47497;
(statearr_47586[(15)] = inst_47484);

return statearr_47586;
})();
if(cljs.core.truth_(inst_47485)){
var statearr_47587_49659 = state_47497__$1;
(statearr_47587_49659[(1)] = (21));

} else {
var statearr_47591_49660 = state_47497__$1;
(statearr_47591_49660[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47498 === (5))){
var inst_47420 = cljs.core.async.close_BANG_(out);
var state_47497__$1 = state_47497;
var statearr_47598_49661 = state_47497__$1;
(statearr_47598_49661[(2)] = inst_47420);

(statearr_47598_49661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47498 === (14))){
var inst_47458 = (state_47497[(7)]);
var inst_47464 = cljs.core.chunked_seq_QMARK_(inst_47458);
var state_47497__$1 = state_47497;
if(inst_47464){
var statearr_47604_49664 = state_47497__$1;
(statearr_47604_49664[(1)] = (17));

} else {
var statearr_47610_49665 = state_47497__$1;
(statearr_47610_49665[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47498 === (16))){
var inst_47480 = (state_47497[(2)]);
var state_47497__$1 = state_47497;
var statearr_47617_49667 = state_47497__$1;
(statearr_47617_49667[(2)] = inst_47480);

(statearr_47617_49667[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47498 === (10))){
var inst_47429 = (state_47497[(11)]);
var inst_47431 = (state_47497[(12)]);
var inst_47448 = cljs.core._nth(inst_47429,inst_47431);
var state_47497__$1 = state_47497;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47497__$1,(13),out,inst_47448);
} else {
if((state_val_47498 === (18))){
var inst_47458 = (state_47497[(7)]);
var inst_47471 = cljs.core.first(inst_47458);
var state_47497__$1 = state_47497;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47497__$1,(20),out,inst_47471);
} else {
if((state_val_47498 === (8))){
var inst_47430 = (state_47497[(9)]);
var inst_47431 = (state_47497[(12)]);
var inst_47433 = (inst_47431 < inst_47430);
var inst_47435 = inst_47433;
var state_47497__$1 = state_47497;
if(cljs.core.truth_(inst_47435)){
var statearr_47626_49669 = state_47497__$1;
(statearr_47626_49669[(1)] = (10));

} else {
var statearr_47628_49671 = state_47497__$1;
(statearr_47628_49671[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__42384__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__42384__auto____0 = (function (){
var statearr_47634 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47634[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__42384__auto__);

(statearr_47634[(1)] = (1));

return statearr_47634;
});
var cljs$core$async$mapcat_STAR__$_state_machine__42384__auto____1 = (function (state_47497){
while(true){
var ret_value__42385__auto__ = (function (){try{while(true){
var result__42386__auto__ = switch__42383__auto__(state_47497);
if(cljs.core.keyword_identical_QMARK_(result__42386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42386__auto__;
}
break;
}
}catch (e47637){var ex__42387__auto__ = e47637;
var statearr_47638_49676 = state_47497;
(statearr_47638_49676[(2)] = ex__42387__auto__);


if(cljs.core.seq((state_47497[(4)]))){
var statearr_47639_49677 = state_47497;
(statearr_47639_49677[(1)] = cljs.core.first((state_47497[(4)])));

} else {
throw ex__42387__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49678 = state_47497;
state_47497 = G__49678;
continue;
} else {
return ret_value__42385__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__42384__auto__ = function(state_47497){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__42384__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__42384__auto____1.call(this,state_47497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__42384__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__42384__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__42384__auto__;
})()
})();
var state__43331__auto__ = (function (){var statearr_47644 = f__43330__auto__();
(statearr_47644[(6)] = c__43329__auto__);

return statearr_47644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43331__auto__);
}));

return c__43329__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__47655 = arguments.length;
switch (G__47655) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__47673 = arguments.length;
switch (G__47673) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__47692 = arguments.length;
switch (G__47692) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43329__auto___49695 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43330__auto__ = (function (){var switch__42383__auto__ = (function (state_47748){
var state_val_47749 = (state_47748[(1)]);
if((state_val_47749 === (7))){
var inst_47732 = (state_47748[(2)]);
var state_47748__$1 = state_47748;
var statearr_47770_49696 = state_47748__$1;
(statearr_47770_49696[(2)] = inst_47732);

(statearr_47770_49696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47749 === (1))){
var inst_47707 = null;
var state_47748__$1 = (function (){var statearr_47777 = state_47748;
(statearr_47777[(7)] = inst_47707);

return statearr_47777;
})();
var statearr_47779_49698 = state_47748__$1;
(statearr_47779_49698[(2)] = null);

(statearr_47779_49698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47749 === (4))){
var inst_47710 = (state_47748[(8)]);
var inst_47710__$1 = (state_47748[(2)]);
var inst_47711 = (inst_47710__$1 == null);
var inst_47712 = cljs.core.not(inst_47711);
var state_47748__$1 = (function (){var statearr_47790 = state_47748;
(statearr_47790[(8)] = inst_47710__$1);

return statearr_47790;
})();
if(inst_47712){
var statearr_47792_49702 = state_47748__$1;
(statearr_47792_49702[(1)] = (5));

} else {
var statearr_47793_49703 = state_47748__$1;
(statearr_47793_49703[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47749 === (6))){
var state_47748__$1 = state_47748;
var statearr_47795_49704 = state_47748__$1;
(statearr_47795_49704[(2)] = null);

(statearr_47795_49704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47749 === (3))){
var inst_47734 = (state_47748[(2)]);
var inst_47738 = cljs.core.async.close_BANG_(out);
var state_47748__$1 = (function (){var statearr_47798 = state_47748;
(statearr_47798[(9)] = inst_47734);

return statearr_47798;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47748__$1,inst_47738);
} else {
if((state_val_47749 === (2))){
var state_47748__$1 = state_47748;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47748__$1,(4),ch);
} else {
if((state_val_47749 === (11))){
var inst_47710 = (state_47748[(8)]);
var inst_47722 = (state_47748[(2)]);
var inst_47707 = inst_47710;
var state_47748__$1 = (function (){var statearr_47801 = state_47748;
(statearr_47801[(7)] = inst_47707);

(statearr_47801[(10)] = inst_47722);

return statearr_47801;
})();
var statearr_47803_49710 = state_47748__$1;
(statearr_47803_49710[(2)] = null);

(statearr_47803_49710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47749 === (9))){
var inst_47710 = (state_47748[(8)]);
var state_47748__$1 = state_47748;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47748__$1,(11),out,inst_47710);
} else {
if((state_val_47749 === (5))){
var inst_47710 = (state_47748[(8)]);
var inst_47707 = (state_47748[(7)]);
var inst_47714 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47710,inst_47707);
var state_47748__$1 = state_47748;
if(inst_47714){
var statearr_47808_49714 = state_47748__$1;
(statearr_47808_49714[(1)] = (8));

} else {
var statearr_47809_49715 = state_47748__$1;
(statearr_47809_49715[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47749 === (10))){
var inst_47728 = (state_47748[(2)]);
var state_47748__$1 = state_47748;
var statearr_47811_49718 = state_47748__$1;
(statearr_47811_49718[(2)] = inst_47728);

(statearr_47811_49718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47749 === (8))){
var inst_47707 = (state_47748[(7)]);
var tmp47806 = inst_47707;
var inst_47707__$1 = tmp47806;
var state_47748__$1 = (function (){var statearr_47813 = state_47748;
(statearr_47813[(7)] = inst_47707__$1);

return statearr_47813;
})();
var statearr_47815_49722 = state_47748__$1;
(statearr_47815_49722[(2)] = null);

(statearr_47815_49722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42384__auto__ = null;
var cljs$core$async$state_machine__42384__auto____0 = (function (){
var statearr_47816 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47816[(0)] = cljs$core$async$state_machine__42384__auto__);

(statearr_47816[(1)] = (1));

return statearr_47816;
});
var cljs$core$async$state_machine__42384__auto____1 = (function (state_47748){
while(true){
var ret_value__42385__auto__ = (function (){try{while(true){
var result__42386__auto__ = switch__42383__auto__(state_47748);
if(cljs.core.keyword_identical_QMARK_(result__42386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42386__auto__;
}
break;
}
}catch (e47817){var ex__42387__auto__ = e47817;
var statearr_47818_49727 = state_47748;
(statearr_47818_49727[(2)] = ex__42387__auto__);


if(cljs.core.seq((state_47748[(4)]))){
var statearr_47819_49728 = state_47748;
(statearr_47819_49728[(1)] = cljs.core.first((state_47748[(4)])));

} else {
throw ex__42387__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49729 = state_47748;
state_47748 = G__49729;
continue;
} else {
return ret_value__42385__auto__;
}
break;
}
});
cljs$core$async$state_machine__42384__auto__ = function(state_47748){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42384__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42384__auto____1.call(this,state_47748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42384__auto____0;
cljs$core$async$state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42384__auto____1;
return cljs$core$async$state_machine__42384__auto__;
})()
})();
var state__43331__auto__ = (function (){var statearr_47825 = f__43330__auto__();
(statearr_47825[(6)] = c__43329__auto___49695);

return statearr_47825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43331__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__47833 = arguments.length;
switch (G__47833) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43329__auto___49735 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43330__auto__ = (function (){var switch__42383__auto__ = (function (state_47893){
var state_val_47894 = (state_47893[(1)]);
if((state_val_47894 === (7))){
var inst_47889 = (state_47893[(2)]);
var state_47893__$1 = state_47893;
var statearr_47900_49736 = state_47893__$1;
(statearr_47900_49736[(2)] = inst_47889);

(statearr_47900_49736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47894 === (1))){
var inst_47844 = (new Array(n));
var inst_47846 = inst_47844;
var inst_47847 = (0);
var state_47893__$1 = (function (){var statearr_47902 = state_47893;
(statearr_47902[(7)] = inst_47847);

(statearr_47902[(8)] = inst_47846);

return statearr_47902;
})();
var statearr_47903_49740 = state_47893__$1;
(statearr_47903_49740[(2)] = null);

(statearr_47903_49740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47894 === (4))){
var inst_47854 = (state_47893[(9)]);
var inst_47854__$1 = (state_47893[(2)]);
var inst_47855 = (inst_47854__$1 == null);
var inst_47856 = cljs.core.not(inst_47855);
var state_47893__$1 = (function (){var statearr_47904 = state_47893;
(statearr_47904[(9)] = inst_47854__$1);

return statearr_47904;
})();
if(inst_47856){
var statearr_47905_49741 = state_47893__$1;
(statearr_47905_49741[(1)] = (5));

} else {
var statearr_47909_49742 = state_47893__$1;
(statearr_47909_49742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47894 === (15))){
var inst_47883 = (state_47893[(2)]);
var state_47893__$1 = state_47893;
var statearr_47910_49744 = state_47893__$1;
(statearr_47910_49744[(2)] = inst_47883);

(statearr_47910_49744[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47894 === (13))){
var state_47893__$1 = state_47893;
var statearr_47915_49745 = state_47893__$1;
(statearr_47915_49745[(2)] = null);

(statearr_47915_49745[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47894 === (6))){
var inst_47847 = (state_47893[(7)]);
var inst_47874 = (inst_47847 > (0));
var state_47893__$1 = state_47893;
if(cljs.core.truth_(inst_47874)){
var statearr_47924_49748 = state_47893__$1;
(statearr_47924_49748[(1)] = (12));

} else {
var statearr_47925_49750 = state_47893__$1;
(statearr_47925_49750[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47894 === (3))){
var inst_47891 = (state_47893[(2)]);
var state_47893__$1 = state_47893;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47893__$1,inst_47891);
} else {
if((state_val_47894 === (12))){
var inst_47846 = (state_47893[(8)]);
var inst_47881 = cljs.core.vec(inst_47846);
var state_47893__$1 = state_47893;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47893__$1,(15),out,inst_47881);
} else {
if((state_val_47894 === (2))){
var state_47893__$1 = state_47893;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47893__$1,(4),ch);
} else {
if((state_val_47894 === (11))){
var inst_47868 = (state_47893[(2)]);
var inst_47869 = (new Array(n));
var inst_47846 = inst_47869;
var inst_47847 = (0);
var state_47893__$1 = (function (){var statearr_47929 = state_47893;
(statearr_47929[(7)] = inst_47847);

(statearr_47929[(8)] = inst_47846);

(statearr_47929[(10)] = inst_47868);

return statearr_47929;
})();
var statearr_47932_49753 = state_47893__$1;
(statearr_47932_49753[(2)] = null);

(statearr_47932_49753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47894 === (9))){
var inst_47846 = (state_47893[(8)]);
var inst_47866 = cljs.core.vec(inst_47846);
var state_47893__$1 = state_47893;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47893__$1,(11),out,inst_47866);
} else {
if((state_val_47894 === (5))){
var inst_47847 = (state_47893[(7)]);
var inst_47846 = (state_47893[(8)]);
var inst_47860 = (state_47893[(11)]);
var inst_47854 = (state_47893[(9)]);
var inst_47859 = (inst_47846[inst_47847] = inst_47854);
var inst_47860__$1 = (inst_47847 + (1));
var inst_47861 = (inst_47860__$1 < n);
var state_47893__$1 = (function (){var statearr_47937 = state_47893;
(statearr_47937[(12)] = inst_47859);

(statearr_47937[(11)] = inst_47860__$1);

return statearr_47937;
})();
if(cljs.core.truth_(inst_47861)){
var statearr_47939_49762 = state_47893__$1;
(statearr_47939_49762[(1)] = (8));

} else {
var statearr_47941_49763 = state_47893__$1;
(statearr_47941_49763[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47894 === (14))){
var inst_47886 = (state_47893[(2)]);
var inst_47887 = cljs.core.async.close_BANG_(out);
var state_47893__$1 = (function (){var statearr_47948 = state_47893;
(statearr_47948[(13)] = inst_47886);

return statearr_47948;
})();
var statearr_47951_49765 = state_47893__$1;
(statearr_47951_49765[(2)] = inst_47887);

(statearr_47951_49765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47894 === (10))){
var inst_47872 = (state_47893[(2)]);
var state_47893__$1 = state_47893;
var statearr_47954_49768 = state_47893__$1;
(statearr_47954_49768[(2)] = inst_47872);

(statearr_47954_49768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47894 === (8))){
var inst_47846 = (state_47893[(8)]);
var inst_47860 = (state_47893[(11)]);
var tmp47944 = inst_47846;
var inst_47846__$1 = tmp47944;
var inst_47847 = inst_47860;
var state_47893__$1 = (function (){var statearr_47955 = state_47893;
(statearr_47955[(7)] = inst_47847);

(statearr_47955[(8)] = inst_47846__$1);

return statearr_47955;
})();
var statearr_47957_49771 = state_47893__$1;
(statearr_47957_49771[(2)] = null);

(statearr_47957_49771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42384__auto__ = null;
var cljs$core$async$state_machine__42384__auto____0 = (function (){
var statearr_47968 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47968[(0)] = cljs$core$async$state_machine__42384__auto__);

(statearr_47968[(1)] = (1));

return statearr_47968;
});
var cljs$core$async$state_machine__42384__auto____1 = (function (state_47893){
while(true){
var ret_value__42385__auto__ = (function (){try{while(true){
var result__42386__auto__ = switch__42383__auto__(state_47893);
if(cljs.core.keyword_identical_QMARK_(result__42386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42386__auto__;
}
break;
}
}catch (e47974){var ex__42387__auto__ = e47974;
var statearr_47976_49779 = state_47893;
(statearr_47976_49779[(2)] = ex__42387__auto__);


if(cljs.core.seq((state_47893[(4)]))){
var statearr_47977_49782 = state_47893;
(statearr_47977_49782[(1)] = cljs.core.first((state_47893[(4)])));

} else {
throw ex__42387__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49783 = state_47893;
state_47893 = G__49783;
continue;
} else {
return ret_value__42385__auto__;
}
break;
}
});
cljs$core$async$state_machine__42384__auto__ = function(state_47893){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42384__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42384__auto____1.call(this,state_47893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42384__auto____0;
cljs$core$async$state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42384__auto____1;
return cljs$core$async$state_machine__42384__auto__;
})()
})();
var state__43331__auto__ = (function (){var statearr_47985 = f__43330__auto__();
(statearr_47985[(6)] = c__43329__auto___49735);

return statearr_47985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43331__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47995 = arguments.length;
switch (G__47995) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43329__auto___49788 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43330__auto__ = (function (){var switch__42383__auto__ = (function (state_48069){
var state_val_48070 = (state_48069[(1)]);
if((state_val_48070 === (7))){
var inst_48064 = (state_48069[(2)]);
var state_48069__$1 = state_48069;
var statearr_48076_49794 = state_48069__$1;
(statearr_48076_49794[(2)] = inst_48064);

(statearr_48076_49794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48070 === (1))){
var inst_48010 = [];
var inst_48011 = inst_48010;
var inst_48012 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_48069__$1 = (function (){var statearr_48079 = state_48069;
(statearr_48079[(7)] = inst_48012);

(statearr_48079[(8)] = inst_48011);

return statearr_48079;
})();
var statearr_48083_49796 = state_48069__$1;
(statearr_48083_49796[(2)] = null);

(statearr_48083_49796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48070 === (4))){
var inst_48015 = (state_48069[(9)]);
var inst_48015__$1 = (state_48069[(2)]);
var inst_48016 = (inst_48015__$1 == null);
var inst_48017 = cljs.core.not(inst_48016);
var state_48069__$1 = (function (){var statearr_48085 = state_48069;
(statearr_48085[(9)] = inst_48015__$1);

return statearr_48085;
})();
if(inst_48017){
var statearr_48087_49801 = state_48069__$1;
(statearr_48087_49801[(1)] = (5));

} else {
var statearr_48088_49804 = state_48069__$1;
(statearr_48088_49804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48070 === (15))){
var inst_48011 = (state_48069[(8)]);
var inst_48055 = cljs.core.vec(inst_48011);
var state_48069__$1 = state_48069;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48069__$1,(18),out,inst_48055);
} else {
if((state_val_48070 === (13))){
var inst_48045 = (state_48069[(2)]);
var state_48069__$1 = state_48069;
var statearr_48098_49813 = state_48069__$1;
(statearr_48098_49813[(2)] = inst_48045);

(statearr_48098_49813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48070 === (6))){
var inst_48011 = (state_48069[(8)]);
var inst_48051 = inst_48011.length;
var inst_48052 = (inst_48051 > (0));
var state_48069__$1 = state_48069;
if(cljs.core.truth_(inst_48052)){
var statearr_48103_49821 = state_48069__$1;
(statearr_48103_49821[(1)] = (15));

} else {
var statearr_48106_49823 = state_48069__$1;
(statearr_48106_49823[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48070 === (17))){
var inst_48061 = (state_48069[(2)]);
var inst_48062 = cljs.core.async.close_BANG_(out);
var state_48069__$1 = (function (){var statearr_48110 = state_48069;
(statearr_48110[(10)] = inst_48061);

return statearr_48110;
})();
var statearr_48112_49826 = state_48069__$1;
(statearr_48112_49826[(2)] = inst_48062);

(statearr_48112_49826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48070 === (3))){
var inst_48066 = (state_48069[(2)]);
var state_48069__$1 = state_48069;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48069__$1,inst_48066);
} else {
if((state_val_48070 === (12))){
var inst_48011 = (state_48069[(8)]);
var inst_48035 = cljs.core.vec(inst_48011);
var state_48069__$1 = state_48069;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48069__$1,(14),out,inst_48035);
} else {
if((state_val_48070 === (2))){
var state_48069__$1 = state_48069;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48069__$1,(4),ch);
} else {
if((state_val_48070 === (11))){
var inst_48015 = (state_48069[(9)]);
var inst_48011 = (state_48069[(8)]);
var inst_48020 = (state_48069[(11)]);
var inst_48032 = inst_48011.push(inst_48015);
var tmp48115 = inst_48011;
var inst_48011__$1 = tmp48115;
var inst_48012 = inst_48020;
var state_48069__$1 = (function (){var statearr_48124 = state_48069;
(statearr_48124[(7)] = inst_48012);

(statearr_48124[(12)] = inst_48032);

(statearr_48124[(8)] = inst_48011__$1);

return statearr_48124;
})();
var statearr_48127_49835 = state_48069__$1;
(statearr_48127_49835[(2)] = null);

(statearr_48127_49835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48070 === (9))){
var inst_48012 = (state_48069[(7)]);
var inst_48026 = cljs.core.keyword_identical_QMARK_(inst_48012,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_48069__$1 = state_48069;
var statearr_48128_49837 = state_48069__$1;
(statearr_48128_49837[(2)] = inst_48026);

(statearr_48128_49837[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48070 === (5))){
var inst_48012 = (state_48069[(7)]);
var inst_48015 = (state_48069[(9)]);
var inst_48020 = (state_48069[(11)]);
var inst_48022 = (state_48069[(13)]);
var inst_48020__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_48015) : f.call(null,inst_48015));
var inst_48022__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48020__$1,inst_48012);
var state_48069__$1 = (function (){var statearr_48134 = state_48069;
(statearr_48134[(11)] = inst_48020__$1);

(statearr_48134[(13)] = inst_48022__$1);

return statearr_48134;
})();
if(inst_48022__$1){
var statearr_48138_49843 = state_48069__$1;
(statearr_48138_49843[(1)] = (8));

} else {
var statearr_48139_49845 = state_48069__$1;
(statearr_48139_49845[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48070 === (14))){
var inst_48015 = (state_48069[(9)]);
var inst_48020 = (state_48069[(11)]);
var inst_48037 = (state_48069[(2)]);
var inst_48039 = [];
var inst_48041 = inst_48039.push(inst_48015);
var inst_48011 = inst_48039;
var inst_48012 = inst_48020;
var state_48069__$1 = (function (){var statearr_48141 = state_48069;
(statearr_48141[(7)] = inst_48012);

(statearr_48141[(14)] = inst_48041);

(statearr_48141[(8)] = inst_48011);

(statearr_48141[(15)] = inst_48037);

return statearr_48141;
})();
var statearr_48142_49847 = state_48069__$1;
(statearr_48142_49847[(2)] = null);

(statearr_48142_49847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48070 === (16))){
var state_48069__$1 = state_48069;
var statearr_48145_49848 = state_48069__$1;
(statearr_48145_49848[(2)] = null);

(statearr_48145_49848[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48070 === (10))){
var inst_48028 = (state_48069[(2)]);
var state_48069__$1 = state_48069;
if(cljs.core.truth_(inst_48028)){
var statearr_48150_49850 = state_48069__$1;
(statearr_48150_49850[(1)] = (11));

} else {
var statearr_48153_49851 = state_48069__$1;
(statearr_48153_49851[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48070 === (18))){
var inst_48057 = (state_48069[(2)]);
var state_48069__$1 = state_48069;
var statearr_48159_49852 = state_48069__$1;
(statearr_48159_49852[(2)] = inst_48057);

(statearr_48159_49852[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48070 === (8))){
var inst_48022 = (state_48069[(13)]);
var state_48069__$1 = state_48069;
var statearr_48160_49855 = state_48069__$1;
(statearr_48160_49855[(2)] = inst_48022);

(statearr_48160_49855[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42384__auto__ = null;
var cljs$core$async$state_machine__42384__auto____0 = (function (){
var statearr_48173 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48173[(0)] = cljs$core$async$state_machine__42384__auto__);

(statearr_48173[(1)] = (1));

return statearr_48173;
});
var cljs$core$async$state_machine__42384__auto____1 = (function (state_48069){
while(true){
var ret_value__42385__auto__ = (function (){try{while(true){
var result__42386__auto__ = switch__42383__auto__(state_48069);
if(cljs.core.keyword_identical_QMARK_(result__42386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42386__auto__;
}
break;
}
}catch (e48182){var ex__42387__auto__ = e48182;
var statearr_48192_49861 = state_48069;
(statearr_48192_49861[(2)] = ex__42387__auto__);


if(cljs.core.seq((state_48069[(4)]))){
var statearr_48196_49862 = state_48069;
(statearr_48196_49862[(1)] = cljs.core.first((state_48069[(4)])));

} else {
throw ex__42387__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49863 = state_48069;
state_48069 = G__49863;
continue;
} else {
return ret_value__42385__auto__;
}
break;
}
});
cljs$core$async$state_machine__42384__auto__ = function(state_48069){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42384__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42384__auto____1.call(this,state_48069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42384__auto____0;
cljs$core$async$state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42384__auto____1;
return cljs$core$async$state_machine__42384__auto__;
})()
})();
var state__43331__auto__ = (function (){var statearr_48206 = f__43330__auto__();
(statearr_48206[(6)] = c__43329__auto___49788);

return statearr_48206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43331__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
