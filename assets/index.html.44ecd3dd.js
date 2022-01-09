import{e as s}from"./app.f6619bf7.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=s(`<h1 id="vue-3-\u5FEB\u901F\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#vue-3-\u5FEB\u901F\u53C2\u8003" aria-hidden="true">#</a> Vue 3 \u5FEB\u901F\u53C2\u8003</h1><h2 id="\u76EE\u6807" tabindex="-1"><a class="header-anchor" href="#\u76EE\u6807" aria-hidden="true">#</a> \u76EE\u6807</h2><p>\u4E00\u4E2A\u7B80\u6D01\u7684\u53C2\u8003\u6587\u6863\u3002</p><h2 id="\u5E94\u7528\u53CA\u5176\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528\u53CA\u5176\u5B9E\u4F8B" aria-hidden="true">#</a> \u5E94\u7528\u53CA\u5176\u5B9E\u4F8B</h2><p>\u6BCF\u4E2A Vue \u5E94\u7528\u90FD\u662F\u901A\u8FC7 <code>createApp</code> \u51FD\u6570\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5E94\u7528\u5B9E\u4F8B\u5F00\u59CB\u7684\u3002Vue \u5B98\u65B9\u4E60\u60EF\u79F0<strong>\u5E94\u7528</strong>\u4E3A <code>app</code>\u3002</p><h3 id="\u6302\u8F7D-mount-\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u6302\u8F7D-mount-\u5E94\u7528" aria-hidden="true">#</a> \u6302\u8F7D\uFF08mount\uFF09\u5E94\u7528</h3><p>\u6302\u8F7D\u5E94\u7528\u5C31\u662F\u628A\u5E94\u7528\u6302\u5230\u4E00\u4E2A\u5143\u7D20\u4E0A\uFF0C\u5E76\u5728\u6B64\u5143\u7D20\u4E0A\u8FDB\u884C\u5B9E\u4F8B\u5316\u3002</p><h6 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h6><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">app</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">Vue</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">createApp</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;">/* \u9009\u9879 */</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">vm</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">app</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">mount</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">#app</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6" aria-hidden="true">#</a> \u7EC4\u4EF6</h2><p><strong>\u7EC4\u4EF6</strong>\u662F\u5E26\u6709\u540D\u79F0\u7684\u53EF\u590D\u7528\u5B9E\u4F8B\u3002</p><h3 id="\u7EC4\u4EF6\u6CE8\u518C" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u6CE8\u518C" aria-hidden="true">#</a> \u7EC4\u4EF6\u6CE8\u518C</h3><h4 id="\u7EC4\u4EF6\u547D\u540D" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u547D\u540D" aria-hidden="true">#</a> \u7EC4\u4EF6\u547D\u540D</h4><p>\u4F7F\u7528 <code>-</code> \u8FDE\u63A5\u5C0F\u5199\u5355\u8BCD\uFF0C\u5982 <code>kebab-case</code> \uFF1B\u6216\u7528\u9996\u5B57\u6BCD\u5927\u5199\u547D\u540D\uFF0C\u5982 <code>PascalCase</code>\u3002</p><h4 id="\u5168\u5C40\u6CE8\u518C" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u6CE8\u518C" aria-hidden="true">#</a> \u5168\u5C40\u6CE8\u518C</h4><p>\u7EC4\u4EF6\u5168\u5C40\u6CE8\u518C\u4E4B\u540E\u53EF\u4EE5\u7528\u5728\u5E94\u7528\u5185\u4EFB\u4F55\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u6A21\u677F\u4E2D\u3002</p><p>\u6CE8\u518C\u65B9\u5F0F\u4E3A\uFF0C\u7528 <code>app.component</code> \u521B\u5EFA\u7EC4\u4EF6\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9;">app</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">component</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">my-component-name</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;">/* \u9009\u9879 */</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9;">app</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">mount</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">#app</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">&lt;div</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">id</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">app</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">&lt;my-component-name&gt;&lt;/my-component-name&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;/div&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="\u5C40\u90E8\u6CE8\u518C" tabindex="-1"><a class="header-anchor" href="#\u5C40\u90E8\u6CE8\u518C" aria-hidden="true">#</a> \u5C40\u90E8\u6CE8\u518C</h4><p>\u5C40\u90E8\u6CE8\u518C\u662F\u8BA9\u6CE8\u518C\u7684\u7EC4\u4EF6\u53EA\u80FD\u5728\u5F53\u524D\u201C\u4F5C\u7528\u57DF\u201D\u5185\u4F7F\u7528\uFF0C\u7EC4\u4EF6\u7684\u7236\u5B50\u7EC4\u4EF6\u8981\u4F7F\u7528\u5FC5\u987B\u518D\u6B21\u5BFC\u5165\uFF0C\u8FD9\u6837\u5B50\u53EF\u4EE5\u4E00\u5B9A\u7A0B\u5EA6\u5730\u8F85\u52A9\u6784\u5EFA\u7CFB\u7EDF\u51CF\u5C11\u6700\u7EC8\u7684\u6784\u5EFA\u7ED3\u679C\u7684\u6587\u4EF6\u5927\u5C0F\u3002</p><p>\u53EF\u4EE5\u5148\u5728\u4E00\u4E2A\u6587\u4EF6\u58F0\u660E\u7EC4\u4EF6\uFF0C\u7136\u540E\u518D\u5728\u522B\u7684\u7EC4\u4EF6\u5C40\u90E8\u6CE8\u518C\u8FD9\u4E2A\u7EC4\u4EF6\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">ComponentA</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#616E88;">/* ... */</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">ComponentB</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#88C0D0;">components</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">component-a</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">ComponentA</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#ECEFF4;">  </span><span style="color:#616E88;">// ...</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="\u5728\u6A21\u5757\u7CFB\u7EDF\u4E2D\u5C40\u90E8\u6CE8\u518C" tabindex="-1"><a class="header-anchor" href="#\u5728\u6A21\u5757\u7CFB\u7EDF\u4E2D\u5C40\u90E8\u6CE8\u518C" aria-hidden="true">#</a> \u5728\u6A21\u5757\u7CFB\u7EDF\u4E2D\u5C40\u90E8\u6CE8\u518C</h4><p>\u65B9\u6CD5\u4E0E\u5C40\u90E8\u6CE8\u518C\u7C7B\u4F3C\uFF0C\u4F46\u9700\u8981\u5148\u5BFC\u5165\u7EC4\u4EF6\u3002\u5EFA\u8BAE\u521B\u5EFA\u4E2A <code>components</code> \u76EE\u5F55\u7528\u4E8E\u653E\u7F6E\u7EC4\u4EF6\uFF0C\u7136\u540E\u5728\u6CE8\u518C\u524D\u5BFC\u5165\u6240\u6709\u8981\u7528\u7684\u7EC4\u4EF6\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">ComponentA</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">from</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">./ComponentA</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">ComponentC</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">from</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">./ComponentC</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">export</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">default</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#88C0D0;">components</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;">// \u7C7B\u4F3C\u5C40\u90E8\u6CE8\u518C</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">ComponentA</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">ComponentC</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="\u7EC4\u4EF6\u6027\u8D28" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u6027\u8D28" aria-hidden="true">#</a> \u7EC4\u4EF6\u6027\u8D28</h3><h4 id="\u53EF\u590D\u7528\u6027" tabindex="-1"><a class="header-anchor" href="#\u53EF\u590D\u7528\u6027" aria-hidden="true">#</a> \u53EF\u590D\u7528\u6027</h4><p>\u7EC4\u4EF6\u53EF\u88AB\u591A\u6B21\u4F7F\u7528\u3002</p><h3 id="\u7EC4\u4EF6\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u5B9E\u4F8B" aria-hidden="true">#</a> \u7EC4\u4EF6\u5B9E\u4F8B</h3><p>Vue \u5B98\u65B9\u4E60\u60EF\u79F0<strong>\u7EC4\u4EF6\u5B9E\u4F8B</strong>\u4E3A <strong>vm</strong>\u3002</p><h4 id="\u6839\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6839\u7EC4\u4EF6" aria-hidden="true">#</a> \u6839\u7EC4\u4EF6</h4><p>\u6302\u8F7D\u5E94\u7528\u65F6\uFF0C<strong>\u6839\u7EC4\u4EF6</strong>\u88AB\u7528\u4F5C\u6E32\u67D3\u7684\u8D77\u70B9\u3002</p><h4 id="\u7EC4\u4EF6\u6811" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u6811" aria-hidden="true">#</a> \u7EC4\u4EF6\u6811</h4><p>\u7EC4\u4EF6\u4EE5\u6811\u72B6\u7ED3\u6784\uFF08\u7C7B\u4F3CHTML\u4E2D\u7684\u7236\u5B50\u5144\u5F1F\u5143\u7D20\uFF09\u6784\u6210\u7EC4\u4EF6\u6811\u3002</p><h6 id="\u793A\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-1" aria-hidden="true">#</a> \u793A\u4F8B</h6><p>\u4E00\u4E2A todo \u5E94\u7528\u7684\u7EC4\u4EF6\u6811\uFF1A</p><div class="language-txt ext-txt line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#d8dee9ff;">\u6839\u7EC4\u4EF6
\u2514\u2500 todo\u5217\u8868
   \u251C\u2500 todo\u9879\u76EE
   \u2502  \u251C\u2500 \u5220\u9664todo\u6309\u94AE
   \u2502  \u2514\u2500 \u7F16\u8F91todo\u6309\u94AE
   \u2514\u2500 \u5F85\u529E\u4E8B\u4EF6\u5217\u8868\u9875\u811A
      \u251C\u2500 \u6E05\u7406todo\u6309\u94AE
      \u2514\u2500 todo\u5217\u8868\u7EDF\u8BA1
