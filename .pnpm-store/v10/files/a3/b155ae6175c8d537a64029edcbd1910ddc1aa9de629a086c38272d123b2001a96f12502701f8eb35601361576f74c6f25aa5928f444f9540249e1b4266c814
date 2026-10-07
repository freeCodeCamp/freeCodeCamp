import { URL, UrlObject } from 'node:url'
import { Duplex } from 'node:stream'
import Dispatcher from './dispatcher'

/** Performs an HTTP request. */
declare function request<TOpaque = null> (
  url: string | URL | UrlObject,
  options?: { dispatcher?: Dispatcher } & Omit<Dispatcher.RequestOptions<TOpaque>, 'origin' | 'path' | 'method'> & Partial<Pick<Dispatcher.RequestOptions, 'method'>>,
): Promise<Dispatcher.ResponseData<TOpaque>>

/** A faster version of `request`. */
declare function stream<TOpaque = null> (
  url: string | URL | UrlObject,
  options: { dispatcher?: Dispatcher } & Omit<Dispatcher.RequestOptions<TOpaque>, 'origin' | 'path'>,
  factory: Dispatcher.StreamFactory<TOpaque>
): Promise<Dispatcher.StreamData<TOpaque>>

/** For easy use with `stream.pipeline`. */
declare function pipeline<TOpaque = null> (
  url: string | URL | UrlObject,
  options: { dispatcher?: Dispatcher } & Omit<Dispatcher.PipelineOptions<TOpaque>, 'origin' | 'path'>,
  handler: Dispatcher.PipelineHandler<TOpaque>
): Duplex

/** Starts two-way communications with the requested resource. */
declare function connect<TOpaque = null> (
  url: string | URL | UrlObject,
  options?: { dispatcher?: Dispatcher } & Omit<Dispatcher.ConnectOptions<TOpaque>, 'origin' | 'path'>
): Promise<Dispatcher.ConnectData<TOpaque>>

/** Upgrade to a different protocol. */
declare function upgrade (
  url: string | URL | UrlObject,
  options?: { dispatcher?: Dispatcher } & Omit<Dispatcher.UpgradeOptions, 'origin' | 'path'>
): Promise<Dispatcher.UpgradeData>

export {
  request,
  stream,
  pipeline,
  connect,
  upgrade
}
