(function(){"use strict";var t,e;function a(t){this.data=t}(e=this).hatemile||(this.hatemile={}),(t=this.hatemile).util||(t.util={}),(t=this.hatemile.util).html||(t.html={}),(t=this.hatemile.util.html).vanilla||(t.vanilla={}),this.hatemile.util.html.vanilla.VanillaHTMLDOMTextNode=(a.prototype.setTextContent=function(t){this.data.nodeValue=t},a.prototype.getTextContent=function(){return this.data.nodeValue},a.prototype.insertBefore=function(t){return this.data.parentNode.insertBefore(t.getData(),this.data),this},a.prototype.insertAfter=function(t){for(var e,a=this.data.parentNode,n=a.childNodes,i=!1,o=0,r=n.length;o<r;o++){if(e=n[o],i)return void a.insertBefore(t.getData(),e);e===this.data&&(i=!0)}return a.appendChild(t.getData()),this},a.prototype.removeNode=function(){return this.data.remove(),this},a.prototype.replaceNode=function(t){return this.data.parentNode.replaceChild(t.getData(),this.data),this},a.prototype.appendText=function(t){return this.setTextContent(""+this.getTextContent()+t),this},a.prototype.prependText=function(t){return this.setTextContent(""+t+this.getTextContent()),this},a.prototype.getParentElement=function(){var t=this.data.parentNode;return null==t?null:new e.hatemile.util.html.vanilla.VanillaHTMLDOMElement(t)},a.prototype.getData=function(){return this.data},a.prototype.setData=function(t){this.data=t},a.prototype.equals=function(t){return t instanceof e.hatemile.util.html.vanilla.VanillaHTMLDOMTextNode&&this.data===t.getData()},a)}).call(this);