export interface Env {
  [name: string]: string
}

declare function updateDotenv(env: Env): Promise<Env>

export = updateDotenv
