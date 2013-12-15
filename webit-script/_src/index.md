## Webit Script 读音
> Webit Script /w?b?t skr?pt/, 或者拆成 we bit script

## 这是一个开源的Java模板引擎
Webit Script 是一个简单灵活自由开放的开源的模板引擎，基于Java开发，支持Java5 及以上版本，采用BSD开源协议。


## JavaScript风格的语法
Webit Script 尽量更多的采用javascript的 标准语法，较少前端开发者的学习难度，同时你可以使用javascript的高亮方案高亮显示您的模板。


## 简单、灵活、低入侵、高可配置
这是 Webit Script 的基本开发理念，让您真正感觉是你在操控输出结果，而不是去习惯他。如果你喜欢自己折腾，那么Webit Script非常适合你。

### 简单
Webit Script 采用 `<% %>`隔离代码和文本，采用`${}`在文本中进行插值操作，不提供`HTML-tag`、`JSP-tag` 等极易引起阅读难度的特性，不过不用担心，我们引入了javascript的`function`用来自定义函数，详细请看语法介绍。

### 灵活
完全自由开放的接口设计，支持扩展资源加载器、日志、属性访问器、安全管理器等等模块，详细请看扩展支持

### 低入侵
Webit Script 采用 的 `<% %>` `${}` 分隔符均可以被转义。

### 高可配置
Webit Script 采用IoC的机制管理组件，配置更方便、自由，详情看配置介绍。

## 有好的集成支持
Webit Script 先以提供对JFinal、Jodd madvoc、SpringMVC、Struts、Servlet/Filter 等优秀框架的视图支持，当然如果这里没有包含您喜欢的框架，或者我们提供的不您的胃口你可以自己很轻松的实现自己的接入支持。

## 良好的性能
Webit Script现在仅提供**解释执行**，很多其他优秀的模板引擎往往是采用**编译执行**，用灵活性换取高性能。然而实际测试，Webit Script 和其中性能最优秀的相比，是其性能的50%-75%（2013年12月12日数据显示）。同时，编译执行不得不依赖JDK或者其他第三方类库，因为环境的变更，会产生一些差异。
> 关于性能测试，请移步另一个开源项目：zqq90/ebm

## 它还是一个脚本语言
Webit Script和其他模板引擎的一点不同还在于：它允许你进行set操作，例如： `user.name = "my new name"; `，这给模板开发者带来更大的发挥空间.