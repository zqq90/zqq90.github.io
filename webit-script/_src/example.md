## Hello word

~~~~~javascript
Hello Webit Script!
<%
var books;
{
    //遍历集合
    for(book : books){
%>
${for.iter.index}.《${book.name}》 ￥${book.price}
<%
    }
}
{
    //自定义函数
    var func = function(a, b){
        return a + b + arguments[3];
    };
    echo func("a", "b", "c");
    echo '\n';
}
{
    //声明Map
    var map = {
        1: 1,
        "key2": "value2",
        3: 2 + 1
    };
    //map 读写
    map[5] = 2 + 3;
    //map 遍历
    for(key, value : map){
        //输出
        echo key + ":" +value + "\n";
    }
}
%>
~~~~~

更多实例可见:[测试模板][tests]

## API直接调用
~~~~~java
// engine 并不会被缓存, 请根据需要自行实现 Engine的单例模式
Engine engine = Engine.createEngine("/webit-script-config.props", extraSettingsMap);

// template 已缓存, 线程安全, 并自动检测模板源是否被更新
Template template = engine.getTemplate("/your/template/path/filename.ext");

template.merge(parametersMap, outputStream); 
//template.merge(parametersMap, writer);
~~~~~

## MVC视图集成
+ Jodd Madvoc
+ JFinal
+ Spring MVC
+ Struts
+ Servlet & Filter

[示例代码][mvc-demo]



[tests]: https://github.com/zqq90/webit-script/tree/master/webit-script/src/test/resources/webit/script/test/tmpls

[mvc-demo]: https://github.com/zqq90/webitscript-mvc-demo