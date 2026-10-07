<h1 align="center">Fastify</h1>

## Recommendations

This document contains a set of recommendations when using Fastify.

- [Use A Reverse Proxy](#use-a-reverse-proxy)
  - [HAProxy](#haproxy)
  - [Nginx](#nginx)
- [Common Causes Of Performance Degradation](#common-causes-of-performance-degradation)
- [Kubernetes](#kubernetes)
- [Capacity Planning For Production](#capacity)
- [Running Multiple Instances](#multiple)

## Use A Reverse Proxy
<a id="reverseproxy"></a>

Node.js is an early adopter of frameworks shipping with an easy-to-use web
server within the standard library. Previously, with languages like PHP or
Python, one would need either a web server with specific support for the
language or the ability to set up some sort of [CGI gateway][cgi] that works
with the language. With Node.js, one can write an application that _directly_
handles HTTP requests. As a result, the temptation is to write applications that
handle requests for multiple domains, listen on multiple ports (i.e. HTTP _and_
HTTPS), and then expose these applications directly to the Internet to handle
requests.

The Fastify team **strongly** considers this to be an anti-pattern and extremely
bad practice:

1. It adds unnecessary complexity to the application by diluting its focus.
2. It prevents [horizontal scalability][scale-horiz].

See [Why should I use a Reverse Proxy if Node.js is Production Ready?][why-use]
for a more thorough discussion of why one should opt to use a reverse proxy.

For a concrete example, consider the situation where:

1. The app needs multiple instances to handle load.
1. The app needs TLS termination.
1. The app needs to redirect HTTP requests to HTTPS.
1. The app needs to serve multiple domains.
1. The app needs to serve static resources, e.g. jpeg files.

There are many reverse proxy solutions available, and your environment may
dictate the solution to use, e.g. AWS or GCP. Given the above, we could use
[HAProxy][haproxy] or [Nginx][nginx] to solve these requirements:

### HAProxy

```conf
# The global section defines base HAProxy (engine) instance configuration.
global
  log /dev/log syslog
  maxconn 4096
  chroot /var/lib/haproxy
  user haproxy
  group haproxy

  # Set some baseline TLS options.
  tune.ssl.default-dh-param 2048
  ssl-default-bind-options no-sslv3 no-tlsv10 no-tlsv11
  ssl-default-bind-ciphers ECDH+AESGCM:DH+AESGCM:ECDH+AES256:DH+AES256:ECDH+AES128:DH+AES:RSA+AESGCM:RSA+AES:!aNULL:!MD5:!DSS
  ssl-default-server-options no-sslv3 no-tlsv10 no-tlsv11
  ssl-default-server-ciphers ECDH+AESGCM:DH+AESGCM:ECDH+AES256:DH+AES256:ECDH+AES128:DH+AES:RSA+AESGCM:RSA+AES:!aNULL:!MD5:!DSS

# Each defaults section defines options that will apply to each subsequent
# subsection until another defaults section is encountered.
defaults
  log   global
  mode  http
  option        httplog
  option        dontlognull
  retries       3
  option redispatch
  # The following option makes haproxy close connections to backend servers
  # instead of keeping them open. This can alleviate unexpected connection
  # reset errors in the Node process.
  option http-server-close
  maxconn       2000
  timeout connect 5000
  timeout client 50000
  timeout server 50000

  # Enable content compression for specific content types.
  compression algo gzip
  compression type text/html text/plain text/css application/javascript

# A "frontend" section defines a public listener, i.e. an "http server"
# as far as clients are concerned.
frontend proxy
  # The IP address here would be the _public_ IP address of the server.
  # Here, we use a private address as an example.
  bind 10.0.0.10:80
  # This redirect rule will redirect all traffic that is not TLS traffic
  # to the same incoming request URL on the HTTPS port.
  redirect scheme https code 308 if !{ ssl_fc }
  # Technically this use_backend directive is useless since we are simply
  # redirecting all traffic to this frontend to the HTTPS frontend. It is
  # merely included here for completeness sake.
  use_backend default-server

# This frontend defines our primary, TLS only, listener. It is here where
# we will define the TLS certificates to expose and how to direct incoming
# requests.
frontend proxy-ssl
  # The `/etc/haproxy/certs` directory in this example contains a set of
  # certificate PEM files that are named for the domains the certificates are
  # issued for. When HAProxy starts, it will read this directory, load all of
  # the certificates it finds here, and use SNI matching to apply the correct
  # certificate to the connection.
  bind 10.0.0.10:443 ssl crt /etc/haproxy/certs

  # Here we define rule pairs to handle static resources. Any incoming request
  # that has a path starting with `/static`, e.g.
  # `https://one.fastify.example/static/foo.jpeg`, will be redirected to the
  # static resources server.
  acl is_static path -i -m beg /static
  use_backend static-backend if is_static

  # Here we define rule pairs to direct requests to appropriate Node.js
  # servers based on the requested domain. The `acl` line is used to match
  # the incoming hostname and define a boolean indicating if it is a match.
  # The `use_backend` line is used to direct the traffic if the boolean is
  # true.
  acl example1 hdr_sub(Host) one.fastify.example
  use_backend example1-backend if example1

  acl example2 hdr_sub(Host) two.fastify.example
  use_backend example2-backend if example2

  # Finally, we have a fallback redirect if none of the requested hosts
  # match the above rules.
  default_backend default-server

# A "backend" is used to tell HAProxy where to request information for the
# proxied request. These sections are where we will define where our Node.js
# apps live and any other servers for things like static assets.
backend default-server
  # In this example we are defaulting unmatched domain requests to a single
  # backend server for all requests. Notice that the backend server does not
  # have to be serving TLS requests. This is called "TLS termination": the TLS
  # connection is "terminated" at the reverse proxy.
  # It is possible to also proxy to backend servers that are themselves serving
  # requests over TLS, but that is outside the scope of this example.
  server server1 10.10.10.2:80

# This backend configuration will serve requests for `https://one.fastify.example`
# by proxying requests to three backend servers in a round-robin manner.
backend example1-backend
  server example1-1 10.10.11.2:80
  server example1-2 10.10.11.2:80
  server example2-2 10.10.11.3:80

# This one serves requests for `https://two.fastify.example`
backend example2-backend
  server example2-1 10.10.12.2:80
  server example2-2 10.10.12.2:80
  server example2-3 10.10.12.3:80

# This backend handles the static resources requests.
backend static-backend
  server static-server1 10.10.9.2:80
```

[cgi]: https://en.wikipedia.org/wiki/Common_Gateway_Interface
[scale-horiz]: https://en.wikipedia.org/wiki/Scalability#Horizontal
[why-use]: https://web.archive.org/web/20190821102906/https://medium.com/intrinsic/why-should-i-use-a-reverse-proxy-if-node-js-is-production-ready-5a079408b2ca
[haproxy]: https://www.haproxy.org/

### Nginx

```nginx
# This upstream block groups 3 servers into one named backend fastify_app
# with 2 primary servers distributed via round-robin
# and one backup which is used when the first 2 are not reachable
# This also assumes your fastify servers are listening on port 80.
# more info: https://nginx.org/en/docs/http/ngx_http_upstream_module.html
upstream fastify_app {
  server 10.10.11.1:80;
  server 10.10.11.2:80;
  server 10.10.11.3:80 backup;
}

# This server block asks NGINX to respond with a redirect when
# an incoming request from port 80 (typically plain HTTP), to
# the same request URL but with HTTPS as protocol.
# This block is optional, and usually used if you are handling
# SSL termination in NGINX, like in the example here.
server {
  # default server is a special parameter to ask NGINX
  # to set this server block to the default for this address/port
  # which in this case is any address and port 80
  listen 80 default_server;
  listen [::]:80 default_server;

  # With a server_name directive you can also ask NGINX to
  # use this server block only with matching server name(s)
  # listen 80;
  # listen [::]:80;
  # server_name example.tld;

  # This matches all paths from the request and responds with
  # the redirect mentioned above.
  location / {
    return 301 https://$host$request_uri;
  }
}

# This server block asks NGINX to respond to requests from
# port 443 with SSL enabled and accept HTTP/2 connections.
# This is where the request is then proxied to the fastify_app
# server group via port 3000.
server {
  # This listen directive asks NGINX to accept requests
  # coming to any address, port 443, with SSL.
  listen 443 ssl default_server;
  listen [::]:443 ssl default_server;

  # With a server_name directive you can also ask NGINX to
  # use this server block only with matching server name(s)
  # listen 443 ssl;
  # listen [::]:443 ssl;
  # server_name example.tld;

  # Enable HTTP/2 support
  http2 on;

  # Your SSL/TLS certificate (chain) and secret key in the PEM format
  ssl_certificate /path/to/fullchain.pem;
  ssl_certificate_key /path/to/private.pem;

  # A generic best practice baseline for based
  # on https://ssl-config.mozilla.org/
  ssl_session_timeout 1d;
  ssl_session_cache shared:FastifyApp:10m;
  ssl_session_tickets off;

  # This tells NGINX to only accept TLS 1.3, which should be fine
  # with most modern browsers including IE 11 with certain updates.
  # If you want to support older browsers you might need to add
  # additional fallback protocols.
  ssl_protocols TLSv1.3;
  ssl_prefer_server_ciphers off;

  # This adds a header that tells browsers to only ever use HTTPS
  # with this server.
  add_header Strict-Transport-Security "max-age=63072000" always;

  # The following directives are only necessary if you want to
  # enable OCSP Stapling.
  ssl_stapling on;
  ssl_stapling_verify on;
  ssl_trusted_certificate /path/to/chain.pem;

  # Custom nameserver to resolve upstream server names
  # resolver 127.0.0.1;

  # This section matches all paths and proxies it to the backend server
  # group specified above. Note the additional headers that forward
  # information about the original request. You might want to set
  # trustProxy to the address of your NGINX server so the X-Forwarded
  # fields are used by fastify.
  location / {
    # more info: https://nginx.org/en/docs/http/ngx_http_proxy_module.html
    proxy_http_version 1.1;
    proxy_cache_bypass $http_upgrade;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;

    # This is the directive that proxies requests to the specified server.
    # If you are using an upstream group, then you do not need to specify a port.
    # If you are directly proxying to a server e.g.
    # proxy_pass http://127.0.0.1:3000 then specify a port.
    proxy_pass http://fastify_app;
  }
}
```

[nginx]: https://nginx.org/

## Common Causes Of Performance Degradation

These patterns can increase latency or reduce throughput in production:

- Prefer static or simple parametric routes on hot paths. RegExp routes are
  expensive, and routes with many parameters can also hurt router performance.
  See [Routes - Url building](../Reference/Routes.md#url-building).
- Use route constraints carefully. Version constraints can degrade router
  performance, and asynchronous custom constraints should be treated as a last
  resort. See [Routes - Constraints](../Reference/Routes.md#constraints).
- Prefer Fastify plugins/hooks over generic middleware when possible. Fastify's
  middleware adapters work, but native integrations are typically better for
  performance-sensitive paths. See [Middleware](../Reference/Middleware.md).
- Define response schemas to speed up JSON serialization. See
  [Getting Started - Serialize your data](./Getting-Started.md#serialize-data).
- Keep Ajv `allErrors` disabled by default. Enable it only when detailed
  validation feedback is needed (for example, form-heavy APIs), and avoid it
  on latency-sensitive endpoints. When `allErrors: true` is enabled, validation
  can do more work per request and make denial-of-service attacks easier on
  untrusted inputs.
  See also:
  - [Validation and Serialization - Validator Compiler](../Reference/Validation-and-Serialization.md#schema-validator)
  - [Ajv Security Risks of Trusted Schemas](https://ajv.js.org/security.html#security-risks-of-trusted-schemas).

## Kubernetes
<a id="kubernetes"></a>

The `readinessProbe` uses ([by
default](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes))
the pod IP as the hostname. Fastify listens on `127.0.0.1` by default. The probe
will not be able to reach the application in this case. To make it work,
the application must listen on `0.0.0.0` or specify a custom hostname in
the `readinessProbe.httpGet` spec, as per the following example:

```yaml
readinessProbe:
    httpGet:
        path: /health
        port: 4000
    initialDelaySeconds: 30
    periodSeconds: 30
    timeoutSeconds: 3
    successThreshold: 1
    failureThreshold: 5
```

## Capacity Planning For Production
<a id="capacity"></a>

In order to rightsize the production environment for your Fastify application,
it is highly recommended that you perform your own measurements against
different configurations of the environment, which may
use real CPU cores, virtual CPU cores (vCPU), or even fractional
vCPU cores. We will use the term vCPU throughout this
recommendation to represent any CPU type.

Tools such as [k6](https://github.com/grafana/k6)
or [autocannon](https://github.com/mcollina/autocannon) can be used for
conducting the necessary performance tests.

That said, you may also consider the following as a rule of thumb:

* To have the lowest possible latency, 2 vCPU are recommended per app
instance (e.g., a k8s pod). The second vCPU will mostly be used by the
garbage collector (GC) and libuv threadpool. This will minimize the latency
for your users, as well as the memory usage, as the GC will be run more
frequently. Also, the main thread won't have to stop to let the GC run.

* To optimize for throughput (handling the largest possible amount of
requests per second per vCPU available), consider using a smaller amount of vCPUs
per app instance. It is totally fine to run Node.js applications with 1 vCPU.

* You may experiment with an even smaller amount of vCPU, which may provide
even better throughput in certain use-cases. There are reports of API gateway
solutions working well with 100m-200m vCPU in Kubernetes.

See [Node's Event Loop From the Inside Out ](https://www.youtube.com/watch?v=P9csgxBgaZ8)
to understand the workings of Node.js in greater detail and make a
better determination about what your specific application needs.

## Running Multiple Instances
<a id="multiple"></a>

There are several use-cases where running multiple Fastify
apps on the same server might be considered. A common example
would be exposing metrics endpoints on a separate port,
to prevent public access, when using a reverse proxy or an ingress
firewall is not an option.

It is perfectly fine to spin up several Fastify instances within the same
Node.js process and run them concurrently, even in high load systems.
Each Fastify instance only generates as much load as the traffic it receives,
plus the memory used for that Fastify instance.
