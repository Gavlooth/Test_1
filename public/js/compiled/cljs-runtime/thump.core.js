goog.provide('thump.core');
thump.core.keyword__GT_str = (function thump$core$keyword__GT_str(k){
var kw_ns = cljs.core.namespace(k);
var kw_name = cljs.core.name(k);
if((kw_ns == null)){
return kw_name;
} else {
return [kw_ns,"/",kw_name].join('');
}
});
thump.core._STAR_hiccup_element_STAR_ = (function thump$core$_STAR_hiccup_element_STAR_(el,props,children){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"hiccup-element","hiccup-element",-631908110,null),null,(1),null)),(new cljs.core.List(null,el,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,props,null,(1),null)),(new cljs.core.List(null,children,null,(1),null))], 0))));
});
thump.core.maybe_parse_child = (function thump$core$maybe_parse_child(c){
if(cljs.core.vector_QMARK_(c)){
return (thump.core.parse.cljs$core$IFn$_invoke$arity$1 ? thump.core.parse.cljs$core$IFn$_invoke$arity$1(c) : thump.core.parse.call(null,c));
} else {
return c;
}
});
thump.core.parse = (function thump$core$parse(vec){
if((!(cljs.core.vector_QMARK_(vec)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(vec)," is not a valid hiccup vector."].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
var vec__45946 = vec;
var seq__45947 = cljs.core.seq(vec__45946);
var first__45948 = cljs.core.first(seq__45947);
var seq__45947__$1 = cljs.core.next(seq__45947);
var el = first__45948;
var first__45948__$1 = cljs.core.first(seq__45947__$1);
var seq__45947__$2 = cljs.core.next(seq__45947__$1);
var props = first__45948__$1;
var children = seq__45947__$2;
var el__$1 = (((el instanceof cljs.core.Keyword))?thump.core.keyword__GT_str(el):el);
var props_QMARK_ = cljs.core.map_QMARK_(props);
var children_QMARK_ = (!((cljs.core.seq(children) == null)));
var children__$1 = ((((props_QMARK_) && (children_QMARK_)))?children:((children_QMARK_)?cljs.core.cons(props,children):((props_QMARK_)?cljs.core.List.EMPTY:(new cljs.core.List(null,props,null,(1),null))
)));
var props__$1 = ((props_QMARK_)?props:null);
return thump.core._STAR_hiccup_element_STAR_.call(null,el__$1,props__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2(thump.core.maybe_parse_child,children__$1));
}
});
thump.core.interpret = (function thump$core$interpret(vec){
return thump.core.parse(vec);
});
cljs.reader.register_tag_parser_BANG_(new cljs.core.Symbol("hiccup","element","hiccup/element",1760032112,null),thump.core.parse);

cljs.reader.register_tag_parser_BANG_(new cljs.core.Symbol("h","e","h/e",-1273166659,null),thump.core.parse);

//# sourceMappingURL=thump.core.js.map
