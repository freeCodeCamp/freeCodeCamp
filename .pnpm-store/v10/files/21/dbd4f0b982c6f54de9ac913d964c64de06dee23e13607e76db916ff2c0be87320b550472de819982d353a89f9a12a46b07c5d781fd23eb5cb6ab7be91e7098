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

/////////////////////////////
/// Windows Script Host APIS
/////////////////////////////

interface ActiveXObject {
    new (s: string): any;
}
declare var ActiveXObject: ActiveXObject;

interface ITextWriter {
    Write(s: string): void;
    WriteLine(s: string): void;
    Close(): void;
}

interface TextStreamBase {
    /**
     * The column number of the current character position in an input stream.
     */
    Column: number;

    /**
     * The current line number in an input stream.
     */
    Line: number;

    /**
     * Closes a text stream.
     * It is not necessary to close standard streams; they close automatically when the process ends. If
     * you close a standard stream, be aware that any other pointers to that standard stream become invalid.
     */
    Close(): void;
}

interface TextStreamWriter extends TextStreamBase {
    /**
     * Sends a string to an output stream.
     */
    Write(s: string): void;

    /**
     * Sends a specified number of blank lines (newline characters) to an output stream.
     */
    WriteBlankLines(intLines: number): void;

    /**
     * Sends a string followed by a newline character to an output stream.
     */
    WriteLine(s: string): void;
}

interface TextStreamReader extends TextStreamBase {
    /**
     * Returns a specified number of characters from an input stream, starting at the current pointer position.
     * Does not return until the ENTER key is pressed.
     * Can only be used on a stream in reading mode; causes an error in writing or appending mode.
     */
    Read(characters: number): string;

    /**
     * Returns all characters from an input stream.
     * Can only be used on a stream in reading mode; causes an error in writing or appending mode.
     */
    ReadAll(): string;

    /**
     * Returns an entire line from an input stream.
     * Although this method extracts the newline character, it does not add it to the returned string.
     * Can only be used on a stream in reading mode; causes an error in writing or appending mode.
     */
    ReadLine(): string;

    /**
     * Skips a specified number of characters when reading from an input text stream.
     * Can only be used on a stream in reading mode; causes an error in writing or appending mode.
     * @param characters Positive number of characters to skip forward. (Backward skipping is not supported.)
     */
    Skip(characters: number): void;

    /**
     * Skips the next line when reading from an input text stream.
     * Can only be used on a stream in reading mode, not writing or appending mode.
     */
    SkipLine(): void;

    /**
     * Indicates whether the stream pointer position is at the end of a line.
     */
    AtEndOfLine: boolean;

    /**
     * Indicates whether the stream pointer position is at the end of a stream.
     */
    AtEndOfStream: boolean;
}

