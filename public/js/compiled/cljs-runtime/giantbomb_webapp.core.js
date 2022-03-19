goog.provide('giantbomb_webapp.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
giantbomb_webapp.core.api_key = new cljs.core.Keyword(null,"api-key","api-key",1037904031).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"api-key","api-key",1037904031),"abfe4ecc218257824941c52ee77ae8cc2dcaa4fd"], null));
giantbomb_webapp.core.game_thumbnail = (function giantbomb_webapp$core$game_thumbnail(p__52648){
var map__52649 = p__52648;
var map__52649__$1 = cljs.core.__destructure_map(map__52649);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52649__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var image = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52649__$1,new cljs.core.Keyword(null,"image","image",-58725096));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52649__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var G__52650 = "div";
var G__52651 = (function (){var obj52655 = ({"className":((typeof "listed-game" === 'string')?"listed-game":clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,"listed-game")))});
return obj52655;
})();
var G__52652 = (function (){var G__52656 = "img";
var G__52657 = (function (){var obj52659 = ({"className":((typeof "thumbnail-image" === 'string')?"thumbnail-image":clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,"thumbnail-image"))),"src":new cljs.core.Keyword(null,"thumb_url","thumb_url",1146105465).cljs$core$IFn$_invoke$arity$1(image)});
return obj52659;
})();
return (thump.react.create_element.cljs$core$IFn$_invoke$arity$2 ? thump.react.create_element.cljs$core$IFn$_invoke$arity$2(G__52656,G__52657) : thump.react.create_element.call(null,G__52656,G__52657));
})();
var G__52653 = (function (){var G__52660 = "div";
var G__52661 = ({});
var G__52662 = name;
var G__52663 = (function (){var G__52666 = "button";
var G__52667 = (function (){var obj52670 = ({"className":((typeof "purchuase-button" === 'string')?"purchuase-button":clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,"purchuase-button")))});
return obj52670;
})();
var G__52668 = (function (){var G__52671 = "img";
var G__52672 = (function (){var obj52674 = ({"onClick":(function (_){
goog.dom.dataset.set(utils.query_selector("div#giantbomb-webapp"),"gameId",id);

goog.dom.dataset.set(utils.query_selector("div#giantbomb-webapp"),"gameName",name);

goog.dom.dataset.set(utils.query_selector("div#giantbomb-webapp"),"gameImage",new cljs.core.Keyword(null,"thumb_url","thumb_url",1146105465).cljs$core$IFn$_invoke$arity$1(image));

return utils.set_hash_BANG_("/purchuase");
}),"src":"images/icons8-checkout-96.svg","width":"24"});
return obj52674;
})();
return (thump.react.create_element.cljs$core$IFn$_invoke$arity$2 ? thump.react.create_element.cljs$core$IFn$_invoke$arity$2(G__52671,G__52672) : thump.react.create_element.call(null,G__52671,G__52672));
})();
return (thump.react.create_element.cljs$core$IFn$_invoke$arity$3 ? thump.react.create_element.cljs$core$IFn$_invoke$arity$3(G__52666,G__52667,G__52668) : thump.react.create_element.call(null,G__52666,G__52667,G__52668));
})();
return (thump.react.create_element.cljs$core$IFn$_invoke$arity$4 ? thump.react.create_element.cljs$core$IFn$_invoke$arity$4(G__52660,G__52661,G__52662,G__52663) : thump.react.create_element.call(null,G__52660,G__52661,G__52662,G__52663));
})();
return (thump.react.create_element.cljs$core$IFn$_invoke$arity$4 ? thump.react.create_element.cljs$core$IFn$_invoke$arity$4(G__52650,G__52651,G__52652,G__52653) : thump.react.create_element.call(null,G__52650,G__52651,G__52652,G__52653));
});

