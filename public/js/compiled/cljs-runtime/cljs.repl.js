goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50246){
var map__50247 = p__50246;
var map__50247__$1 = cljs.core.__destructure_map(map__50247);
var m = map__50247__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50247__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50247__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50262_50633 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50263_50634 = null;
var count__50264_50635 = (0);
var i__50265_50636 = (0);
while(true){
if((i__50265_50636 < count__50264_50635)){
var f_50637 = chunk__50263_50634.cljs$core$IIndexed$_nth$arity$2(null,i__50265_50636);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50637], 0));


var G__50641 = seq__50262_50633;
var G__50642 = chunk__50263_50634;
var G__50643 = count__50264_50635;
var G__50644 = (i__50265_50636 + (1));
seq__50262_50633 = G__50641;
chunk__50263_50634 = G__50642;
count__50264_50635 = G__50643;
i__50265_50636 = G__50644;
continue;
} else {
var temp__5720__auto___50645 = cljs.core.seq(seq__50262_50633);
if(temp__5720__auto___50645){
var seq__50262_50646__$1 = temp__5720__auto___50645;
if(cljs.core.chunked_seq_QMARK_(seq__50262_50646__$1)){
var c__4679__auto___50647 = cljs.core.chunk_first(seq__50262_50646__$1);
var G__50648 = cljs.core.chunk_rest(seq__50262_50646__$1);
var G__50649 = c__4679__auto___50647;
var G__50650 = cljs.core.count(c__4679__auto___50647);
var G__50651 = (0);
seq__50262_50633 = G__50648;
chunk__50263_50634 = G__50649;
count__50264_50635 = G__50650;
i__50265_50636 = G__50651;
continue;
} else {
var f_50652 = cljs.core.first(seq__50262_50646__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50652], 0));


var G__50653 = cljs.core.next(seq__50262_50646__$1);
var G__50654 = null;
var G__50655 = (0);
var G__50656 = (0);
seq__50262_50633 = G__50653;
chunk__50263_50634 = G__50654;
count__50264_50635 = G__50655;
i__50265_50636 = G__50656;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_50657 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_50657], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_50657)))?cljs.core.second(arglists_50657):arglists_50657)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50287_50669 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50288_50670 = null;
var count__50289_50671 = (0);
var i__50290_50672 = (0);
while(true){
if((i__50290_50672 < count__50289_50671)){
var vec__50321_50675 = chunk__50288_50670.cljs$core$IIndexed$_nth$arity$2(null,i__50290_50672);
var name_50676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50321_50675,(0),null);
var map__50324_50677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50321_50675,(1),null);
var map__50324_50678__$1 = cljs.core.__destructure_map(map__50324_50677);
var doc_50679 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50324_50678__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50324_50678__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50676], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50680], 0));

if(cljs.core.truth_(doc_50679)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50679], 0));
} else {
}


var G__50685 = seq__50287_50669;
var G__50686 = chunk__50288_50670;
var G__50687 = count__50289_50671;
var G__50688 = (i__50290_50672 + (1));
seq__50287_50669 = G__50685;
chunk__50288_50670 = G__50686;
count__50289_50671 = G__50687;
i__50290_50672 = G__50688;
continue;
} else {
var temp__5720__auto___50689 = cljs.core.seq(seq__50287_50669);
if(temp__5720__auto___50689){
var seq__50287_50693__$1 = temp__5720__auto___50689;
if(cljs.core.chunked_seq_QMARK_(seq__50287_50693__$1)){
var c__4679__auto___50694 = cljs.core.chunk_first(seq__50287_50693__$1);
var G__50695 = cljs.core.chunk_rest(seq__50287_50693__$1);
var G__50696 = c__4679__auto___50694;
var G__50697 = cljs.core.count(c__4679__auto___50694);
var G__50698 = (0);
seq__50287_50669 = G__50695;
chunk__50288_50670 = G__50696;
count__50289_50671 = G__50697;
i__50290_50672 = G__50698;
continue;
} else {
var vec__50333_50699 = cljs.core.first(seq__50287_50693__$1);
var name_50700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50333_50699,(0),null);
var map__50336_50701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50333_50699,(1),null);
var map__50336_50702__$1 = cljs.core.__destructure_map(map__50336_50701);
var doc_50703 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50336_50702__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50336_50702__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50700], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50704], 0));

if(cljs.core.truth_(doc_50703)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50703], 0));
} else {
}


var G__50707 = cljs.core.next(seq__50287_50693__$1);
var G__50708 = null;
var G__50709 = (0);
var G__50710 = (0);
seq__50287_50669 = G__50707;
chunk__50288_50670 = G__50708;
count__50289_50671 = G__50709;
i__50290_50672 = G__50710;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__50342 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__50343 = null;
var count__50344 = (0);
var i__50345 = (0);
while(true){
if((i__50345 < count__50344)){
var role = chunk__50343.cljs$core$IIndexed$_nth$arity$2(null,i__50345);
var temp__5720__auto___50714__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___50714__$1)){
var spec_50715 = temp__5720__auto___50714__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50715)], 0));
} else {
}


