## MVC集成

> 默认配置： `default-servlet.wim`

+ 使用 ServletLoader 加载 ServletContext 下的资源
+ byte 流输出
+ 免声明变量：request, response
+ HttpSession、HttpServlet 相关的 Resolvers
+ 注册了全局变量 `BASE_PATH` 和 `SERVLET_CONTEXT`

> 提供了对Jodd-Madvoc、SpringMVC、Struts2、JFinal的支持 [示例程序][mvc-demo]


[mvc-demo]: https://github.com/zqq90/webitscript-mvc-demo
