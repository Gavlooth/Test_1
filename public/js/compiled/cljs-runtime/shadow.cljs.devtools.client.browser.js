goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___54661 = arguments.length;
var i__4865__auto___54662 = (0);
while(true){
if((i__4865__auto___54662 < len__4864__auto___54661)){
args__4870__auto__.push((arguments[i__4865__auto___54662]));

var G__54663 = (i__4865__auto___54662 + (1));
i__4865__auto___54662 = G__54663;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq54157){
var G__54158 = cljs.core.first(seq54157);
var seq54157__$1 = cljs.core.next(seq54157);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54158,seq54157__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__54171 = cljs.core.seq(sources);
var chunk__54172 = null;
var count__54173 = (0);
var i__54174 = (0);
while(true){
if((i__54174 < count__54173)){
var map__54185 = chunk__54172.cljs$core$IIndexed$_nth$arity$2(null,i__54174);
var map__54185__$1 = cljs.core.__destructure_map(map__54185);
var src = map__54185__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54185__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54185__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54185__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54185__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e54188){var e_54664 = e54188;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_54664);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_54664.message)].join('')));
}

var G__54665 = seq__54171;
var G__54666 = chunk__54172;
var G__54667 = count__54173;
var G__54668 = (i__54174 + (1));
seq__54171 = G__54665;
chunk__54172 = G__54666;
count__54173 = G__54667;
i__54174 = G__54668;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__54171);
if(temp__5720__auto__){
var seq__54171__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54171__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__54171__$1);
var G__54669 = cljs.core.chunk_rest(seq__54171__$1);
var G__54670 = c__4679__auto__;
var G__54671 = cljs.core.count(c__4679__auto__);
var G__54672 = (0);
seq__54171 = G__54669;
chunk__54172 = G__54670;
count__54173 = G__54671;
i__54174 = G__54672;
continue;
} else {
var map__54191 = cljs.core.first(seq__54171__$1);
var map__54191__$1 = cljs.core.__destructure_map(map__54191);
var src = map__54191__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54191__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54191__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54191__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54191__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e54196){var e_54673 = e54196;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_54673);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_54673.message)].join('')));
}

var G__54674 = cljs.core.next(seq__54171__$1);
var G__54675 = null;
var G__54676 = (0);
var G__54677 = (0);
seq__54171 = G__54674;
chunk__54172 = G__54675;
count__54173 = G__54676;
i__54174 = G__54677;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__54199 = cljs.core.seq(js_requires);
var chunk__54200 = null;
var count__54201 = (0);
var i__54202 = (0);
while(true){
if((i__54202 < count__54201)){
var js_ns = chunk__54200.cljs$core$IIndexed$_nth$arity$2(null,i__54202);
var require_str_54678 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_54678);


var G__54679 = seq__54199;
var G__54680 = chunk__54200;
var G__54681 = count__54201;
var G__54682 = (i__54202 + (1));
seq__54199 = G__54679;
chunk__54200 = G__54680;
count__54201 = G__54681;
i__54202 = G__54682;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__54199);
if(temp__5720__auto__){
var seq__54199__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54199__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__54199__$1);
var G__54683 = cljs.core.chunk_rest(seq__54199__$1);
var G__54684 = c__4679__auto__;
var G__54685 = cljs.core.count(c__4679__auto__);
var G__54686 = (0);
seq__54199 = G__54683;
chunk__54200 = G__54684;
count__54201 = G__54685;
i__54202 = G__54686;
continue;
} else {
var js_ns = cljs.core.first(seq__54199__$1);
var require_str_54687 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_54687);


