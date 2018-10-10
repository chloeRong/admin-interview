## vue 中computed和watch的区别

1.computed是计算一个新的属性，并将该属性挂载到vm(Vue实例)上，而watch是监听已经存在且已经挂载到vm上的数据，所以用watch同样可以监听computed计算属性的变化（其他还有data，props）。

2.computed本质是一个惰性求值的观察者，具有缓存性，只有当依赖发生变化后，第一次访问computed属性，才会计算新的值，而watch则是当数据发生变化便会调用执行函数

3.虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。这就是为什么 Vue 通过 `watch` 选项提供了一个更通用的方法来响应数据的变化。当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。

### git 操作教程

1. ##### git安装完成后，需要设置用户名和邮箱，首先打开git bash控制台

注意`git config`命令的`--global`参数，用了这个参数，表示你这台机器上所有的Git仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和Email地址。

```
git config --global user.name 'your name'
git config --global user.email 'your email'
```

1.  创建版本库

```
比如在d盘下有个文件夹 rrdai 需要版本控制
cd d: 当前目录定位到D盘下
mkdir rrdai 新建建rrdai文件夹
cd rrdai 定位到rrdai文件夹下
git init 初始化一个空的版本库
git add . 将本地文件提交到暂存区
git commit -m 'add/modify a file' 将暂存区的文件提交到版本库

git rm '文件名' 删除一个文件
git commit -m 'delete a file'

git checkout -- file 让file 回到最近一次的git commit 或git add 时的状态

git diff HEAD -- file 查看file 的工作区和版本库里最新版本的区别
  



```

​    