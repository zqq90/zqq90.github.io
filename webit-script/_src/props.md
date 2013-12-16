## 哪些组件可以配置？
Webit script 采用IoC的机制管理组件，也就是说只要是提供了setter的组件，随处都可以配置。当前现在支持属性值自动转换为以下类型：String, class, int/Integer, boolean/Boolean，以及他们的数组形式。
例如：

~~~~~
# 格式为 key = value
# 设置输出编码 Engine.setEncoding(String)
webit.script.Engine.encoding=UTF-8
# 设置过滤器类 Engine.setFilterClass(Class)
webit.script.Engine.filterClass=webit.script.filters.impl.MutiFilter
# 设置默认面声明变量 Engine.setVars(String[])
webit.script.Engine.vars=request, response
~~~~~

## 获取引擎实例

> `Engine.createEngine(1."配置文件列表"，2.额外的参数Map)`

### 1.配置文件列表
+ 配置文件为列表，用`,`分来，缺省不加载
+ 将通过ClassLoader加载配置文件，所以配置文件需要放在classpath下
+ 如果配置文件不存在或者加载失败不会报错，加载成功的配置文件将会通过Logger.info() 按加载顺序打印
+ 配置文件按先顺序，被附加或者覆盖
+ 缺省的配置文件``,已默认加载请不要重复设置

> 缺省配置文件:[webit-script-default.props][default_config]

### 2.额外的参数Map
+ 额外的参数如果是String,会附加/覆盖到props配置，使用的`${}`会生效
+ 额外参数默认是采取覆盖策略，如果使用附加请在key后面附加`+`,例如`webit.script.Engine.resolvers+`
+ 如果是其他类型会被原样保留并注入。

## 一段配置文件节选
~~~~~
# 以#开头的是行注释

# 设置了一个数值
DEFAULT_ENCODING=UTF-8

# 设置一个参数: 类型.字段名=值
# 和 properties 一样
webit.script.Engine.fileNameExtension=.wtl

# 这里先设置区段 []， 这样就可以简短书写了
[webit.script.Engine]
encoding=${DEFAULT_ENCODING}
# Loader
resourceLoaderClass=webit.script.loaders.impl.ClasspathLoader
# GlobalManager
globalManagerClass=webit.script.global.DefaultGlobalManager

filterClass=webit.script.filters.impl.MutiFilter

# 为了更直观可以使用 \ 转义看不见的换行符
# 当然不换行也是可以的
resolvers=\
    webit.script.resolvers.impl.MapResolver,\
    webit.script.resolvers.impl.ListResolver

# 另一个类型的配置
[webit.script.loaders.impl.ClasspathLoader]
# 这里 "DEFAULT_ENCODING" 又被使用了一次
encoding=${DEFAULT_ENCODING}

# 先设置区段[]为空
[]
# 又可以使用完整的“类型.字段名”了
webit.script.resolvers.ResolverManager.enableAsm=true
~~~~~

## 认识配置文件
+ 采用内置的[Jodd-props][jodd_props_doc], 文法类似于ini
+ 支持宏定义，例如例子中的`DEFAULT_ENCODING`
+ 对于数组属性使用`+=`可以附加设置，相当于用`,`隔开
+ 直接使用`=`将会覆盖之前的设置

## WebEngineManager的配置
+ 配置文件缺省值为`/WEB-INF/webit-script-webpage.props`
+ 使用ServletContext，以web根目录为加载配置的根目录
+ 同时会附加 classpath 下的`webit-script-default.props`和`webit-script-default.props-web`

## 常用配置一览
<table class="table table-striped table-bordered "><tbody>
<tr>
	<td>DEFAULT_ENCODING</td>
	<td>默认编码</td>
</tr>
<tr>
	<td>webit.script.Engine.encoding</td>
	<td>输出编码</td>
</tr>
<tr>
	<td>webit.script.Engine.resourceLoaderClass</td>
	<td>资源加载器</td>
