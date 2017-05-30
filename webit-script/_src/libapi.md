## 标准库/第三方库 使用方法

> 只需要在配置文件里添加该库的配置文件，如：

~~~~~
## 用换行或者逗号（,）作为分隔符
@modules='''
  lib-assert.wim
  mylib-base.props
  lib-cache.wim
'''
~~~~~

## 使用JSP TagLib Function

> 引入wit-tools-[version].jar 包

> 配置文件添加TLD的全局变量注册器，并配置该注册器：

~~~~~
[global]
registers+= webit.script.tools.tld.TLDGlobalRegister-example

[webit.script.tools.tld.TLDGlobalRegister-example]
# TLD 文件名，相对于ClassPath下的META-INF的地址
tld=example-fn.tld
# 导入时，给每个函数添加的前缀，默认为空
prefix=pre_
~~~~~

## 缺省全局常量/函数

### $GLOBAL
> 缺省提供的全局常量，是个线程安全的Map，可以动态存放全局共享变量

### LOCAL(key), LOCAL(key, value)
> 缺省提供的全局函数，可以动态存放渲染会话级别的全局共享变量，每个渲染会话间独立，可在模板、调用的子模版、全局函数间传递变量，生命周期是每次模板渲染（template.merge(...)）

### BASE_PATH
> 仅WEB模块提供的全局常量，其值为servletContext.getContextPath()。

### SERVLET_CONTEXT
> 仅WEB模块提供的全局常量，Web容器提供的的ServletContext的一个实例。

## 标准库：lib-assert.wim

> 位置: webit-script-[version].jar。(1.4.0版本以上) 这是一个用于模版内测试的库，API类似于junit。

> 使用方法：

~~~~~
@modules +='''
  lib-assert.wim
'''
~~~~~

+ assertTrue(Object)  推测值为 true
+ assertFalse(Object)  推测值为 false
+ assertNull(Object)  推测值为 null
+ assertNotNull(Object)  推测值不是 null
+ assertSame(Object expected, Object actual)  推测两个值是同一个实例（相当于 ==）
+ assertNotSame(Object expected, Object actual)  推测两个值不是同一个实例（相当于 !=）
+ assertEquals(Object expected, Object actual)  推测两个值相等（使用.equals()方法判断）
+ assertArrayEquals(Object expected, Object actual)  推测两个数组内容相同


## 标准库：lib-type.wim

> 位置: wit-tools-[version].jar。(1.0.0版本以上)，用于判断值的类型。

> 使用方法：

~~~~~
@modules +='''
  lib-type.wim
'''
~~~~~

+ is_array(Object)  是否是数组
+ is_bool(Object)  是否是Boolean
+ is_function(Object)  是否是可调用的函数
+ is_callable(Object)  等同于`is_function`， 是否是可调用的函数
+ is_null(Object)  是否是null
+ is_number(Object)  是否是数字


## 类型库：lib-tld.wim

> 位置: wit-tools-[version].jar。(1.0.0版本以上)，提供对JSP TagLib Function。

> 使用方法：

~~~~~
[global]
registers+=tld-demo

[tld-demo: org.febit.wit.tools.tld.TLDGlobalRegister]
checkAccess=false
tld=
prefix=
~~~~~


## 标准库：lib-cache.wim

> 位置: wit-tools-[version].jar。(1.0.0版本以上)，提供对片段缓存的支持。

+ cache(key, func, ...func_args)  其中key，func_args为可选参数, 缓存函数func执行后的返回结果以及输出内容，同时输出并缓存。当存在缓存时，将直接返回缓存中的返回值，输出缓存中的输出，不会再次执行指定函数。
+ cache_remove(key)  移除指定key的缓存。
+ cache_clear()  移除所有缓存，缺省不提供，需要额外配置

> 使用方法：

~~~~~
@modules +='''
  lib-cache.wim
'''
~~~~~

#### 配置

~~~~~
## 注册全局函数
[org.febit.wit.tools.cache.CacheGlobalRegister]
# 函数注册的名称，默认为cache
name=cache
# 是否注册 cache_clear() 函数，默认为false
registCacheClear=true
# 选择Cache的供应组件
cacheProvider=simpleCacheProvider

## 配置自带的Cache的供应组件
[simpleCacheProvider]
# 缓存有效时间，单位: 毫秒
timeToLive =6000000
~~~~~

> 另外还可以选择第三方的Cache的供应组件

~~~~~
## 选择Cache的供应组件（略）

## 配置 Ehcache 供应组件
[ehcacheProvider]
# 使用的Ehcache的配置名称
cacheName=myEhcacheName
~~~~~

#### 在模版中使用

~~~~~javascript
<%
// 嵌入函数的
cache(()->{
%>
Hello Cache
<%
return null;
});

var func = ()->{
%>
Hello Cache
<%
return null;
};

//外置函数同样可以
cache(func);
//清除缓存
cache_remove(func);

//自定义key的
cache("cache-func", func);
cache_remove("cache-func");

//带参数
cache(func, 1, 2);
cache(func, 3, 4);
cache_remove(func);

//自定义key，且带参数
cache("cache-func-1", func, 1, 2);
cache("cache-func-3", func, 3, 5);
cache_remove("cache-func-1");
cache_remove("cache-func-3");

//清空缓存
cache_clear();

%>
~~~~~

## 自定义函数库

> 实际上自定义函数库很灵活，只需要像正常配置一样添加一个入口配置即可，后缀名可以任意，但建议使用“.wim”。自定义函数库的使用同标准库。

> PS: 目前标准库还很不完善，如果有任何意见或者建议 欢迎反馈。