</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> \u751F\u547D\u5468\u671F</h3><details class="custom-container details"><summary>Vue \u751F\u547D\u5468\u671F\u56FE\u793A</summary><img alt="Vue \u751F\u547D\u5468\u671F\u56FE\u793A" src="https://v3.cn.vuejs.org/images/lifecycle.svg"></details><h3 id="prop" tabindex="-1"><a class="header-anchor" href="#prop" aria-hidden="true">#</a> Prop</h3><p><strong>Prop</strong> \u662F\u53EF\u4EE5\u5728\u7EC4\u4EF6\u4E0A\u6CE8\u518C\u7684\u4E00\u4E9B<strong>\u81EA\u5B9A\u4E49 attribute</strong>\uFF0C\u7C7B\u4F3C\u4E8E\u51FD\u6570\u7684\u53C2\u6570\u3002\u8FD9\u4E9B prop \u53EF\u4EE5\u5728\u4F7F\u7528\u7EC4\u4EF6\u65F6\u9644\u52A0\u3002</p><p>\u5982\u4E0B\u9762\u4F8B\u5B50\u7684 <code>title</code>\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9;">app</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">component</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">blog-post</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">props</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> [</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">title</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">]</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">template</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">\`</span><span style="color:#A3BE8C;">&lt;h4&gt;{{ title }}&lt;/h4&gt;</span><span style="color:#ECEFF4;">\`</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">app</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">mount</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">#blog-post-demo</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">&lt;div</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">id</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">blog-post-demo</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">class</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">demo</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#616E88;">&lt;!--\u7C7B\u4F3C\u4E8E\u51FD\u6570\u4F20\u5165\u4E86 title \u5B9E\u53C2--&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;blog-post</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">title</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">My journey with Vue</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;&lt;/blog-post&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;/div&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="prop-\u4F7F\u7528-v-bind-\u52A8\u6001\u4F20\u9012" tabindex="-1"><a class="header-anchor" href="#prop-\u4F7F\u7528-v-bind-\u52A8\u6001\u4F20\u9012" aria-hidden="true">#</a> Prop \u4F7F\u7528 <code>v-bind</code> \u52A8\u6001\u4F20\u9012</h4>`,46);function l(e,o){return p}var t=n(a,[["render",l]]);export{t as default};
