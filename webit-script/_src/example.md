## Hello Wit

~~~~~javascript
Hello Febit Wit!
<%
    var books;
    //遍历集合
    for(book : books){
%>
${for.iter.index}.《${book.name}》 ￥${book.price}
<%
    }
%>

<%
    //自定义函数
    var func = function(a, b){
        return a + b + arguments[3];
    };
    echo func("a", "b", "c");
    echo '\n';
%>
<%
    //声明Map
    var map = {
        1: 1,
        "key2": "value2",
        3: 2 + 1
    };
    //map 读写
    map[5] = 2 + 3;
    // 调用成员函数
    map.~put("6",2*3);
    //map 遍历
    for(key, value : map){
        //输出
        echo key + ":" +value + "\n";
    }
%>
~~~~~

更多实例可见:[测试模板][tests]

## 调用示例
~~~~~java
// engine 并不会被缓存, 请根据需要缓存 Engine 实例
Engine engine = Engine.create("/wit-engine.wim", extraSettingsMap);

// template 会缓存在 engine 中, 线程安全
Template template = engine.getTemplate("/path/to/demo.wit");

//输出out可以是 OutputStream 或者 Writer
template.merge(paramsMap, out); 
~~~~~

## MVC视图集成

+ Jodd Madvoc
+ JFinal
+ Spring MVC
+ Struts
+ Servlet & Filter

[示例代码][mvc-demo]


[tests]: https://github.com/febit/wit/tree/master/wit-core/src/test/resources/org/febit/wit/test/tmpls

[mvc-demo]: https://github.com/zqq90/webitscript-mvc-demo