### 1. 如何获取帮助？

> Webit Script 官方QQ群: 302505483 <a target="_blank" href="http://shang.qq.com/wpa/qunwpa?idkey=7be9d8a59a8533b7c2837bdc22295b4b47c65384eda323971cf5f3b9943ad9db"><img border="0" src="http://pub.idqqimg.com/wpa/images/group.png" alt="QQ群: 302505483" title="QQ群: 302505483"></a>


### 2. 为什么不做编译执行？
> 1.现在使用编译执行，性能已经很理想了。大约是解释执行的50%-75%。
> 2.Webit Script把功能放在第一位，其次才是性能。
> 3.解释执行、编译执行很难保持预期结果的完全一致，而且编译执行更容易产生Bug。

### 3. 如何实现layout特性？
> 简单三步：

> 1.在公共模板定义一个 layout 函数

~~~~~js
<%
var layout=function(nested){
%>
<html>
    <body>
	<% nested(); %>
    </body>
</html>
<%
}; //end layout
%>
~~~~~
> 2.使用import导入函数layout

> 3.最后，使用layout，传入一个匿名函数作为参数

~~~~~js
<% layout(function{ %>
Hello Webit!
<% }); %>
~~~~~
> 技巧：您可以定义多个nested，也可以带其他参数，这个任凭您的发挥

### 4. 如何理解 Native？
> native 实际上是为了隔离Java采用的一种方式。
> native 得到的是对java函数/字段的引用。
> 需要注意的是：
> > 对于 native得到的函数，可以当作function使用，通过传参得到结果，但是要保持参数类型与引用的java方法一致
