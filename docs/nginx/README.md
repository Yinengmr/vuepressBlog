# nignx 反向代理

## nignx 反向代理
::: tip 这里以PHP showdoc web 服务配置为参考

http://xxx.com/web  代理 http://xxx.com:8091/web/

:::

nginx.conf
```
...

location /web {
    proxy_pass  http://127.0.0.1:8090;
    proxy_redirect ~^http://127.0.0.1:8090(.*)   http://127.0.0.1$1;
    proxy_set_header X-Real-IP  $remote_addr;
    proxy_set_header Host $host;
    proxy_http_version 1.1;
    
    proxy_set_header Connection keep-alive;
    proxy_set_header Keep-Alive 600;
    keepalive_timeout 600;
}
location ^~/server {
    proxy_pass  http://127.0.0.1:8090;
    proxy_redirect ~^http://127.0.0.1:8090(.*)   http://127.0.0.1$1;
    proxy_set_header X-Real-IP  $remote_addr;
    proxy_set_header Host $host;
    proxy_http_version 1.1;
    
    proxy_set_header Connection keep-alive;
    proxy_set_header Keep-Alive 600;
    keepalive_timeout 600;
}

```

## vue-router 设置createWebHistory 打包后 Nginx 404 错误解决

::: tip history: createWebHistory("/")
路由设置为 history: createWebHistory("/"), 需要Nginx 做转发
:::

```
location / {
    # vue createWebHistory 模式下做转发
    try_files $uri $uri/ /index.html last;
}
```