## vue 中computed和watch的区别

1.computed是计算一个新的属性，并将该属性挂载到vm(Vue实例)上，而watch是监听已经存在且已经挂载到vm上的数据，所以用watch同样可以监听computed计算属性的变化（其他还有data，props）。

2.computed本质是一个惰性求值的观察者，具有缓存性，只有当依赖发生变化后，第一次访问computed属性，才会计算新的值，而watch则是当数据发生变化便会调用执行函数

3.虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。这就是为什么 Vue 通过 `watch` 选项提供了一个更通用的方法来响应数据的变化。当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。

### git 操作教程

1. ##### git安装完成后，需要设置用户名和邮箱，首先打开git bash控制台

注意`git config`命令的`--global`参数，用了这个参数，表示你这台机器上所有的Git仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和Email地址。

工作区（本地）—add—暂存区—commit—版本库

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
    ```

2.  git常用命令

```
git status 查看本地文件的变化状态
git add . 将本地文件提交到暂存区
git commit -m 'add/modify a file' 将暂存区的文件提交到版本库

git rm '文件名' 删除一个文件
git commit -m 'delete a file'

git checkout -- file 让file 回到最近一次的git commit 或git add 时的状态
git diff HEAD -- file 查看file 的工作区和版本库里最新版本的区别

远程管理
git remote  查看远程仓库
git remote -v 查看远程仓库别名
git remote add interveiw ‘git地址’ 给仓库起一个别名叫interview
git remote remove interview 删除仓库的别名（interview）
git push -u alias master 将本地master仓库推到远程仓库
git clone 'git地址' 克隆远程仓库到本地
git pull 'git地址' master 拉取远程代码到本地

git log 查看改动的日志
git log --pretty=online 格式化查看日志
git reflog 查看所有日志

配置公钥免密码登录
git remote remove inter
git remote add inter 'ssh地址' //注意这是ssh 地址
ssh-keygen -t rsa -C '配置git时的邮箱地址'
(Your public key has been saved in /c/Users/Administrator/.ssh/id_rsa.pub.)
然后将生成的公钥 在远程仓库的控制台进行配置

切换版本
git reset --hard HEAD^^^^^ 有几个^表示切换到前几个版本去
git reset --hard 版本号 切换到哪一个版本

分支管理
 git branch 查看分支
 git branch wechat  // 创建一个wechat分支
 git checkout wechat //切换到wechat分支
 git merge wechat // 切换到master上合并wechat分支
 
 node升级
 sudo npm cache clean -f 清楚缓存
 sudo npm install n -g //安装node版本管理工具
 sudo n stable 安装node最新版版本
 sudo n 8.9.4 安装node指定版本8.9.4

```

###     svn 和git区别

svn 是集中式版本控制系统 git是分布式版本控制系统

主要区别：

- Git 只关心文件数据的整体是否发生变化，而SVN这类版本控制系统则只关心文件内容的具体差异
- 在Git 中的绝大多数操作都只需要访问本地文件和资源，不必联网就可以看到所有的历史版本记录，而SVN 却需要联网
- SVN 断开网络或者断开VPN就无法commit代码，但是Git 可以先commit到本地仓库



### BFC是什么

BFC定义：是一种属性，影响着元素的定位及其他兄弟元素之间的相互作用

BFC形成条件：浮动元素，绝对定位元素，displayinline-block,table-cells,table-captions,overflow除了   							 visible以外的值	

BFC的作用： 包含浮动元素 不被浮动元素所覆盖，阻止外边距折叠

### 字符串截取函数

常用 函数：substr(), substring(), slice()

slice(start, end), 第一参数代表开始位置，第二个 代表参数结束位置的下一个位置

substring() 第一个参数代表开始位置，第二参数 代表结束位置的下一个位置 

substr() 第一个参数代表开始位置，第二参数 代表 截取的长度

区别：

slice()和 substring()的区别

slice()参数如果为负数： 则参数值加上字符串本身的长度，再截取，若第一个参数大于第二参数，则返回空字符串

substring()参数如果为负数，则参数转为0，取较小值作为开始位置。
### 什么是盒子模型

盒子模型分为W3C标准盒子模型和IE盒子模型

概念： 所有的HTML元素可以看做盒子，css中，css盒模型本质上是一个盒子，封装周围的HTML元素，它包括边距，边框，填充，和实际内容。

W3C标准盒子模型：

属性width,height只包含内容content,不包含border和padding

IE盒子模型

属性width,height包含内容content，内边距padding，边框border

> 避免触发IE盒模型的方法是使用<!DOCTYPE html>声明，告诉IE采用W3C盒子模型即可。

### @import和link的区别

#### 区别

**1.从属关系区别**
`@import`是 CSS 提供的语法规则，只有导入样式表的作用；`link`是HTML提供的标签，不仅可以加载 CSS 文件，还可以定义 RSS、rel 连接属性等。

**2.加载顺序区别**
加载页面时，`link`标签引入的 CSS 被同时加载；`@import`引入的 CSS 将在页面加载完毕后被加载。

**3.兼容性区别**
`@import`是 CSS2.1 才有的语法，故只可在 IE5+ 才能识别；`link`标签作为 HTML 元素，不存在兼容性问题。

**4.DOM可控性区别**
可以通过 JS 操作 DOM ，插入`link`标签来改变样式；由于 DOM 方法是基于文档的，无法使用`@import`的方式插入样式。

**5.权重区别(该项有争议，下文将详解)**
`link`引入的样式权重大于`@import`引入的样式。 