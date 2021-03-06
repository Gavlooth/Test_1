goog.provide('clojure.core.rrb_vector.transients');
clojure.core.rrb_vector.transients.ensure_editable = (function clojure$core$rrb_vector$transients$ensure_editable(edit,node){
if((node.edit === edit)){
return node;
} else {
var new_arr = cljs.core.aclone(node.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(edit,new_arr));
}
});
clojure.core.rrb_vector.transients.editable_root = (function clojure$core$rrb_vector$transients$editable_root(root){
var new_arr = cljs.core.aclone(root.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(({}),new_arr));
});
clojure.core.rrb_vector.transients.editable_tail = (function clojure$core$rrb_vector$transients$editable_tail(tail){
var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
cljs.core.array_copy(tail,(0),ret,(0),tail.length);

return ret;
});
clojure.core.rrb_vector.transients.push_tail_BANG_ = (function clojure$core$rrb_vector$transients$push_tail_BANG_(shift,cnt,root_edit,current_node,tail_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var n_52667 = ret;
var shift_52668__$1 = shift;
while(true){
var arr_52669 = n_52667.arr;
var subidx_52670 = (((cnt - (1)) >> shift_52668__$1) & (31));
if((shift_52668__$1 === (5))){
(arr_52669[subidx_52670] = tail_node);
} else {
var child_52671 = (arr_52669[subidx_52670]);
if((child_52671 == null)){
(arr_52669[subidx_52670] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_52668__$1 - (5)),tail_node));
} else {
var editable_child_52673 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,child_52671);
(arr_52669[subidx_52670] = editable_child_52673);

var G__52675 = editable_child_52673;
var G__52676 = (shift_52668__$1 - (5));
n_52667 = G__52675;
shift_52668__$1 = G__52676;
continue;
}
}
break;
}

return ret;
} else {
var arr = ret.arr;
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var li = ((rngs[(32)]) - (1));
var cret = (((shift === (5)))?null:(function (){var child = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr[li]));
var ccnt = ((((li > (0)))?((rngs[li]) - (rngs[(li - (1))])):(rngs[(0)])) + (32));
if((!(clojure.core.rrb_vector.nodes.overflow_QMARK_(child,(shift - (5)),ccnt)))){
var G__52622 = (shift - (5));
var G__52623 = ccnt;
var G__52624 = root_edit;
var G__52625 = child;
var G__52626 = tail_node;
return (clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5(G__52622,G__52623,G__52624,G__52625,G__52626) : clojure.core.rrb_vector.transients.push_tail_BANG_.call(null,G__52622,G__52623,G__52624,G__52625,G__52626));
} else {
return null;
}
})());
if(cljs.core.truth_(cret)){
(arr[li] = cret);

(rngs[li] = ((rngs[li]) + (32)));

return ret;
} else {
if((li >= (31))){
var msg_52683 = ["Assigning index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((li + (1)))," of vector"," object array to become a node, when that"," index should only be used for storing"," range arrays."].join('');
var data_52684 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"shift","shift",997140064),shift,new cljs.core.Keyword(null,"cnd","cnd",-521882032),cnt,new cljs.core.Keyword(null,"current-node","current-node",-814308842),current_node,new cljs.core.Keyword(null,"tail-node","tail-node",-1373693221),tail_node,new cljs.core.Keyword(null,"rngs","rngs",-8039697),rngs,new cljs.core.Keyword(null,"li","li",723558921),li,new cljs.core.Keyword(null,"cret","cret",2090504467),cret], null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg_52683,data_52684);
} else {
}

(arr[(li + (1))] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift - (5)),tail_node));

(rngs[(li + (1))] = ((rngs[li]) + (32)));

(rngs[(32)] = ((rngs[(32)]) + (1)));

return ret;
}
}
});
clojure.core.rrb_vector.transients.pop_tail_BANG_ = (function clojure$core$rrb_vector$transients$pop_tail_BANG_(shift,cnt,root_edit,current_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var subidx = (((cnt - (2)) >> shift) & (31));
if((shift > (5))){
var child = (function (){var G__52634 = (shift - (5));
var G__52635 = cnt;
var G__52636 = root_edit;
var G__52637 = (ret.arr[subidx]);
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__52634,G__52635,G__52636,G__52637) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__52634,G__52635,G__52636,G__52637));
})();
if((((child == null)) && ((subidx === (0))))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = child);

return ret;
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = null);

return ret;

}
}
} else {
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx = ((rngs[(32)]) - (1));
if((shift > (5))){
var child = (ret.arr[subidx]);
var child_cnt = (((subidx === (0)))?(rngs[(0)]):((rngs[subidx]) - (rngs[(subidx - (1))])));
var new_child = (function (){var G__52648 = (shift - (5));
var G__52649 = child_cnt;
var G__52650 = root_edit;
var G__52651 = child;
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__52648,G__52649,G__52650,G__52651) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__52648,G__52649,G__52650,G__52651));
})();
if((((new_child == null)) && ((subidx === (0))))){
return null;
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_(child)){
var arr = ret.arr;
(rngs[subidx] = ((rngs[subidx]) - (32)));

(arr[subidx] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;
} else {
var rng = clojure.core.rrb_vector.nodes.last_range(child);
var diff = (rng - (cljs.core.truth_(new_child)?clojure.core.rrb_vector.nodes.last_range(new_child):(0)));
var arr = ret.arr;
(rngs[subidx] = ((rngs[subidx]) - diff));

(arr[subidx] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;

}
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
var child = (arr[subidx]);
(arr[subidx] = null);

(rngs[subidx] = (0));

(rngs[(32)] = ((rngs[(32)]) - (1)));

return ret;

}
}
}
});
clojure.core.rrb_vector.transients.do_assoc_BANG_ = (function clojure$core$rrb_vector$transients$do_assoc_BANG_(shift,root_edit,current_node,i,val){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var shift_52712__$1 = shift;
var node_52713 = ret;
while(true){
if((shift_52712__$1 === (0))){
var arr_52715 = node_52713.arr;
(arr_52715[(i & (31))] = val);
} else {
var arr_52716 = node_52713.arr;
var subidx_52717 = ((i >> shift_52712__$1) & (31));
var child_52718 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr_52716[subidx_52717]));
(arr_52716[subidx_52717] = child_52718);

var G__52721 = (shift_52712__$1 - (5));
var G__52722 = child_52718;
shift_52712__$1 = G__52721;
node_52713 = G__52722;
continue;
}
break;
}
} else {
var arr_52724 = ret.arr;
var rngs_52725 = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx_52726 = ((i >> shift) & (31));
var subidx_52727__$1 = (function (){var subidx_52727__$1 = subidx_52726;
while(true){
if((i < ((rngs_52725[subidx_52727__$1]) | (0)))){
return subidx_52727__$1;
} else {
var G__52730 = (subidx_52727__$1 + (1));
subidx_52727__$1 = G__52730;
continue;
}
break;
}
})();
var i_52728__$1 = (((subidx_52727__$1 === (0)))?i:(i - (rngs_52725[(subidx_52727__$1 - (1))])));
(arr_52724[subidx_52727__$1] = (function (){var G__52659 = (shift - (5));
var G__52660 = root_edit;
var G__52661 = (arr_52724[subidx_52727__$1]);
var G__52662 = i_52728__$1;
var G__52663 = val;
return (clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5(G__52659,G__52660,G__52661,G__52662,G__52663) : clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null,G__52659,G__52660,G__52661,G__52662,G__52663));
})());
}

return ret;
});

//# sourceMappingURL=clojure.core.rrb_vector.transients.js.map
