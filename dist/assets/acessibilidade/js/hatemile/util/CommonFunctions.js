(function(){"use strict";var t;function i(){}this.hatemile||(this.hatemile={}),(t=this.hatemile).util||(t.util={}),this.hatemile.util.CommonFunctions=(i.setListAttributes=function(t,i,e){for(var n,l=0,u=e.length;l<u;l++)n=e[l],t.hasAttribute(n)&&i.setAttribute(n,t.getAttribute(n))},i.increaseInList=function(t,i){return null!==t&&0<t.length&&null!==i&&0<i.length?this.inList(t,i)?t:t+" "+i:null!==i&&0<i.length?i:t},i.inList=function(t,i){var e,n,l;if(null!==t&&0<t.length&&null!==i&&0<i.length)for(n=0,l=(e=t.split(new RegExp("[ \n\t\r]+"))).length;n<l;n++)if(e[n]===i)return!0;return!1},i.isValidElement=function(t){var i;return!t.hasAttribute("data-ignoreaccessibilityfix")&&(null===(i=t.getParentElement())||("BODY"===(t=i.getTagName())||"HTML"===t||this.isValidElement(i)))},i)}).call(this);