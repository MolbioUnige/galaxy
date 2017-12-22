define("mvc/history/history-list",["exports","utils/localization","utils/utils","mvc/grid/grid-view","mvc/history/history-model","mvc/history/copy-dialog"],function(t,e,i,o,n,a){"use strict";function l(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(t,"__esModule",{value:!0});var r=l(e),d=l(i),c=l(o),s=l(n),u=l(a),f=c.default.extend({_showCopyDialog:function(t){var e=new s.default.History({id:t});e.fetch().fail(function(){alert("History could not be fetched. Please contact an administrator")}).done(function(){(0,u.default)(e,{}).done(function(){window.parent&&window.parent.Galaxy&&window.parent.Galaxy.currHistoryPanel&&window.parent.Galaxy.currHistoryPanel.loadCurrentHistory(),window.location.reload(!0)})})},_add_operation:function(t,e,i){var o=this,n=i.operation_config[e.label];"Copy"==e.label&&(e.onclick=function(t){o._showCopyDialog(t)}),n.allowed&&e.allow_popup&&t.addItem({html:e.label,href:n.url_args,target:n.target,confirmation_text:e.confirm,func:function(t){t.preventDefault();var n=$(t.target).html();e.onclick?e.onclick(i.encode_id):o.execute(this.findItemByHtml(n))}})}}),y=Backbone.View.extend({title:(0,r.default)("Histories"),initialize:function(t){var e=this;this.setElement($("<div/>")),this.model=new Backbone.Model,d.default.get({url:Galaxy.root+"history/"+t.action_id+"?"+$.param(Galaxy.params),success:function(t){e.model.set(t),e.render()}})},render:function(){var t=new f(this.model.attributes);this.$el.empty().append(t.$el)}});t.default={View:y}});