import { Subscriber } from '../../Subscriber';
import { AjaxResponse } from './AjaxObservable';

/**
 * @see {@link ajax}
 *
 * @interface
 * @name AjaxRequest
 * @noimport true
 */
export class AjaxRequestDoc {
  /**
   * @type {string}
   */
  url: string = '';
  /**
   * @type {number}
   */
  body: any = 0;
  /**
   * @type {string}
   */
  user: string = '';
  /**
   * @type {boolean}
   */
  async: boolean = false;
  /**
   * @type {string}
   */
  method: string = '';
  /**
   * @type {Object}
   */
  headers: Object = null;
  /**
   * @type {number}
   */
  timeout: number = 0;
  /**
   * @type {string}
   */
  password: string = '';
  /**
   * @type {boolean}
   */
  hasContent: boolean = false;
  /**
   * @type {boolean}
   */
  crossDomain: boolean = false;
  /**
   * @type {boolean}
   */
  withCredentials: boolean = false;
  /**
   * @return {XMLHttpRequest}
   */
  createXHR(): XMLHttpRequest {
    return null;
  }
  /**
   * @type {Subscriber}
   */
  progressSubscriber: Subscriber<any> = null;
  /**
   * @param {AjaxResponse} response
   * @return {T}
   */
  resultSelector<T>(response: AjaxResponse): T {
    return null;
  }
  /**
   * @type {string}
   */
  responseType: string = '';
}
