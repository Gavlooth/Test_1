goog.provide('thump.react');
goog.scope(function(){
  thump.react.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
thump.react.keyword__GT_str = (function thump$react$keyword__GT_str(k){
var kw_ns = cljs.core.namespace(k);
var kw_name = cljs.core.name(k);
if((kw_ns == null)){
return kw_name;
} else {
return [kw_ns,"/",kw_name].join('');
}
});
/**
 * Returns camel case version of the string, e.g. "http-equiv" becomes "httpEquiv".
 */
thump.react.camel_case_STAR_ = (function thump$react$camel_case_STAR_(s){
if((((s instanceof cljs.core.Keyword)) || (((typeof s === 'string') || ((s instanceof cljs.core.Symbol)))))){
var vec__46273 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(s),/-/);
var seq__46274 = cljs.core.seq(vec__46273);
var first__46275 = cljs.core.first(seq__46274);
var seq__46274__$1 = cljs.core.next(seq__46274);
var first_word = first__46275;
var words = seq__46274__$1;
if(((cljs.core.empty_QMARK_(words)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("aria",first_word)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("data",first_word)))))){
return cljs.core.name(s);
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,words),first_word));
}
} else {
return s;
}
});
thump.react.map_entry__GT_obj_entry = (function thump$react$map_entry__GT_obj_entry(p__46297){
var vec__46301 = p__46297;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46301,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46301,(1),null);
var G__46304 = k;
var G__46304__$1 = (((G__46304 instanceof cljs.core.Keyword))?G__46304.fqn:null);
switch (G__46304__$1) {
case "style":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["style",cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keyword-fn","keyword-fn",-64566675),thump.react.camel_case_STAR_], 0))], null);

break;
case "class":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["className",((typeof v === 'string')?v:clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,v)))], null);

break;
case "for":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["htmlFor",v], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thump.react.camel_case_STAR_(thump.react.keyword__GT_str(k)),v], null);

}
});
thump.react.merge_obj_PLUS_map = (function thump$react$merge_obj_PLUS_map(obj,m){
var seq__46314_46419 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(thump.react.map_entry__GT_obj_entry,m));
var chunk__46315_46420 = null;
var count__46316_46421 = (0);
var i__46317_46422 = (0);
while(true){
if((i__46317_46422 < count__46316_46421)){
var vec__46337_46426 = chunk__46315_46420.cljs$core$IIndexed$_nth$arity$2(null,i__46317_46422);
var k_46427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46337_46426,(0),null);
var v_46428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46337_46426,(1),null);
if(cljs.core.truth_(thump.react.goog$module$goog$object.containsKey(obj,k_46427))){
} else {
thump.react.goog$module$goog$object.set(obj,k_46427,v_46428);
}


var G__46434 = seq__46314_46419;
var G__46435 = chunk__46315_46420;
var G__46436 = count__46316_46421;
var G__46437 = (i__46317_46422 + (1));
seq__46314_46419 = G__46434;
chunk__46315_46420 = G__46435;
count__46316_46421 = G__46436;
i__46317_46422 = G__46437;
continue;
} else {
var temp__5720__auto___46439 = cljs.core.seq(seq__46314_46419);
if(temp__5720__auto___46439){
var seq__46314_46440__$1 = temp__5720__auto___46439;
if(cljs.core.chunked_seq_QMARK_(seq__46314_46440__$1)){
var c__4679__auto___46442 = cljs.core.chunk_first(seq__46314_46440__$1);
var G__46443 = cljs.core.chunk_rest(seq__46314_46440__$1);
var G__46444 = c__4679__auto___46442;
var G__46445 = cljs.core.count(c__4679__auto___46442);
var G__46446 = (0);
seq__46314_46419 = G__46443;
chunk__46315_46420 = G__46444;
count__46316_46421 = G__46445;
i__46317_46422 = G__46446;
continue;
} else {
var vec__46345_46447 = cljs.core.first(seq__46314_46440__$1);
var k_46448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46345_46447,(0),null);
var v_46449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46345_46447,(1),null);
if(cljs.core.truth_(thump.react.goog$module$goog$object.containsKey(obj,k_46448))){
} else {
thump.react.goog$module$goog$object.set(obj,k_46448,v_46449);
}


var G__46451 = cljs.core.next(seq__46314_46440__$1);
var G__46452 = null;
var G__46453 = (0);
var G__46454 = (0);
seq__46314_46419 = G__46451;
chunk__46315_46420 = G__46452;
count__46316_46421 = G__46453;
i__46317_46422 = G__46454;
continue;
}
} else {
}
}
break;
}

return obj;
});
thump.react.props__GT_obj = (function thump$react$props__GT_obj(m){
if(cljs.core.contains_QMARK_(m,new cljs.core.Symbol(null,"&","&",-2144855648,null))){
return thump.react.merge_obj_PLUS_map(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thump.react.goog$module$goog$object.create,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(thump.react.map_entry__GT_obj_entry,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Symbol(null,"&","&",-2144855648,null))], 0))),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Symbol(null,"&","&",-2144855648,null)));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thump.react.goog$module$goog$object.create,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(thump.react.map_entry__GT_obj_entry,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0)));
}
});
thump.react.create_element = module$node_modules$react$index.createElement;
thump.react.Fragment = module$node_modules$react$index.Fragment;
thump.react.custom_els = new cljs.core.PersistentArrayMap(null, 1, ["<>",module$node_modules$react$index.Fragment], null);
thump.react.hiccup_element = (function thump$react$hiccup_element(el,props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,cljs.core.get.cljs$core$IFn$_invoke$arity$3(thump.react.custom_els,el,el),thump.react.props__GT_obj(props),children);
});
thump.react.interpret = (function thump$react$interpret(vec){
var _STAR_hiccup_element_STAR__orig_val__46394 = thump.core._STAR_hiccup_element_STAR_;
var _STAR_hiccup_element_STAR__temp_val__46395 = thump.react.hiccup_element;
(thump.core._STAR_hiccup_element_STAR_ = _STAR_hiccup_element_STAR__temp_val__46395);

try{return thump.core.interpret(vec);
}finally {(thump.core._STAR_hiccup_element_STAR_ = _STAR_hiccup_element_STAR__orig_val__46394);
}});

//# sourceMappingURL=thump.react.js.map