giantbomb_webapp.core.Search_page = (function (){var G__52678 = (function giantbomb_webapp$core$Search_page_render(props__42479__auto__,maybe_ref__42480__auto__){
var vec__52679 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__42479__auto__),maybe_ref__42480__auto__], null);

var vec__52682 = helix.hooks.use_state(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"search-results","search-results",306464634),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"search-term","search-term",356193544),""], null));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52682,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52682,(1),null);
var map__52685 = state;
var map__52685__$1 = cljs.core.__destructure_map(map__52685);
var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52685__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));
var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52685__$1,new cljs.core.Keyword(null,"search-results","search-results",306464634));
return helix.core.get_react().createElement(helix.core.Fragment,null,(function (){var G__52686 = "div";
var G__52687 = (function (){var obj52691 = ({"className":((typeof "central-container" === 'string')?"central-container":clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,"central-container")))});
return obj52691;
})();
var G__52688 = (function (){var G__52692 = "form";
var G__52693 = (function (){var obj52696 = ({"onSubmit":(function (p1__52675_SHARP_){
return p1__52675_SHARP_.preventDefault();
}),"className":((typeof "pure-form search-form" === 'string')?"pure-form search-form":clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,"pure-form search-form")))});
return obj52696;
})();
var G__52694 = (function (){var G__52697 = "input";
var G__52698 = (function (){var obj52700 = ({"type":"text","className":((typeof "pure-input-rounded" === 'string')?"pure-input-rounded":clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,"pure-input-rounded"))),"onChange":(function (p1__52676_SHARP_){
var G__52701 = cljs.core.assoc;
var G__52702 = new cljs.core.Keyword(null,"search-term","search-term",356193544);
var G__52703 = p1__52676_SHARP_.target.value;
return (set_state.cljs$core$IFn$_invoke$arity$3 ? set_state.cljs$core$IFn$_invoke$arity$3(G__52701,G__52702,G__52703) : set_state.call(null,G__52701,G__52702,G__52703));
})});
return obj52700;
})();
return (thump.react.create_element.cljs$core$IFn$_invoke$arity$2 ? thump.react.create_element.cljs$core$IFn$_invoke$arity$2(G__52697,G__52698) : thump.react.create_element.call(null,G__52697,G__52698));
})();
return (thump.react.create_element.cljs$core$IFn$_invoke$arity$3 ? thump.react.create_element.cljs$core$IFn$_invoke$arity$3(G__52692,G__52693,G__52694) : thump.react.create_element.call(null,G__52692,G__52693,G__52694));
})();
var G__52689 = (function (){var G__52704 = "input";
var G__52705 = (function (){var obj52707 = ({"className":((typeof "pure-button-primary" === 'string')?"pure-button-primary":clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,"pure-button-primary"))),"type":"button","value":"search for game","onClick":(function (_){
if(cljs.core.truth_(state)){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(utils.fetch(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"https://www.giantbomb.com/api/accessories/?api_key=~a&format=json&filter=name:~a&field_list=name,id,image",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([giantbomb_webapp.core.api_key,search_term], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"get"], null)),(function (x){
var G__52708 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword(null,"search-results","search-results",306464634),new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(x)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))));
return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__52708) : set_state.call(null,G__52708));
}));
} else {
return null;
}
})});
return obj52707;
})();
return (thump.react.create_element.cljs$core$IFn$_invoke$arity$2 ? thump.react.create_element.cljs$core$IFn$_invoke$arity$2(G__52704,G__52705) : thump.react.create_element.call(null,G__52704,G__52705));
})();
return (thump.react.create_element.cljs$core$IFn$_invoke$arity$4 ? thump.react.create_element.cljs$core$IFn$_invoke$arity$4(G__52686,G__52687,G__52688,G__52689) : thump.react.create_element.call(null,G__52686,G__52687,G__52688,G__52689));
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(helix.core.$,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"thumbnail-container"], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(giantbomb_webapp.core.game_thumbnail,search_results))));
});
if(goog.DEBUG === true){
var G__52709 = G__52678;
(G__52709.displayName = "giantbomb-webapp.core/Search-page");

return G__52709;
} else {
return G__52678;
}
})();




giantbomb_webapp.core.Cheackout_page = (function (){var G__52712 = (function giantbomb_webapp$core$Cheackout_page_render(props__42479__auto__,maybe_ref__42480__auto__){
var vec__52713 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__42479__auto__),maybe_ref__42480__auto__], null);

var vec__52716 = helix.hooks.use_state(cljs.core.PersistentArrayMap.EMPTY);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52716,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52716,(1),null);
var map__52719 = state;
var map__52719__$1 = cljs.core.__destructure_map(map__52719);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52719__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52719__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var image = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52719__$1,new cljs.core.Keyword(null,"image","image",-58725096));
var G__52720_52774 = helix.hooks.wrap_fx((function (){
var id__$1 = goog.dom.dataset.get(utils.query_selector("div#giantbomb-webapp"),"gameId");
var name__$1 = goog.dom.dataset.get(utils.query_selector("div#giantbomb-webapp"),"gameName");
var image__$1 = goog.dom.dataset.get(utils.query_selector("div#giantbomb-webapp"),"gameImage");
var G__52722 = (function (p1__52710_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__52710_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092),id__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),name__$1,new cljs.core.Keyword(null,"image","image",-58725096),image__$1], 0));
});
return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__52722) : set_state.call(null,G__52722));
}));
var G__52721_52775 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__52720_52774,G__52721_52775) : helix.hooks.raw_use_effect.call(null,G__52720_52774,G__52721_52775));

