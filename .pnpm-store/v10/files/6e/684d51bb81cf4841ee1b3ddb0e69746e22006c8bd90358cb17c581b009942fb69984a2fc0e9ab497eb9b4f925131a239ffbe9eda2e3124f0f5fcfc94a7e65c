/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */


/// <reference no-default-lib="true"/>

declare namespace Intl {
    interface DateTimeFormatPartTypesRegistry {
        day: any;
        dayPeriod: any;
        era: any;
        hour: any;
        literal: any;
        minute: any;
        month: any;
        second: any;
        timeZoneName: any;
        weekday: any;
        year: any;
    }

    type DateTimeFormatPartTypes = keyof DateTimeFormatPartTypesRegistry;

    interface DateTimeFormatPart {
        type: DateTimeFormatPartTypes;
        value: string;
    }

    interface DateTimeFormat {
        formatToParts(date?: Date | number): DateTimeFormatPart[];
    }
}
