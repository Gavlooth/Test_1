goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_51809 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_51809(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_51812 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_51812(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__50277 = coll;
var G__50278 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__50277,G__50278) : shadow.dom.lazy_native_coll_seq.call(null,G__50277,G__50278));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__50349 = arguments.length;
switch (G__50349) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__50371 = arguments.length;
switch (G__50371) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__50395 = arguments.length;
switch (G__50395) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__50410 = arguments.length;
switch (G__50410) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__50444 = arguments.length;
switch (G__50444) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__50481 = arguments.length;
switch (G__50481) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e50524){if((e50524 instanceof Object)){
var e = e50524;
return console.log("didnt support attachEvent",el,e);
} else {
throw e50524;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__50539 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__50540 = null;
var count__50541 = (0);
var i__50542 = (0);
while(true){
if((i__50542 < count__50541)){
var el = chunk__50540.cljs$core$IIndexed$_nth$arity$2(null,i__50542);
var handler_51837__$1 = ((function (seq__50539,chunk__50540,count__50541,i__50542,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__50539,chunk__50540,count__50541,i__50542,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_51837__$1);


var G__51838 = seq__50539;
var G__51839 = chunk__50540;
var G__51840 = count__50541;
var G__51841 = (i__50542 + (1));
seq__50539 = G__51838;
chunk__50540 = G__51839;
count__50541 = G__51840;
i__50542 = G__51841;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__50539);
if(temp__5720__auto__){
var seq__50539__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50539__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__50539__$1);
var G__51844 = cljs.core.chunk_rest(seq__50539__$1);
var G__51845 = c__4679__auto__;
var G__51846 = cljs.core.count(c__4679__auto__);
var G__51847 = (0);
seq__50539 = G__51844;
chunk__50540 = G__51845;
count__50541 = G__51846;
i__50542 = G__51847;
continue;
} else {
var el = cljs.core.first(seq__50539__$1);
var handler_51848__$1 = ((function (seq__50539,chunk__50540,count__50541,i__50542,el,seq__50539__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__50539,chunk__50540,count__50541,i__50542,el,seq__50539__$1,temp__5720__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_51848__$1);


var G__51849 = cljs.core.next(seq__50539__$1);
var G__51850 = null;
var G__51851 = (0);
var G__51852 = (0);
seq__50539 = G__51849;
chunk__50540 = G__51850;
count__50541 = G__51851;
i__50542 = G__51852;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__50578 = arguments.length;
switch (G__50578) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__50621 = cljs.core.seq(events);
var chunk__50622 = null;
var count__50623 = (0);
var i__50624 = (0);
while(true){
if((i__50624 < count__50623)){
var vec__50638 = chunk__50622.cljs$core$IIndexed$_nth$arity$2(null,i__50624);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50638,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50638,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__51858 = seq__50621;
var G__51859 = chunk__50622;
var G__51860 = count__50623;
var G__51861 = (i__50624 + (1));
seq__50621 = G__51858;
chunk__50622 = G__51859;
count__50623 = G__51860;
i__50624 = G__51861;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__50621);
if(temp__5720__auto__){
var seq__50621__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50621__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__50621__$1);
var G__51863 = cljs.core.chunk_rest(seq__50621__$1);
var G__51864 = c__4679__auto__;
var G__51865 = cljs.core.count(c__4679__auto__);
var G__51866 = (0);
seq__50621 = G__51863;
chunk__50622 = G__51864;
count__50623 = G__51865;
i__50624 = G__51866;
continue;
} else {
var vec__50658 = cljs.core.first(seq__50621__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50658,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50658,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__51867 = cljs.core.next(seq__50621__$1);
var G__51868 = null;
var G__51869 = (0);
var G__51870 = (0);
seq__50621 = G__51867;
chunk__50622 = G__51868;
count__50623 = G__51869;
i__50624 = G__51870;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__50681 = cljs.core.seq(styles);
var chunk__50682 = null;
var count__50683 = (0);
var i__50684 = (0);
while(true){
if((i__50684 < count__50683)){
var vec__50725 = chunk__50682.cljs$core$IIndexed$_nth$arity$2(null,i__50684);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50725,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50725,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__51872 = seq__50681;
var G__51873 = chunk__50682;
var G__51874 = count__50683;
var G__51875 = (i__50684 + (1));
seq__50681 = G__51872;
chunk__50682 = G__51873;
count__50683 = G__51874;
i__50684 = G__51875;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__50681);
if(temp__5720__auto__){
var seq__50681__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50681__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__50681__$1);
var G__51876 = cljs.core.chunk_rest(seq__50681__$1);
var G__51877 = c__4679__auto__;
var G__51878 = cljs.core.count(c__4679__auto__);
var G__51879 = (0);
seq__50681 = G__51876;
chunk__50682 = G__51877;
count__50683 = G__51878;
i__50684 = G__51879;
continue;
} else {
var vec__50741 = cljs.core.first(seq__50681__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50741,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50741,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__51882 = cljs.core.next(seq__50681__$1);
var G__51883 = null;
var G__51884 = (0);
var G__51885 = (0);
seq__50681 = G__51882;
chunk__50682 = G__51883;
count__50683 = G__51884;
i__50684 = G__51885;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__50758_51886 = key;
var G__50758_51887__$1 = (((G__50758_51886 instanceof cljs.core.Keyword))?G__50758_51886.fqn:null);
switch (G__50758_51887__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_51892 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_51892,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_51892,"aria-");
}
})())){
el.setAttribute(ks_51892,value);
} else {
(el[ks_51892] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__50827){
var map__50829 = p__50827;
var map__50829__$1 = cljs.core.__destructure_map(map__50829);
var props = map__50829__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50829__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__50832 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50832,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50832,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50832,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__50839 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__50839,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__50839;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__50851 = arguments.length;
switch (G__50851) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__50866){
var vec__50871 = p__50866;
var seq__50872 = cljs.core.seq(vec__50871);
var first__50873 = cljs.core.first(seq__50872);
var seq__50872__$1 = cljs.core.next(seq__50872);
var nn = first__50873;
var first__50873__$1 = cljs.core.first(seq__50872__$1);
var seq__50872__$2 = cljs.core.next(seq__50872__$1);
var np = first__50873__$1;
var nc = seq__50872__$2;
var node = vec__50871;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__50876 = nn;
var G__50877 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__50876,G__50877) : create_fn.call(null,G__50876,G__50877));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__50880 = nn;
var G__50881 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__50880,G__50881) : create_fn.call(null,G__50880,G__50881));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__50889 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50889,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50889,(1),null);
var seq__50893_51908 = cljs.core.seq(node_children);
var chunk__50894_51909 = null;
var count__50895_51910 = (0);
var i__50896_51911 = (0);
while(true){
if((i__50896_51911 < count__50895_51910)){
var child_struct_51912 = chunk__50894_51909.cljs$core$IIndexed$_nth$arity$2(null,i__50896_51911);
var children_51913 = shadow.dom.dom_node(child_struct_51912);
if(cljs.core.seq_QMARK_(children_51913)){
var seq__50980_51914 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_51913));
var chunk__50982_51915 = null;
var count__50983_51916 = (0);
var i__50984_51917 = (0);
while(true){
if((i__50984_51917 < count__50983_51916)){
var child_51918 = chunk__50982_51915.cljs$core$IIndexed$_nth$arity$2(null,i__50984_51917);
if(cljs.core.truth_(child_51918)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51918);


var G__51919 = seq__50980_51914;
var G__51920 = chunk__50982_51915;
var G__51921 = count__50983_51916;
var G__51922 = (i__50984_51917 + (1));
seq__50980_51914 = G__51919;
chunk__50982_51915 = G__51920;
count__50983_51916 = G__51921;
i__50984_51917 = G__51922;
continue;
} else {
var G__51924 = seq__50980_51914;
var G__51925 = chunk__50982_51915;
var G__51926 = count__50983_51916;
var G__51927 = (i__50984_51917 + (1));
seq__50980_51914 = G__51924;
chunk__50982_51915 = G__51925;
count__50983_51916 = G__51926;
i__50984_51917 = G__51927;
continue;
}
} else {
var temp__5720__auto___51928 = cljs.core.seq(seq__50980_51914);
if(temp__5720__auto___51928){
var seq__50980_51929__$1 = temp__5720__auto___51928;
if(cljs.core.chunked_seq_QMARK_(seq__50980_51929__$1)){
var c__4679__auto___51930 = cljs.core.chunk_first(seq__50980_51929__$1);
var G__51931 = cljs.core.chunk_rest(seq__50980_51929__$1);
var G__51932 = c__4679__auto___51930;
var G__51933 = cljs.core.count(c__4679__auto___51930);
var G__51934 = (0);
seq__50980_51914 = G__51931;
chunk__50982_51915 = G__51932;
count__50983_51916 = G__51933;
i__50984_51917 = G__51934;
continue;
} else {
var child_51935 = cljs.core.first(seq__50980_51929__$1);
if(cljs.core.truth_(child_51935)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51935);


var G__51936 = cljs.core.next(seq__50980_51929__$1);
var G__51937 = null;
var G__51938 = (0);
var G__51939 = (0);
seq__50980_51914 = G__51936;
chunk__50982_51915 = G__51937;
count__50983_51916 = G__51938;
i__50984_51917 = G__51939;
continue;
} else {
var G__51940 = cljs.core.next(seq__50980_51929__$1);
var G__51942 = null;
var G__51943 = (0);
var G__51944 = (0);
seq__50980_51914 = G__51940;
chunk__50982_51915 = G__51942;
count__50983_51916 = G__51943;
i__50984_51917 = G__51944;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_51913);
}


var G__51946 = seq__50893_51908;
var G__51947 = chunk__50894_51909;
var G__51948 = count__50895_51910;
var G__51949 = (i__50896_51911 + (1));
seq__50893_51908 = G__51946;
chunk__50894_51909 = G__51947;
count__50895_51910 = G__51948;
i__50896_51911 = G__51949;
continue;
} else {
var temp__5720__auto___51950 = cljs.core.seq(seq__50893_51908);
if(temp__5720__auto___51950){
var seq__50893_51951__$1 = temp__5720__auto___51950;
if(cljs.core.chunked_seq_QMARK_(seq__50893_51951__$1)){
var c__4679__auto___51952 = cljs.core.chunk_first(seq__50893_51951__$1);
var G__51953 = cljs.core.chunk_rest(seq__50893_51951__$1);
var G__51954 = c__4679__auto___51952;
var G__51955 = cljs.core.count(c__4679__auto___51952);
var G__51956 = (0);
seq__50893_51908 = G__51953;
chunk__50894_51909 = G__51954;
count__50895_51910 = G__51955;
i__50896_51911 = G__51956;
continue;
} else {
var child_struct_51959 = cljs.core.first(seq__50893_51951__$1);
var children_51960 = shadow.dom.dom_node(child_struct_51959);
if(cljs.core.seq_QMARK_(children_51960)){
var seq__51056_51961 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_51960));
var chunk__51058_51962 = null;
var count__51059_51963 = (0);
var i__51060_51964 = (0);
while(true){
if((i__51060_51964 < count__51059_51963)){
var child_51965 = chunk__51058_51962.cljs$core$IIndexed$_nth$arity$2(null,i__51060_51964);
if(cljs.core.truth_(child_51965)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51965);


var G__51966 = seq__51056_51961;
var G__51967 = chunk__51058_51962;
var G__51968 = count__51059_51963;
var G__51969 = (i__51060_51964 + (1));
seq__51056_51961 = G__51966;
chunk__51058_51962 = G__51967;
count__51059_51963 = G__51968;
i__51060_51964 = G__51969;
continue;
} else {
var G__51970 = seq__51056_51961;
var G__51971 = chunk__51058_51962;
var G__51972 = count__51059_51963;
var G__51973 = (i__51060_51964 + (1));
seq__51056_51961 = G__51970;
chunk__51058_51962 = G__51971;
count__51059_51963 = G__51972;
i__51060_51964 = G__51973;
continue;
}
} else {
var temp__5720__auto___51974__$1 = cljs.core.seq(seq__51056_51961);
if(temp__5720__auto___51974__$1){
var seq__51056_51975__$1 = temp__5720__auto___51974__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51056_51975__$1)){
var c__4679__auto___51977 = cljs.core.chunk_first(seq__51056_51975__$1);
var G__51978 = cljs.core.chunk_rest(seq__51056_51975__$1);
var G__51979 = c__4679__auto___51977;
var G__51980 = cljs.core.count(c__4679__auto___51977);
var G__51981 = (0);
seq__51056_51961 = G__51978;
chunk__51058_51962 = G__51979;
count__51059_51963 = G__51980;
i__51060_51964 = G__51981;
continue;
} else {
var child_51982 = cljs.core.first(seq__51056_51975__$1);
if(cljs.core.truth_(child_51982)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51982);


var G__51983 = cljs.core.next(seq__51056_51975__$1);
var G__51984 = null;
var G__51985 = (0);
var G__51986 = (0);
seq__51056_51961 = G__51983;
chunk__51058_51962 = G__51984;
count__51059_51963 = G__51985;
i__51060_51964 = G__51986;
continue;
} else {
var G__51987 = cljs.core.next(seq__51056_51975__$1);
var G__51988 = null;
var G__51989 = (0);
var G__51990 = (0);
seq__51056_51961 = G__51987;
chunk__51058_51962 = G__51988;
count__51059_51963 = G__51989;
i__51060_51964 = G__51990;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_51960);
}


var G__51991 = cljs.core.next(seq__50893_51951__$1);
var G__51992 = null;
var G__51993 = (0);
var G__51994 = (0);
seq__50893_51908 = G__51991;
chunk__50894_51909 = G__51992;
count__50895_51910 = G__51993;
i__50896_51911 = G__51994;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__51172 = cljs.core.seq(node);
var chunk__51173 = null;
var count__51174 = (0);
var i__51175 = (0);
while(true){
if((i__51175 < count__51174)){
var n = chunk__51173.cljs$core$IIndexed$_nth$arity$2(null,i__51175);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__52000 = seq__51172;
var G__52001 = chunk__51173;
var G__52002 = count__51174;
var G__52003 = (i__51175 + (1));
seq__51172 = G__52000;
chunk__51173 = G__52001;
count__51174 = G__52002;
i__51175 = G__52003;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__51172);
if(temp__5720__auto__){
var seq__51172__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51172__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__51172__$1);
var G__52006 = cljs.core.chunk_rest(seq__51172__$1);
var G__52007 = c__4679__auto__;
var G__52008 = cljs.core.count(c__4679__auto__);
var G__52009 = (0);
seq__51172 = G__52006;
chunk__51173 = G__52007;
count__51174 = G__52008;
i__51175 = G__52009;
continue;
} else {
var n = cljs.core.first(seq__51172__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__52010 = cljs.core.next(seq__51172__$1);
var G__52011 = null;
var G__52012 = (0);
var G__52013 = (0);
seq__51172 = G__52010;
chunk__51173 = G__52011;
count__51174 = G__52012;
i__51175 = G__52013;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__51234 = arguments.length;
switch (G__51234) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__51256 = arguments.length;
switch (G__51256) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__51272 = arguments.length;
switch (G__51272) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52027 = arguments.length;
var i__4865__auto___52028 = (0);
while(true){
if((i__4865__auto___52028 < len__4864__auto___52027)){
args__4870__auto__.push((arguments[i__4865__auto___52028]));

var G__52029 = (i__4865__auto___52028 + (1));
i__4865__auto___52028 = G__52029;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__51308_52032 = cljs.core.seq(nodes);
var chunk__51309_52033 = null;
var count__51310_52034 = (0);
var i__51311_52035 = (0);
while(true){
if((i__51311_52035 < count__51310_52034)){
var node_52036 = chunk__51309_52033.cljs$core$IIndexed$_nth$arity$2(null,i__51311_52035);
fragment.appendChild(shadow.dom._to_dom(node_52036));


var G__52037 = seq__51308_52032;
var G__52038 = chunk__51309_52033;
var G__52039 = count__51310_52034;
var G__52040 = (i__51311_52035 + (1));
seq__51308_52032 = G__52037;
chunk__51309_52033 = G__52038;
count__51310_52034 = G__52039;
i__51311_52035 = G__52040;
continue;
} else {
var temp__5720__auto___52041 = cljs.core.seq(seq__51308_52032);
if(temp__5720__auto___52041){
var seq__51308_52042__$1 = temp__5720__auto___52041;
if(cljs.core.chunked_seq_QMARK_(seq__51308_52042__$1)){
var c__4679__auto___52043 = cljs.core.chunk_first(seq__51308_52042__$1);
var G__52044 = cljs.core.chunk_rest(seq__51308_52042__$1);
var G__52045 = c__4679__auto___52043;
var G__52046 = cljs.core.count(c__4679__auto___52043);
var G__52047 = (0);
seq__51308_52032 = G__52044;
chunk__51309_52033 = G__52045;
count__51310_52034 = G__52046;
i__51311_52035 = G__52047;
continue;
} else {
var node_52049 = cljs.core.first(seq__51308_52042__$1);
fragment.appendChild(shadow.dom._to_dom(node_52049));


var G__52050 = cljs.core.next(seq__51308_52042__$1);
var G__52051 = null;
var G__52052 = (0);
var G__52053 = (0);
seq__51308_52032 = G__52050;
chunk__51309_52033 = G__52051;
count__51310_52034 = G__52052;
i__51311_52035 = G__52053;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq51298){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51298));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__51330_52056 = cljs.core.seq(scripts);
var chunk__51331_52057 = null;
var count__51332_52058 = (0);
var i__51333_52059 = (0);
while(true){
if((i__51333_52059 < count__51332_52058)){
var vec__51355_52060 = chunk__51331_52057.cljs$core$IIndexed$_nth$arity$2(null,i__51333_52059);
var script_tag_52061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51355_52060,(0),null);
var script_body_52062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51355_52060,(1),null);
eval(script_body_52062);


var G__52063 = seq__51330_52056;
var G__52064 = chunk__51331_52057;
var G__52065 = count__51332_52058;
var G__52066 = (i__51333_52059 + (1));
seq__51330_52056 = G__52063;
chunk__51331_52057 = G__52064;
count__51332_52058 = G__52065;
i__51333_52059 = G__52066;
continue;
} else {
var temp__5720__auto___52069 = cljs.core.seq(seq__51330_52056);
if(temp__5720__auto___52069){
var seq__51330_52070__$1 = temp__5720__auto___52069;
if(cljs.core.chunked_seq_QMARK_(seq__51330_52070__$1)){
var c__4679__auto___52071 = cljs.core.chunk_first(seq__51330_52070__$1);
var G__52072 = cljs.core.chunk_rest(seq__51330_52070__$1);
var G__52073 = c__4679__auto___52071;
var G__52074 = cljs.core.count(c__4679__auto___52071);
var G__52075 = (0);
seq__51330_52056 = G__52072;
chunk__51331_52057 = G__52073;
count__51332_52058 = G__52074;
i__51333_52059 = G__52075;
continue;
} else {
var vec__51367_52076 = cljs.core.first(seq__51330_52070__$1);
var script_tag_52077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51367_52076,(0),null);
var script_body_52078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51367_52076,(1),null);
eval(script_body_52078);


var G__52079 = cljs.core.next(seq__51330_52070__$1);
var G__52080 = null;
var G__52081 = (0);
var G__52082 = (0);
seq__51330_52056 = G__52079;
chunk__51331_52057 = G__52080;
count__51332_52058 = G__52081;
i__51333_52059 = G__52082;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__51380){
var vec__51383 = p__51380;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51383,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51383,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__51397 = arguments.length;
switch (G__51397) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__51416 = cljs.core.seq(style_keys);
var chunk__51417 = null;
var count__51418 = (0);
var i__51419 = (0);
while(true){
if((i__51419 < count__51418)){
var it = chunk__51417.cljs$core$IIndexed$_nth$arity$2(null,i__51419);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__52090 = seq__51416;
var G__52091 = chunk__51417;
var G__52092 = count__51418;
var G__52093 = (i__51419 + (1));
seq__51416 = G__52090;
chunk__51417 = G__52091;
count__51418 = G__52092;
i__51419 = G__52093;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__51416);
if(temp__5720__auto__){
var seq__51416__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51416__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__51416__$1);
var G__52096 = cljs.core.chunk_rest(seq__51416__$1);
var G__52097 = c__4679__auto__;
var G__52098 = cljs.core.count(c__4679__auto__);
var G__52099 = (0);
seq__51416 = G__52096;
chunk__51417 = G__52097;
count__51418 = G__52098;
i__51419 = G__52099;
continue;
} else {
var it = cljs.core.first(seq__51416__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__52100 = cljs.core.next(seq__51416__$1);
var G__52101 = null;
var G__52102 = (0);
var G__52103 = (0);
seq__51416 = G__52100;
chunk__51417 = G__52101;
count__51418 = G__52102;
i__51419 = G__52103;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k51432,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__51439 = k51432;
var G__51439__$1 = (((G__51439 instanceof cljs.core.Keyword))?G__51439.fqn:null);
switch (G__51439__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51432,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__51449){
var vec__51450 = p__51449;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51450,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51450,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51431){
var self__ = this;
var G__51431__$1 = this;
return (new cljs.core.RecordIter((0),G__51431__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51433,other51434){
var self__ = this;
var this51433__$1 = this;
return (((!((other51434 == null)))) && ((((this51433__$1.constructor === other51434.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51433__$1.x,other51434.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51433__$1.y,other51434.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51433__$1.__extmap,other51434.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k51432){
var self__ = this;
var this__4509__auto____$1 = this;
var G__51472 = k51432;
var G__51472__$1 = (((G__51472 instanceof cljs.core.Keyword))?G__51472.fqn:null);
switch (G__51472__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k51432);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__51431){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__51474 = cljs.core.keyword_identical_QMARK_;
var expr__51475 = k__4511__auto__;
if(cljs.core.truth_((pred__51474.cljs$core$IFn$_invoke$arity$2 ? pred__51474.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__51475) : pred__51474.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__51475)))){
return (new shadow.dom.Coordinate(G__51431,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51474.cljs$core$IFn$_invoke$arity$2 ? pred__51474.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__51475) : pred__51474.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__51475)))){
return (new shadow.dom.Coordinate(self__.x,G__51431,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__51431),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__51431){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__51431,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__51436){
var extmap__4542__auto__ = (function (){var G__51487 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51436,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__51436)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51487);
} else {
return G__51487;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__51436),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__51436),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k51495,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__51504 = k51495;
var G__51504__$1 = (((G__51504 instanceof cljs.core.Keyword))?G__51504.fqn:null);
switch (G__51504__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51495,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__51508){
var vec__51509 = p__51508;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51509,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51509,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51494){
var self__ = this;
var G__51494__$1 = this;
return (new cljs.core.RecordIter((0),G__51494__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51496,other51497){
var self__ = this;
var this51496__$1 = this;
return (((!((other51497 == null)))) && ((((this51496__$1.constructor === other51497.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51496__$1.w,other51497.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51496__$1.h,other51497.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51496__$1.__extmap,other51497.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k51495){
var self__ = this;
var this__4509__auto____$1 = this;
var G__51533 = k51495;
var G__51533__$1 = (((G__51533 instanceof cljs.core.Keyword))?G__51533.fqn:null);
switch (G__51533__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k51495);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__51494){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__51536 = cljs.core.keyword_identical_QMARK_;
var expr__51537 = k__4511__auto__;
if(cljs.core.truth_((pred__51536.cljs$core$IFn$_invoke$arity$2 ? pred__51536.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__51537) : pred__51536.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__51537)))){
return (new shadow.dom.Size(G__51494,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51536.cljs$core$IFn$_invoke$arity$2 ? pred__51536.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__51537) : pred__51536.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__51537)))){
return (new shadow.dom.Size(self__.w,G__51494,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__51494),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__51494){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__51494,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__51499){
var extmap__4542__auto__ = (function (){var G__51553 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51499,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__51499)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51553);
} else {
return G__51553;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__51499),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__51499),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__52145 = (i + (1));
var G__52146 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__52145;
ret = G__52146;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51581){
var vec__51583 = p__51581;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51583,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51583,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__51591 = arguments.length;
switch (G__51591) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5718__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5718__auto__)){
var child = temp__5718__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__52153 = ps;
var G__52154 = (i + (1));
el__$1 = G__52153;
i = G__52154;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__51622 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51622,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51622,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51622,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__51628_52160 = cljs.core.seq(props);
var chunk__51629_52161 = null;
var count__51630_52162 = (0);
var i__51631_52163 = (0);
while(true){
if((i__51631_52163 < count__51630_52162)){
var vec__51646_52164 = chunk__51629_52161.cljs$core$IIndexed$_nth$arity$2(null,i__51631_52163);
var k_52165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51646_52164,(0),null);
var v_52166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51646_52164,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_52165);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_52165),v_52166);


var G__52168 = seq__51628_52160;
var G__52169 = chunk__51629_52161;
var G__52170 = count__51630_52162;
var G__52171 = (i__51631_52163 + (1));
seq__51628_52160 = G__52168;
chunk__51629_52161 = G__52169;
count__51630_52162 = G__52170;
i__51631_52163 = G__52171;
continue;
} else {
var temp__5720__auto___52172 = cljs.core.seq(seq__51628_52160);
if(temp__5720__auto___52172){
var seq__51628_52173__$1 = temp__5720__auto___52172;
if(cljs.core.chunked_seq_QMARK_(seq__51628_52173__$1)){
var c__4679__auto___52174 = cljs.core.chunk_first(seq__51628_52173__$1);
var G__52175 = cljs.core.chunk_rest(seq__51628_52173__$1);
var G__52176 = c__4679__auto___52174;
var G__52177 = cljs.core.count(c__4679__auto___52174);
var G__52178 = (0);
seq__51628_52160 = G__52175;
chunk__51629_52161 = G__52176;
count__51630_52162 = G__52177;
i__51631_52163 = G__52178;
continue;
} else {
var vec__51653_52179 = cljs.core.first(seq__51628_52173__$1);
var k_52180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51653_52179,(0),null);
var v_52181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51653_52179,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_52180);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_52180),v_52181);


var G__52184 = cljs.core.next(seq__51628_52173__$1);
var G__52185 = null;
var G__52186 = (0);
var G__52187 = (0);
seq__51628_52160 = G__52184;
chunk__51629_52161 = G__52185;
count__51630_52162 = G__52186;
i__51631_52163 = G__52187;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__51663 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51663,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51663,(1),null);
var seq__51666_52190 = cljs.core.seq(node_children);
var chunk__51668_52191 = null;
var count__51669_52192 = (0);
var i__51670_52193 = (0);
while(true){
if((i__51670_52193 < count__51669_52192)){
var child_struct_52194 = chunk__51668_52191.cljs$core$IIndexed$_nth$arity$2(null,i__51670_52193);
if((!((child_struct_52194 == null)))){
if(typeof child_struct_52194 === 'string'){
var text_52195 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_52195),child_struct_52194].join(''));
} else {
var children_52197 = shadow.dom.svg_node(child_struct_52194);
if(cljs.core.seq_QMARK_(children_52197)){
var seq__51711_52198 = cljs.core.seq(children_52197);
var chunk__51713_52199 = null;
var count__51714_52200 = (0);
var i__51715_52201 = (0);
while(true){
if((i__51715_52201 < count__51714_52200)){
var child_52202 = chunk__51713_52199.cljs$core$IIndexed$_nth$arity$2(null,i__51715_52201);
if(cljs.core.truth_(child_52202)){
node.appendChild(child_52202);


var G__52203 = seq__51711_52198;
var G__52204 = chunk__51713_52199;
var G__52205 = count__51714_52200;
var G__52206 = (i__51715_52201 + (1));
seq__51711_52198 = G__52203;
chunk__51713_52199 = G__52204;
count__51714_52200 = G__52205;
i__51715_52201 = G__52206;
continue;
} else {
var G__52207 = seq__51711_52198;
var G__52208 = chunk__51713_52199;
var G__52209 = count__51714_52200;
var G__52210 = (i__51715_52201 + (1));
seq__51711_52198 = G__52207;
chunk__51713_52199 = G__52208;
count__51714_52200 = G__52209;
i__51715_52201 = G__52210;
continue;
}
} else {
var temp__5720__auto___52212 = cljs.core.seq(seq__51711_52198);
if(temp__5720__auto___52212){
var seq__51711_52214__$1 = temp__5720__auto___52212;
if(cljs.core.chunked_seq_QMARK_(seq__51711_52214__$1)){
var c__4679__auto___52215 = cljs.core.chunk_first(seq__51711_52214__$1);
var G__52216 = cljs.core.chunk_rest(seq__51711_52214__$1);
var G__52217 = c__4679__auto___52215;
var G__52218 = cljs.core.count(c__4679__auto___52215);
var G__52219 = (0);
seq__51711_52198 = G__52216;
chunk__51713_52199 = G__52217;
count__51714_52200 = G__52218;
i__51715_52201 = G__52219;
continue;
} else {
var child_52220 = cljs.core.first(seq__51711_52214__$1);
if(cljs.core.truth_(child_52220)){
node.appendChild(child_52220);


var G__52223 = cljs.core.next(seq__51711_52214__$1);
var G__52224 = null;
var G__52225 = (0);
var G__52226 = (0);
seq__51711_52198 = G__52223;
chunk__51713_52199 = G__52224;
count__51714_52200 = G__52225;
i__51715_52201 = G__52226;
continue;
} else {
var G__52227 = cljs.core.next(seq__51711_52214__$1);
var G__52228 = null;
var G__52229 = (0);
var G__52230 = (0);
seq__51711_52198 = G__52227;
chunk__51713_52199 = G__52228;
count__51714_52200 = G__52229;
i__51715_52201 = G__52230;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_52197);
}
}


var G__52231 = seq__51666_52190;
var G__52232 = chunk__51668_52191;
var G__52233 = count__51669_52192;
var G__52234 = (i__51670_52193 + (1));
seq__51666_52190 = G__52231;
chunk__51668_52191 = G__52232;
count__51669_52192 = G__52233;
i__51670_52193 = G__52234;
continue;
} else {
var G__52235 = seq__51666_52190;
var G__52236 = chunk__51668_52191;
var G__52237 = count__51669_52192;
var G__52238 = (i__51670_52193 + (1));
seq__51666_52190 = G__52235;
chunk__51668_52191 = G__52236;
count__51669_52192 = G__52237;
i__51670_52193 = G__52238;
continue;
}
} else {
var temp__5720__auto___52239 = cljs.core.seq(seq__51666_52190);
if(temp__5720__auto___52239){
var seq__51666_52240__$1 = temp__5720__auto___52239;
if(cljs.core.chunked_seq_QMARK_(seq__51666_52240__$1)){
var c__4679__auto___52241 = cljs.core.chunk_first(seq__51666_52240__$1);
var G__52242 = cljs.core.chunk_rest(seq__51666_52240__$1);
var G__52243 = c__4679__auto___52241;
var G__52244 = cljs.core.count(c__4679__auto___52241);
var G__52245 = (0);
seq__51666_52190 = G__52242;
chunk__51668_52191 = G__52243;
count__51669_52192 = G__52244;
i__51670_52193 = G__52245;
continue;
} else {
var child_struct_52246 = cljs.core.first(seq__51666_52240__$1);
if((!((child_struct_52246 == null)))){
if(typeof child_struct_52246 === 'string'){
var text_52248 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_52248),child_struct_52246].join(''));
} else {
var children_52249 = shadow.dom.svg_node(child_struct_52246);
if(cljs.core.seq_QMARK_(children_52249)){
var seq__51729_52250 = cljs.core.seq(children_52249);
var chunk__51731_52251 = null;
var count__51732_52252 = (0);
var i__51733_52253 = (0);
while(true){
if((i__51733_52253 < count__51732_52252)){
var child_52254 = chunk__51731_52251.cljs$core$IIndexed$_nth$arity$2(null,i__51733_52253);
if(cljs.core.truth_(child_52254)){
node.appendChild(child_52254);


var G__52255 = seq__51729_52250;
var G__52256 = chunk__51731_52251;
var G__52257 = count__51732_52252;
var G__52258 = (i__51733_52253 + (1));
seq__51729_52250 = G__52255;
chunk__51731_52251 = G__52256;
count__51732_52252 = G__52257;
i__51733_52253 = G__52258;
continue;
} else {
var G__52260 = seq__51729_52250;
var G__52261 = chunk__51731_52251;
var G__52262 = count__51732_52252;
var G__52263 = (i__51733_52253 + (1));
seq__51729_52250 = G__52260;
chunk__51731_52251 = G__52261;
count__51732_52252 = G__52262;
i__51733_52253 = G__52263;
continue;
}
} else {
var temp__5720__auto___52265__$1 = cljs.core.seq(seq__51729_52250);
if(temp__5720__auto___52265__$1){
var seq__51729_52266__$1 = temp__5720__auto___52265__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51729_52266__$1)){
var c__4679__auto___52267 = cljs.core.chunk_first(seq__51729_52266__$1);
var G__52268 = cljs.core.chunk_rest(seq__51729_52266__$1);
var G__52269 = c__4679__auto___52267;
var G__52270 = cljs.core.count(c__4679__auto___52267);
var G__52271 = (0);
seq__51729_52250 = G__52268;
chunk__51731_52251 = G__52269;
count__51732_52252 = G__52270;
i__51733_52253 = G__52271;
continue;
} else {
var child_52273 = cljs.core.first(seq__51729_52266__$1);
if(cljs.core.truth_(child_52273)){
node.appendChild(child_52273);


var G__52275 = cljs.core.next(seq__51729_52266__$1);
var G__52276 = null;
var G__52277 = (0);
var G__52278 = (0);
seq__51729_52250 = G__52275;
chunk__51731_52251 = G__52276;
count__51732_52252 = G__52277;
i__51733_52253 = G__52278;
continue;
} else {
var G__52279 = cljs.core.next(seq__51729_52266__$1);
var G__52280 = null;
var G__52281 = (0);
var G__52282 = (0);
seq__51729_52250 = G__52279;
chunk__51731_52251 = G__52280;
count__51732_52252 = G__52281;
i__51733_52253 = G__52282;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_52249);
}
}


var G__52283 = cljs.core.next(seq__51666_52240__$1);
var G__52284 = null;
var G__52285 = (0);
var G__52286 = (0);
seq__51666_52190 = G__52283;
chunk__51668_52191 = G__52284;
count__51669_52192 = G__52285;
i__51670_52193 = G__52286;
continue;
} else {
var G__52287 = cljs.core.next(seq__51666_52240__$1);
var G__52288 = null;
var G__52289 = (0);
var G__52290 = (0);
seq__51666_52190 = G__52287;
chunk__51668_52191 = G__52288;
count__51669_52192 = G__52289;
i__51670_52193 = G__52290;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52294 = arguments.length;
var i__4865__auto___52295 = (0);
while(true){
if((i__4865__auto___52295 < len__4864__auto___52294)){
args__4870__auto__.push((arguments[i__4865__auto___52295]));

var G__52296 = (i__4865__auto___52295 + (1));
i__4865__auto___52295 = G__52296;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq51755){
var G__51756 = cljs.core.first(seq51755);
var seq51755__$1 = cljs.core.next(seq51755);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51756,seq51755__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__51769 = arguments.length;
switch (G__51769) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__43329__auto___52305 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43330__auto__ = (function (){var switch__42383__auto__ = (function (state_51784){
var state_val_51785 = (state_51784[(1)]);
if((state_val_51785 === (1))){
var state_51784__$1 = state_51784;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51784__$1,(2),once_or_cleanup);
} else {
if((state_val_51785 === (2))){
var inst_51780 = (state_51784[(2)]);
var inst_51782 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_51784__$1 = (function (){var statearr_51790 = state_51784;
(statearr_51790[(7)] = inst_51780);

return statearr_51790;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51784__$1,inst_51782);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__42384__auto__ = null;
var shadow$dom$state_machine__42384__auto____0 = (function (){
var statearr_51792 = [null,null,null,null,null,null,null,null];
(statearr_51792[(0)] = shadow$dom$state_machine__42384__auto__);

(statearr_51792[(1)] = (1));

return statearr_51792;
});
var shadow$dom$state_machine__42384__auto____1 = (function (state_51784){
while(true){
var ret_value__42385__auto__ = (function (){try{while(true){
var result__42386__auto__ = switch__42383__auto__(state_51784);
if(cljs.core.keyword_identical_QMARK_(result__42386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42386__auto__;
}
break;
}
}catch (e51793){var ex__42387__auto__ = e51793;
var statearr_51796_52307 = state_51784;
(statearr_51796_52307[(2)] = ex__42387__auto__);


if(cljs.core.seq((state_51784[(4)]))){
var statearr_51797_52308 = state_51784;
(statearr_51797_52308[(1)] = cljs.core.first((state_51784[(4)])));

} else {
throw ex__42387__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52311 = state_51784;
state_51784 = G__52311;
continue;
} else {
return ret_value__42385__auto__;
}
break;
}
});
shadow$dom$state_machine__42384__auto__ = function(state_51784){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__42384__auto____0.call(this);
case 1:
return shadow$dom$state_machine__42384__auto____1.call(this,state_51784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__42384__auto____0;
shadow$dom$state_machine__42384__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__42384__auto____1;
return shadow$dom$state_machine__42384__auto__;
})()
})();
var state__43331__auto__ = (function (){var statearr_51800 = f__43330__auto__();
(statearr_51800[(6)] = c__43329__auto___52305);

return statearr_51800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43331__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
