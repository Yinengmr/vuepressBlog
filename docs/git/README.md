
# GIT ssh-key 本地秘钥生成

一、设置git的username 和 useremail

```bash
git config --global user.name "user.name"
git config --global user.email "user.email"
```

二、生成秘钥
1）查看是否有ssh秘钥

```bash
ls ~/.ssh
id_rsa  id_rsa.pub  known_hosts
```
2）没有id_rsa 和 id_rsa.pub则生成

```bash
ssh-keygen -t rsa -C "your_email@youremail.com"
```

执行完ssh-keygen之后会在，用户目录下的.ssh文件下，生成一个id_rsa文件和id_rsa.pub文件。

id_rsa文件是私钥，要保存好，放在本地，私钥可以生产公钥，反之不行。
id_rsa.pub文件是公钥，可以用于发送到其他服务器，或者git上
3） 设置ssh无密码访问git仓库

```bash
cat id_rsa.pub
```

复制字符串 到网站添加

以github为例，找到个人主页，点击[settings],找到[SSH and GPG keys] ，新建SSH keys,将本地id_rsa.pub的内容复制到key里面，tittle可以随便填写，这样就配置好了。