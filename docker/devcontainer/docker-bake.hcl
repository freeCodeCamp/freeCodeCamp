// Docker Bake configuration for freeCodeCamp devcontainer images
//
// Usage (from repo root):
//   docker buildx bake -f docker/devcontainer/docker-bake.hcl          # Local build (native platform)
//   docker buildx bake -f docker/devcontainer/docker-bake.hcl devcontainer --push  # Push multi-arch to GHCR
//
// With custom tag:
//   TAG=v1.0.0 docker buildx bake -f docker/devcontainer/docker-bake.hcl devcontainer --push

variable "REGISTRY" {
  default = "ghcr.io/freecodecamp"
}

variable "TAG" {
  default = "latest"
}

variable "TAG_LATEST" {
  default = "true"
}

group "default" {
  targets = ["local-devcontainer"]
}

target "_common" {
  context    = "."
  dockerfile = "docker/devcontainer/Dockerfile"
}

// Multi-arch image for pushing to registry (CI and local --push)
target "devcontainer" {
  inherits   = ["_common"]
  target     = "devcontainer"
  platforms  = ["linux/amd64", "linux/arm64"]
  cache-from = ["type=gha"]
  cache-to   = ["type=gha,mode=max"]
  tags       = concat(
    ["${REGISTRY}/devcontainer:${TAG}"],
    TAG_LATEST == "true" ? ["${REGISTRY}/devcontainer:latest"] : []
  )
}

// Native platform only (fast local builds)
target "local-devcontainer" {
  inherits = ["_common"]
  target   = "devcontainer"
  output   = ["type=docker"]
  tags     = ["ghcr.io/freecodecamp/devcontainer:latest"]
}
