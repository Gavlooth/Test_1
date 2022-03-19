goog.provide('utils');
goog.scope(function(){
  utils.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * @define {boolean}
 */
utils.WITH_CORS = goog.define("utils.WITH_CORS",false);
utils.clj__GT_json = (function utils$clj__GT_json(s){
return JSON.stringify(cljs.core.clj__GT_js(s));
});
utils.form_data = (function utils$form_data(x){
if(cljs.core.map_QMARK_(x)){
var form = (new FormData());
var seq__52015_52364 = cljs.core.seq(cljs.core.seq(x));
var chunk__52016_52365 = null;
var count__52017_52366 = (0);
var i__52018_52367 = (0);
while(true){
if((i__52018_52367 < count__52017_52366)){
var vec__52025_52368 = chunk__52016_52365.cljs$core$IIndexed$_nth$arity$2(null,i__52018_52367);
var k_52369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52025_52368,(0),null);
var v_52370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52025_52368,(1),null);
form.append(cljs.core.name(k_52369),v_52370);


var G__52371 = seq__52015_52364;
var G__52372 = chunk__52016_52365;
var G__52373 = count__52017_52366;
var G__52374 = (i__52018_52367 + (1));
seq__52015_52364 = G__52371;
chunk__52016_52365 = G__52372;
count__52017_52366 = G__52373;
i__52018_52367 = G__52374;
continue;
} else {
var temp__5720__auto___52375 = cljs.core.seq(seq__52015_52364);
if(temp__5720__auto___52375){
var seq__52015_52376__$1 = temp__5720__auto___52375;
if(cljs.core.chunked_seq_QMARK_(seq__52015_52376__$1)){
var c__4679__auto___52377 = cljs.core.chunk_first(seq__52015_52376__$1);
var G__52378 = cljs.core.chunk_rest(seq__52015_52376__$1);
var G__52379 = c__4679__auto___52377;
var G__52380 = cljs.core.count(c__4679__auto___52377);
var G__52381 = (0);
seq__52015_52364 = G__52378;
chunk__52016_52365 = G__52379;
count__52017_52366 = G__52380;
i__52018_52367 = G__52381;
continue;
} else {
var vec__52028_52382 = cljs.core.first(seq__52015_52376__$1);
var k_52383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52028_52382,(0),null);
var v_52384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52028_52382,(1),null);
form.append(cljs.core.name(k_52383),v_52384);


var G__52385 = cljs.core.next(seq__52015_52376__$1);
var G__52386 = null;
var G__52387 = (0);
var G__52388 = (0);
seq__52015_52364 = G__52385;
chunk__52016_52365 = G__52386;
count__52017_52366 = G__52387;
i__52018_52367 = G__52388;
continue;
}
} else {
}
}
break;
}

return form;
} else {
var form = (new FormData(x));
return form;
}
});
utils.format_request = (function utils$format_request(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52389 = arguments.length;
var i__4865__auto___52390 = (0);
while(true){
if((i__4865__auto___52390 < len__4864__auto___52389)){
args__4870__auto__.push((arguments[i__4865__auto___52390]));

var G__52391 = (i__4865__auto___52390 + (1));
i__4865__auto___52390 = G__52391;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return utils.format_request.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(utils.format_request.cljs$core$IFn$_invoke$arity$variadic = (function (token,body,p__52034){
var map__52035 = p__52034;
var map__52035__$1 = cljs.core.__destructure_map(map__52035);
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52035__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json");
var request = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52035__$1,new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"json","json",1279968570));
var response = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52035__$1,new cljs.core.Keyword(null,"response","response",-1068424192),"text");
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52035__$1,new cljs.core.Keyword(null,"method","method",55703592),"post");
var body__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("json",cljs.core.name(request)))?utils.clj__GT_json(body):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("form",cljs.core.name(request)))?(new URLSearchParams(utils.form_data(body))):body
));
var content_type__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("json",cljs.core.name(request)))?"application/json":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("form",cljs.core.name(request)))?"application/x-www-form-urlencoded":content_type
));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"auth-token","auth-token",30990976),token,new cljs.core.Keyword(null,"Content-type","Content-type",354958638),content_type__$1], null),new cljs.core.Keyword(null,"body","body",-2049205669),body__$1,new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.name(response)], null);
}));

