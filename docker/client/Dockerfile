FROM rclone/rclone:1.76.0@sha256:7cbeec24a44f206067597c0368be4de90ae19a64d5113c7d1938bd737a81e466 AS rclone

FROM caddy:2.11.9-alpine@sha256:003a97808e781aa9f7e75cc2f43d34d461099031faf5e20faefb9f61126836f0
COPY --from=rclone /usr/local/bin/rclone /usr/local/bin/rclone
COPY docker/client/Caddyfile /etc/caddy/Caddyfile
COPY --chmod=0755 docker/client/start.sh /usr/local/bin/client-start
RUN mkdir -p /cache /data /config \
 && chown -R 1000:1000 /cache /data /config
USER 1000:1000
EXPOSE 8080
ENTRYPOINT ["/usr/local/bin/client-start"]