var G__54688 = cljs.core.next(seq__54199__$1);
var G__54689 = null;
var G__54690 = (0);
var G__54691 = (0);
seq__54199 = G__54688;
chunk__54200 = G__54689;
count__54201 = G__54690;
i__54202 = G__54691;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__54209){
var map__54210 = p__54209;
var map__54210__$1 = cljs.core.__destructure_map(map__54210);
var msg = map__54210__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54210__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54210__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54211(s__54212){
return (new cljs.core.LazySeq(null,(function (){
var s__54212__$1 = s__54212;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__54212__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__54217 = cljs.core.first(xs__6277__auto__);
var map__54217__$1 = cljs.core.__destructure_map(map__54217);
var src = map__54217__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54217__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54217__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__54212__$1,map__54217,map__54217__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__54210,map__54210__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54211_$_iter__54213(s__54214){
return (new cljs.core.LazySeq(null,((function (s__54212__$1,map__54217,map__54217__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__54210,map__54210__$1,msg,info,reload_info){
return (function (){
var s__54214__$1 = s__54214;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__54214__$1);
if(temp__5720__auto____$1){
var s__54214__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__54214__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__54214__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__54216 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__54215 = (0);
while(true){
if((i__54215 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__54215);
cljs.core.chunk_append(b__54216,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__54692 = (i__54215 + (1));
i__54215 = G__54692;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54216),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54211_$_iter__54213(cljs.core.chunk_rest(s__54214__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54216),null);
}
} else {
var warning = cljs.core.first(s__54214__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54211_$_iter__54213(cljs.core.rest(s__54214__$2)));
}
} else {
return null;
}
break;
}
});})(s__54212__$1,map__54217,map__54217__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__54210,map__54210__$1,msg,info,reload_info))
,null,null));
});})(s__54212__$1,map__54217,map__54217__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__54210,map__54210__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54211(cljs.core.rest(s__54212__$1)));
} else {
var G__54693 = cljs.core.rest(s__54212__$1);
s__54212__$1 = G__54693;
continue;
}
} else {
var G__54694 = cljs.core.rest(s__54212__$1);
s__54212__$1 = G__54694;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__54219_54695 = cljs.core.seq(warnings);
var chunk__54220_54696 = null;
var count__54221_54697 = (0);
var i__54222_54698 = (0);
while(true){
if((i__54222_54698 < count__54221_54697)){
var map__54225_54699 = chunk__54220_54696.cljs$core$IIndexed$_nth$arity$2(null,i__54222_54698);
var map__54225_54700__$1 = cljs.core.__destructure_map(map__54225_54699);
var w_54701 = map__54225_54700__$1;
var msg_54702__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54225_54700__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_54703 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54225_54700__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_54704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54225_54700__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_54705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54225_54700__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_54705)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_54703),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_54704),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_54702__$1)].join(''));


var G__54706 = seq__54219_54695;
var G__54707 = chunk__54220_54696;
var G__54708 = count__54221_54697;
var G__54709 = (i__54222_54698 + (1));
seq__54219_54695 = G__54706;
chunk__54220_54696 = G__54707;
count__54221_54697 = G__54708;
i__54222_54698 = G__54709;
continue;
} else {
var temp__5720__auto___54710 = cljs.core.seq(seq__54219_54695);
if(temp__5720__auto___54710){
var seq__54219_54711__$1 = temp__5720__auto___54710;
if(cljs.core.chunked_seq_QMARK_(seq__54219_54711__$1)){
var c__4679__auto___54712 = cljs.core.chunk_first(seq__54219_54711__$1);
var G__54713 = cljs.core.chunk_rest(seq__54219_54711__$1);
var G__54714 = c__4679__auto___54712;
var G__54715 = cljs.core.count(c__4679__auto___54712);
var G__54716 = (0);
seq__54219_54695 = G__54713;
chunk__54220_54696 = G__54714;
count__54221_54697 = G__54715;
i__54222_54698 = G__54716;
continue;
} else {
var map__54226_54717 = cljs.core.first(seq__54219_54711__$1);
var map__54226_54718__$1 = cljs.core.__destructure_map(map__54226_54717);
var w_54719 = map__54226_54718__$1;
var msg_54720__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54226_54718__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_54721 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54226_54718__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_54722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54226_54718__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_54723 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54226_54718__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_54723)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_54721),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_54722),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_54720__$1)].join(''));


