# Linux
## Linux 简介
Linux 内核最初只是由芬兰人林纳斯·托瓦兹（Linus Torvalds）在赫尔辛基大学上学时出于个人爱好而编写的。

Linux 是一套免费使用和自由传播的类 Unix 操作系统，是一个基于 POSIX 和 UNIX 的多用户、多任务、支持多线程和多 CPU 的操作系统。

Linux 能运行主要的 UNIX 工具软件、应用程序和网络协议。它支持 32 位和 64 位硬件。Linux 继承了 Unix 以网络为核心的设计思想，是一个性能稳定的多用户网络操作系统。

篇幅限制这里不做过多讲述 更多请移步 菜鸟教程 Linux 简介

## 如何选取适合自己的操作系统
程序开发选择ubuntu没毛病 一般办公人员如果也想体验Linux 那我不太推荐ubuntu Deepin系统更适合非程序员 它包含了所有您需要的应用程序，网页浏览器、幻灯片演示、文档编辑、电子表格、娱乐、声音和图片处理软件，即时通讯软件等等 无需费力的进行各类软件安装，它自带的图形界面足以满足非程序员的日常使用，使得非程序员无非花费太大成本即可开箱即用，据说四月中下旬即将发布v20版本

## ubuntu18.04安装

1）ubuntu18.04 点击下载
2）安装工具：UltraISO（软碟通）（点击下载）
3）准备U盘（最好是支持USB3.0，8G或以上，备份或者清空里面的文件）
4）制作启动盘

插入U盘使用UltraISO将镜像写入U盘

选择菜单选取镜像文件 点击文件->打开

![](/images/linux/01.png)

选取文件后界面如下
![](/images/linux/02.png)

菜单点击启动写入磁盘映像
![](/images/linux/03.png)
![](/images/linux/04.jpg)

如果此时点入外接多个U盘 请核对磁盘符 我这里是 H盘8G

一般写入方式默认为USB-HDD+ 无需更改

点击写入

等看到界面的消息栏中出现刻录成功的日志就说明镜像写入完成，至此启动盘制作完成！

5）系统安装
关闭目标主机，然后插入U盘，开机迅速按F12 进入BIOS设置界面（不同的电脑进入 bios 的按键不同，一般为 F12 / ESC 或者 Delete 键）选择U盘启动 一般为EFI USB Devices 选项

### 各类电脑进入BIOS的方法

|   电脑品牌   |    键  |
| ---- | ---- |
|   ibm/thinkPad   |    F1  |
|   惠普/hp   |   F2 / F10   |
|   索尼sony、戴尔Dell、弘基Acer   |   F2   |
|   华硕ASUS   |   ESC / F2 / F12   |

### 按照主板品牌分类

|   主板品牌   |    键  |
| ---- | ---- |
| 华硕主板、盈通主板	| F8  |
| 技嘉主板、inter主板、致铭主板	| F12  |
| 微星主板、华擎主板、昂达主板	| F11  |
| 映泰主板、冠名主板	| F9  |
| 梅捷主板、富士康主板	| ESC/F12  |
| 七彩虹主板、精英主板	| ESC/F11  |
| 斯巴达卡主板、双敏主板、铭瑄主板、捷波主板、磐正主板	| ESC  |
| 顶星主板	| F11/F12  |

### 正式安装

> 至此我们就进入了安装程序 选择Install Ubuntu 回车直接安装
> 
> 选择语言 中文简体在倒数第三个 然后选择键盘布局后进入更新选项
> 
> 一般我们用仅仅用 Ubuntu 来编程或者部署项目，娱乐一般用 Windows, 所以选择 最小安装
> 最下面的两个选项会拖慢安装的速度，这些工作可以放到安装完成后集中处理，所以也不勾选。

![](/images/linux/05.jpg)


选择安装类型

> 第一和第二个选项安装的时候更省事，安装程序会自动分区，最后一个选项需要自己手动分区，安装的时候会麻烦一点，但是因为是手动分区，你对系统的分区情况也更加熟悉，但是新手不建议这个选项

![](/images/linux/06.jpg)

然后选择时区为上海 创建用户名后安装程序会安装一些必要的系统软件，安装过程会持续20到30分钟，完成后会弹出完成对话框点击重启即可

至此Ubuntu18.04 安装完成！

### 终端（命令行）介绍

```bash
user@ubuntu:~$ 
```
::: tip 命令行提示符
user@ubuntu:~$ 为命令提示符，
@ 之前的部分为当前用户ID，
@ 与 : 之间的部分，为您的主机名称，
: 与 $ 之间的部分，为当前的路径。
:::

### ubuntu 命令 Ubuntu基本命令

apt 包管理器 apt介绍与使用
apt 和 apt-get 推荐使用apt
切换软件源
有时要用apt-get安装软件或依赖库，因为网络连接的问题会碰到找不到软件包失败的情况，这时可以将软件源更换为国内源，大部分同类问题就可以解决掉了。

这里主要介绍命令行下切换软件源，图形界面不作介绍

国内有很多Ubuntu的镜像源，包括阿里的、网易的，华为云 ，还有很多教育网的源，比如：清华源、中科大源。
我们这里以清华源为例讲解如何修改Ubuntu 18.04里面默认的源。