if(cljs.core.truth_((function (){var and__4251__auto__ = id;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = name;
if(cljs.core.truth_(and__4251__auto____$1)){
return image;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
var G__52723 = "div";
var G__52724 = (function (){var obj52730 = ({"className":((typeof "Cart-Items" === 'string')?"Cart-Items":clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,"Cart-Items")))});
return obj52730;
})();
var G__52725 = (function (){var G__52731 = "div";
var G__52732 = (function (){var obj52735 = ({"className":((typeof "image-box" === 'string')?"image-box":clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,"image-box")))});
return obj52735;
})();
var G__52733 = (function (){var G__52736 = "img";
var G__52737 = (function (){var obj52739 = ({"src":image,"style":cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"120px"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keyword-fn","keyword-fn",-64566675),thump.react.camel_case_STAR_], 0))});
return obj52739;
})();
return (thump.react.create_element.cljs$core$IFn$_invoke$arity$2 ? thump.react.create_element.cljs$core$IFn$_invoke$arity$2(G__52736,G__52737) : thump.react.create_element.call(null,G__52736,G__52737));
})();
return (thump.react.create_element.cljs$core$IFn$_invoke$arity$3 ? thump.react.create_element.cljs$core$IFn$_invoke$arity$3(G__52731,G__52732,G__52733) : thump.react.create_element.call(null,G__52731,G__52732,G__52733));
})();
var G__52726 = (function (){var G__52740 = "div";
var G__52741 = (function (){var obj52745 = ({"className":((typeof "about" === 'string')?"about":clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,"about")))});
return obj52745;
})();
var G__52742 = (function (){var G__52746 = "h1";
var G__52747 = (function (){var obj52750 = ({"className":((typeof "title" === 'string')?"title":clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,"title")))});
return obj52750;
})();
var G__52748 = name;
return (thump.react.create_element.cljs$core$IFn$_invoke$arity$3 ? thump.react.create_element.cljs$core$IFn$_invoke$arity$3(G__52746,G__52747,G__52748) : thump.react.create_element.call(null,G__52746,G__52747,G__52748));
})();
var G__52743 = (function (){var G__52751 = "h3";
var G__52752 = (function (){var obj52755 = ({"className":((typeof "subtitle" === 'string')?"subtitle":clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,"subtitle")))});
return obj52755;
})();
var G__52753 = "250ml";
return (thump.react.create_element.cljs$core$IFn$_invoke$arity$3 ? thump.react.create_element.cljs$core$IFn$_invoke$arity$3(G__52751,G__52752,G__52753) : thump.react.create_element.call(null,G__52751,G__52752,G__52753));
})();
return (thump.react.create_element.cljs$core$IFn$_invoke$arity$4 ? thump.react.create_element.cljs$core$IFn$_invoke$arity$4(G__52740,G__52741,G__52742,G__52743) : thump.react.create_element.call(null,G__52740,G__52741,G__52742,G__52743));
})();
var G__52727 = (function (){var G__52756 = "div";
var G__52757 = (function (){var obj52759 = ({"className":((typeof "counter" === 'string')?"counter":clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,"counter")))});
return obj52759;
})();
return (thump.react.create_element.cljs$core$IFn$_invoke$arity$2 ? thump.react.create_element.cljs$core$IFn$_invoke$arity$2(G__52756,G__52757) : thump.react.create_element.call(null,G__52756,G__52757));
})();
var G__52728 = (function (){var G__52760 = "div";
var G__52761 = (function (){var obj52763 = ({"className":((typeof "prices" === 'string')?"prices":clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,"prices")))});
return obj52763;
})();
return (thump.react.create_element.cljs$core$IFn$_invoke$arity$2 ? thump.react.create_element.cljs$core$IFn$_invoke$arity$2(G__52760,G__52761) : thump.react.create_element.call(null,G__52760,G__52761));
})();
return (thump.react.create_element.cljs$core$IFn$_invoke$arity$6 ? thump.react.create_element.cljs$core$IFn$_invoke$arity$6(G__52723,G__52724,G__52725,G__52726,G__52727,G__52728) : thump.react.create_element.call(null,G__52723,G__52724,G__52725,G__52726,G__52727,G__52728));
} else {
var G__52764 = "div";
var G__52765 = (function (){var obj52767 = ({"style":cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keyword-fn","keyword-fn",-64566675),thump.react.camel_case_STAR_], 0))});
return obj52767;
})();
return (thump.react.create_element.cljs$core$IFn$_invoke$arity$2 ? thump.react.create_element.cljs$core$IFn$_invoke$arity$2(G__52764,G__52765) : thump.react.create_element.call(null,G__52764,G__52765));
}
});
if(goog.DEBUG === true){
var G__52768 = G__52712;
(G__52768.displayName = "giantbomb-webapp.core/Cheackout-page");

return G__52768;
} else {
return G__52712;
}
})();



