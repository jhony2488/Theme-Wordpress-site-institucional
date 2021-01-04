(function(){"use strict";var e,p,u,t,h,n,s;function i(e,t,n,s){this.htmlParser=e,this.cssParser=t,this.configure=n,this.symbols=s}(p=this).hatemile||(this.hatemile={}),(e=this.hatemile).implementation||(e.implementation={}),this.hatemile.implementation.AccessibleCSSImplementation=(u="data-auxiliarspan",t="data-cssspeak",h="data-cssspeakas",n=["SPAN","A","RT","DFN","ABBR","Q","CITE","EM","TIME","VAR","SAMP","I","B","SUB","SUP","SMALL","STRONG","MARK","RUBY","INS","DEL","KBD","BDO","CODE","P","FIGCAPTION","FIGURE","PRE","DIV","OL","UL","LI","BLOCKQUOTE","DL","DT","DD","FIELDSET","LEGEND","LABEL","FORM","BODY","ASIDE","ADDRESS","H1","H2","H3","H4","H5","H6","SECTION","HEADER","NAV","ARTICLE","FOOTER","HGROUP","CAPTION","SUMMARY","DETAILS","TABLE","TR","TD","TH","TBODY","THEAD","TFOOT"],s=["SPAN","A","RT","DFN","ABBR","Q","CITE","EM","TIME","VAR","SAMP","I","B","SUB","SUP","SMALL","STRONG","MARK","RUBY","INS","DEL","KBD","BDO","CODE","P","FIGCAPTION","FIGURE","PRE","DIV","LI","BLOCKQUOTE","DT","DD","FIELDSET","LEGEND","LABEL","FORM","BODY","ASIDE","ADDRESS","H1","H2","H3","H4","H5","H6","SECTION","HEADER","NAV","ARTICLE","FOOTER","CAPTION","SUMMARY","DETAILS","TD","TH"],i.prototype._getFormatedSymbol=function(e){return e.replace("\\","\\\\").replace(".","\\.").replace("+","\\+").replace("*","\\*").replace("?","\\?").replace("^","\\^").replace("$","\\$").replace("[","\\[").replace("]","\\]").replace("{","\\{").replace("}","\\}").replace("(","\\(").replace(")","\\)").replace("|","\\|").replace("/","\\/").replace(",","\\,").replace("!","\\!").replace("=","\\=").replace(":","\\:").replace("-","\\-")},i.prototype._getDescriptionOfSymbol=function(e){for(var t,n=this.symbols,s=0,i=n.length;s<i;s++)if((t=n[s]).symbol===e)return this.configure.getParameter(t.description);return null},i.prototype._getRegularExpressionOfSymbols=function(){for(var e,t=null,n=this.symbols,s=0,i=n.length;s<i;s++)e=n[s],e=this._getFormatedSymbol(e.symbol),t=null===t?"("+e+")":t+"|("+e+")";return t},i.prototype._isValidInheritElement=function(e){return-1!==n.indexOf(e.getTagName())&&!e.hasAttribute("data-ignoreaccessibilityfix")},i.prototype._isValidElement=function(e){return-1!==s.indexOf(e.getTagName())},i.prototype._isolateTextNode=function(e){var t,n,s,i,a,r,o,l;if(e.hasChildrenElements()&&this._isValidElement(e)){if(this._isValidElement(e))for(i=0,r=(n=e.getChildren()).length;i<r;i++)(t=n[i])instanceof p.hatemile.util.html.vanilla.VanillaHTMLDOMTextNode&&((l=this.htmlParser.createElement("span")).setAttribute(u,"true"),l.appendText(t.getTextContent()),t.replaceNode(l));for(a=0,o=(n=e.getChildrenElements()).length;a<o;a++)s=n[a],this._isolateTextNode(s)}},i.prototype._replaceElementByOwnContent=function(e){var t,n,s,i;if(e.hasChildrenElements()){for(s=0,i=(n=e.getChildrenElements()).length;s<i;s++)t=n[s],e.insertBefore(t);e.removeNode()}else e.hasChildren()&&e.replaceNode(e.getFirstNodeChild())},i.prototype._visit=function(e,t){var n,s,i,a;if(this._isValidInheritElement(e))if(e.hasChildrenElements())for(i=0,a=(s=e.getChildrenElements()).length;i<a;i++)n=s[i],this._visit(n,t);else this._isValidElement(e)&&t.call(this,e)},i.prototype._createContentElement=function(e,t){var n=this.htmlParser.createElement("span");return n.setAttribute(u,"true"),n.setAttribute(h,t),n.appendText(e),n},i.prototype._createAuralContentElement=function(e,t){t=this._createContentElement(e,t);return t.setAttribute("unselectable","on"),t.setAttribute("class","screen-reader-only"),t},i.prototype._createVisualContentElement=function(e,t){t=this._createContentElement(e,t);return t.setAttribute("aria-hidden","true"),t.setAttribute("role","presentation"),t},i.prototype._speakNormal=function(e){e.hasAttribute(t)&&("none"!==e.getAttribute(t)||e.hasAttribute(u)?this._replaceElementByOwnContent(e):(e.removeAttribute("role"),e.removeAttribute("aria-hidden"),e.removeAttribute(t)))},i.prototype._speakNormalInherit=function(e){this._visit(e,this._speakNormal),e.normalize()},i.prototype._speakNone=function(e){e.setAttribute("role","presentation"),e.setAttribute("aria-hidden","true"),e.setAttribute(t,"none")},i.prototype._speakNoneInherit=function(e){this._isolateTextNode(e),this._visit(e,this._speakNone)},i.prototype._speakAs=function(e,t,n,s){for(var i,a,r,o=[],l=-1,p=e.getTextContent();0<p.length&&-1!==(l=p.search(new RegExp(t)));)s.call(this,p,l,o),l+=1,p=p.substr(l);if(0<o.length){for(0<p.length&&o.push(this._createContentElement(p,n));e.hasChildren();)e.getFirstNodeChild().removeNode();for(a=0,r=o.length;a<r;a++)i=o[a],e.appendElement(i)}},i.prototype._reverseSpeakAs=function(e,t){for(var n,s,i,a,t="["+h+'="'+t+'"]',r=this.htmlParser.find(e).findDescendants(t+'[unselectable="on"]').listResults(),o=0,l=r.length;o<l;o++)r[o].removeNode();for(i=0,a=(s=this.htmlParser.find(e).findDescendants(t+"["+u+'="true"]').listResults()).length;i<a;i++)n=s[i],this._replaceElementByOwnContent(n);e.normalize()},i.prototype._speakAsNormal=function(e){this._reverseSpeakAs(e,"spell-out"),this._reverseSpeakAs(e,"literal-punctuation"),this._reverseSpeakAs(e,"no-punctuation"),this._reverseSpeakAs(e,"digits")},i.prototype._speakAsSpellOut=function(e){var s="spell-out";this._speakAs(e,"[a-zA-Z]",s,function(e,t,n){return n.push(this._createContentElement(e.substr(0,t+1),s)),n.push(this._createAuralContentElement(" ",s))})},i.prototype._speakAsSpellOutInherit=function(e){this._reverseSpeakAs(e,"spell-out"),this._isolateTextNode(e),this._visit(e,this._speakAsSpellOut)},i.prototype._speakAsLiteralPunctuation=function(e){var s="literal-punctuation";this._speakAs(e,this._getRegularExpressionOfSymbols(),s,function(e,t,n){return 0!==t&&n.push(this._createContentElement(e.substr(0,t),s)),n.push(this._createAuralContentElement(" "+this._getDescriptionOfSymbol(e.charAt(t))+" ",s)),n.push(this._createVisualContentElement(e.charAt(t),s))})},i.prototype._speakAsLiteralPunctuationInherit=function(e){this._reverseSpeakAs(e,"literal-punctuation"),this._reverseSpeakAs(e,"no-punctuation"),this._isolateTextNode(e),this._visit(e,this._speakAsLiteralPunctuation)},i.prototype._speakAsNoPunctuation=function(e){var s="no-punctuation";this._speakAs(e,"[!\"#$%&'\\(\\)\\*\\+,-\\./:;<=>?@\\[\\\\\\]\\^_`\\{\\|\\}\\~]",s,function(e,t,n){return 0!==t&&n.push(this._createContentElement(e.substr(0,t),s)),n.push(this._createVisualContentElement(e.charAt(t),s))})},i.prototype._speakAsNoPunctuationInherit=function(e){this._reverseSpeakAs(e,"literal-punctuation"),this._reverseSpeakAs(e,"no-punctuation"),this._isolateTextNode(e),this._visit(e,this._speakAsNoPunctuation)},i.prototype._speakAsDigits=function(e){var s="digits";this._speakAs(e,"[0-9]",s,function(e,t,n){return 0!==t&&n.push(this._createContentElement(e.substr(0,t),s)),n.push(this._createAuralContentElement(" ",s)),n.push(this._createContentElement(e.charAt(t),s))})},i.prototype._speakAsDigitsInherit=function(e){this._reverseSpeakAs(e,"digits"),this._isolateTextNode(e),this._visit(e,this._speakAsDigits)},i.prototype._speakAsContinuousInherit=function(e){this._reverseSpeakAs(e,"digits")},i.prototype._speakHeaderAlwaysInherit=function(e){var t,n,s,i;for(this._speakHeaderOnceInherit(e),n=this.htmlParser.find(e).findDescendants("td[headers],th[headers]").listResults(),t=new p.hatemile.implementation.AccessibleDisplayScreenReaderImplementation(this.htmlParser,this.configure),s=0,i=n.length;s<i;s++)e=n[s],t.displayCellHeader(e)},i.prototype._speakHeaderOnceInherit=function(e){for(var t=this.htmlParser.find(e).findDescendants("[data-headersof]").listResults(),n=0,s=t.length;n<s;n++)(e=t[n]).removeNode()},i.prototype.provideSpeakProperties=function(e){for(var t,n,s,i,a,r,o,l,p,u,h,c,A,m,d,_,f,g,E,k,S=this.cssParser.getRules(["speak","speak-punctuation","speak-numeral","speak-header","speak-as"]),y=0,D=S.length;y<D;y++)for(E=S[y],s=0,r=(k=this.htmlParser.find(E.getSelector()).listResults()).length;s<r;s++)if(k[s].equals(e)){if(E.hasProperty("speak"))for(i=0,o=(n=E.getDeclarations("speak")).length;i<o;i++)"none"===(f=(t=n[i]).getValue())?this._speakNoneInherit(e):"normal"===f?this._speakNormalInherit(e):"spell-out"===f&&this._speakAsSpellOutInherit(e);if(E.hasProperty("speak-as"))for(a=0,l=(n=E.getDeclarations("speak-as")).length;a<l;a++)if(f=(t=n[a]).getValue(),new RegExp("^((normal)|(inherit)|(initial)|(digits)|(literal\\-punctuation)|(no\\-punctuation)|(spell\\-out)|((digits) ((literal\\-punctuation)|(no\\-punctuation)|(spell\\-out)))|(((literal\\-punctuation)|(no\\-punctuation)|(spell\\-out)) (digits))|(((literal\\-punctuation)|(no\\-punctuation)) (spell\\-out))|((spell\\-out) ((literal\\-punctuation)|(no\\-punctuation)))|((digits) ((literal\\-punctuation)|(no\\-punctuation)) (spell\\-out))|((digits) (spell\\-out) ((literal\\-punctuation)|(no\\-punctuation)))|(((literal\\-punctuation)|(no\\-punctuation)) (digits) (spell\\-out))|(((literal\\-punctuation)|(no\\-punctuation)) (spell\\-out) (digits))|((spell\\-out) (digits) ((literal\\-punctuation)|(no\\-punctuation)))|((spell\\-out) ((literal\\-punctuation)|(no\\-punctuation)) (digits)))$","g").test(f))for(g=t.getValues(),this._speakAsNormal(e),A=0,p=g.length;A<p;A++)"spell-out"===(f=g[A])?this._speakAsSpellOutInherit(e):"literal-punctuation"===f?this._speakAsLiteralPunctuationInherit(e):"no-punctuation"===f?this._speakAsNoPunctuationInherit(e):"digits"===f&&this._speakAsDigitsInherit(e);if(E.hasProperty("speak-punctuation"))for(m=0,u=(n=E.getDeclarations("speak-punctuation")).length;m<u;m++)"code"===(f=(t=n[m]).getValue())?this._speakAsLiteralPunctuationInherit(e):"none"===f&&this._speakAsNoPunctuationInherit(e);if(E.hasProperty("speak-numeral"))for(d=0,h=(n=E.getDeclarations("speak-numeral")).length;d<h;d++)"digits"===(f=(t=n[d]).getValue())?this._speakAsDigitsInherit(e):"continuous"===f&&this._speakAsContinuousInherit(e);if(E.hasProperty("speak-header"))for(_=0,c=(n=E.getDeclarations("speak-header")).length;_<c;_++)"always"===(f=(t=n[_]).getValue())?this._speakHeaderAlwaysInherit(e):"once"===f&&this._speakHeaderOnceInherit(e)}},i.prototype.provideAllSpeakProperties=function(){for(var e,t,n,s,i,a=null,r=this.cssParser.getRules(["speak","speak-punctuation","speak-numeral","speak-header","speak-as"]),o=0,l=r.length;o<l;o++)i=r[o],a=null===a?i.getSelector():a+","+i.getSelector();if(null!==a)for(n=0,s=(t=this.htmlParser.find(a).listResults()).length;n<s;n++)e=t[n],p.hatemile.util.CommonFunctions.isValidElement(e)&&this.provideSpeakProperties(e)},i)}).call(this);