1、输入命令修改sources.list文件，当然需要超级权限，所以要加sudo；

操作前请做好相应备份

```bash
cp /etc/apt/sources.list /etc/apt/sources.list.bak
sudo gedit /etc/apt/sources.list
```

编辑/etc/apt/sources.list文件

2、在文件最前面添加以下条目：

```text
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic main restricted universe multiverse
deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
```

修改完成后，保存文件，警告什么的都不理，然后运行下面的命令。

```bash
sudo apt-get update # 刷新存储库索引
sudo apt-get upgrade # 升级所有可升级的软件包
```

到此完成国内源更新

## Linux常用软件工具
vim
Vim是从 vi（vi 是linux 内置文本编辑工具） 发展出来的一个文本编辑器。代码补完、编译及错误跳转等方便编程的功能特别丰富，在程序员中被广泛使用。

> 使用命令 sudo apt install vim安装

[vim 菜鸟教程链接](https://www.runoob.com/linux/linux-vim.html)

输入法
内置的输入使用起来不尽人意 所以推荐使用搜狗输入法

[搜狗输入法下载](https://pinyin.sogou.com/linux/?r=pinyin)
[搜狗输入法安装指南](https://pinyin.sogou.com/linux/help.php)

官网下载的安装包是.deb的文件 可以双击文件进行安装

命令行操作如下

```bash
cd Download
sudo dpkg -i sogoupinyin_2.1.0.0086_i386.deb
```

openssh的使用
用apt命令安装openssh

```bash
sudo apt install openssh-server
sudo apt install openssh-client
```

启动服务

```bash
sudo service ssh start
```

查看服务状态

```bash
service ssh status
* sshd is running
```

防火墙设置

开启防火墙

```bash
sudo apt install ufw
sudo ufw enable
```

设置UFW 允许传入SSH链接

```bash
sudo ufw allow ssh
```

远程ssh登陆

使用ssh命令就可以在远程登陆主机了

```bash
ssh username@10.132.xxx
```

安装 Linux轻量级桌面xfce,低内存占用，提高系统响应速度
```bash
sudo apt install xfce4
```

## git安装以及配置公钥

```bash
sudo apt install git
```

使用git --version 检查一下

**还不会使用git的可以去看阮一峰git教程 链接常用 Git 命令清单 **

公钥配置 链接 git 本地秘钥配置

vscode
- 链接 [vscode 软件下载](https://code.visualstudio.com/) 使用以下命令安装

```bash
sudo dpkg -i vscode.deb
```

- 插件搜索和安装

![](/images/linux/07.png)

## vscode 自定义代码块
> 
> ① 依次点击 文件 > 首选项 > 用户代码片段
> ② 选择代码片段或创建代码片段（可以对现有的进行修改，也可以新建代码片段）

![](/images/linux/08.png)

> 代码片段分两种：
> 
> ① 全局代码片段（每种语言环境下都能触发代码块）。
> ② 对应语言的局部代码片段（只能在对应语言环境下才能触发），新建全局代码片段会在 snippets 目录下生成 .code-snippets 为后缀的配置文件，而新建对应语言的代码片段会生成 对应语言 + .json 的配置文件。

javascript.json javascript 自定义代码块片段

```json

{
	"Print to console": {
		"prefix": "js:start",
		"body": [
			";(function(KK){",
			"    var _this = null;",
			"    KK.$1 = KK.$1 || {};",
			"    _this = KK.$1 = {",
			"        Main: {",
			"            data:function(){",
			"                return {",
			"                }",
			"            },",
			"            methods:{",
			"  ",
			"            },",
			"            created:function(){",
			"                console.log(123);",
			"            }",
			"        },",
			"        init: function() {",
			"            // iview.lang(\"zh-TW\");",
			"            var Component = Vue.extend(_this.Main);",
			"            new Component().$mount('#app');",
			"        },",
			"    }",
			"",
			"})(APP)",
			";(function(){",
			"    APP.$1.init();",
			"})()"
		],
		"description": "快速构建vuejs架构"
	}
}
```

使用代码块

![](/images/linux/09.png)


> vscode 同步设置、插件同步
> 背景：换电脑需要重装vscode。由于自己之前用的有很多偏好设置，也安装了很多插件，一个个的设置下载太慢了，即使复制setting也麻烦。

[vscode 同步设置、插件同步](https://www.jianshu.com/p/a608a80f728c)

## deepin 安装
- 同ubuntu安装 下载镜像 制作U盘启动盘输入系统即可
- 链接[官方安装教程 内有视频教程](https://www.deepin.org/installation/)

## Linux 推荐书籍
- [菜鸟推荐]《鸟哥的 Linux 私房菜-基础篇·第三版》by 鸟哥 豆瓣评分: 9.1
- [图灵程序设计丛书]《Linux命令行与shell编程大全第三版》
- [进阶推荐]《The Linux Command Line》 by William E. Shotts Jr.
- [高级推荐]《深入理解 Linux 内核》 by Daniel P.Bovet / Marco Cesati
- [高级推荐]《Linux/UNIX系统编程手册》 by Michael Kerrisk
