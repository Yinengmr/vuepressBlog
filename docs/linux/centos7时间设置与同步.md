# centos7 时间设置与同步

## 查看系统时间和系统硬件时间

```bash
[root@localhost ~]# date
Tue Nov 30 01:24:24 EST 2021

[root@localhost ~]# hwclock
Tue 30 Nov 2021 02:27:35 AM EST  -0.691557 seconds
```

## 设置硬件时间

```bash
[root@localhost ~]# hwclock --set --date="11/30/21 14:30"
[root@localhost ~]# hwclock
Tue 30 Nov 2021 02:30:03 PM EST  -0.204728 seconds
```

## 同步系统时间

```bash
[root@localhost ~]# hwclock -s
[root@localhost ~]# date
Tue Nov 30 14:30:30 EST 2021
[root@localhost ~]# hwclock
Tue 30 Nov 2021 02:30:57 PM EST  -0.439847 seconds
```