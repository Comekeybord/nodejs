require('./3自定义模块');
require('./3自定义模块');
require('./3自定义模块');

//模块优先从缓存中加载 所以结果为只打印一次ok

//内置模块的加载优先级最高，如果有第三方模块与内置模块同名，那么加载的一定是内置模块

//自定义模块的加载必须指定./或者../