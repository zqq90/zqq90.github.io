
~~~~~js
<%
    var name = "Webit Script";
%>
Hello ${name || "friend"}
~~~~~

这是一个 `Java` 平台下的模板引擎，语法类似 `JavaScript`，支持自定义函数，全局变量，`Lambda` 表达式，核心模块轻巧（1.5.1 版本核心jar只有 `287.9 KB`），无第三方依赖，采用 `BSD` 开源协议。 

## 下载

+ jar 包：[**webit-script.jar**] [jar]
+ 源代码：[**webit-script-sources.jar**] [sources]
+ 代码托管: [Github] [github_wit] | [开源中国(oschina.net)][osc_wit]
+ 文档: [本站][this_site]

## Maven

~~~~~xml
<!-- 核心包 -->
<dependency>
  <groupId>com.github.zqq90.webit-script</groupId>
  <artifactId>webit-script</artifactId>
  <version>1.5.1</version>
</dependency>

<!-- 扩展工具包 -->
<dependency>
  <groupId>com.github.zqq90.webit-script</groupId>
  <artifactId>webit-script-tools</artifactId>
  <version>1.5.1</version>
</dependency>

<!-- Spring MVC 3.x 扩展包 -->
<dependency>
  <groupId>com.github.zqq90.webit-script</groupId>
  <artifactId>webit-script-springmvc3</artifactId>
  <version>1.5.1</version>
</dependency>

<!-- Jodd Madvoc 3.5+ 扩展包 -->
<dependency>
  <groupId>com.github.zqq90.webit-script</groupId>
  <artifactId>webit-script-jodd3</artifactId>
  <version>1.5.1</version>
</dependency>

<!-- Struts 2.x 扩展包 -->
<dependency>
  <groupId>com.github.zqq90.webit-script</groupId>
  <artifactId>webit-script-struts2</artifactId>
  <version>1.5.1</version>
</dependency>

<!-- JFinal 扩展包 -->
<dependency>
  <groupId>com.github.zqq90.webit-script</groupId>
  <artifactId>webit-script-jfinal</artifactId>
  <version>1.5.1</version>
</dependency>
~~~~~

## 许可证

> **Webit Script** 依据 BSD许可证发布。详细请看 [LICENSE][license] 文件。

## 第三方许可证

+ **Jodd**  BSD协议. [License file][jodd_license]
+ **ASM-3.3.1**  BSD协议.[License file][asm_license]

> 已经内置ASM、jodd-props，不需要导入其他第三方依赖

## bug反馈

+ [github-issue][new_issue]


[jar]: http://central.maven.org/maven2/com/github/zqq90/webit-script/webit-script/1.5.1/webit-script-1.5.1.jar
[sources]: http://central.maven.org/maven2/com/github/zqq90/webit-script/webit-script/1.5.1/webit-script-1.5.1-sources.jar

[github_wit]: https://github.com/zqq90/webit-script
[osc_wit]: http://git.oschina.net/zqq90/webit-script

[new_issue]: https://github.com/zqq90/webit-script/issues/new
[license]: license.html

[jodd_license]: http://jodd.org/license.html
[asm_license]: http://asm.ow2.org/license.html


[this_site]: https://github.com/zqq90/zqq90.github.io/archive/master.zip