var G__54724 = cljs.core.next(seq__54219_54711__$1);
var G__54725 = null;
var G__54726 = (0);
var G__54727 = (0);
seq__54219_54695 = G__54724;
chunk__54220_54696 = G__54725;
count__54221_54697 = G__54726;
i__54222_54698 = G__54727;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__54208_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__54208_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__54228){
var map__54229 = p__54228;
var map__54229__$1 = cljs.core.__destructure_map(map__54229);
var msg = map__54229__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54229__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54229__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__54230 = cljs.core.seq(updates);
var chunk__54232 = null;
var count__54233 = (0);
var i__54234 = (0);
while(true){
if((i__54234 < count__54233)){
var path = chunk__54232.cljs$core$IIndexed$_nth$arity$2(null,i__54234);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__54512_54728 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__54516_54729 = null;
var count__54517_54730 = (0);
var i__54518_54731 = (0);
while(true){
if((i__54518_54731 < count__54517_54730)){
var node_54732 = chunk__54516_54729.cljs$core$IIndexed$_nth$arity$2(null,i__54518_54731);
if(cljs.core.not(node_54732.shadow$old)){
var path_match_54733 = shadow.cljs.devtools.client.browser.match_paths(node_54732.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54733)){
var new_link_54734 = (function (){var G__54565 = node_54732.cloneNode(true);
G__54565.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54733),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54565;
})();
(node_54732.shadow$old = true);

(new_link_54734.onload = ((function (seq__54512_54728,chunk__54516_54729,count__54517_54730,i__54518_54731,seq__54230,chunk__54232,count__54233,i__54234,new_link_54734,path_match_54733,node_54732,path,map__54229,map__54229__$1,msg,updates,reload_info){
return (function (e){
var seq__54566_54735 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__54568_54736 = null;
var count__54569_54737 = (0);
var i__54570_54738 = (0);
while(true){
if((i__54570_54738 < count__54569_54737)){
var map__54574_54739 = chunk__54568_54736.cljs$core$IIndexed$_nth$arity$2(null,i__54570_54738);
var map__54574_54740__$1 = cljs.core.__destructure_map(map__54574_54739);
var task_54741 = map__54574_54740__$1;
var fn_str_54742 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54574_54740__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_54743 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54574_54740__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_54744 = goog.getObjectByName(fn_str_54742,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_54743)].join(''));

(fn_obj_54744.cljs$core$IFn$_invoke$arity$2 ? fn_obj_54744.cljs$core$IFn$_invoke$arity$2(path,new_link_54734) : fn_obj_54744.call(null,path,new_link_54734));


var G__54745 = seq__54566_54735;
var G__54746 = chunk__54568_54736;
var G__54747 = count__54569_54737;
var G__54748 = (i__54570_54738 + (1));
seq__54566_54735 = G__54745;
chunk__54568_54736 = G__54746;
count__54569_54737 = G__54747;
i__54570_54738 = G__54748;
continue;
} else {
var temp__5720__auto___54749 = cljs.core.seq(seq__54566_54735);
if(temp__5720__auto___54749){
var seq__54566_54750__$1 = temp__5720__auto___54749;
if(cljs.core.chunked_seq_QMARK_(seq__54566_54750__$1)){
var c__4679__auto___54751 = cljs.core.chunk_first(seq__54566_54750__$1);
var G__54752 = cljs.core.chunk_rest(seq__54566_54750__$1);
var G__54753 = c__4679__auto___54751;
var G__54754 = cljs.core.count(c__4679__auto___54751);
var G__54755 = (0);
seq__54566_54735 = G__54752;
chunk__54568_54736 = G__54753;
count__54569_54737 = G__54754;
i__54570_54738 = G__54755;
continue;
} else {
var map__54575_54756 = cljs.core.first(seq__54566_54750__$1);
var map__54575_54757__$1 = cljs.core.__destructure_map(map__54575_54756);
var task_54758 = map__54575_54757__$1;
var fn_str_54759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54575_54757__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_54760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54575_54757__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_54761 = goog.getObjectByName(fn_str_54759,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_54760)].join(''));

(fn_obj_54761.cljs$core$IFn$_invoke$arity$2 ? fn_obj_54761.cljs$core$IFn$_invoke$arity$2(path,new_link_54734) : fn_obj_54761.call(null,path,new_link_54734));


var G__54762 = cljs.core.next(seq__54566_54750__$1);
var G__54763 = null;
var G__54764 = (0);
var G__54765 = (0);
seq__54566_54735 = G__54762;
chunk__54568_54736 = G__54763;
count__54569_54737 = G__54764;
i__54570_54738 = G__54765;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_54732);
});})(seq__54512_54728,chunk__54516_54729,count__54517_54730,i__54518_54731,seq__54230,chunk__54232,count__54233,i__54234,new_link_54734,path_match_54733,node_54732,path,map__54229,map__54229__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54733], 0));

goog.dom.insertSiblingAfter(new_link_54734,node_54732);


var G__54766 = seq__54512_54728;
var G__54767 = chunk__54516_54729;
var G__54768 = count__54517_54730;
var G__54769 = (i__54518_54731 + (1));
seq__54512_54728 = G__54766;
chunk__54516_54729 = G__54767;
count__54517_54730 = G__54768;
i__54518_54731 = G__54769;
continue;
} else {
var G__54770 = seq__54512_54728;
var G__54771 = chunk__54516_54729;
var G__54772 = count__54517_54730;
var G__54773 = (i__54518_54731 + (1));
seq__54512_54728 = G__54770;
chunk__54516_54729 = G__54771;
count__54517_54730 = G__54772;
i__54518_54731 = G__54773;
continue;
}
} else {
var G__54774 = seq__54512_54728;
var G__54775 = chunk__54516_54729;
var G__54776 = count__54517_54730;
var G__54777 = (i__54518_54731 + (1));
seq__54512_54728 = G__54774;
chunk__54516_54729 = G__54775;
count__54517_54730 = G__54776;
i__54518_54731 = G__54777;
continue;
}
} else {
var temp__5720__auto___54778 = cljs.core.seq(seq__54512_54728);
if(temp__5720__auto___54778){
var seq__54512_54779__$1 = temp__5720__auto___54778;
if(cljs.core.chunked_seq_QMARK_(seq__54512_54779__$1)){
var c__4679__auto___54780 = cljs.core.chunk_first(seq__54512_54779__$1);
var G__54781 = cljs.core.chunk_rest(seq__54512_54779__$1);
var G__54782 = c__4679__auto___54780;
var G__54783 = cljs.core.count(c__4679__auto___54780);
var G__54784 = (0);
seq__54512_54728 = G__54781;
chunk__54516_54729 = G__54782;
count__54517_54730 = G__54783;
i__54518_54731 = G__54784;
continue;
} else {
var node_54785 = cljs.core.first(seq__54512_54779__$1);
if(cljs.core.not(node_54785.shadow$old)){
var path_match_54786 = shadow.cljs.devtools.client.browser.match_paths(node_54785.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54786)){
var new_link_54787 = (function (){var G__54576 = node_54785.cloneNode(true);
G__54576.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54786),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54576;
})();
(node_54785.shadow$old = true);

(new_link_54787.onload = ((function (seq__54512_54728,chunk__54516_54729,count__54517_54730,i__54518_54731,seq__54230,chunk__54232,count__54233,i__54234,new_link_54787,path_match_54786,node_54785,seq__54512_54779__$1,temp__5720__auto___54778,path,map__54229,map__54229__$1,msg,updates,reload_info){
return (function (e){
var seq__54577_54788 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__54579_54789 = null;
var count__54580_54790 = (0);
var i__54581_54791 = (0);
while(true){
if((i__54581_54791 < count__54580_54790)){
var map__54585_54792 = chunk__54579_54789.cljs$core$IIndexed$_nth$arity$2(null,i__54581_54791);
var map__54585_54793__$1 = cljs.core.__destructure_map(map__54585_54792);
var task_54794 = map__54585_54793__$1;
var fn_str_54795 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54585_54793__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_54796 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54585_54793__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_54797 = goog.getObjectByName(fn_str_54795,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_54796)].join(''));

(fn_obj_54797.cljs$core$IFn$_invoke$arity$2 ? fn_obj_54797.cljs$core$IFn$_invoke$arity$2(path,new_link_54787) : fn_obj_54797.call(null,path,new_link_54787));


var G__54798 = seq__54577_54788;
var G__54799 = chunk__54579_54789;
var G__54800 = count__54580_54790;
var G__54801 = (i__54581_54791 + (1));
seq__54577_54788 = G__54798;
chunk__54579_54789 = G__54799;
count__54580_54790 = G__54800;
i__54581_54791 = G__54801;
continue;
} else {
var temp__5720__auto___54802__$1 = cljs.core.seq(seq__54577_54788);
if(temp__5720__auto___54802__$1){
var seq__54577_54803__$1 = temp__5720__auto___54802__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54577_54803__$1)){
var c__4679__auto___54804 = cljs.core.chunk_first(seq__54577_54803__$1);
var G__54805 = cljs.core.chunk_rest(seq__54577_54803__$1);
var G__54806 = c__4679__auto___54804;
var G__54807 = cljs.core.count(c__4679__auto___54804);
var G__54808 = (0);
seq__54577_54788 = G__54805;
chunk__54579_54789 = G__54806;
count__54580_54790 = G__54807;
i__54581_54791 = G__54808;
continue;
} else {
var map__54586_54809 = cljs.core.first(seq__54577_54803__$1);
var map__54586_54810__$1 = cljs.core.__destructure_map(map__54586_54809);
var task_54811 = map__54586_54810__$1;
var fn_str_54812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54586_54810__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_54813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54586_54810__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_54814 = goog.getObjectByName(fn_str_54812,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_54813)].join(''));

(fn_obj_54814.cljs$core$IFn$_invoke$arity$2 ? fn_obj_54814.cljs$core$IFn$_invoke$arity$2(path,new_link_54787) : fn_obj_54814.call(null,path,new_link_54787));


var G__54815 = cljs.core.next(seq__54577_54803__$1);
var G__54816 = null;
var G__54817 = (0);
var G__54818 = (0);
seq__54577_54788 = G__54815;
chunk__54579_54789 = G__54816;
count__54580_54790 = G__54817;
i__54581_54791 = G__54818;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_54785);
});})(seq__54512_54728,chunk__54516_54729,count__54517_54730,i__54518_54731,seq__54230,chunk__54232,count__54233,i__54234,new_link_54787,path_match_54786,node_54785,seq__54512_54779__$1,temp__5720__auto___54778,path,map__54229,map__54229__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54786], 0));

goog.dom.insertSiblingAfter(new_link_54787,node_54785);


var G__54819 = cljs.core.next(seq__54512_54779__$1);
var G__54820 = null;
var G__54821 = (0);
var G__54822 = (0);
seq__54512_54728 = G__54819;
chunk__54516_54729 = G__54820;
count__54517_54730 = G__54821;
i__54518_54731 = G__54822;
continue;
} else {
var G__54823 = cljs.core.next(seq__54512_54779__$1);
var G__54824 = null;
var G__54825 = (0);
var G__54826 = (0);
seq__54512_54728 = G__54823;
chunk__54516_54729 = G__54824;
count__54517_54730 = G__54825;
i__54518_54731 = G__54826;
continue;
}
} else {
var G__54827 = cljs.core.next(seq__54512_54779__$1);
var G__54828 = null;
var G__54829 = (0);
var G__54830 = (0);
seq__54512_54728 = G__54827;
chunk__54516_54729 = G__54828;
count__54517_54730 = G__54829;
i__54518_54731 = G__54830;
continue;
}
}
} else {
}
}
break;
}


