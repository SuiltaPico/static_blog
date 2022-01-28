import{r as o,o as e,c as r,a as s,b as B,w as p,F as c,e as a,d as n}from"./app.45bb761f.js";import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";const y={},i=n("\u56DE\u5230\u4E3B\u6587\u6863"),d=a(`<h1 id="\u9009\u9879-api-vue-3-\u5FEB\u901F\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879-api-vue-3-\u5FEB\u901F\u53C2\u8003" aria-hidden="true">#</a> \u9009\u9879 API | Vue 3 \u5FEB\u901F\u53C2\u8003</h1><h2 id="data" tabindex="-1"><a class="header-anchor" href="#data" aria-hidden="true">#</a> Data</h2><p>\u63A7\u5236\u6570\u636E\u7684\u9009\u9879\u3002</p><h3 id="data-1" tabindex="-1"><a class="header-anchor" href="#data-1" aria-hidden="true">#</a> data</h3><ul><li><p><strong>\u7C7B\u578B</strong>\uFF1A <code>function(vm): Object</code></p></li><li><p><strong>\u7EC6\u8282</strong>:</p><p><code>data</code> \u7528\u4E8E<strong>\u5B9A\u4E49\u7EC4\u4EF6\u7684\u6570\u636E</strong>\u3002\u8BE5\u51FD\u6570\u8FD4\u56DE\u7EC4\u4EF6\u5B9E\u4F8B\u7684 <strong>data \u5BF9\u8C61</strong>\u3002\u5B9E\u4F8B\u521B\u5EFA\u65F6\u4F1A\u88AB\u8C03\u7528\uFF0C\u7136\u540E\u5BF9\u8C61\u6240\u6709\u9876\u7EA7 property \u4E5F\u4F1A\u76F4\u63A5\u901A\u8FC7\u7EC4\u4EF6\u5B9E\u4F8B\u66B4\u9732\u51FA\u6765\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#56B6C2;">const</span><span style="color:#BBBBBB;"> </span><span style="color:#61AFEF;">vm</span><span style="color:#BBBBBB;"> </span><span style="color:#E06C75;">=</span><span style="color:#BBBBBB;"> </span><span style="color:#98C379;">createApp</span><span style="color:#ABB2BF;">(</span><span style="color:#BBBBBB;">{</span></span>
<span class="line"><span style="color:#BBBBBB;">    </span><span style="color:#98C379;">data</span><span style="color:#BBBBBB;">() { </span><span style="color:#E06C75;">return</span><span style="color:#BBBBBB;"> { a</span><span style="color:#ABB2BF;">:</span><span style="color:#BBBBBB;"> </span><span style="color:#C678DD;">1</span><span style="color:#BBBBBB;"> } }</span></span>
<span class="line"><span style="color:#BBBBBB;">}</span><span style="color:#ABB2BF;">).</span><span style="color:#98C379;">mount</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">&#39;#app&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#98C379;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">vm</span><span style="color:#ABB2BF;">.a)</span><span style="color:#BBBBBB;"> </span><span style="color:#676F7D;">// =&gt; 1</span></span>
<span class="line"></span></code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4E00\u65E6 property \u88AB\u4FA6\u542C\u540E\uFF0C\u6839\u6570\u636E\u5BF9\u8C61\u5C31\u4E0D\u80FD\u518D\u88AB\u6DFB\u52A0\u54CD\u5E94\u5F0F\u7684 property\u3002\u6240\u4EE5\u5E94\u5728\u521B\u5EFA\u5B9E\u4F8B\u524D\u5148\u58F0\u660E\u6240\u6709\u7684\u6839\u7EA7\u54CD\u5E94\u5F0F property\u3002</p><div class="custom-container warning"><p class="custom-container-title">\u8B66\u544A</p><p>\u4EE5 <code>_</code> \u6216 <code>$</code> \u5F00\u5934\u7684 property <strong>\u4E0D\u4F1A</strong>\u88AB\u7EC4\u4EF6\u5B9E\u4F8B\u4EE3\u7406\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u53EF\u80FD\u4F1A\u548C Vue \u5185\u7F6E\u7684 property \u6216\u65B9\u6CD5\u51B2\u7A81\u3002\u53EF\u4EE5\u4F7F\u7528\u5982 <code>vm.$data._property</code> \u7684\u65B9\u5F0F\u8BBF\u95EE\u8FD9\u4E9B property\u3002</p></div><p>\u5982\u679C\u4E3A data property \u4F7F\u7528\u4E86<strong>\u7BAD\u5934\u51FD\u6570</strong>\uFF0C\u5219\u53EF\u4EE5\u901A\u8FC7\u8BE5\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u6765\u8BBF\u95EE\u5B9E\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#BBBBBB;">data</span><span style="color:#ABB2BF;">:</span><span style="color:#BBBBBB;"> </span><span style="color:#D19A66;font-style:italic;">vm</span><span style="color:#BBBBBB;"> </span><span style="color:#56B6C2;">=&gt;</span><span style="color:#BBBBBB;"> </span><span style="color:#ABB2BF;">(</span><span style="color:#BBBBBB;">{ a</span><span style="color:#ABB2BF;">:</span><span style="color:#BBBBBB;"> </span><span style="color:#61AFEF;">vm</span><span style="color:#ABB2BF;">.myProp</span><span style="color:#BBBBBB;"> }</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ul><h4 id="\u8BBF\u95EE\u539F\u59CB\u6570\u636E\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u8BBF\u95EE\u539F\u59CB\u6570\u636E\u5BF9\u8C61" aria-hidden="true">#</a> \u8BBF\u95EE\u539F\u59CB\u6570\u636E\u5BF9\u8C61</h4><p>\u5B9E\u4F8B\u521B\u5EFA\u4E4B\u540E\uFF0C\u7EC4\u4EF6\u5B9E\u4F8B\u4EE3\u7406\u4E86 <code>data</code> \u4E0A\u5BF9\u8C61\u4E0A\u6240\u6709\u7684 property\u3002\u56E0\u6B64\u53EF\u4EE5\u901A\u8FC7 <code>vm</code> \u6216 <code>vm.$data</code> \u8BBF\u95EE\u539F\u59CB\u6570\u636E\u5BF9\u8C61\u3002</p><h3 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> methods</h3><ul><li><p><strong>\u7C7B\u578B</strong>\uFF1A <code>{ [key: string]: Function }</code></p></li><li><p><strong>\u7EC6\u8282</strong>:</p><p><code>methods</code> \u7528\u4E8E<strong>\u5B9A\u4E49\u7EC4\u4EF6\u7684\u65B9\u6CD5</strong>\u3002\u5176\u6240\u6709\u65B9\u6CD5\u90FD\u5C06\u88AB\u6DF7\u5165\u5230\u7EC4\u4EF6\u5B9E\u4F8B\u4E2D\uFF0C\u56E0\u6B64\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7\u7EC4\u4EF6\u5B9E\u4F8B\uFF08<code>vm</code>\uFF09\u8BBF\u95EE\u6216\u5728\u6307\u4EE4\u8868\u8FBE\u5F0F\u4E2D\u4F7F\u7528\u3002\u65B9\u6CD5\u4E2D\u7684 <code>this</code> \u81EA\u52A8\u7ED1\u5B9A\u4E3A\u7EC4\u4EF6\u5B9E\u4F8B\u3002\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#56B6C2;">const</span><span style="color:#BBBBBB;"> </span><span style="color:#61AFEF;">vm</span><span style="color:#BBBBBB;"> </span><span style="color:#E06C75;">=</span><span style="color:#BBBBBB;"> </span><span style="color:#98C379;">createApp</span><span style="color:#ABB2BF;">(</span><span style="color:#BBBBBB;">{</span></span>
<span class="line"><span style="color:#BBBBBB;">    </span><span style="color:#98C379;">data</span><span style="color:#BBBBBB;">() { </span><span style="color:#E06C75;">return</span><span style="color:#BBBBBB;"> { a</span><span style="color:#ABB2BF;">:</span><span style="color:#BBBBBB;"> </span><span style="color:#C678DD;">1</span><span style="color:#BBBBBB;"> } }</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#BBBBBB;">    methods</span><span style="color:#ABB2BF;">:</span><span style="color:#BBBBBB;"> {</span></span>
<span class="line"><span style="color:#BBBBBB;">        </span><span style="color:#98C379;">plus</span><span style="color:#BBBBBB;">() { </span><span style="color:#E06C75;">this</span><span style="color:#ABB2BF;">.a</span><span style="color:#E06C75;">++</span><span style="color:#BBBBBB;"> }</span></span>
<span class="line"><span style="color:#BBBBBB;">    }</span></span>
<span class="line"><span style="color:#BBBBBB;">}</span><span style="color:#ABB2BF;">).</span><span style="color:#98C379;">mount</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">&#39;#app&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">vm</span><span style="color:#ABB2BF;">.</span><span style="color:#98C379;">plus</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#61AFEF;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#98C379;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">vm</span><span style="color:#ABB2BF;">.a)</span><span style="color:#BBBBBB;"> </span><span style="color:#676F7D;">// =&gt; 2</span></span>
<span class="line"></span></code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">\u8B66\u544A</p><p><strong>\u4E0D\u5E94\u8BE5</strong>\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\u6765\u5B9A\u4E49 method \u51FD\u6570\u3002\u7BAD\u5934\u51FD\u6570\u4F1A\u7ED1\u5B9A\u7236\u7EA7\u4F5C\u7528\u57DF\u7684\u4E0A\u4E0B\u6587\uFF0C\u56E0\u6B64 <code>this</code> \u5C06\u4E0D\u4F1A\u6309\u7167\u671F\u671B\u6307\u5411\u7EC4\u4EF6\u5B9E\u4F8B\u3002</p></div></li></ul><h3 id="computed" tabindex="-1"><a class="header-anchor" href="#computed" aria-hidden="true">#</a> computed</h3>`,10),u=a(`<li><p><strong>\u7C7B\u578B</strong>\uFF1A \u8BBE <code>T</code> \u4E3A\u8BE5\u8BA1\u7B97\u5C5E\u6027\u7684\u7C7B\u578B\uFF0C</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#BBBBBB;">{ </span></span>
<span class="line"><span style="color:#BBBBBB;">    </span><span style="color:#ABB2BF;">[key</span><span style="color:#BBBBBB;">: </span><span style="color:#ABB2BF;">string]</span><span style="color:#BBBBBB;">: (</span><span style="color:#D19A66;font-style:italic;">vm</span><span style="color:#BBBBBB;">) </span><span style="color:#56B6C2;">=&gt;</span><span style="color:#BBBBBB;"> </span><span style="color:#61AFEF;">T</span><span style="color:#BBBBBB;"> </span><span style="color:#676F7D;">// \u5355 getter \u7684\u5F62\u5F0F</span></span>
<span class="line"><span style="color:#BBBBBB;">    </span><span style="color:#E06C75;">|</span><span style="color:#BBBBBB;"> { </span><span style="color:#676F7D;">// \u8BBE\u7F6E getter \u548C setter \u7684\u5F62\u5F0F</span></span>
<span class="line"><span style="color:#BBBBBB;">        get</span><span style="color:#ABB2BF;">:</span><span style="color:#BBBBBB;"> (</span><span style="color:#D19A66;font-style:italic;">vm</span><span style="color:#BBBBBB;">) </span><span style="color:#56B6C2;">=&gt;</span><span style="color:#BBBBBB;"> </span><span style="color:#61AFEF;">T</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#BBBBBB;">        set</span><span style="color:#ABB2BF;">:</span><span style="color:#BBBBBB;"> (</span><span style="color:#D19A66;font-style:italic;">v</span><span style="color:#E06C75;">:</span><span style="color:#BBBBBB;"> </span><span style="color:#61AFEF;">T</span><span style="color:#ABB2BF;">,</span><span style="color:#BBBBBB;"> </span><span style="color:#D19A66;font-style:italic;">vm</span><span style="color:#BBBBBB;">) </span><span style="color:#56B6C2;">=&gt;</span><span style="color:#BBBBBB;"> </span><span style="color:#56B6C2;">undefined</span></span>
<span class="line"><span style="color:#BBBBBB;">    }</span></span>
<span class="line"><span style="color:#BBBBBB;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li>`,1),b=s("p",null,[s("strong",null,"\u7EC6\u8282"),n("\uFF1A")],-1),F=s("code",null,"computed",-1),m=n(" \u9009\u9879\u7528\u4E8E\u5B9A\u4E49"),h=n("\u8BA1\u7B97\u5C5E\u6027"),A=n("\u3002\u8BA1\u7B97\u5C5E\u6027\u5C06\u4F1A\u4EE5"),g=s("strong",null,"\u5C5E\u6027",-1),v=n("\u7684\u5F62\u5F0F\u88AB\u6DF7\u5165\u5230\u7EC4\u4EF6\u5B9E\u4F8B\u4E2D\u3002\u6240\u6709 getter \u548C setter \u7684 "),C=s("code",null,"this",-1),E=n(" \u4E0A\u4E0B\u6587\u81EA\u52A8\u5730\u7ED1\u5B9A\u4E3A\u7EC4\u4EF6\u5B9E\u4F8B\u3002"),_=s("p",null,[n("\u5982\u679C\u4E3A\u8BA1\u7B97\u5C5E\u6027\u4F7F\u7528\u4E86"),s("strong",null,"\u7BAD\u5934\u51FD\u6570"),n("\uFF0C\u5219\u53EF\u4EE5\u901A\u8FC7\u8BE5\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u6765\u8BBF\u95EE\u5B9E\u4F8B\u3002")],-1),D=a(`<li><p><strong>\u793A\u4F8B</strong>\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#56B6C2;">const</span><span style="color:#BBBBBB;"> </span><span style="color:#61AFEF;">vm</span><span style="color:#BBBBBB;"> </span><span style="color:#E06C75;">=</span><span style="color:#BBBBBB;"> </span><span style="color:#98C379;">createApp</span><span style="color:#ABB2BF;">(</span><span style="color:#BBBBBB;">{</span></span>
<span class="line"><span style="color:#98C379;">data</span><span style="color:#BBBBBB;">() { </span><span style="color:#E06C75;">return</span><span style="color:#BBBBBB;"> { a</span><span style="color:#ABB2BF;">:</span><span style="color:#BBBBBB;"> </span><span style="color:#C678DD;">1</span><span style="color:#BBBBBB;"> } }</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#BBBBBB;">computed</span><span style="color:#ABB2BF;">:</span><span style="color:#BBBBBB;"> {</span></span>
<span class="line"><span style="color:#BBBBBB;">    </span><span style="color:#98C379;">aDouble</span><span style="color:#BBBBBB;">() { </span><span style="color:#E06C75;">return</span><span style="color:#BBBBBB;"> </span><span style="color:#E06C75;">this</span><span style="color:#ABB2BF;">.a</span><span style="color:#BBBBBB;"> </span><span style="color:#E06C75;">*</span><span style="color:#BBBBBB;"> </span><span style="color:#C678DD;">2</span><span style="color:#BBBBBB;"> }</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#BBBBBB;">    aPlus</span><span style="color:#ABB2BF;">:</span><span style="color:#BBBBBB;"> {</span></span>
<span class="line"><span style="color:#BBBBBB;">    </span><span style="color:#98C379;">get</span><span style="color:#BBBBBB;">() { </span><span style="color:#E06C75;">return</span><span style="color:#BBBBBB;"> </span><span style="color:#E06C75;">this</span><span style="color:#ABB2BF;">.a</span><span style="color:#BBBBBB;"> </span><span style="color:#E06C75;">+</span><span style="color:#BBBBBB;"> </span><span style="color:#C678DD;">1</span><span style="color:#BBBBBB;"> }</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#BBBBBB;">    </span><span style="color:#98C379;">set</span><span style="color:#BBBBBB;">(</span><span style="color:#D19A66;font-style:italic;">v</span><span style="color:#BBBBBB;">) { </span><span style="color:#E06C75;">this</span><span style="color:#ABB2BF;">.a</span><span style="color:#BBBBBB;"> </span><span style="color:#E06C75;">=</span><span style="color:#BBBBBB;"> </span><span style="color:#ABB2BF;">v</span><span style="color:#BBBBBB;"> </span><span style="color:#E06C75;">-</span><span style="color:#BBBBBB;"> </span><span style="color:#C678DD;">1</span><span style="color:#BBBBBB;"> }</span></span>
<span class="line"><span style="color:#BBBBBB;">    }</span></span>
<span class="line"><span style="color:#BBBBBB;">}</span></span>
<span class="line"><span style="color:#BBBBBB;">}</span><span style="color:#ABB2BF;">).</span><span style="color:#98C379;">mount</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">&#39;#app&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#98C379;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">vm</span><span style="color:#ABB2BF;">.aPlus)</span><span style="color:#BBBBBB;"> </span><span style="color:#676F7D;">// =&gt; 2</span></span>
<span class="line"><span style="color:#61AFEF;">vm</span><span style="color:#ABB2BF;">.aPlus</span><span style="color:#BBBBBB;"> </span><span style="color:#E06C75;">=</span><span style="color:#BBBBBB;"> </span><span style="color:#C678DD;">3</span><span style="color:#BBBBBB;"> </span><span style="color:#676F7D;">// a = 3 - 1 =&gt; 2</span></span>
<span class="line"><span style="color:#61AFEF;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#98C379;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">vm</span><span style="color:#ABB2BF;">.a)</span><span style="color:#BBBBBB;"> </span><span style="color:#676F7D;">// =&gt; 2</span></span>
<span class="line"><span style="color:#61AFEF;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#98C379;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">vm</span><span style="color:#ABB2BF;">.aDouble)</span><span style="color:#BBBBBB;"> </span><span style="color:#676F7D;">// =&gt; 4</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></li>`,1);function f(k,x){const l=o("RouterLink");return e(),r(c,null,[s("p",null,[B(l,{to:"/computer/vue/3/quick-ref/"},{default:p(()=>[i]),_:1})]),d,s("ul",null,[u,s("li",null,[b,s("p",null,[F,m,B(l,{to:"/computer/vue/3/quick-ref/#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7"},{default:p(()=>[h]),_:1}),A,g,v,C,E]),_]),D])],64)}var P=t(y,[["render",f]]);export{P as default};
