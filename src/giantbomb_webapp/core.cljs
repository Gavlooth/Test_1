(ns giantbomb-webapp.core
  (:require
    [thump.core]
    [thump.react :refer [hiccup-element]]
    [helix.hooks :as hooks]
    [helix.core :refer [<>  defnc $ provider]]
    [helix.dom :as d]
    ["react" :as react]
    ["react-dom" :as rdom]
    [goog.dom.dataset :as gdataset]
    [macros :as m]
    [cljs.pprint :refer [cl-format]]
    [clojure.string :as str]
    ;; [goog.events.EventType :as EventType]
    ;; [giantbomb-webapp.pages.views :refer [set-page]]
    ;; [clojure.core.match :refer [match]]
    ;; [goog.events :as events]
    [utils :as u]
    [clojure.core.async :as async]))




(def api-key (:api-key (m/read-config)))

(defn game-thumbnail [{:keys [id image name]}]
   #h/e [:div {:class "listed-game"}
              [:img {:class "thumbnail-image" :src (:thumb_url image)}]
              [:div name [:button {:class "purchuase-button"} 
                          [:img  {:on-click (fn [_]
                                              (gdataset/set (u/query-selector  "div#giantbomb-webapp")  "gameId" id)
                                              (gdataset/set (u/query-selector  "div#giantbomb-webapp")  "gameName" name)
                                              (gdataset/set (u/query-selector  "div#giantbomb-webapp")  "gameImage" (:thumb_url image))
                                              (u/set-hash! "/purchuase")) 
                                              
                                              
                                  :src "images/icons8-checkout-96.svg"
                                  :width "24"}]]]])

#_goog.dom.dataset


(defnc Search-page []
  (let [[state set-state] (hooks/use-state {:search-results [] :search-term ""})
        {:keys  [search-term  search-results]}  state]
   (<>
    #h/e [:div {:class "central-container"}
          [:form {:on-submit #(.preventDefault %)
                  :class "pure-form search-form"}
           [:input {:type "text", :class "pure-input-rounded"
                    :on-change #(set-state assoc :search-term (.. % -target -value))}]]
          [:input {:class "pure-button-primary"
                   :type "button"
                   :value "search for game"
                   :on-click (fn [_]
                               (when state
                                (async/take! (u/fetch
                                                      (cl-format nil

                                                                 "https://www.giantbomb.com/api/accessories/?api_key=~a&format=json&filter=name:~a&field_list=name,id,image" api-key search-term)
                                                                 ;; "https://www.giantbomb.com/api/accessories/?api_key=~a&format=json&query=~a&resources=game" api-key search-term)
                                                      { :method "get"})
                                             (fn [x]  (set-state (assoc x :search-results  (:results (js->clj (.parse js/JSON (:body x)) :keywordize-keys true))))))))}]]
    (apply $  (into [:div  {:class "thumbnail-container"}]
                    (map  game-thumbnail search-results))))))




(defnc Cheackout-page []
  (let [[state set-state] (hooks/use-state {})
        {:keys  [id name image]}  state]
   (hooks/use-effect  []
                     (let [
                             id (gdataset/get (u/query-selector  "div#giantbomb-webapp")  "gameId")
                             name  (gdataset/get (u/query-selector  "div#giantbomb-webapp")  "gameName")
                             image  (gdataset/get (u/query-selector  "div#giantbomb-webapp")  "gameImage")]
                      (set-state #(assoc % :id id :name name :image image))))
                     
   (if  (and id name image)
     #h/e  [:div {:class "Cart-Items"} 
            [:div {:class "image-box"}
             [:img {:src  image
                    :style {:height "120px"}}]]
            [:div {:class "about"}
             [:h1 {:class "title"} name]
             [:h3 {:class "subtitle"} "250ml"]]
            [:div {:class "counter"}]
            [:div {:class "prices"}]]
      #h/e [:div {:style {:display "none"}}])))


(defmulti set-page (fn [x] 
                     (str/replace  (u/name* x) #"#/" "")))

(defmethod set-page "index" [_] Search-page)


(defmethod set-page "purchuase" [_] Cheackout-page)


(defmethod set-page :default [exp]
  (u/set-hash! "/index")
  Search-page)

(defn render-page    [& _]
 (let [hash (u/oget-in js/document ['location 'hash])]
   (u/clog "rendering")
   (try
    (rdom/render
      ($ (set-page hash))
      (u/query-selector  "div#giantbomb-webapp"))
    (catch js/Object exp (u/clog exp)))))



(defn update-routes [& args]
  (apply u/clog args))
(defn ^:export app [& _]
  (u/initialize-hash)
  (render-page)
  (u/attach-event :popstate  render-page))
  
  
