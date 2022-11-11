from gitpod/workspace-mongodb

# Setup ENV
ENV COOKIE_DOMAIN=github.dev
ENV HOME_LOCATION=https://$(CODESPACE_NAME)-8000.$(GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN)
ENV API_LOCATION=https://$(CODESPACE_NAME)-3000.$(GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN)
ENV CYPRESS_BASE_URL=https://$(CODESPACE_NAME)-8000.$(GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN)
ENV REACT_APP_CHALLENGE_EDITOR_API_LOCATION=https://$(CODESPACE_NAME)-3200.$(GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN)
ENV CHALLENGE_EDITOR_CLIENT_LOCATION=https://$(CODESPACE_NAME)-3300.$(GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN)

# Start mongodb in background
RUN mkdir -p /workspace/data && (mongod --dbpath /workspace/data &)

# Set up server
RUN cp sample.env .env
RUN npm ci && npm run seed
RUN npm run create:config && npm run build:curriculum
RUN npm run develop:server

# Set up client
RUN cd client && npm run predevelop && npm run develop