var G__50716 = seq__50342;
var G__50717 = chunk__50343;
var G__50718 = count__50344;
var G__50719 = (i__50345 + (1));
seq__50342 = G__50716;
chunk__50343 = G__50717;
count__50344 = G__50718;
i__50345 = G__50719;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__50342);
if(temp__5720__auto____$1){
var seq__50342__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__50342__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__50342__$1);
var G__50720 = cljs.core.chunk_rest(seq__50342__$1);
var G__50721 = c__4679__auto__;
var G__50722 = cljs.core.count(c__4679__auto__);
var G__50723 = (0);
seq__50342 = G__50720;
chunk__50343 = G__50721;
count__50344 = G__50722;
i__50345 = G__50723;
continue;
} else {
var role = cljs.core.first(seq__50342__$1);
var temp__5720__auto___50728__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___50728__$2)){
var spec_50732 = temp__5720__auto___50728__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50732)], 0));
} else {
}


var G__50733 = cljs.core.next(seq__50342__$1);
var G__50734 = null;
var G__50735 = (0);
var G__50736 = (0);
seq__50342 = G__50733;
chunk__50343 = G__50734;
count__50344 = G__50735;
i__50345 = G__50736;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__50744 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__50745 = cljs.core.ex_cause(t);
via = G__50744;
t = G__50745;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__50429 = datafied_throwable;
var map__50429__$1 = cljs.core.__destructure_map(map__50429);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50429__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50429__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50429__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__50430 = cljs.core.last(via);
var map__50430__$1 = cljs.core.__destructure_map(map__50430);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50430__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50430__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50430__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__50431 = data;
var map__50431__$1 = cljs.core.__destructure_map(map__50431);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50431__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50431__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50431__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__50433 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__50433__$1 = cljs.core.__destructure_map(map__50433);
var top_data = map__50433__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50433__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__50443 = phase;
var G__50443__$1 = (((G__50443 instanceof cljs.core.Keyword))?G__50443.fqn:null);
switch (G__50443__$1) {
case "read-source":
var map__50445 = data;
var map__50445__$1 = cljs.core.__destructure_map(map__50445);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50445__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50445__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__50446 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__50446__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50446,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50446);
var G__50446__$2 = (cljs.core.truth_((function (){var fexpr__50455 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50455.cljs$core$IFn$_invoke$arity$1 ? fexpr__50455.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50455.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50446__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50446__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50446__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50446__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__50464 = top_data;
var G__50464__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50464,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50464);
var G__50464__$2 = (cljs.core.truth_((function (){var fexpr__50465 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50465.cljs$core$IFn$_invoke$arity$1 ? fexpr__50465.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50465.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50464__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50464__$1);
var G__50464__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50464__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50464__$2);
var G__50464__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50464__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50464__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50464__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50464__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__50472 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50472,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50472,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50472,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50472,(3),null);
var G__50480 = top_data;
var G__50480__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50480,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__50480);
var G__50480__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50480__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__50480__$1);
var G__50480__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50480__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__50480__$2);
var G__50480__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50480__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50480__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50480__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50480__$4;
}

break;
case "execution":
var vec__50490 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50490,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50490,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50490,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50490,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50427_SHARP_){
var or__4253__auto__ = (p1__50427_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__50511 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50511.cljs$core$IFn$_invoke$arity$1 ? fexpr__50511.cljs$core$IFn$_invoke$arity$1(p1__50427_SHARP_) : fexpr__50511.call(null,p1__50427_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__50523 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__50523__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50523,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__50523);
var G__50523__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50523__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50523__$1);
var G__50523__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50523__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__50523__$2);
var G__50523__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50523__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__50523__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50523__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50523__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50443__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__50543){
var map__50544 = p__50543;
var map__50544__$1 = cljs.core.__destructure_map(map__50544);
var triage_data = map__50544__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50544__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50544__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50544__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50544__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50544__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50544__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50544__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50544__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__50547 = phase;
var G__50547__$1 = (((G__50547 instanceof cljs.core.Keyword))?G__50547.fqn:null);
switch (G__50547__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__50548 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__50549 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50550 = loc;
var G__50551 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50552_50821 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50553_50822 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50554_50823 = true;
var _STAR_print_fn_STAR__temp_val__50555_50824 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50554_50823);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50555_50824);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50533_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50533_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50553_50822);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50552_50821);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50548,G__50549,G__50550,G__50551) : format.call(null,G__50548,G__50549,G__50550,G__50551));

break;
case "macroexpansion":
var G__50556 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__50557 = cause_type;
var G__50558 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50559 = loc;
var G__50560 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50556,G__50557,G__50558,G__50559,G__50560) : format.call(null,G__50556,G__50557,G__50558,G__50559,G__50560));

break;
case "compile-syntax-check":
var G__50569 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__50570 = cause_type;
var G__50571 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50572 = loc;
var G__50573 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50569,G__50570,G__50571,G__50572,G__50573) : format.call(null,G__50569,G__50570,G__50571,G__50572,G__50573));

break;
case "compilation":
var G__50581 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__50582 = cause_type;
var G__50583 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50584 = loc;
var G__50585 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50581,G__50582,G__50583,G__50584,G__50585) : format.call(null,G__50581,G__50582,G__50583,G__50584,G__50585));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__50601 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__50602 = symbol;
var G__50603 = loc;
var G__50604 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50608_50840 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50609_50841 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50610_50842 = true;
var _STAR_print_fn_STAR__temp_val__50611_50843 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50610_50842);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50611_50843);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50537_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50537_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50609_50841);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50608_50840);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50601,G__50602,G__50603,G__50604) : format.call(null,G__50601,G__50602,G__50603,G__50604));
} else {
var G__50613 = "Execution error%s at %s(%s).\n%s\n";
var G__50614 = cause_type;
var G__50615 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50616 = loc;
var G__50617 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50613,G__50614,G__50615,G__50616,G__50617) : format.call(null,G__50613,G__50614,G__50615,G__50616,G__50617));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50547__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
