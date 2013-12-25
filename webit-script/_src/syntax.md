
### 结构

+ 脚本必须都放在`<% %>` 内. 
+ 插值操作`${}` 
+ 转义字符 `\\` => `\` , `\<%` => `<%`, `\${` => `${`
+ 只有紧挨 `<%` `${` 的 `\` 才需要转义


### 注释

+ 单行注释 `//` 
+ 块注释 `/* */` 


### 关键字

~~~~~javascript
var  super  this
if  else
switch  case  default
for  do  while  break  continue 
function  return
import  include  echo
native  new  @import
~~~~~

### 保留的关键字

~~~~~javascript
static  instanceof  class  const  final
throw  try  catch  finally
~~~~~

### 操作符
> 与Java 保持一致，顺序按优先级从高到低

~~~~~java
[] . () @
=>
!  ~  ++  --  – (取负)
*  /  %
+  -
<<  >>  >>>
<  <=  >  >=
^
|
&&
||
?:
..
=  +=  -=  *=  /=  %=  ^=  <<=  >>=  >>>=
~~~~~

### 语句

+ 结尾分号不能省略

### 作用域(代码段) `{ }`

+ 作用域引用上层变量
+ 本层作用域变量不会影响上层
+ 同一作用域不能重复声明变量
+ **模板传入的变量仅在该作用域查找同名变量并赋值**
  *1. 调用模板传入的变量; 2.import 返回的变量*

### 变量

#### 变量声明 var

~~~~~javascript
var a;
var a, b, c=0, d="d";
~~~~~

#### 变量名规则

+ 先声明 后使用，所有变量 必须全部声明
+ 可开启 弱声明模式，所有变量不需要 事先声明，解析时自动声明
+ 对大小写敏感
+ 不能使用关键字
+ 仅能包含 0-9a-zA-Z_$
+ 特殊变量名: 
++ `super.` 用于 取得指定上层且仅该层作用域的变量, 可嵌套`super.super.a`
++ `this.` 用于 取得本层且仅本层作用域的变量, 可嵌套`this.super.a`
++ `for.iter` 用于 最近一层for循环的 迭代状态对象, 可使用`super``this` 限定作用域`super.for.iter`

### 数据结构

#### 类型

~~~~~javascript
var x;                  //null
var x2 = 6;             //数字
var x3 = "Bill";        //字符串
var x4 = 'a';           //字符
var x5 = [1, "string"]; //数组
var x6 = {};            //Map
~~~~~

#### 字符串

+ 转义，`\\` `\"` `\'` `\n` `\r` `\t` `\f` `\b`
+ 允许换行，行后转义字符 可屏蔽该换行符

~~~~~javascript
var string = "第一行  \
这还是在第一行
这是第二行\n第三行\n
这是第五行，第四行是空行";
~~~~~

### 数字

~~~~~javascript
var x1=34;      //Integer
var x2=34L;     //Long
var x3=34.00;   //Double
var x4=34.00D;  //Double
var x5=34.00F;  //Float
var x6 = 0b10101;  //二进制
var x7 = 0123;  //八进制
var x8 = 0x1A;  //十六进制
~~~~~

### 布尔

~~~~~javascript
var x = true;
var y = false;
~~~~~

### 数组

#### 带初始值的数组

~~~~~javascript
var array = [1, "a string", book];
var item;
item = array[0];
item = array[1];
item = array[2];
array[0] = "a new value";
~~~~~

#### Native 方法声明定长数组,

~~~~~javascript
// 引入生成数组的 native 方法
var new_int_array = native int [];
var new_Object_array = native Object [];
var new_DateTime_array = native java.util.DateTime [];

//得到定长数组
var int_array = new_int_array(5); //长度为5 的int数组
var objects = new_Object_array(5);//长度为5 的Object数组

var a;
a = objects[4];
objects[4]=4; // 自动 装箱为Integer 然后放入数组
var len = objects.length; //数组长度
len = objects.size; //数组长度

//不定长数组 可使用Java提供的List实现
var new_list = native new java.util.ArrayList();
var list_add = native java.util.List.add(Object);

var list = new_list();
list@list_add(0); 
list@list_add(1);

var a = list[0];
list[0] = "zero";
list[1] = "a string";
~~~~~

### Map

~~~~~javascript
var map = {};
var map2 = {1:1,"2","2"};
map["key"] = "a string value";

var value = map[1];
value = map["2"];
value = map["key"];
~~~~~

### Java对象

#### 声明

~~~~~javascript
var new_list = native new java.util.ArrayList();
var list = new_list();
var list2 = new_list();
~~~~~

#### 访问属性

~~~~~javascript
var book;
var name = book.name; // book.getName();
book.name = "new name"; //book.setName("new name"); 
~~~~~

#### 访问方法

> 访问方法必须事先native导入成本地函数

~~~~~javascript
var list_add = native java.util.List.add(Object);
list@list_add(0);
list_add(list, 1);
~~~~~

*访问静态方法*

~~~~~javascript
var now = native java.lang.System.currentTimeMillis();
echo now();
~~~~~
 
### 函数

#### 声明

+ 格式同java
+ 可变参数, 
+ 可通过 arguments 获得所有传入的参数, java类型为 Object[]
+ 可访问父层作用域
+ 函数内部可嵌套函数

~~~~~javascript
var outSideVar;
var a;
var myFunc = function(arg1, arg2){
    var arg3 = arguments[3]; // 如果没有将抛出异常,最好通过 arguments.size确认
    outSideVar = "a new "; //可访问
    var a = 0; //内部变量
    super.a ++ ; //访问上层变量
    var func = function(){ ... }; //内部嵌套函数
}; //不要忘了分号！！！
~~~~~


#### 导入Java内的 方法

+ 仅可导入公共类的公共方法, 包括静态方法 和 成员方法
+ 可使用`@import` 导入类名 或者包名 用法同Java里的 `import`, 以简化类名输入
+ ~~@import  java.util.*;~~ v1.2.0+ 不再支持导入包

~~~~~javascript
@import  java.lang.System; //实际上默认已经导入  java.lang.* 只是演示使用方法
@import  java.util.List;
@import  java.util.ArrayList;
var now = native java.lang.System.currentTimeMillis();
var list_add = native List.add(Object);
var new_list = native new ArrayList(); // 导入 构造函数
var new_list2 = native new ArrayList(int); // 导入 构造函数
~~~~~


### 调用

+ 可变参数个数, 多余函数同样会被传入, 多余函数是否被使用 取决于函数本身
+ 缺少的参数将用null补齐,
+ 可使用@ 将第一个参数 外置

~~~~~javascript
func(arg1, arg2);
//等同于
arg1@func(arg2);

list_add(list, item);
//等同于
list@list_add(item);
~~~~~

### 重定向输出符 `=>`

+ 作用: 将指定 范围 产生的输出流 重定向到 指定变量
+ 意义: 可以延后输出
+ **使用对象: 1. 代码段；2. 函数调用**
+ 数据格式: 使用OutputStream 时, 为 byte[] ; 使用 Writer 时, 为String.

~~~~~javascript
var out;
var book;
//代码段 输出重定向
{
echo "a String";
>${book.name} <
} => out; //不要忘了分号！！！
// "a String" 以及 book.name 都将输出到 out

var out;
// 函数 输出重定向
func() => out;
//由于 `=>` 具有较高的优先级，也可以这么些
var a = arg1@func() => out +1; 
//此时 a为 func()+1 , func() 本次执行的输出内容赋值给out
~~~~~


### import & include

+ 区别: import  将把调用模板的 上层变量 推入调用层的当前已存在变量
+ 共同点: 都会在调用位置产生 输出
+ 将使用默认的Loader 加载模板，可使用相对路径或绝对路径
+ 可跟随 一个 map 格式的传参
+ 模板名可以动态生成
+ import 可支持指定需要导出的变量, 否则只导出本层作用域内的同名变量

~~~~~javascript
//相对路径
include "./book-head.wtl";
//等同于 
include "book-head.wtl";
//绝对路径
include "/copyright.wtl";
//动态模板名
var style = "";
import "book-list-"+ style  +".wtl";
//可传入参数 函数同样也可以作为变量传输
var func = function(){}; 
var book;
import "book-head.wtl"  {"book": book, "func":func};
//传入Map 变量作为参数
var map =  {"book": book, "func":func}；
map["one"] = 1; 
import "book-head.wtl"  {map};
//导出指定变量
var a;
var b;
//导出 : a 到a ，c 到 b
import "book-head.wtl"  {"param1":1}  a,b=c;
~~~~~

### 关于条件判断的三种情况

+ 如果是boolean(Boolean)值 会原封返回
+ **如果 ==null 返回 false**
+ **如果 是空集合 或者 空数组 (.size==0)  返回 false **
+ 否则 返回 true


### 三元条件运算符 & 其简写

+ **操作符按 自右向左 结合, 详解看下面例子**
+ **简写时 `?:` 之间没有空白字符**

~~~~~javascript
var a1 = isTrue ? "Yes" : "No";
//简写
var a2 = value ?: defaultValue; //取默认值

//自右向左 结合
var x =  expr1 ?  expr3 :  expr2 ? expr4 : expr5;
//这个等同于
var x =  expr1 ?  expr3 :  (expr2 ? expr4 : expr5);
// 如果 是 自左向右 就会变成这样
var x =  (expr1 ?  expr3 :  expr2) ? expr4 : expr5;
//简写 从左向右 
var a4 = list1 ?: list2 ?: list3;
~~~~~

### 判断语句

#### 判断控制语句 if - else if - else

+ 不能省略 `{  }`

~~~~~javascript
if( ... ){
    ...;
}else if(...){
    ...;
}else{
    ...;
}
~~~~~


### 循环控制语句

+ 支持 数组,  java.util.Collection, java.util.Iterator, java.util.Enumeration, CharSequence, java.util.Map, 整型递增/递减
+ 当集合为null 或者为空时将不会执行循环
+ 支持 else , 可选, 当不符合执行循环体的条件时执行else体.

#### for-in

~~~~~javascript
//集合 数组 等
for(item : list){
    echo item;
    //echo for.iter.index; // .isFirst .hasNext .isOdd .isEven
} else{
    echo "list is empty";
}
//递增 
for(i: 3..6){
    echo i;
}
//递减
for(i: 6..3){
    echo i;
    //支持 for.iter.*
}
~~~~~

#### 遍历Map

~~~~~javascript
for(key, value : map){
    echo key + " = " value;
    echo "\n";
    //同样支持 for.iter.*
}
~~~~~

#### while do-while

+ 不支持 for.iter 特殊变量

~~~~~javascript
//
var iter;
... ;
while(iter.hasNext){
    var item = iter.next;
    ....;
}
//
do{
    ....;
}while( ... );
~~~~~


### Switch

+ 支持普通 Object, 包括 String 
+ 使用 `Object.equls()` 判断是否相等
+ 需要 break, 否则无条件继续执行下一个标签的句柄
+ 每个case 命名空间独立

~~~~~javascript
switch(a){
    case 1:
        ....;
        break;
    case "c": //String
        ....;
        break;
    case 'c': //Char
        ....;
        break;
    default:
        ....;
}
~~~~~

### break & continue

> 支持 label

~~~~~javascript
//break continue
outter: for(i: 6..3){
    echo i;
    //支持 for.iter.*
    inner: for(item : list){
        if( ..... ){
           break outter;
        }
        .....;
        break; // break inner;
    }
    //
    switch(a){
        ...;
        case 'x':
           break outter;
        ...;
    }
}
~~~~~

### 正在完善。。。