var G__54831 = seq__54230;
var G__54832 = chunk__54232;
var G__54833 = count__54233;
var G__54834 = (i__54234 + (1));
seq__54230 = G__54831;
chunk__54232 = G__54832;
count__54233 = G__54833;
i__54234 = G__54834;
continue;
} else {
var G__54835 = seq__54230;
var G__54836 = chunk__54232;
var G__54837 = count__54233;
var G__54838 = (i__54234 + (1));
seq__54230 = G__54835;
chunk__54232 = G__54836;
count__54233 = G__54837;
i__54234 = G__54838;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__54230);
if(temp__5720__auto__){
var seq__54230__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54230__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__54230__$1);
var G__54839 = cljs.core.chunk_rest(seq__54230__$1);
var G__54840 = c__4679__auto__;
var G__54841 = cljs.core.count(c__4679__auto__);
var G__54842 = (0);
seq__54230 = G__54839;
chunk__54232 = G__54840;
count__54233 = G__54841;
i__54234 = G__54842;
continue;
} else {
var path = cljs.core.first(seq__54230__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__54587_54843 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__54591_54844 = null;
var count__54592_54845 = (0);
var i__54593_54846 = (0);
while(true){
if((i__54593_54846 < count__54592_54845)){
var node_54847 = chunk__54591_54844.cljs$core$IIndexed$_nth$arity$2(null,i__54593_54846);
if(cljs.core.not(node_54847.shadow$old)){
var path_match_54848 = shadow.cljs.devtools.client.browser.match_paths(node_54847.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54848)){
var new_link_54849 = (function (){var G__54619 = node_54847.cloneNode(true);
G__54619.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54848),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54619;
})();
(node_54847.shadow$old = true);

(new_link_54849.onload = ((function (seq__54587_54843,chunk__54591_54844,count__54592_54845,i__54593_54846,seq__54230,chunk__54232,count__54233,i__54234,new_link_54849,path_match_54848,node_54847,path,seq__54230__$1,temp__5720__auto__,map__54229,map__54229__$1,msg,updates,reload_info){
return (function (e){
var seq__54620_54850 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__54622_54851 = null;
var count__54623_54852 = (0);
var i__54624_54853 = (0);
while(true){
if((i__54624_54853 < count__54623_54852)){
var map__54628_54854 = chunk__54622_54851.cljs$core$IIndexed$_nth$arity$2(null,i__54624_54853);
var map__54628_54855__$1 = cljs.core.__destructure_map(map__54628_54854);
var task_54856 = map__54628_54855__$1;
var fn_str_54857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54628_54855__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_54858 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54628_54855__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_54859 = goog.getObjectByName(fn_str_54857,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_54858)].join(''));

(fn_obj_54859.cljs$core$IFn$_invoke$arity$2 ? fn_obj_54859.cljs$core$IFn$_invoke$arity$2(path,new_link_54849) : fn_obj_54859.call(null,path,new_link_54849));


var G__54860 = seq__54620_54850;
var G__54861 = chunk__54622_54851;
var G__54862 = count__54623_54852;
var G__54863 = (i__54624_54853 + (1));
seq__54620_54850 = G__54860;
chunk__54622_54851 = G__54861;
count__54623_54852 = G__54862;
i__54624_54853 = G__54863;
continue;
} else {
var temp__5720__auto___54864__$1 = cljs.core.seq(seq__54620_54850);
if(temp__5720__auto___54864__$1){
var seq__54620_54865__$1 = temp__5720__auto___54864__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54620_54865__$1)){
var c__4679__auto___54866 = cljs.core.chunk_first(seq__54620_54865__$1);
var G__54867 = cljs.core.chunk_rest(seq__54620_54865__$1);
var G__54868 = c__4679__auto___54866;
var G__54869 = cljs.core.count(c__4679__auto___54866);
var G__54870 = (0);
seq__54620_54850 = G__54867;
chunk__54622_54851 = G__54868;
count__54623_54852 = G__54869;
i__54624_54853 = G__54870;
continue;
} else {
var map__54629_54871 = cljs.core.first(seq__54620_54865__$1);
var map__54629_54872__$1 = cljs.core.__destructure_map(map__54629_54871);
var task_54873 = map__54629_54872__$1;
var fn_str_54874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54629_54872__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_54875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54629_54872__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_54876 = goog.getObjectByName(fn_str_54874,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_54875)].join(''));

(fn_obj_54876.cljs$core$IFn$_invoke$arity$2 ? fn_obj_54876.cljs$core$IFn$_invoke$arity$2(path,new_link_54849) : fn_obj_54876.call(null,path,new_link_54849));


var G__54877 = cljs.core.next(seq__54620_54865__$1);
var G__54878 = null;
var G__54879 = (0);
var G__54880 = (0);
seq__54620_54850 = G__54877;
chunk__54622_54851 = G__54878;
count__54623_54852 = G__54879;
i__54624_54853 = G__54880;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_54847);
});})(seq__54587_54843,chunk__54591_54844,count__54592_54845,i__54593_54846,seq__54230,chunk__54232,count__54233,i__54234,new_link_54849,path_match_54848,node_54847,path,seq__54230__$1,temp__5720__auto__,map__54229,map__54229__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54848], 0));

goog.dom.insertSiblingAfter(new_link_54849,node_54847);


var G__54881 = seq__54587_54843;
var G__54882 = chunk__54591_54844;
var G__54883 = count__54592_54845;
var G__54884 = (i__54593_54846 + (1));
seq__54587_54843 = G__54881;
chunk__54591_54844 = G__54882;
count__54592_54845 = G__54883;
i__54593_54846 = G__54884;
continue;
} else {
var G__54885 = seq__54587_54843;
var G__54886 = chunk__54591_54844;
var G__54887 = count__54592_54845;
var G__54888 = (i__54593_54846 + (1));
seq__54587_54843 = G__54885;
chunk__54591_54844 = G__54886;
count__54592_54845 = G__54887;
i__54593_54846 = G__54888;
continue;
}
} else {
var G__54889 = seq__54587_54843;
var G__54890 = chunk__54591_54844;
var G__54891 = count__54592_54845;
var G__54892 = (i__54593_54846 + (1));
seq__54587_54843 = G__54889;
chunk__54591_54844 = G__54890;
count__54592_54845 = G__54891;
i__54593_54846 = G__54892;
continue;
}
} else {
var temp__5720__auto___54893__$1 = cljs.core.seq(seq__54587_54843);
if(temp__5720__auto___54893__$1){
var seq__54587_54894__$1 = temp__5720__auto___54893__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54587_54894__$1)){
var c__4679__auto___54895 = cljs.core.chunk_first(seq__54587_54894__$1);
var G__54896 = cljs.core.chunk_rest(seq__54587_54894__$1);
var G__54897 = c__4679__auto___54895;
var G__54898 = cljs.core.count(c__4679__auto___54895);
var G__54899 = (0);
seq__54587_54843 = G__54896;
chunk__54591_54844 = G__54897;
count__54592_54845 = G__54898;
i__54593_54846 = G__54899;
continue;
} else {
var node_54900 = cljs.core.first(seq__54587_54894__$1);
if(cljs.core.not(node_54900.shadow$old)){
var path_match_54901 = shadow.cljs.devtools.client.browser.match_paths(node_54900.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54901)){
var new_link_54902 = (function (){var G__54630 = node_54900.cloneNode(true);
G__54630.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54901),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54630;
})();
(node_54900.shadow$old = true);

(new_link_54902.onload = ((function (seq__54587_54843,chunk__54591_54844,count__54592_54845,i__54593_54846,seq__54230,chunk__54232,count__54233,i__54234,new_link_54902,path_match_54901,node_54900,seq__54587_54894__$1,temp__5720__auto___54893__$1,path,seq__54230__$1,temp__5720__auto__,map__54229,map__54229__$1,msg,updates,reload_info){
return (function (e){
var seq__54631_54903 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__54633_54904 = null;
var count__54634_54905 = (0);
var i__54635_54906 = (0);
while(true){
if((i__54635_54906 < count__54634_54905)){
var map__54639_54907 = chunk__54633_54904.cljs$core$IIndexed$_nth$arity$2(null,i__54635_54906);
var map__54639_54908__$1 = cljs.core.__destructure_map(map__54639_54907);
var task_54909 = map__54639_54908__$1;
var fn_str_54910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54639_54908__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_54911 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54639_54908__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_54912 = goog.getObjectByName(fn_str_54910,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_54911)].join(''));

(fn_obj_54912.cljs$core$IFn$_invoke$arity$2 ? fn_obj_54912.cljs$core$IFn$_invoke$arity$2(path,new_link_54902) : fn_obj_54912.call(null,path,new_link_54902));


var G__54913 = seq__54631_54903;
var G__54914 = chunk__54633_54904;
var G__54915 = count__54634_54905;
var G__54916 = (i__54635_54906 + (1));
seq__54631_54903 = G__54913;
chunk__54633_54904 = G__54914;
count__54634_54905 = G__54915;
i__54635_54906 = G__54916;
continue;
} else {
var temp__5720__auto___54917__$2 = cljs.core.seq(seq__54631_54903);
if(temp__5720__auto___54917__$2){
var seq__54631_54918__$1 = temp__5720__auto___54917__$2;
if(cljs.core.chunked_seq_QMARK_(seq__54631_54918__$1)){
var c__4679__auto___54919 = cljs.core.chunk_first(seq__54631_54918__$1);
var G__54920 = cljs.core.chunk_rest(seq__54631_54918__$1);
var G__54921 = c__4679__auto___54919;
var G__54922 = cljs.core.count(c__4679__auto___54919);
var G__54923 = (0);
seq__54631_54903 = G__54920;
chunk__54633_54904 = G__54921;
count__54634_54905 = G__54922;
i__54635_54906 = G__54923;
continue;
} else {
var map__54640_54924 = cljs.core.first(seq__54631_54918__$1);
var map__54640_54925__$1 = cljs.core.__destructure_map(map__54640_54924);
var task_54926 = map__54640_54925__$1;
var fn_str_54927 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54640_54925__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_54928 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54640_54925__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_54929 = goog.getObjectByName(fn_str_54927,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_54928)].join(''));

(fn_obj_54929.cljs$core$IFn$_invoke$arity$2 ? fn_obj_54929.cljs$core$IFn$_invoke$arity$2(path,new_link_54902) : fn_obj_54929.call(null,path,new_link_54902));


var G__54930 = cljs.core.next(seq__54631_54918__$1);
var G__54931 = null;
var G__54932 = (0);
var G__54933 = (0);
seq__54631_54903 = G__54930;
chunk__54633_54904 = G__54931;
count__54634_54905 = G__54932;
i__54635_54906 = G__54933;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_54900);
});})(seq__54587_54843,chunk__54591_54844,count__54592_54845,i__54593_54846,seq__54230,chunk__54232,count__54233,i__54234,new_link_54902,path_match_54901,node_54900,seq__54587_54894__$1,temp__5720__auto___54893__$1,path,seq__54230__$1,temp__5720__auto__,map__54229,map__54229__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54901], 0));

