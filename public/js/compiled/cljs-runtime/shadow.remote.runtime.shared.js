goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__50185,res){
var map__50187 = p__50185;
var map__50187__$1 = cljs.core.__destructure_map(map__50187);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50187__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50187__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__50188 = res;
var G__50188__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50188,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__50188);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50188__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__50188__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__50204 = arguments.length;
switch (G__50204) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__50238,msg,handlers,timeout_after_ms){
var map__50239 = p__50238;
var map__50239__$1 = cljs.core.__destructure_map(map__50239);
var runtime = map__50239__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50239__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___50482 = arguments.length;
var i__4865__auto___50483 = (0);
while(true){
if((i__4865__auto___50483 < len__4864__auto___50482)){
args__4870__auto__.push((arguments[i__4865__auto___50483]));

var G__50488 = (i__4865__auto___50483 + (1));
i__4865__auto___50483 = G__50488;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__50251,ev,args){
var map__50252 = p__50251;
var map__50252__$1 = cljs.core.__destructure_map(map__50252);
var runtime = map__50252__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50252__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__50254 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__50257 = null;
var count__50258 = (0);
var i__50259 = (0);
while(true){
if((i__50259 < count__50258)){
var ext = chunk__50257.cljs$core$IIndexed$_nth$arity$2(null,i__50259);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__50494 = seq__50254;
var G__50495 = chunk__50257;
var G__50496 = count__50258;
var G__50497 = (i__50259 + (1));
seq__50254 = G__50494;
chunk__50257 = G__50495;
count__50258 = G__50496;
i__50259 = G__50497;
continue;
} else {
var G__50499 = seq__50254;
var G__50500 = chunk__50257;
var G__50501 = count__50258;
var G__50502 = (i__50259 + (1));
seq__50254 = G__50499;
chunk__50257 = G__50500;
count__50258 = G__50501;
i__50259 = G__50502;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__50254);
if(temp__5720__auto__){
var seq__50254__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50254__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__50254__$1);
var G__50503 = cljs.core.chunk_rest(seq__50254__$1);
var G__50504 = c__4679__auto__;
var G__50505 = cljs.core.count(c__4679__auto__);
var G__50506 = (0);
seq__50254 = G__50503;
chunk__50257 = G__50504;
count__50258 = G__50505;
i__50259 = G__50506;
continue;
} else {
var ext = cljs.core.first(seq__50254__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__50515 = cljs.core.next(seq__50254__$1);
var G__50516 = null;
var G__50517 = (0);
var G__50518 = (0);
seq__50254 = G__50515;
chunk__50257 = G__50516;
count__50258 = G__50517;
i__50259 = G__50518;
continue;
} else {
var G__50519 = cljs.core.next(seq__50254__$1);
var G__50520 = null;
var G__50521 = (0);
var G__50522 = (0);
seq__50254 = G__50519;
chunk__50257 = G__50520;
count__50258 = G__50521;
i__50259 = G__50522;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq50241){
var G__50242 = cljs.core.first(seq50241);
var seq50241__$1 = cljs.core.next(seq50241);
var G__50243 = cljs.core.first(seq50241__$1);
var seq50241__$2 = cljs.core.next(seq50241__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50242,G__50243,seq50241__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__50291,p__50292){
var map__50293 = p__50291;
var map__50293__$1 = cljs.core.__destructure_map(map__50293);
var runtime = map__50293__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50293__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__50294 = p__50292;
var map__50294__$1 = cljs.core.__destructure_map(map__50294);
var msg = map__50294__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50294__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__50302 = cljs.core.deref(state_ref);
var map__50302__$1 = cljs.core.__destructure_map(map__50302);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50302__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50302__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__50312){
var map__50314 = p__50312;
var map__50314__$1 = cljs.core.__destructure_map(map__50314);
var runtime = map__50314__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50314__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__50330,msg){
var map__50331 = p__50330;
var map__50331__$1 = cljs.core.__destructure_map(map__50331);
var runtime = map__50331__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50331__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__50340,key,p__50341){
var map__50347 = p__50340;
var map__50347__$1 = cljs.core.__destructure_map(map__50347);
var state = map__50347__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50347__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__50348 = p__50341;
var map__50348__$1 = cljs.core.__destructure_map(map__50348);
var spec = map__50348__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50348__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__50364,key,spec){
var map__50368 = p__50364;
var map__50368__$1 = cljs.core.__destructure_map(map__50368);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50368__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__50373_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__50373_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__50374_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__50374_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__50375_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__50375_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__50376_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__50376_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__50377_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__50377_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__50393,key){
var map__50394 = p__50393;
var map__50394__$1 = cljs.core.__destructure_map(map__50394);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50394__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__50398,msg){
var map__50399 = p__50398;
var map__50399__$1 = cljs.core.__destructure_map(map__50399);
var runtime = map__50399__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50399__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__50406,p__50407){
var map__50408 = p__50406;
var map__50408__$1 = cljs.core.__destructure_map(map__50408);
var runtime = map__50408__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50408__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__50409 = p__50407;
var map__50409__$1 = cljs.core.__destructure_map(map__50409);
var msg = map__50409__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50409__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50409__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__50419 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__50421 = null;
var count__50422 = (0);
var i__50423 = (0);
while(true){
if((i__50423 < count__50422)){
var map__50434 = chunk__50421.cljs$core$IIndexed$_nth$arity$2(null,i__50423);
var map__50434__$1 = cljs.core.__destructure_map(map__50434);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50434__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__50565 = seq__50419;
var G__50566 = chunk__50421;
var G__50567 = count__50422;
var G__50568 = (i__50423 + (1));
seq__50419 = G__50565;
chunk__50421 = G__50566;
count__50422 = G__50567;
i__50423 = G__50568;
continue;
} else {
var G__50574 = seq__50419;
var G__50575 = chunk__50421;
var G__50576 = count__50422;
var G__50577 = (i__50423 + (1));
seq__50419 = G__50574;
chunk__50421 = G__50575;
count__50422 = G__50576;
i__50423 = G__50577;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__50419);
if(temp__5720__auto__){
var seq__50419__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50419__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__50419__$1);
var G__50586 = cljs.core.chunk_rest(seq__50419__$1);
var G__50587 = c__4679__auto__;
var G__50588 = cljs.core.count(c__4679__auto__);
var G__50589 = (0);
seq__50419 = G__50586;
chunk__50421 = G__50587;
count__50422 = G__50588;
i__50423 = G__50589;
continue;
} else {
var map__50441 = cljs.core.first(seq__50419__$1);
var map__50441__$1 = cljs.core.__destructure_map(map__50441);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50441__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__50593 = cljs.core.next(seq__50419__$1);
var G__50594 = null;
var G__50595 = (0);
var G__50596 = (0);
seq__50419 = G__50593;
chunk__50421 = G__50594;
count__50422 = G__50595;
i__50423 = G__50596;
continue;
} else {
var G__50597 = cljs.core.next(seq__50419__$1);
var G__50598 = null;
var G__50599 = (0);
var G__50600 = (0);
seq__50419 = G__50597;
chunk__50421 = G__50598;
count__50422 = G__50599;
i__50423 = G__50600;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