</tr>
<tr>
	<td>webit.script.Engine.enableAsmNative</td>
	<td>是否允许ASM优化Native</td>
</tr>
<tr>
	<td>webit.script.Engine.looseVar</td>
	<td>是否启用宽松的变量声明</td>
</tr>
<tr>
	<td>webit.script.Engine.trimCodeBlockBlankLine</td>
	<td>是否删除指令所占行</td>
</tr>
<tr>
	<td>webit.script.Engine.resolvers</td>
	<td>bean属性解释器【列表】</td>
</tr>
<tr>
	<td>webit.script.Engine.textStatmentFactoryClass</td>
	<td>TextStatment生成器</td>
</tr>
<tr>
	<td>webit.script.Engine.appendLostFileNameExtension</td>
	<td>是否自动添加丢失的后缀</td>
</tr>
<tr>
	<td>webit.script.Engine.fileNameExtension</td>
	<td>后缀</td>
</tr>
<tr>
	<td>webit.script.Engine.vars</td>
	<td>免声明变量名【列表】</td>
</tr>
<tr>
	<td>webit.script.Engine.initTemplates</td>
	<td>初始化模板【列表】</td>
</tr>
<tr>
	<td>webit.script.Engine.shareRootData</td>
	<td>对子模版共享传入的参数</td>
</tr>
<tr>
	<td>webit.script.Engine.loggerClass</td>
	<td>日志输出器</td>
</tr>
<tr>
	<td>webit.script.resolvers.ResolverManager.enableAsm</td>
	<td>bean解释器是否启用ASM</td>
</tr>
<tr>
	<td>webit.script.global.DefaultGlobalManager.registers</td>
	<td>全局变量/常量 注册器【列表】</td>
</tr>
<tr>
	<td>webit.script.security.impl.DefaultNativeSecurityManager.list</td>
	<td>Native黑白名单【列表】</td>
</tr>
</tbody></table>

## 常用配置说明

### 资源加载器加载器的配置
+ Classpath 资源加载 `webit.script.loaders.impl.ClasspathLoader`
+ Web 根目录 资源加载 `webit.script.web.loaders.ServletLoader`
+ 普通文件系统 资源加载 `webit.script.loaders.impl.FileLoader`
+ 字符串加载模板  `webit.script.loaders.impl.StringLoader`

~~~~~~
## Classpath 资源加载
[webit.script.loaders.impl.ClasspathLoader]
# 模板编码
encoding=${DEFAULT_ENCODING}
# 模板根路径
root=your/template/path

## Web 根目录 资源加载
[webit.script.web.loaders.ServletLoader]
encoding=${DEFAULT_ENCODING}
root=/your/template/path

## 普通文件系统 资源加载
[webit.script.loaders.impl.FileLoader]
encoding=${DEFAULT_ENCODING}
root=/your/template/path
~~~~~~

## Native安全管理--黑白名单
+ 列表采用 `,``\r``\n` 分割，并自动删除前后空白字符
+ 标识可具体到包、类、方法名
+ 白名单规则：标识前加`+` 或者无修饰 为白名单
+ 黑名单规则：标识前加`-` 为黑名单
+ 同一标识，黑名单优先于白名单，如无特殊设置，将继承上一级

> 默认配置已经添加了基本类型为白名单
> 示例：

~~~~~
# 示例白名单：
#    com.dog
#    com.cat
#    com.mouse.jerry
# 黑名单：
#    com.mouse
#    com.cat.tom

[webit.script.security.impl.DefaultNativeSecurityManager]
list='''
  com.dog
  com.cat
  com.mouse.jerry
- com.mouse
- com.cat.tom
'''
~~~~~

## TextStatment生成器

> //TODO:

[default_config]: https://github.com/zqq90/webit-script/blob/master/webit-script/src/main/resources/webit-script-default.props
[jodd_props_doc]: http://jodd.org/doc/props.html