(utils.format_request.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(utils.format_request.cljs$lang$applyTo = (function (seq52031){
var G__52032 = cljs.core.first(seq52031);
var seq52031__$1 = cljs.core.next(seq52031);
var G__52033 = cljs.core.first(seq52031__$1);
var seq52031__$2 = cljs.core.next(seq52031__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52032,G__52033,seq52031__$2);
}));

utils.js_fetch = (function utils$js_fetch(url,obj){
var c__42592__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42593__auto__ = (function (){var switch__40642__auto__ = (function (state_52206){
var state_val_52207 = (state_52206[(1)]);
if((state_val_52207 === (65))){
var inst_52053 = (state_52206[(7)]);
var inst_52196 = inst_52053.headers;
var inst_52197 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_52196);
var inst_52198 = ["Server responded with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_52197)].join('');
var inst_52199 = (function(){throw inst_52198})();
var state_52206__$1 = state_52206;
var statearr_52208_52415 = state_52206__$1;
(statearr_52208_52415[(2)] = inst_52199);

(statearr_52208_52415[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (62))){
var inst_52170 = (state_52206[(2)]);
var inst_52171 = ["ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_52170)].join('');
var inst_52172 = [new cljs.core.Keyword(null,"pretty-print","pretty-print",-1314067013),new cljs.core.Keyword(null,"color","color",1011675173)];
var inst_52173 = [true,new cljs.core.Keyword(null,"tomato","tomato",1086708254)];
var inst_52174 = cljs.core.PersistentHashMap.fromArrays(inst_52172,inst_52173);
var inst_52175 = (utils.clog.cljs$core$IFn$_invoke$arity$2 ? utils.clog.cljs$core$IFn$_invoke$arity$2(inst_52171,inst_52174) : utils.clog.call(null,inst_52171,inst_52174));
var state_52206__$1 = state_52206;
var statearr_52209_52420 = state_52206__$1;
(statearr_52209_52420[(2)] = inst_52175);

(statearr_52209_52420[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (7))){
var inst_52040 = (state_52206[(8)]);
var state_52206__$1 = state_52206;
var statearr_52210_52421 = state_52206__$1;
(statearr_52210_52421[(2)] = inst_52040);

(statearr_52210_52421[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (59))){
var inst_52166 = (state_52206[(2)]);
var state_52206__$1 = state_52206;
var statearr_52211_52422 = state_52206__$1;
(statearr_52211_52422[(2)] = inst_52166);

(statearr_52211_52422[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (20))){
var inst_52075 = (state_52206[(9)]);
var inst_52078 = cljs.core.ex_data(inst_52075);
var inst_52079 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_52078);
var inst_52080 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52079,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_52206__$1 = state_52206;
var statearr_52212_52423 = state_52206__$1;
(statearr_52212_52423[(2)] = inst_52080);

(statearr_52212_52423[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (58))){
var inst_52153 = (state_52206[(10)]);
var state_52206__$1 = state_52206;
var statearr_52213_52424 = state_52206__$1;
(statearr_52213_52424[(2)] = inst_52153);

(statearr_52213_52424[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (60))){
var inst_52053 = (state_52206[(7)]);
var _ = (function (){var statearr_52214 = state_52206;
(statearr_52214[(4)] = cljs.core.cons((63),(state_52206[(4)])));

return statearr_52214;
})();
var inst_52181 = inst_52053.ok;
var state_52206__$1 = state_52206;
if(cljs.core.truth_(inst_52181)){
var statearr_52215_52427 = state_52206__$1;
(statearr_52215_52427[(1)] = (64));

} else {
var statearr_52216_52428 = state_52206__$1;
(statearr_52216_52428[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (27))){
var inst_52094 = (state_52206[(11)]);
var inst_52093 = (state_52206[(12)]);
var inst_52093__$1 = (state_52206[(2)]);
var inst_52094__$1 = (inst_52093__$1 instanceof cljs.core.ExceptionInfo);
var state_52206__$1 = (function (){var statearr_52217 = state_52206;
(statearr_52217[(11)] = inst_52094__$1);

(statearr_52217[(12)] = inst_52093__$1);

return statearr_52217;
})();
if(cljs.core.truth_(inst_52094__$1)){
var statearr_52218_52430 = state_52206__$1;
(statearr_52218_52430[(1)] = (28));

} else {
var statearr_52219_52431 = state_52206__$1;
(statearr_52219_52431[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (1))){
var inst_52036 = (utils.oget.cljs$core$IFn$_invoke$arity$2 ? utils.oget.cljs$core$IFn$_invoke$arity$2(obj,"response") : utils.oget.call(null,obj,"response"));
var inst_52037 = fetch(url,obj);
var inst_52038 = cljs.core.async.interop.p__GT_c(inst_52037);
var state_52206__$1 = (function (){var statearr_52220 = state_52206;
(statearr_52220[(13)] = inst_52036);

return statearr_52220;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52206__$1,(2),inst_52038);
} else {
if((state_val_52207 === (24))){
var inst_52075 = (state_52206[(9)]);
var state_52206__$1 = state_52206;
var statearr_52221_52436 = state_52206__$1;
(statearr_52221_52436[(2)] = inst_52075);

(statearr_52221_52436[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (55))){
var inst_52154 = (state_52206[(14)]);
var state_52206__$1 = state_52206;
var statearr_52222_52441 = state_52206__$1;
(statearr_52222_52441[(2)] = inst_52154);

(statearr_52222_52441[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (39))){
var inst_52116 = (state_52206[(15)]);
var state_52206__$1 = state_52206;
var statearr_52223_52442 = state_52206__$1;
(statearr_52223_52442[(2)] = inst_52116);

(statearr_52223_52442[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (46))){
var inst_52134 = (state_52206[(16)]);
var inst_52137 = cljs.core.ex_data(inst_52134);
var inst_52138 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_52137);
var inst_52139 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52138,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_52206__$1 = state_52206;
var statearr_52224_52443 = state_52206__$1;
(statearr_52224_52443[(2)] = inst_52139);

(statearr_52224_52443[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (4))){
var inst_52041 = (state_52206[(17)]);
var state_52206__$1 = state_52206;
var statearr_52225_52450 = state_52206__$1;
(statearr_52225_52450[(2)] = inst_52041);

(statearr_52225_52450[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (54))){
var inst_52153 = (state_52206[(10)]);
var inst_52156 = cljs.core.ex_data(inst_52153);
var inst_52157 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_52156);
var inst_52158 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52157,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_52206__$1 = state_52206;
var statearr_52226_52451 = state_52206__$1;
(statearr_52226_52451[(2)] = inst_52158);

(statearr_52226_52451[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (15))){
var inst_52057 = (state_52206[(18)]);
var inst_52067 = (function(){throw inst_52057})();
var state_52206__$1 = state_52206;
var statearr_52227_52457 = state_52206__$1;
(statearr_52227_52457[(2)] = inst_52067);

(statearr_52227_52457[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (48))){
var inst_52142 = (state_52206[(2)]);
var state_52206__$1 = state_52206;
if(cljs.core.truth_(inst_52142)){
var statearr_52228_52458 = state_52206__$1;
(statearr_52228_52458[(1)] = (49));

} else {
var statearr_52229_52459 = state_52206__$1;
(statearr_52229_52459[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (50))){
var inst_52134 = (state_52206[(16)]);
var state_52206__$1 = state_52206;
var statearr_52230_52462 = state_52206__$1;
(statearr_52230_52462[(2)] = inst_52134);

(statearr_52230_52462[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (21))){
var inst_52076 = (state_52206[(19)]);
var state_52206__$1 = state_52206;
var statearr_52231_52465 = state_52206__$1;
(statearr_52231_52465[(2)] = inst_52076);

(statearr_52231_52465[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (31))){
var inst_52093 = (state_52206[(12)]);
var inst_52103 = (function(){throw inst_52093})();
var state_52206__$1 = state_52206;
var statearr_52232_52469 = state_52206__$1;
(statearr_52232_52469[(2)] = inst_52103);

(statearr_52232_52469[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (32))){
var inst_52093 = (state_52206[(12)]);
var state_52206__$1 = state_52206;
var statearr_52233_52470 = state_52206__$1;
(statearr_52233_52470[(2)] = inst_52093);

(statearr_52233_52470[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (40))){
var inst_52123 = (state_52206[(2)]);
var state_52206__$1 = state_52206;
if(cljs.core.truth_(inst_52123)){
var statearr_52234_52471 = state_52206__$1;
(statearr_52234_52471[(1)] = (41));

} else {
var statearr_52235_52474 = state_52206__$1;
(statearr_52235_52474[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (56))){
var inst_52161 = (state_52206[(2)]);
var state_52206__$1 = state_52206;
if(cljs.core.truth_(inst_52161)){
var statearr_52236_52477 = state_52206__$1;
(statearr_52236_52477[(1)] = (57));

} else {
var statearr_52237_52478 = state_52206__$1;
(statearr_52237_52478[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (33))){
var inst_52106 = (state_52206[(2)]);
var state_52206__$1 = state_52206;
var statearr_52238_52479 = state_52206__$1;
(statearr_52238_52479[(2)] = inst_52106);

(statearr_52238_52479[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (13))){
var inst_52058 = (state_52206[(20)]);
var state_52206__$1 = state_52206;
var statearr_52239_52480 = state_52206__$1;
(statearr_52239_52480[(2)] = inst_52058);

(statearr_52239_52480[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (22))){
var inst_52083 = (state_52206[(2)]);
var state_52206__$1 = state_52206;
if(cljs.core.truth_(inst_52083)){
var statearr_52240_52481 = state_52206__$1;
(statearr_52240_52481[(1)] = (23));

} else {
var statearr_52241_52483 = state_52206__$1;
(statearr_52241_52483[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (36))){
var inst_52053 = (state_52206[(7)]);
var inst_52112 = inst_52053.json();
var inst_52113 = cljs.core.async.interop.p__GT_c(inst_52112);
var state_52206__$1 = state_52206;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52206__$1,(37),inst_52113);
} else {
if((state_val_52207 === (41))){
var inst_52115 = (state_52206[(21)]);
var inst_52125 = (function(){throw inst_52115})();
var state_52206__$1 = state_52206;
var statearr_52242_52484 = state_52206__$1;
(statearr_52242_52484[(2)] = inst_52125);

(statearr_52242_52484[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (43))){
var inst_52128 = (state_52206[(2)]);
var inst_52129 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_52128,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_52206__$1 = state_52206;
var statearr_52243_52485 = state_52206__$1;
(statearr_52243_52485[(2)] = inst_52129);

(statearr_52243_52485[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (61))){
var inst_52204 = (state_52206[(2)]);
var state_52206__$1 = state_52206;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52206__$1,inst_52204);
} else {
if((state_val_52207 === (29))){
var inst_52094 = (state_52206[(11)]);
var state_52206__$1 = state_52206;
var statearr_52244_52487 = state_52206__$1;
(statearr_52244_52487[(2)] = inst_52094);

(statearr_52244_52487[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (44))){
var inst_52053 = (state_52206[(7)]);
var inst_52131 = inst_52053.json();
var inst_52132 = cljs.core.async.interop.p__GT_c(inst_52131);
var state_52206__$1 = state_52206;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52206__$1,(45),inst_52132);
} else {
if((state_val_52207 === (6))){
var inst_52040 = (state_52206[(8)]);
var inst_52050 = (function(){throw inst_52040})();
var state_52206__$1 = state_52206;
var statearr_52245_52489 = state_52206__$1;
(statearr_52245_52489[(2)] = inst_52050);

(statearr_52245_52489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (28))){
var inst_52093 = (state_52206[(12)]);
var inst_52096 = cljs.core.ex_data(inst_52093);
var inst_52097 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_52096);
var inst_52098 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52097,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_52206__$1 = state_52206;
var statearr_52246_52491 = state_52206__$1;
(statearr_52246_52491[(2)] = inst_52098);

(statearr_52246_52491[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (64))){
var inst_52053 = (state_52206[(7)]);
var inst_52169 = (state_52206[(22)]);
var inst_52183 = [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"status-text","status-text",-1834235478),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_52184 = cljs.core.PersistentHashMap.EMPTY;
var inst_52185 = inst_52053.headers;
var inst_52186 = inst_52185.entries();
var inst_52187 = cljs.core.es6_iterator_seq(inst_52186);
var inst_52188 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_52187);
var inst_52189 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_52184,inst_52188);
var inst_52190 = clojure.walk.keywordize_keys(inst_52189);
var inst_52191 = inst_52053.status;
var inst_52192 = inst_52053.statusText;
var inst_52193 = [inst_52190,inst_52191,inst_52192,inst_52169];
var inst_52194 = cljs.core.PersistentHashMap.fromArrays(inst_52183,inst_52193);
var state_52206__$1 = state_52206;
var statearr_52247_52496 = state_52206__$1;
(statearr_52247_52496[(2)] = inst_52194);

(statearr_52247_52496[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (51))){
var inst_52147 = (state_52206[(2)]);
var inst_52148 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_52147,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_52206__$1 = state_52206;
var statearr_52248_52501 = state_52206__$1;
(statearr_52248_52501[(2)] = inst_52148);

(statearr_52248_52501[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (25))){
var inst_52088 = (state_52206[(2)]);
var state_52206__$1 = state_52206;
var statearr_52249_52502 = state_52206__$1;
(statearr_52249_52502[(2)] = inst_52088);

(statearr_52249_52502[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (34))){
var inst_52053 = (state_52206[(7)]);
var inst_52108 = inst_52053.formData();
var state_52206__$1 = state_52206;
var statearr_52250_52505 = state_52206__$1;
(statearr_52250_52505[(2)] = inst_52108);

(statearr_52250_52505[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (17))){
var inst_52070 = (state_52206[(2)]);
var state_52206__$1 = state_52206;
var statearr_52251_52506 = state_52206__$1;
(statearr_52251_52506[(2)] = inst_52070);

(statearr_52251_52506[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (3))){
var inst_52040 = (state_52206[(8)]);
var inst_52043 = cljs.core.ex_data(inst_52040);
var inst_52044 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_52043);
var inst_52045 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52044,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_52206__$1 = state_52206;
var statearr_52252_52508 = state_52206__$1;
(statearr_52252_52508[(2)] = inst_52045);

(statearr_52252_52508[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (12))){
var inst_52057 = (state_52206[(18)]);
var inst_52060 = cljs.core.ex_data(inst_52057);
var inst_52061 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_52060);
var inst_52062 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52061,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_52206__$1 = state_52206;
var statearr_52253_52509 = state_52206__$1;
(statearr_52253_52509[(2)] = inst_52062);

(statearr_52253_52509[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (2))){
var inst_52040 = (state_52206[(8)]);
var inst_52041 = (state_52206[(17)]);
var inst_52040__$1 = (state_52206[(2)]);
var inst_52041__$1 = (inst_52040__$1 instanceof cljs.core.ExceptionInfo);
var state_52206__$1 = (function (){var statearr_52254 = state_52206;
(statearr_52254[(8)] = inst_52040__$1);

(statearr_52254[(17)] = inst_52041__$1);

return statearr_52254;
})();
if(cljs.core.truth_(inst_52041__$1)){
var statearr_52255_52510 = state_52206__$1;
(statearr_52255_52510[(1)] = (3));

} else {
var statearr_52256_52517 = state_52206__$1;
(statearr_52256_52517[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (66))){
var inst_52201 = (state_52206[(2)]);
var _ = (function (){var statearr_52257 = state_52206;
(statearr_52257[(4)] = cljs.core.rest((state_52206[(4)])));

return statearr_52257;
})();
var state_52206__$1 = state_52206;
var statearr_52258_52520 = state_52206__$1;
(statearr_52258_52520[(2)] = inst_52201);

(statearr_52258_52520[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (23))){
var inst_52075 = (state_52206[(9)]);
var inst_52085 = (function(){throw inst_52075})();
var state_52206__$1 = state_52206;
var statearr_52259_52524 = state_52206__$1;
(statearr_52259_52524[(2)] = inst_52085);

(statearr_52259_52524[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (47))){
var inst_52135 = (state_52206[(23)]);
var state_52206__$1 = state_52206;
var statearr_52260_52527 = state_52206__$1;
(statearr_52260_52527[(2)] = inst_52135);

(statearr_52260_52527[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (35))){
var inst_52053 = (state_52206[(7)]);
var inst_52110 = inst_52053.arrayBuffer();
var state_52206__$1 = state_52206;
var statearr_52261_52530 = state_52206__$1;
(statearr_52261_52530[(2)] = inst_52110);

(statearr_52261_52530[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (19))){
var inst_52075 = (state_52206[(9)]);
var inst_52076 = (state_52206[(19)]);
var inst_52075__$1 = (state_52206[(2)]);
var inst_52076__$1 = (inst_52075__$1 instanceof cljs.core.ExceptionInfo);
var state_52206__$1 = (function (){var statearr_52262 = state_52206;
(statearr_52262[(9)] = inst_52075__$1);

(statearr_52262[(19)] = inst_52076__$1);

return statearr_52262;
})();
if(cljs.core.truth_(inst_52076__$1)){
var statearr_52263_52533 = state_52206__$1;
(statearr_52263_52533[(1)] = (20));

} else {
var statearr_52264_52534 = state_52206__$1;
(statearr_52264_52534[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (57))){
var inst_52153 = (state_52206[(10)]);
var inst_52163 = (function(){throw inst_52153})();
var state_52206__$1 = state_52206;
var statearr_52265_52541 = state_52206__$1;
(statearr_52265_52541[(2)] = inst_52163);

(statearr_52265_52541[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (11))){
var inst_52057 = (state_52206[(18)]);
var inst_52058 = (state_52206[(20)]);
var inst_52057__$1 = (state_52206[(2)]);
var inst_52058__$1 = (inst_52057__$1 instanceof cljs.core.ExceptionInfo);
var state_52206__$1 = (function (){var statearr_52266 = state_52206;
(statearr_52266[(18)] = inst_52057__$1);

(statearr_52266[(20)] = inst_52058__$1);

return statearr_52266;
})();
if(cljs.core.truth_(inst_52058__$1)){
var statearr_52267_52545 = state_52206__$1;
(statearr_52267_52545[(1)] = (12));

} else {
var statearr_52268_52548 = state_52206__$1;
(statearr_52268_52548[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (9))){
var inst_52169 = (state_52206[(2)]);
var state_52206__$1 = (function (){var statearr_52269 = state_52206;
(statearr_52269[(22)] = inst_52169);

return statearr_52269;
})();
var statearr_52270_52549 = state_52206__$1;
(statearr_52270_52549[(2)] = null);

(statearr_52270_52549[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (5))){
var inst_52048 = (state_52206[(2)]);
var state_52206__$1 = state_52206;
if(cljs.core.truth_(inst_52048)){
var statearr_52271_52553 = state_52206__$1;
(statearr_52271_52553[(1)] = (6));

} else {
var statearr_52272_52556 = state_52206__$1;
(statearr_52272_52556[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (14))){
var inst_52065 = (state_52206[(2)]);
var state_52206__$1 = state_52206;
if(cljs.core.truth_(inst_52065)){
var statearr_52273_52557 = state_52206__$1;
(statearr_52273_52557[(1)] = (15));

} else {
var statearr_52274_52558 = state_52206__$1;
(statearr_52274_52558[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (45))){
var inst_52135 = (state_52206[(23)]);
var inst_52134 = (state_52206[(16)]);
var inst_52134__$1 = (state_52206[(2)]);
var inst_52135__$1 = (inst_52134__$1 instanceof cljs.core.ExceptionInfo);
var state_52206__$1 = (function (){var statearr_52275 = state_52206;
(statearr_52275[(23)] = inst_52135__$1);

(statearr_52275[(16)] = inst_52134__$1);

return statearr_52275;
})();
if(cljs.core.truth_(inst_52135__$1)){
var statearr_52276_52563 = state_52206__$1;
(statearr_52276_52563[(1)] = (46));

} else {
var statearr_52277_52564 = state_52206__$1;
(statearr_52277_52564[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (53))){
var inst_52153 = (state_52206[(10)]);
var inst_52154 = (state_52206[(14)]);
var inst_52153__$1 = (state_52206[(2)]);
var inst_52154__$1 = (inst_52153__$1 instanceof cljs.core.ExceptionInfo);
var state_52206__$1 = (function (){var statearr_52278 = state_52206;
(statearr_52278[(10)] = inst_52153__$1);

(statearr_52278[(14)] = inst_52154__$1);

return statearr_52278;
})();
if(cljs.core.truth_(inst_52154__$1)){
var statearr_52279_52569 = state_52206__$1;
(statearr_52279_52569[(1)] = (54));

} else {
var statearr_52280_52570 = state_52206__$1;
(statearr_52280_52570[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (26))){
var inst_52053 = (state_52206[(7)]);
var inst_52090 = inst_52053.blob();
var inst_52091 = cljs.core.async.interop.p__GT_c(inst_52090);
var state_52206__$1 = state_52206;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52206__$1,(27),inst_52091);
} else {
if((state_val_52207 === (16))){
var inst_52057 = (state_52206[(18)]);
var state_52206__$1 = state_52206;
var statearr_52281_52575 = state_52206__$1;
(statearr_52281_52575[(2)] = inst_52057);

(statearr_52281_52575[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (38))){
var inst_52115 = (state_52206[(21)]);
var inst_52118 = cljs.core.ex_data(inst_52115);
var inst_52119 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_52118);
var inst_52120 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52119,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_52206__$1 = state_52206;
var statearr_52282_52576 = state_52206__$1;
(statearr_52282_52576[(2)] = inst_52120);

(statearr_52282_52576[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (30))){
var inst_52101 = (state_52206[(2)]);
var state_52206__$1 = state_52206;
if(cljs.core.truth_(inst_52101)){
var statearr_52283_52578 = state_52206__$1;
(statearr_52283_52578[(1)] = (31));

} else {
var statearr_52284_52579 = state_52206__$1;
(statearr_52284_52579[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (10))){
var inst_52053 = (state_52206[(7)]);
var inst_52054 = inst_52053.text();
var inst_52055 = cljs.core.async.interop.p__GT_c(inst_52054);
var state_52206__$1 = state_52206;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52206__$1,(11),inst_52055);
} else {
if((state_val_52207 === (18))){
var inst_52053 = (state_52206[(7)]);
var inst_52072 = inst_52053.json();
var inst_52073 = cljs.core.async.interop.p__GT_c(inst_52072);
var state_52206__$1 = state_52206;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52206__$1,(19),inst_52073);
} else {
if((state_val_52207 === (52))){
var inst_52053 = (state_52206[(7)]);
var inst_52150 = inst_52053.body;
var inst_52151 = cljs.core.async.interop.p__GT_c(inst_52150);
var state_52206__$1 = state_52206;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52206__$1,(53),inst_52151);
} else {
if((state_val_52207 === (42))){
var inst_52115 = (state_52206[(21)]);
var state_52206__$1 = state_52206;
var statearr_52286_52580 = state_52206__$1;
(statearr_52286_52580[(2)] = inst_52115);

(statearr_52286_52580[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (37))){
var inst_52115 = (state_52206[(21)]);
var inst_52116 = (state_52206[(15)]);
var inst_52115__$1 = (state_52206[(2)]);
var inst_52116__$1 = (inst_52115__$1 instanceof cljs.core.ExceptionInfo);
var state_52206__$1 = (function (){var statearr_52287 = state_52206;
(statearr_52287[(21)] = inst_52115__$1);

(statearr_52287[(15)] = inst_52116__$1);

return statearr_52287;
})();
if(cljs.core.truth_(inst_52116__$1)){
var statearr_52288_52582 = state_52206__$1;
(statearr_52288_52582[(1)] = (38));

} else {
var statearr_52289_52583 = state_52206__$1;
(statearr_52289_52583[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (63))){
var _ = (function (){var statearr_52290 = state_52206;
(statearr_52290[(4)] = cljs.core.rest((state_52206[(4)])));

return statearr_52290;
})();
var state_52206__$1 = state_52206;
var ex52285 = (state_52206__$1[(2)]);
var statearr_52291_52584 = state_52206__$1;
(statearr_52291_52584[(5)] = ex52285);


if((ex52285 instanceof Error)){
var statearr_52292_52585 = state_52206__$1;
(statearr_52292_52585[(1)] = (62));

(statearr_52292_52585[(5)] = null);

} else {
throw ex52285;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (8))){
var inst_52036 = (state_52206[(13)]);
var inst_52053 = (state_52206[(2)]);
var state_52206__$1 = (function (){var statearr_52293 = state_52206;
(statearr_52293[(7)] = inst_52053);

return statearr_52293;
})();
var G__52294_52586 = inst_52036;
switch (G__52294_52586) {
case "text":
var statearr_52295_52588 = state_52206__$1;
(statearr_52295_52588[(1)] = (10));


break;
case "json":
var statearr_52296_52589 = state_52206__$1;
(statearr_52296_52589[(1)] = (18));


break;
case "blob":
var statearr_52297_52590 = state_52206__$1;
(statearr_52297_52590[(1)] = (26));


break;
case "form-data":
var statearr_52298_52591 = state_52206__$1;
(statearr_52298_52591[(1)] = (34));


break;
case "array-buffer":
var statearr_52299_52592 = state_52206__$1;
(statearr_52299_52592[(1)] = (35));


break;
case "cljs":
var statearr_52300_52593 = state_52206__$1;
(statearr_52300_52593[(1)] = (36));


break;
case "clj":
var statearr_52301_52594 = state_52206__$1;
(statearr_52301_52594[(1)] = (44));


break;
default:
var statearr_52302_52595 = state_52206__$1;
(statearr_52302_52595[(1)] = (52));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52207 === (49))){
var inst_52134 = (state_52206[(16)]);
var inst_52144 = (function(){throw inst_52134})();
var state_52206__$1 = state_52206;
var statearr_52303_52596 = state_52206__$1;
(statearr_52303_52596[(2)] = inst_52144);

(statearr_52303_52596[(1)] = (51));


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
var utils$js_fetch_$_state_machine__40643__auto__ = null;
var utils$js_fetch_$_state_machine__40643__auto____0 = (function (){
var statearr_52304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52304[(0)] = utils$js_fetch_$_state_machine__40643__auto__);

(statearr_52304[(1)] = (1));

return statearr_52304;
});
var utils$js_fetch_$_state_machine__40643__auto____1 = (function (state_52206){
while(true){
var ret_value__40644__auto__ = (function (){try{while(true){
var result__40645__auto__ = switch__40642__auto__(state_52206);
if(cljs.core.keyword_identical_QMARK_(result__40645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40645__auto__;
}
break;
}
}catch (e52305){var ex__40646__auto__ = e52305;
var statearr_52306_52598 = state_52206;
(statearr_52306_52598[(2)] = ex__40646__auto__);


if(cljs.core.seq((state_52206[(4)]))){
var statearr_52307_52599 = state_52206;
(statearr_52307_52599[(1)] = cljs.core.first((state_52206[(4)])));

} else {
throw ex__40646__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40644__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52600 = state_52206;
state_52206 = G__52600;
continue;
} else {
return ret_value__40644__auto__;
}
break;
}
});
utils$js_fetch_$_state_machine__40643__auto__ = function(state_52206){
switch(arguments.length){
case 0:
return utils$js_fetch_$_state_machine__40643__auto____0.call(this);
case 1:
return utils$js_fetch_$_state_machine__40643__auto____1.call(this,state_52206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
utils$js_fetch_$_state_machine__40643__auto__.cljs$core$IFn$_invoke$arity$0 = utils$js_fetch_$_state_machine__40643__auto____0;
utils$js_fetch_$_state_machine__40643__auto__.cljs$core$IFn$_invoke$arity$1 = utils$js_fetch_$_state_machine__40643__auto____1;
return utils$js_fetch_$_state_machine__40643__auto__;
})()
})();
var state__42594__auto__ = (function (){var statearr_52308 = f__42593__auto__();
(statearr_52308[(6)] = c__42592__auto__);

return statearr_52308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42594__auto__);
}));

return c__42592__auto__;
});
utils.make_walk_handler = (function utils$make_walk_handler(p__52309){
var map__52310 = p__52309;
var map__52310__$1 = cljs.core.__destructure_map(map__52310);
var key_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52310__$1,new cljs.core.Keyword(null,"key-handler","key-handler",1081430159));
var value_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52310__$1,new cljs.core.Keyword(null,"value-handler","value-handler",1383382606));
if(cljs.core.truth_((function (){var and__4251__auto__ = key_handler;
if(cljs.core.truth_(and__4251__auto__)){
return value_handler;
} else {
return and__4251__auto__;
}
})())){
return (function (x){
return (new cljs.core.MapEntry((function (){var G__52311 = cljs.core.key(x);
return (key_handler.cljs$core$IFn$_invoke$arity$1 ? key_handler.cljs$core$IFn$_invoke$arity$1(G__52311) : key_handler.call(null,G__52311));
})(),(function (){var G__52312 = cljs.core.val(x);
return (value_handler.cljs$core$IFn$_invoke$arity$1 ? value_handler.cljs$core$IFn$_invoke$arity$1(G__52312) : value_handler.call(null,G__52312));
})(),null));
});
} else {
if(cljs.core.truth_(value_handler)){
return (function (x){
return (new cljs.core.MapEntry((function (){var fexpr__52313 = cljs.core.key(x);
return (fexpr__52313.cljs$core$IFn$_invoke$arity$0 ? fexpr__52313.cljs$core$IFn$_invoke$arity$0() : fexpr__52313.call(null));
})(),(function (){var G__52314 = cljs.core.val(x);
return (value_handler.cljs$core$IFn$_invoke$arity$1 ? value_handler.cljs$core$IFn$_invoke$arity$1(G__52314) : value_handler.call(null,G__52314));
})(),null));
});
} else {
if(cljs.core.truth_(key_handler)){
return (function (x){
return (new cljs.core.MapEntry((function (){var G__52315 = cljs.core.key(x);
return (key_handler.cljs$core$IFn$_invoke$arity$1 ? key_handler.cljs$core$IFn$_invoke$arity$1(G__52315) : key_handler.call(null,G__52315));
})(),cljs.core.val(x),null));
});
} else {
return (function (x){
return (new cljs.core.MapEntry(cljs.core.key(x),cljs.core.val(x),null));
});

}
}
}
});
utils.transform_collection = (function utils$transform_collection(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52602 = arguments.length;
var i__4865__auto___52603 = (0);
while(true){
if((i__4865__auto___52603 < len__4864__auto___52602)){
args__4870__auto__.push((arguments[i__4865__auto___52603]));

var G__52604 = (i__4865__auto___52603 + (1));
i__4865__auto___52603 = G__52604;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return utils.transform_collection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(utils.transform_collection.cljs$core$IFn$_invoke$arity$variadic = (function (m_STAR_,p__52318){
var map__52319 = p__52318;
var map__52319__$1 = cljs.core.__destructure_map(map__52319);
var key_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52319__$1,new cljs.core.Keyword(null,"key-handler","key-handler",1081430159));
var value_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52319__$1,new cljs.core.Keyword(null,"value-handler","value-handler",1383382606));
var collection_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52319__$1,new cljs.core.Keyword(null,"collection-handler","collection-handler",1033381214),cljs.core.identity);
var map_handler = utils.make_walk_handler(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key-handler","key-handler",1081430159),key_handler,new cljs.core.Keyword(null,"value-handler","value-handler",1383382606),value_handler], null));
return clojure.walk.postwalk((function (x){
if(cljs.core.map_entry_QMARK_(x)){
return map_handler(x);
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.clj__GT_js(x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,collection_handler,x));
} else {
return x;

}
}
}
}),m_STAR_);
}));

(utils.transform_collection.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(utils.transform_collection.cljs$lang$applyTo = (function (seq52316){
var G__52317 = cljs.core.first(seq52316);
var seq52316__$1 = cljs.core.next(seq52316);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52317,seq52316__$1);
}));

utils.transform_map = (function utils$transform_map(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52606 = arguments.length;
var i__4865__auto___52607 = (0);
while(true){
if((i__4865__auto___52607 < len__4864__auto___52606)){
args__4870__auto__.push((arguments[i__4865__auto___52607]));

var G__52608 = (i__4865__auto___52607 + (1));
i__4865__auto___52607 = G__52608;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return utils.transform_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(utils.transform_map.cljs$core$IFn$_invoke$arity$variadic = (function (m_STAR_,p__52322){
var map__52323 = p__52322;
var map__52323__$1 = cljs.core.__destructure_map(map__52323);
var key_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52323__$1,new cljs.core.Keyword(null,"key-handler","key-handler",1081430159));
var value_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52323__$1,new cljs.core.Keyword(null,"value-handler","value-handler",1383382606));
var collection_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52323__$1,new cljs.core.Keyword(null,"collection-handler","collection-handler",1033381214),cljs.core.identity);
var map_handler = utils.make_walk_handler(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key-handler","key-handler",1081430159),key_handler,new cljs.core.Keyword(null,"value-handler","value-handler",1383382606),value_handler], null));
return clojure.walk.postwalk((function (x){
if(cljs.core.map_entry_QMARK_(x)){
return map_handler(x);
} else {
return x;
}
}),m_STAR_);
}));

(utils.transform_map.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(utils.transform_map.cljs$lang$applyTo = (function (seq52320){
var G__52321 = cljs.core.first(seq52320);
var seq52320__$1 = cljs.core.next(seq52320);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52321,seq52320__$1);
}));

utils.fetch = (function utils$fetch(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52610 = arguments.length;
var i__4865__auto___52611 = (0);
while(true){
if((i__4865__auto___52611 < len__4864__auto___52610)){
args__4870__auto__.push((arguments[i__4865__auto___52611]));

var G__52612 = (i__4865__auto___52611 + (1));
i__4865__auto___52611 = G__52612;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return utils.fetch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(utils.fetch.cljs$core$IFn$_invoke$arity$variadic = (function (url,data,p__52328){
var map__52329 = p__52328;
var map__52329__$1 = cljs.core.__destructure_map(map__52329);
var options = map__52329__$1;
var data__$1 = utils.transform_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((utils.WITH_CORS)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),"cors"], null):null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Access-Control-Allow-Origin","Access-Control-Allow-Origin",-93223277),"*",new cljs.core.Keyword(null,"method","method",55703592),"post",new cljs.core.Keyword(null,"response","response",-1068424192),"text"], null),options,data], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"key-handler","key-handler",1081430159),(function (p1__52324_SHARP_){
return clojure.string.lower_case(cljs.core.name(p1__52324_SHARP_));
})], 0));
return utils.js_fetch(url,cljs.core.clj__GT_js(data__$1));
}));

(utils.fetch.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(utils.fetch.cljs$lang$applyTo = (function (seq52325){
var G__52326 = cljs.core.first(seq52325);
var seq52325__$1 = cljs.core.next(seq52325);
var G__52327 = cljs.core.first(seq52325__$1);
var seq52325__$2 = cljs.core.next(seq52325__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52326,G__52327,seq52325__$2);
}));

utils.lower_case = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,"");
utils.js_log = console.log;
utils.name_STAR_ = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.name,"");
utils.is_NaN_QMARK_ = (function utils$is_NaN_QMARK_(p1__52330_SHARP_){
return Number.isNaN(p1__52330_SHARP_);
});
utils.query_selector = (function utils$query_selector(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52613 = arguments.length;
var i__4865__auto___52614 = (0);
while(true){
if((i__4865__auto___52614 < len__4864__auto___52613)){
args__4870__auto__.push((arguments[i__4865__auto___52614]));

var G__52615 = (i__4865__auto___52614 + (1));
i__4865__auto___52614 = G__52615;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return utils.query_selector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(utils.query_selector.cljs$core$IFn$_invoke$arity$variadic = (function (query,p__52333){
var map__52334 = p__52333;
var map__52334__$1 = cljs.core.__destructure_map(map__52334);
var all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52334__$1,new cljs.core.Keyword(null,"all","all",892129742));
try{if((all === true)){
return cljs.core.seq(document.querySelectorAll(query));
} else {
throw cljs.core.match.backtrack;

}
}catch (e52336){if((e52336 instanceof Error)){
var e__41512__auto__ = e52336;
if((e__41512__auto__ === cljs.core.match.backtrack)){
return document.querySelector(query);
} else {
throw e__41512__auto__;
}
} else {
throw e52336;

}
}}));

(utils.query_selector.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(utils.query_selector.cljs$lang$applyTo = (function (seq52331){
var G__52332 = cljs.core.first(seq52331);
var seq52331__$1 = cljs.core.next(seq52331);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52332,seq52331__$1);
}));

utils.form__GT_clj = (function utils$form__GT_clj(element){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(Object.fromEntries((new FormData(utils.query_selector(element))).entries()));
});
utils.any_NaN_QMARK_ = (function utils$any_NaN_QMARK_(col){
return cljs.core.boolean$(cljs.core.some(utils.is_NaN_QMARK_,col));
});
utils.set_timeout = (function utils$set_timeout(f,s){
return setTimeout(f,s);
});
utils.debounce = (function utils$debounce(f,interval){
var dbnc = (new goog.async.Debouncer(f,interval));
return (function() { 
var G__52616__delegate = function (args){
return dbnc.fire.apply(dbnc,cljs.core.to_array(args));
};
var G__52616 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52617__i = 0, G__52617__a = new Array(arguments.length -  0);
while (G__52617__i < G__52617__a.length) {G__52617__a[G__52617__i] = arguments[G__52617__i + 0]; ++G__52617__i;}
  args = new cljs.core.IndexedSeq(G__52617__a,0,null);
} 
return G__52616__delegate.call(this,args);};
G__52616.cljs$lang$maxFixedArity = 0;
G__52616.cljs$lang$applyTo = (function (arglist__52618){
var args = cljs.core.seq(arglist__52618);
return G__52616__delegate(args);
});
G__52616.cljs$core$IFn$_invoke$arity$variadic = G__52616__delegate;
return G__52616;
})()
;
});
utils.oget_in = (function utils$oget_in(object,the_keys){
var valid_keys = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(utils.name_STAR_,the_keys);
return utils.goog$module$goog$object.getValueByKeys(object,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,valid_keys));
});
utils.oget = (function utils$oget(var_args){
var G__52338 = arguments.length;
switch (G__52338) {
case 2:
return utils.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return utils.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(utils.oget.cljs$core$IFn$_invoke$arity$2 = (function (object,the_key){
return utils.goog$module$goog$object.get(object,utils.name_STAR_(the_key));
}));

(utils.oget.cljs$core$IFn$_invoke$arity$3 = (function (object,the_key,not_found){
return utils.goog$module$goog$object.get(object,utils.name_STAR_(the_key),not_found);
}));

(utils.oget.cljs$lang$maxFixedArity = 3);

utils.ovalues = (function utils$ovalues(var_args){
var G__52340 = arguments.length;
switch (G__52340) {
case 1:
return utils.ovalues.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return utils.ovalues.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(utils.ovalues.cljs$core$IFn$_invoke$arity$1 = (function (object){
return utils.goog$module$goog$object.getValues(object);
}));

(utils.ovalues.cljs$core$IFn$_invoke$arity$2 = (function (object,key_seq){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(utils.oget,object),key_seq);
}));

(utils.ovalues.cljs$lang$maxFixedArity = 2);

utils.oset_BANG_ = (function utils$oset_BANG_(object,the_key,the_val){
utils.goog$module$goog$object.set(object,utils.name_STAR_(the_key),the_val);

return object;
});
utils.oset_in_BANG_ = (function utils$oset_in_BANG_(object,the_keys,the_value){
var length_1 = (cljs.core.count(the_keys) - (1));
var butlast_keys = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(the_keys,(0),length_1);
var last_key = utils.name_STAR_(cljs.core.last(the_keys));
try{utils.goog$module$goog$object.set(utils.oget_in(object,butlast_keys),last_key,the_value);

return object;
}catch (e52341){if((e52341 instanceof Object)){
var e = e52341;
return console.log("Error: ",e,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null));
} else {
throw e52341;

}
}});
utils.radians__GT_degrees = (function utils$radians__GT_degrees(p1__52342_SHARP_){
return (57.29578 * p1__52342_SHARP_);
});
utils.degrees__GT_radians = (function utils$degrees__GT_radians(p1__52343_SHARP_){
return (p1__52343_SHARP_ / 57.29578);
});
utils.cos = (function utils$cos(p1__52344_SHARP_){
return Math.cos(utils.degrees__GT_radians(p1__52344_SHARP_));
});
utils.sin = (function utils$sin(p1__52345_SHARP_){
return Math.sin(utils.degrees__GT_radians(p1__52345_SHARP_));
});
utils.atan2 = (function utils$atan2(p1__52346_SHARP_,p2__52347_SHARP_){
return Math.atan2(utils.degrees__GT_radians(p1__52346_SHARP_),utils.degrees__GT_radians(p2__52347_SHARP_));
});
/**
 * Like clog bellow but google compiler will remove whith advance o
 * ptimizations. Excellent for development
 */
utils.dlog = (function utils$dlog(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52621 = arguments.length;
var i__4865__auto___52622 = (0);
while(true){
if((i__4865__auto___52622 < len__4864__auto___52621)){
args__4870__auto__.push((arguments[i__4865__auto___52622]));

var G__52623 = (i__4865__auto___52622 + (1));
i__4865__auto___52622 = G__52623;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return utils.dlog.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(utils.dlog.cljs$core$IFn$_invoke$arity$variadic = (function (more){
if(cljs.core.truth_(goog.DEBUG)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(utils.clog,more);
} else {
return null;
}
}));

(utils.dlog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(utils.dlog.cljs$lang$applyTo = (function (seq52348){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52348));
}));

/**
 * Use it when you want to always emmit a message to
 * console. Pass a map with options :color :font :background-color
 * after whatever the arguments to be printed are. The options can
 * also be symbols or srings aside of keywords. Alternatively pass
 * {:pretty-print true} to use clojure's pretty printer.  
 */
utils.clog = (function utils$clog(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52626 = arguments.length;
var i__4865__auto___52627 = (0);
while(true){
if((i__4865__auto___52627 < len__4864__auto___52626)){
args__4870__auto__.push((arguments[i__4865__auto___52627]));

var G__52628 = (i__4865__auto___52627 + (1));
i__4865__auto___52627 = G__52628;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return utils.clog.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(utils.clog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.truth_((function (){var G__52351 = args;
var G__52351__$1 = (((G__52351 == null))?null:cljs.core.last(G__52351));
if((G__52351__$1 == null)){
return null;
} else {
return cljs.core.map_QMARK_(G__52351__$1);
}
})())){
var butlast_args = cljs.core.butlast(args);
var map__52352 = cljs.core.last(args);
var map__52352__$1 = cljs.core.__destructure_map(map__52352);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52352__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var background_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52352__$1,new cljs.core.Keyword(null,"background-color","background-color",570434026));
var font_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52352__$1,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583));
var font_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52352__$1,new cljs.core.Keyword(null,"font-size","font-size",-1847940346));
var json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52352__$1,new cljs.core.Keyword(null,"json","json",1279968570));
var pretty_print = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52352__$1,new cljs.core.Keyword(null,"pretty-print","pretty-print",-1314067013));
var with_options_QMARK_ = (function (){var or__4253__auto__ = color;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = background_color;
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = font_weight;
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = font_size;
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = json;
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
return pretty_print;
}
}
}
}
}
})();
if(cljs.core.truth_(with_options_QMARK_)){
var css_options = ["color:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(utils.name_STAR_(color)),";","background-color:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(utils.name_STAR_(background_color)),";","font-weight:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(utils.name_STAR_(font_weight)),";","font-size:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(utils.name_STAR_(font_size))].join('');
var G__52353 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"%","c",(cljs.core.truth_(pretty_print)?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__52349_SHARP_){
var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__52355_52629 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__52356_52630 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__52357_52631 = true;
var _STAR_print_fn_STAR__temp_val__52358_52632 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52357_52631);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52358_52632);

try{fipp.edn.pprint.cljs$core$IFn$_invoke$arity$1(p1__52349_SHARP_);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52356_52630);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52355_52629);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
}),butlast_args):butlast_args
));
var G__52354 = css_options;
return (utils.js_log.cljs$core$IFn$_invoke$arity$2 ? utils.js_log.cljs$core$IFn$_invoke$arity$2(G__52353,G__52354) : utils.js_log.call(null,G__52353,G__52354));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(utils.js_log,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(utils.js_log,args);
}
}));

(utils.clog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(utils.clog.cljs$lang$applyTo = (function (seq52350){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52350));
}));

utils.location_BANG_ = (function utils$location_BANG_(href){
utils.oset_in_BANG_(window,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Symbol(null,"href","href",846725829,null)], null),href);

return (
utils.location = (function utils$location_BANG__$_location(){
return utils.oget_in(window,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Symbol(null,"href","href",846725829,null)], null));
}))
;
});
utils.MILIDAY = (86400000);
utils.months = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["January","February","March","April","May","June","July","August","September","October","November","December"], null);
utils.snake__GT_kebab = (function utils$snake__GT_kebab(x){
return clojure.string.replace(utils.name_STAR_(x),/_/,"-");
});
utils.get_month = (function utils$get_month(obj){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(utils.months,(obj.getMonth() - (1)));
});
utils.epoch = (function utils$epoch(x){
return x.getTime();
});
utils.current_epoch = (function utils$current_epoch(){
return utils.epoch((new goog.date.DateTime()));
});
utils.trim_history = (function utils$trim_history(){
return history.pushState(utils.oget.cljs$core$IFn$_invoke$arity$2(history,new cljs.core.Symbol(null,"state","state",-348086572,null)),"","/#");
});
utils.set_hash_BANG_ = (function utils$set_hash_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52633 = arguments.length;
var i__4865__auto___52634 = (0);
while(true){
if((i__4865__auto___52634 < len__4864__auto___52633)){
args__4870__auto__.push((arguments[i__4865__auto___52634]));

var G__52635 = (i__4865__auto___52634 + (1));
i__4865__auto___52634 = G__52635;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return utils.set_hash_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(utils.set_hash_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__52361){
var map__52362 = p__52361;
var map__52362__$1 = cljs.core.__destructure_map(map__52362);
var trim = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52362__$1,new cljs.core.Keyword(null,"trim","trim",774319767),true);
if(cljs.core.truth_(trim)){
utils.trim_history();
} else {
}

return utils.oset_BANG_(document.location,"hash",s);
}));

(utils.set_hash_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(utils.set_hash_BANG_.cljs$lang$applyTo = (function (seq52359){
var G__52360 = cljs.core.first(seq52359);
var seq52359__$1 = cljs.core.next(seq52359);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52360,seq52359__$1);
}));

utils.attach_event = (function utils$attach_event(t,λ){
return window.addEventListener(cljs.core.name(t),λ);
});
utils.dispatch_event = (function utils$dispatch_event(event){
return window.dispatchEvent((new Event(cljs.core.name(event))));
});
utils.initialize_hash = (function utils$initialize_hash(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52641 = arguments.length;
var i__4865__auto___52643 = (0);
while(true){
if((i__4865__auto___52643 < len__4864__auto___52641)){
args__4870__auto__.push((arguments[i__4865__auto___52643]));

var G__52644 = (i__4865__auto___52643 + (1));
i__4865__auto___52643 = G__52644;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return utils.initialize_hash.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(utils.initialize_hash.cljs$core$IFn$_invoke$arity$variadic = (function (_){
var url_hash = utils.oget_in(document,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Symbol(null,"hash","hash",1626749931,null)], null));
var pathname = utils.oget_in(document,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Symbol(null,"pathname","pathname",220033999,null)], null));
if((!(clojure.string.blank_QMARK_(url_hash)))){
return history.pushState(({}),"",["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url_hash)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",pathname)){
history.pushState(({}),"","/#/index");

return utils.dispatch_event(new cljs.core.Keyword(null,"hashchange","hashchange",1795201042));
} else {
history.pushState(({}),"",["/#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pathname)].join(''));

return utils.dispatch_event(new cljs.core.Keyword(null,"hashchange","hashchange",1795201042));

}
}
}));

(utils.initialize_hash.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(utils.initialize_hash.cljs$lang$applyTo = (function (seq52363){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52363));
}));


//# sourceMappingURL=utils.js.map