declare var WScript: {
    /**
     * Outputs text to either a message box (under WScript.exe) or the command console window followed by
     * a newline (under CScript.exe).
     */
    Echo(s: any): void;

    /**
     * Exposes the write-only error output stream for the current script.
     * Can be accessed only while using CScript.exe.
     */
    StdErr: TextStreamWriter;

    /**
     * Exposes the write-only output stream for the current script.
     * Can be accessed only while using CScript.exe.
     */
    StdOut: TextStreamWriter;
    Arguments: { length: number; Item(n: number): string; };

    /**
     *  The full path of the currently running script.
     */
    ScriptFullName: string;

    /**
     * Forces the script to stop immediately, with an optional exit code.
     */
    Quit(exitCode?: number): number;

    /**
     * The Windows Script Host build version number.
     */
    BuildVersion: number;

    /**
     * Fully qualified path of the host executable.
     */
    FullName: string;

    /**
     * Gets/sets the script mode - interactive(true) or batch(false).
     */
    Interactive: boolean;

    /**
     * The name of the host executable (WScript.exe or CScript.exe).
     */
    Name: string;

    /**
     * Path of the directory containing the host executable.
     */
    Path: string;

    /**
     * The filename of the currently running script.
     */
    ScriptName: string;

    /**
     * Exposes the read-only input stream for the current script.
     * Can be accessed only while using CScript.exe.
     */
    StdIn: TextStreamReader;

    /**
     * Windows Script Host version
     */
    Version: string;

    /**
     * Connects a COM object's event sources to functions named with a given prefix, in the form prefix_event.
     */
    ConnectObject(objEventSource: any, strPrefix: string): void;

    /**
     * Creates a COM object.
     * @param strProgiID
     * @param strPrefix Function names in the form prefix_event will be bound to this object's COM events.
     */
    CreateObject(strProgID: string, strPrefix?: string): any;

    /**
     * Disconnects a COM object from its event sources.
     */
    DisconnectObject(obj: any): void;

    /**
     * Retrieves an existing object with the specified ProgID from memory, or creates a new one from a file.
     * @param strPathname Fully qualified path to the file containing the object persisted to disk.
     *                       For objects in memory, pass a zero-length string.
     * @param strProgID
     * @param strPrefix Function names in the form prefix_event will be bound to this object's COM events.
     */
    GetObject(strPathname: string, strProgID?: string, strPrefix?: string): any;

    /**
     * Suspends script execution for a specified length of time, then continues execution.
     * @param intTime Interval (in milliseconds) to suspend script execution.
     */
    Sleep(intTime: number): void;
};

/**
 * WSH is an alias for WScript under Windows Script Host
 */
declare var WSH: typeof WScript;

/**
 * Represents an Automation SAFEARRAY
 */
declare class SafeArray<T = any> {
    private constructor();
    private SafeArray_typekey: SafeArray<T>;
}

/**
 * Allows enumerating over a COM collection, which may not have indexed item access.
 */
interface Enumerator<T = any> {
    /**
     * Returns true if the current item is the last one in the collection, or the collection is empty,
     * or the current item is undefined.
     */
    atEnd(): boolean;

    /**
     * Returns the current item in the collection
     */
    item(): T;

    /**
     * Resets the current item in the collection to the first item. If there are no items in the collection,
     * the current item is set to undefined.
     */
    moveFirst(): void;

    /**
     * Moves the current item to the next item in the collection. If the enumerator is at the end of
     * the collection or the collection is empty, the current item is set to undefined.
     */
    moveNext(): void;
}

interface EnumeratorConstructor {
    new <T = any>(safearray: SafeArray<T>): Enumerator<T>;
    new <T = any>(collection: { Item(index: any): T; }): Enumerator<T>;
    new <T = any>(collection: any): Enumerator<T>;
}

declare var Enumerator: EnumeratorConstructor;

/**
 * Enables reading from a COM safe array, which might have an alternate lower bound, or multiple dimensions.
 */
interface VBArray<T = any> {
    /**
     * Returns the number of dimensions (1-based).
     */
    dimensions(): number;

    /**
     * Takes an index for each dimension in the array, and returns the item at the corresponding location.
     */
    getItem(dimension1Index: number, ...dimensionNIndexes: number[]): T;

    /**
     * Returns the smallest available index for a given dimension.
     * @param dimension 1-based dimension (defaults to 1)
     */
    lbound(dimension?: number): number;

    /**
     * Returns the largest available index for a given dimension.
     * @param dimension 1-based dimension (defaults to 1)
     */
    ubound(dimension?: number): number;

    /**
     * Returns a Javascript array with all the elements in the VBArray. If there are multiple dimensions,
     * each successive dimension is appended to the end of the array.
     * Example: [[1,2,3],[4,5,6]] becomes [1,2,3,4,5,6]
     */
    toArray(): T[];
}

interface VBArrayConstructor {
    new <T = any>(safeArray: SafeArray<T>): VBArray<T>;
}

declare var VBArray: VBArrayConstructor;

/**
 * Automation date (VT_DATE)
 */
declare class VarDate {
    private constructor();
    private VarDate_typekey: VarDate;
}

interface DateConstructor {
    new (vd: VarDate): Date;
}

interface Date {
    getVarDate: () => VarDate;
}
