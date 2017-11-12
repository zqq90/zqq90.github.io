
~~~~~js
<%
    var name = "Febit Wit";
%>
Hello ${name || "friend"}
~~~~~

这是一个 `Java` 平台下的模板引擎，语法类似 `JavaScript`，支持自定义函数，全局变量，`Lambda` 表达式，核心模块轻巧，无第三方依赖，采用 `BSD` 开源协议。 

## 下载

+ jar 包：[**wit-core.jar**] [jar]
+ 源代码：[**wit-core-sources.jar**] [sources]
+ 代码托管: [Github] [github_wit] | [开源中国(oschina.net)][osc_wit]
+ 文档: [本站][this_site]

## Maven

~~~~~xml
<!-- 核心包 -->
<dependency>
  <groupId>org.febit.wit</groupId>
  <artifactId>wit-core</artifactId>
  <version>2.3.0-beta</version>
</dependency>

<!-- 扩展工具包 -->
<dependency>
  <groupId>org.febit.wit</groupId>
  <artifactId>wit-tools</artifactId>
  <version>2.3.0-beta</version>
</dependency>

<!-- Spring MVC 3.x 扩展包 -->
<dependency>
  <groupId>org.febit.wit</groupId>
  <artifactId>wit-springmvc3</artifactId>
  <version>2.3.0-beta</version>
</dependency>

<!-- Jodd Madvoc 3.5+ 扩展包 -->
<dependency>
  <groupId>org.febit.wit</groupId>
  <artifactId>wit-jodd3</artifactId>
  <version>2.3.0-beta</version>
</dependency>

<!-- Struts 2.x 扩展包 -->
<dependency>
  <groupId>org.febit.wit</groupId>
  <artifactId>wit-struts2</artifactId>
  <version>2.3.0-beta</version>
</dependency>

<!-- JFinal 扩展包 -->
<dependency>
  <groupId>org.febit.wit</groupId>
  <artifactId>wit-jfinal</artifactId>
  <version>2.3.0-beta</version>
</dependency>
~~~~~

## 许可证

> **Febit Wit** 依据 BSD许可证发布。详细请看 [LICENSE][license] 文件。

## 第三方许可证

+ **ASM**  BSD协议.[License file][asm_license]

> 已经内置 ASM 不需要导入其他第三方依赖

## bug反馈

+ [github-issue][new_issue]


[jar]: http://central.maven.org/maven2/org/febit/wit/wit-core/2.3.0-beta/wit-core-2.3.0-beta.jar
[sources]: http://central.maven.org/maven2/org/febit/wit/wit-core/2.3.0-beta/wit-core-2.3.0-beta-sources.jar

[github_wit]: https://github.com/febit/wit
[osc_wit]: http://git.oschina.net/zqq90/webit-script

[new_issue]: https://github.com/febit/wit/issues/new
[license]: license.html

[asm_license]: http://asm.ow2.org/license.html


[this_site]: https://github.com/zqq90/zqq90.github.io/archive/master.zip
