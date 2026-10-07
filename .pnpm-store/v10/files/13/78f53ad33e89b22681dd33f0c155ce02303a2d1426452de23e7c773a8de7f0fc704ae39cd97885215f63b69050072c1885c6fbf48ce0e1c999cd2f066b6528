import type { Config as PostCSSConfig } from "postcss-load-config";
import type { LoaderContext } from "webpack";

type PostCSSLoaderContext = LoaderContext<PostCSSConfig>;

interface PostCSSLoaderAPI {
  mode: PostCSSLoaderContext["mode"];
  file: PostCSSLoaderContext["resourcePath"];
  webpackLoaderContext: PostCSSLoaderContext;
  env: PostCSSLoaderContext["mode"];
  options: PostCSSConfig;
}

export type PostCSSLoaderOptions =
  | PostCSSConfig
  | ((api: PostCSSLoaderAPI) => PostCSSConfig);
