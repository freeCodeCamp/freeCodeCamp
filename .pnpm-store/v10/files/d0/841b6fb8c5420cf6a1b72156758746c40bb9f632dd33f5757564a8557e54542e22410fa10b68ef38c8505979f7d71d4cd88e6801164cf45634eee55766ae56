/// <reference types="node" />

import { URL } from "url";

import Mail = require("../mailer");
import MimeNode = require("../mime-node");

/** Creates the object for composing a MimeNode instance out from the mail options */
declare class MailComposer {
    mail: Mail.Options;
    message: MimeNode | false;

    constructor(mail: Mail.Options);

    /** Builds MimeNode instance */
    compile(): MimeNode;

    /** List all attachments. Resulting attachment objects can be used as input for MimeNode nodes */
    getAttachments(findRelated: boolean): Mail.Attachment[];

    /** List alternatives. Resulting objects can be used as input for MimeNode nodes */
    getAlternatives(): Mail.Attachment[];
}

export = MailComposer;
