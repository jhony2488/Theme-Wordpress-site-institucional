(function(){"use strict";var t,n;function e(t){this.rule=t}(n=this).hatemile||(this.hatemile={}),(t=this.hatemile).util||(t.util={}),(t=this.hatemile.util).css||(t.css={}),(t=this.hatemile.util.css).jscssp||(t.jscssp={}),this.hatemile.util.css.jscssp.JSCSSPRule=(e.prototype.hasProperty=function(t){for(var e,s=this.rule.declarations,i=0,r=s.length;i<r;i++)if(e=s[i],t===new n.hatemile.util.css.jscssp.JSCSSPDeclaration(e).getProperty())return!0;return!1},e.prototype.hasDeclarations=function(){return 0<this.rule.declarations.length},e.prototype.getDeclarations=function(t){for(var e,s=[],i=this.rule.declarations,r=0,l=i.length;r<l;r++)e=i[r],t===(e=new n.hatemile.util.css.jscssp.JSCSSPDeclaration(e)).getProperty()&&s.push(e);return s},e.prototype.getSelector=function(){return this.rule.mSelectorText},e)}).call(this);