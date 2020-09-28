### 模块的加载优先级

1. 系统缓存：模块被执行后会进行缓存，首先就是先进行缓存加载，判断缓存中是否有值。
2. 系统模块： 部分核心模块已经被编译成了二进制，并直接加载进了内存中。
3. 文件模块：优先架子啊.、.. / 开头的文件路径，如果没有带上扩展名，会一次按照 .js .json .node 进行补充尝试，该部分任务将以同步模式执行，从性能优化角度来看，文件模块最好带上扩展名。
4. 目录作为一个模块：将目录当做一个包处理，首先会查找目录下 package.json 文件,确定文件中的 main 字段值，以此为入口文件路径进行加载。
5. node_modules 目录加载：从当前目录开始向根目录查找。

### 对象引用关系考察

> module.exports 与 exports 的却别？

```js
const exports = modules.exports;
```

**exports 不能直接赋值 对象，会得到 undefined**

### 高并发下雪崩

热点数据存放在内存中缓存，高并发场景下，如果缓存失效,就会有大量请求涌入数据库，对数据库造成压力，我们可以使用 once 方法来解决。