if((typeof giantbomb_webapp !== 'undefined') && (typeof giantbomb_webapp.core !== 'undefined') && (typeof giantbomb_webapp.core.set_page !== 'undefined')){
} else {
giantbomb_webapp.core.set_page = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__52769 = cljs.core.get_global_hierarchy;
return (fexpr__52769.cljs$core$IFn$_invoke$arity$0 ? fexpr__52769.cljs$core$IFn$_invoke$arity$0() : fexpr__52769.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("giantbomb-webapp.core","set-page"),(function (x){
return clojure.string.replace(utils.name_STAR_(x),/#\//,"");
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
giantbomb_webapp.core.set_page.cljs$core$IMultiFn$_add_method$arity$3(null,"index",(function (_){
return giantbomb_webapp.core.Search_page;
}));
giantbomb_webapp.core.set_page.cljs$core$IMultiFn$_add_method$arity$3(null,"purchuase",(function (_){
return giantbomb_webapp.core.Cheackout_page;
}));
giantbomb_webapp.core.set_page.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (exp){
utils.set_hash_BANG_("/index");

return giantbomb_webapp.core.Search_page;
}));
giantbomb_webapp.core.render_page = (function giantbomb_webapp$core$render_page(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52776 = arguments.length;
var i__4865__auto___52777 = (0);
while(true){
if((i__4865__auto___52777 < len__4864__auto___52776)){
args__4870__auto__.push((arguments[i__4865__auto___52777]));

var G__52778 = (i__4865__auto___52777 + (1));
i__4865__auto___52777 = G__52778;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return giantbomb_webapp.core.render_page.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(giantbomb_webapp.core.render_page.cljs$core$IFn$_invoke$arity$variadic = (function (_){
var hash = utils.oget_in(document,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Symbol(null,"hash","hash",1626749931,null)], null));
utils.clog.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rendering"], 0));

try{return module$node_modules$react_dom$index.render(helix.core.get_react().createElement(giantbomb_webapp.core.set_page.cljs$core$IFn$_invoke$arity$1(hash),null),utils.query_selector("div#giantbomb-webapp"));
}catch (e52771){if((e52771 instanceof Object)){
var exp = e52771;
return utils.clog.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([exp], 0));
} else {
throw e52771;

}
}}));

(giantbomb_webapp.core.render_page.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(giantbomb_webapp.core.render_page.cljs$lang$applyTo = (function (seq52770){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52770));
}));

giantbomb_webapp.core.update_routes = (function giantbomb_webapp$core$update_routes(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52779 = arguments.length;
var i__4865__auto___52780 = (0);
while(true){
if((i__4865__auto___52780 < len__4864__auto___52779)){
args__4870__auto__.push((arguments[i__4865__auto___52780]));

var G__52781 = (i__4865__auto___52780 + (1));
i__4865__auto___52780 = G__52781;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return giantbomb_webapp.core.update_routes.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(giantbomb_webapp.core.update_routes.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(utils.clog,args);
}));

(giantbomb_webapp.core.update_routes.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(giantbomb_webapp.core.update_routes.cljs$lang$applyTo = (function (seq52772){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52772));
}));

giantbomb_webapp.core.app = (function giantbomb_webapp$core$app(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52782 = arguments.length;
var i__4865__auto___52783 = (0);
while(true){
if((i__4865__auto___52783 < len__4864__auto___52782)){
args__4870__auto__.push((arguments[i__4865__auto___52783]));

var G__52784 = (i__4865__auto___52783 + (1));
i__4865__auto___52783 = G__52784;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return giantbomb_webapp.core.app.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});
goog.exportSymbol('giantbomb_webapp.core.app', giantbomb_webapp.core.app);

(giantbomb_webapp.core.app.cljs$core$IFn$_invoke$arity$variadic = (function (_){
utils.initialize_hash();

giantbomb_webapp.core.render_page();

return utils.attach_event(new cljs.core.Keyword(null,"popstate","popstate",942216014),giantbomb_webapp.core.render_page);
}));

(giantbomb_webapp.core.app.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(giantbomb_webapp.core.app.cljs$lang$applyTo = (function (seq52773){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52773));
}));


//# sourceMappingURL=giantbomb_webapp.core.js.map
