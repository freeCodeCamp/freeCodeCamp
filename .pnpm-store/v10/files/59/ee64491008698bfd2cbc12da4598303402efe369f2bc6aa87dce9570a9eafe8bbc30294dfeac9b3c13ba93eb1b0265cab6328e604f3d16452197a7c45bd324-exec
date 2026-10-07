import { URISchemeHandler, URIComponents } from "../uri";
export interface MailtoHeaders {
    [hfname: string]: string;
}
export interface MailtoComponents extends URIComponents {
    to: Array<string>;
    headers?: MailtoHeaders;
    subject?: string;
    body?: string;
}
declare const handler: URISchemeHandler<MailtoComponents>;
export default handler;