goog.dom.insertSiblingAfter(new_link_54902,node_54900);


var G__54934 = cljs.core.next(seq__54587_54894__$1);
var G__54935 = null;
var G__54936 = (0);
var G__54937 = (0);
seq__54587_54843 = G__54934;
chunk__54591_54844 = G__54935;
count__54592_54845 = G__54936;
i__54593_54846 = G__54937;
continue;
} else {
var G__54938 = cljs.core.next(seq__54587_54894__$1);
var G__54939 = null;
var G__54940 = (0);
var G__54941 = (0);
seq__54587_54843 = G__54938;
chunk__54591_54844 = G__54939;
count__54592_54845 = G__54940;
i__54593_54846 = G__54941;
continue;
}
} else {
var G__54942 = cljs.core.next(seq__54587_54894__$1);
var G__54943 = null;
var G__54944 = (0);
var G__54945 = (0);
seq__54587_54843 = G__54942;
chunk__54591_54844 = G__54943;
count__54592_54845 = G__54944;
i__54593_54846 = G__54945;
continue;
}
}
} else {
}
}
break;
}


var G__54946 = cljs.core.next(seq__54230__$1);
var G__54947 = null;
var G__54948 = (0);
var G__54949 = (0);
seq__54230 = G__54946;
chunk__54232 = G__54947;
count__54233 = G__54948;
i__54234 = G__54949;
continue;
} else {
var G__54950 = cljs.core.next(seq__54230__$1);
var G__54951 = null;
var G__54952 = (0);
var G__54953 = (0);
seq__54230 = G__54950;
chunk__54232 = G__54951;
count__54233 = G__54952;
i__54234 = G__54953;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__54641){
var map__54642 = p__54641;
var map__54642__$1 = cljs.core.__destructure_map(map__54642);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54642__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__54643){
var map__54644 = p__54643;
var map__54644__$1 = cljs.core.__destructure_map(map__54644);
var _ = map__54644__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54644__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__54645,done,error){
var map__54646 = p__54645;
var map__54646__$1 = cljs.core.__destructure_map(map__54646);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54646__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__54647,done,error){
var map__54648 = p__54647;
var map__54648__$1 = cljs.core.__destructure_map(map__54648);
var msg = map__54648__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54648__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54648__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54648__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__54649){
var map__54650 = p__54649;
var map__54650__$1 = cljs.core.__destructure_map(map__54650);
var src = map__54650__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54650__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__54651 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__54651) : done.call(null,G__54651));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__54652){
var map__54653 = p__54652;
var map__54653__$1 = cljs.core.__destructure_map(map__54653);
var msg__$1 = map__54653__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54653__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e54654){var ex = e54654;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__54655){
var map__54656 = p__54655;
var map__54656__$1 = cljs.core.__destructure_map(map__54656);
var env = map__54656__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54656__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__54657){
var map__54658 = p__54657;
var map__54658__$1 = cljs.core.__destructure_map(map__54658);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54658__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54658__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__54659){
var map__54660 = p__54659;
var map__54660__$1 = cljs.core.__destructure_map(map__54660);
var svc = map__54660__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54660__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
