// Type definitions for ShellJS 0.7
// Project: http://shelljs.org
// Definitions by: Niklas Mollenhauer <https://github.com/nikeee>
//                 Vojtech Jasny <https://github.com/voy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

import child = require("child_process");
import glob = require("glob");

/**
 * Changes to directory dir for the duration of the script
 * @param dir Directory to change in.
 */
export function cd(dir: string): void;

/**
 * Returns the current directory.
 * @return The current directory.
 */
export function pwd(): string;

/**
 * Returns array of files in the given path, or in current directory if no path provided.
 * @param  ...paths Paths to search.
 * @return          An array of files in the given path(s).
 */
export function ls(...paths: string[]): string[];

/**
 * Returns array of files in the given path, or in current directory if no path provided.
 * @param    options  Available options: -R (recursive), -A (all files, include files beginning with ., except for . and ..)
 * @param  ...paths Paths to search.
 * @return          An array of files in the given path(s).
 */
export function ls(options: string, ...paths: string[]): string[];

/**
 * Returns array of files in the given path, or in current directory if no path provided.
 * @param  paths Paths to search.
 * @return       An array of files in the given path(s).
 */
export function ls(paths: string[]): string[];

/**
 * Returns array of files in the given path, or in current directory if no path provided.
 * @param    options  Available options: -R (recursive), -A (all files, include files beginning with ., except for . and ..)
 * @param  paths    Paths to search.
 * @return          An array of files in the given path(s).
 */
export function ls(options: string, paths: string[]): string[];

/**
 * Returns array of all files (however deep) in the given paths.
 * @param ...path   The path(s) to search.
 * @return          An array of all files (however deep) in the given path(s).
 */
export function find(...path: string[]): string[];

/**
 * Returns array of all files (however deep) in the given paths.
 * @param path   The path(s) to search.
 * @return       An array of all files (however deep) in the given path(s).
 */
export function find(path: string[]): string[];

/**
 * Copies files. The wildcard * is accepted.
 * @param source  The source.
 * @param   dest  The destination.
 */
export function cp(source: string, dest: string): void;

/**
 * Copies files. The wildcard * is accepted.
 * @param source  The source.
 * @param   dest    The destination.
 */
export function cp(source: string[], dest: string): void;

/**
 * Copies files. The wildcard * is accepted.
 * @param options Available options: -f (force), -r, -R (recursive)
 * @param source  The source.
 * @param dest    The destination.
 */
export function cp(options: string, source: string, dest: string): void;

/**
 * Copies files. The wildcard * is accepted.
 * @param   options Available options: -f (force), -r, -R (recursive)
 * @param source  The source.
 * @param   dest    The destination.
 */
export function cp(options: string, source: string[], dest: string): void;

/**
 * Removes files. The wildcard * is accepted.
 * @param ...files Files to remove.
 */
export function rm(...files: string[]): void;

/**
 * Removes files. The wildcard * is accepted.
 * @param files Files to remove.
 */
export function rm(files: string[]): void;

/**
 * Removes files. The wildcard * is accepted.
 * @param   options  Available options: -f (force), -r, -R (recursive)
 * @param ...files Files to remove.
 */
export function rm(options: string, ...files: string[]): void;

/**
 * Removes files. The wildcard * is accepted.
 * @param   options  Available options: -f (force), -r, -R (recursive)
 * @param ...files Files to remove.
 */
export function rm(options: string, files: string[]): void;

/**
 * Moves files. The wildcard * is accepted.
 * @param source The source.
 * @param dest   The destination.
 */
export function mv(source: string, dest: string): void;

/**
 * Moves files. The wildcard * is accepted.
 * @param source The source.
 * @param   dest   The destination.
 */
export function mv(source: string[], dest: string): void;

/**
 * Creates directories.
 * @param ...dir Directories to create.
 */
export function mkdir(...dir: string[]): void;

/**
 * Creates directories.
 * @param dir Directories to create.
 */
export function mkdir(dir: string[]): void;

/**
 * Creates directories.
 * @param   options Available options: p (full paths, will create intermediate dirs if necessary)
 * @param ...dir  The directories to create.
 */
export function mkdir(options: string, ...dir: string[]): void;

/**
 * Creates directories.
 * @param   options Available options: p (full paths, will create intermediate dirs if necessary)
 * @param dir     The directories to create.
 */
export function mkdir(options: string, dir: string[]): void;

/**
 * Evaluates expression using the available primaries and returns corresponding value.
 * @param   option '-b': true if path is a block device; '-c': true if path is a character device; '-d': true if path is a directory; '-e': true if path exists; '-f': true if path is a regular file; '-L': true if path is a symboilc link; '-p': true if path is a pipe (FIFO); '-S': true if path is a socket
 * @param   path   The path.
 * @return        See option parameter.
 */
export function test(option: string, path: string): boolean;

/**
 * Returns a string containing the given file, or a concatenated string containing the files if more than one file is given (a new line character is introduced between each file). Wildcard * accepted.
 * @param  ...files Files to use.
 * @return            A string containing the given file, or a concatenated string containing the files if more than one file is given (a new line character is introduced between each file).
 */
export function cat(...files: string[]): string;

/**
 * Returns a string containing the given file, or a concatenated string containing the files if more than one file is given (a new line character is introduced between each file). Wildcard * accepted.
 * @param  files Files to use.
 * @return         A string containing the given file, or a concatenated string containing the files if more than one file is given (a new line character is introduced between each file).
 */
export function cat(files: string[]): string;

// Does not work yet.
export interface String {
    /**
     * Analogous to the redirection operator > in Unix, but works with JavaScript strings (such as those returned by cat, grep, etc). Like Unix redirections, to() will overwrite any existing file!
     * @param file The file to use.
     */
    to(file: string): void;

    /**
     * Analogous to the redirect-and-append operator >> in Unix, but works with JavaScript strings (such as those returned by cat, grep, etc).
     * @param file The file to append to.
     */
    toEnd(file: string): void;
}

/**
 * Reads an input string from file and performs a JavaScript replace() on the input using the given search regex and replacement string or function. Returns the new string after replacement.
 * @param  searchRegex The regular expression to use for search.
 * @param  replacement The replacement.
 * @param  file        The file to process.
 * @return             The new string after replacement.
 */
export function sed(searchRegex: RegExp, replacement: string, file: string): string;

/**
 * Reads an input string from file and performs a JavaScript replace() on the input using the given search regex and replacement string or function. Returns the new string after replacement.
 * @param  searchRegex The regular expression to use for search.
 * @param  replacement The replacement.
 * @param  file        The file to process.
 * @return             The new string after replacement.
 */
export function sed(searchRegex: string, replacement: string, file: string): string;

/**
 * Reads an input string from file and performs a JavaScript replace() on the input using the given search regex and replacement string or function. Returns the new string after replacement.
 * @param  options     Available options: -i (Replace contents of 'file' in-place. Note that no backups will be created!)
 * @param  searchRegex The regular expression to use for search.
 * @param  replacement The replacement.
 * @param  file        The file to process.
 * @return             The new string after replacement.
 */
export function sed(options: string, searchRegex: RegExp, replacement: string, file: string): string;

/**
 * Reads an input string from file and performs a JavaScript replace() on the input using the given search regex and replacement string or function. Returns the new string after replacement.
 * @param  options     Available options: -i (Replace contents of 'file' in-place. Note that no backups will be created!)
 * @param  searchRegex The regular expression to use for search.
 * @param  replacement The replacement.
 * @param  file        The file to process.
 * @return             The new string after replacement.
 */
export function sed(options: string, searchRegex: string, replacement: string, file: string): string;

/**
 * Reads input string from given files and returns a string containing all lines of the file that match the given regex_filter. Wildcard * accepted.
 * @param    regex_filter The regular expression to use.
 * @param  ...files     The files to process.
 * @return                Returns a string containing all lines of the file that match the given regex_filter.
 */
export function grep(regex_filter: RegExp, ...files: string[]): string;

/**
 * Reads input string from given files and returns a string containing all lines of the file that match the given regex_filter. Wildcard * accepted.
 * @param    regex_filter The regular expression to use.
 * @param  ...files     The files to process.
 * @return                Returns a string containing all lines of the file that match the given regex_filter.
 */
export function grep(regex_filter: RegExp, files: string[]): string;

/**
 * Reads input string from given files and returns a string containing all lines of the file that match the given regex_filter. Wildcard * accepted.
 * @param    options      Available options: -v (Inverse the sense of the regex and print the lines not matching the criteria.)
 * @param    regex_filter The regular expression to use.
 * @param  ...files     The files to process.
 * @return                Returns a string containing all lines of the file that match the given regex_filter.
 */
export function grep(options: string, regex_filter: string, ...files: string[]): string;

/**
 * Reads input string from given files and returns a string containing all lines of the file that match the given regex_filter. Wildcard * accepted.
 * @param    options      Available options: -v (Inverse the sense of the regex and print the lines not matching the criteria.)
 * @param    regex_filter The regular expression to use.
 * @param  files        The files to process.
 * @return                Returns a string containing all lines of the file that match the given regex_filter.
 */
export function grep(options: string, regex_filter: string, files: string[]): string;

/**
 * Searches for command in the system's PATH. On Windows looks for .exe, .cmd, and .bat extensions.
 * @param  command The command to search for.
 * @return         Returns string containing the absolute path to the command.
 */
export function which(command: string): string;

/**
 * Prints string to stdout, and returns string with additional utility methods like .to().
 * @param  ...text The text to print.
 * @return           Returns the string that was passed as argument.
 */
export function echo(...text: string[]): string;

/**
 * Save the current directory on the top of the directory stack and then cd to dir. With no arguments, pushd exchanges the top two directories. Returns an array of paths in the stack.
 * @param      dir Brings the Nth directory (counting from the left of the list printed by dirs, starting with zero) to the top of the list by rotating the stack.
 * @return     Returns an array of paths in the stack.
 */
export function pushd(dir: "+N"): string[];

/**
 * Save the current directory on the top of the directory stack and then cd to dir. With no arguments, pushd exchanges the top two directories. Returns an array of paths in the stack.
 * @param      dir Brings the Nth directory (counting from the right of the list printed by dirs, starting with zero) to the top of the list by rotating the stack.
 * @return     Returns an array of paths in the stack.
 */
export function pushd(dir: "-N"): string[];

/**
 * Save the current directory on the top of the directory stack and then cd to dir. With no arguments, pushd exchanges the top two directories. Returns an array of paths in the stack.
 * @param      dir Makes the current working directory be the top of the stack, and then executes the equivalent of cd dir.
 * @return       Returns an array of paths in the stack.
 */
export function pushd(dir: string): string[];

/**
 * Save the current directory on the top of the directory stack and then cd to dir. With no arguments, pushd exchanges the top two directories. Returns an array of paths in the stack.
 * @param    options Available options: -n (Suppresses the normal change of directory when adding directories to the stack, so that only the stack is manipulated)
 * @param      dir Brings the Nth directory (counting from the left of the list printed by dirs, starting with zero) to the top of the list by rotating the stack.
 * @return     Returns an array of paths in the stack.
 */
export function pushd(options: string, dir: "+N"): string[];

/**
 * Save the current directory on the top of the directory stack and then cd to dir. With no arguments, pushd exchanges the top two directories. Returns an array of paths in the stack.
 * @param    options Available options: -n (Suppresses the normal change of directory when adding directories to the stack, so that only the stack is manipulated)
 * @param      dir Brings the Nth directory (counting from the right of the list printed by dirs, starting with zero) to the top of the list by rotating the stack.
 * @return     Returns an array of paths in the stack.
 */
export function pushd(options: string, dir: "-N"): string[];

/**
 * Save the current directory on the top of the directory stack and then cd to dir. With no arguments, pushd exchanges the top two directories. Returns an array of paths in the stack.
 * @param    options Available options: -n (Suppresses the normal change of directory when adding directories to the stack, so that only the stack is manipulated)
 * @param    dir     Makes the current working directory be the top of the stack, and then executes the equivalent of cd dir.
 * @return         Returns an array of paths in the stack.
 */
export function pushd(options: string, dir: string): string[];

/**
 * When no arguments are given, popd removes the top directory from the stack and performs a cd to the new top directory. The elements are numbered from 0 starting at the first directory listed with dirs; i.e., popd is equivalent to popd +0. Returns an array of paths in the stack.
 * @param      dir Removes the Nth directory (counting from the left of the list printed by dirs), starting with zero.
 * @return     Returns an array of paths in the stack.
 */
export function popd(dir: "+N"): string[];

/**
 * When no arguments are given, popd removes the top directory from the stack and performs a cd to the new top directory. The elements are numbered from 0 starting at the first directory listed with dirs; i.e., popd is equivalent to popd +0. Returns an array of paths in the stack.
 * @return     Returns an array of paths in the stack.
 */
export function popd(): string[];

/**
 * When no arguments are given, popd removes the top directory from the stack and performs a cd to the new top directory. The elements are numbered from 0 starting at the first directory listed with dirs; i.e., popd is equivalent to popd +0. Returns an array of paths in the stack.
 * @param      dir Removes the Nth directory (counting from the right of the list printed by dirs), starting with zero.
 * @return     Returns an array of paths in the stack.
 */
export function popd(dir: "-N"): string[];

/**
 * When no arguments are given, popd removes the top directory from the stack and performs a cd to the new top directory. The elements are numbered from 0 starting at the first directory listed with dirs; i.e., popd is equivalent to popd +0. Returns an array of paths in the stack.
 * @param      dir You can only use -N and +N.
 * @return       Returns an array of paths in the stack.
 */
export function popd(dir: string): string[];

/**
 * When no arguments are given, popd removes the top directory from the stack and performs a cd to the new top directory. The elements are numbered from 0 starting at the first directory listed with dirs; i.e., popd is equivalent to popd +0. Returns an array of paths in the stack.
 * @param    options Available options: -n (Suppresses the normal change of directory when removing directories from the stack, so that only the stack is manipulated)
 * @param      dir     Removes the Nth directory (counting from the left of the list printed by dirs), starting with zero.
 * @return         Returns an array of paths in the stack.
 */
export function popd(options: string, dir: "+N"): string[];

/**
 * When no arguments are given, popd removes the top directory from the stack and performs a cd to the new top directory. The elements are numbered from 0 starting at the first directory listed with dirs; i.e., popd is equivalent to popd +0. Returns an array of paths in the stack.
 * @param    options Available options: -n (Suppresses the normal change of directory when removing directories from the stack, so that only the stack is manipulated)
 * @param      dir     Removes the Nth directory (counting from the right of the list printed by dirs), starting with zero.
 * @return         Returns an array of paths in the stack.
 */
export function popd(options: string, dir: "-N"): string[];

/**
 * When no arguments are given, popd removes the top directory from the stack and performs a cd to the new top directory. The elements are numbered from 0 starting at the first directory listed with dirs; i.e., popd is equivalent to popd +0. Returns an array of paths in the stack.
 * @param    options Available options: -n (Suppresses the normal change of directory when removing directories from the stack, so that only the stack is manipulated)
 * @param    dir     You can only use -N and +N.
 * @return         Returns an array of paths in the stack.
 */
export function popd(options: string, dir: string): string[];

/**
 * Clears the directory stack by deleting all of the elements.
 * @param      options Clears the directory stack by deleting all of the elements.
 * @return         Returns an array of paths in the stack, or a single path if +N or -N was specified.
 */
export function dirs(options: "-c"): string[];

/**
 * Display the list of currently remembered directories. Returns an array of paths in the stack, or a single path if +N or -N was specified.
 * @param    options Displays the Nth directory (counting from the left of the list printed by dirs when invoked without options), starting with zero.
 * @return       Returns an array of paths in the stack, or a single path if +N or -N was specified.
 */
export function dirs(options: "+N"): string;

/**
 * Display the list of currently remembered directories. Returns an array of paths in the stack, or a single path if +N or -N was specified.
 * @param    options Displays the Nth directory (counting from the right of the list printed by dirs when invoked without options), starting with zero.
 * @return       Returns an array of paths in the stack, or a single path if +N or -N was specified.
 */
export function dirs(options: "-N"): string;

/**
 * Display the list of currently remembered directories. Returns an array of paths in the stack, or a single path if +N or -N was specified.
 * @param  options Available options: -c, -N, +N. You can only use those.
 * @return            Returns an array of paths in the stack, or a single path if +N or -N was specified.
 */
export function dirs(options: string): any;

/**
 * Links source to dest. Use -f to force the link, should dest already exist.
 * @param source The source.
 * @param dest   The destination.
 */
export function ln(source: string, dest: string): void;

/**
 * Links source to dest. Use -f to force the link, should dest already exist.
 * @param options Available options: s (symlink), f (force)
 * @param source The source.
 * @param dest   The destination.
 */
export function ln(options: string, source: string, dest: string): void;

/**
 * Exits the current process with the given exit code.
 * @param code The exit code.
 */
export function exit(code: number): void;

/**
 * Object containing environment variables (both getter and setter). Shortcut to process.env.
 */
export const env: { [key: string]: string };

/**
 * Executes the given command synchronously.
 * @param                  command The command to execute.
 * @return          Returns an object containing the return code and output as string.
 */
export function exec(command: string): ExecOutputReturnValue;
/**
 * Executes the given command synchronously.
 * @param                                      command The command to execute.
 * @param                                 options Silence and synchronous options.
 * @return         Returns an object containing the return code and output as string, or if {async:true} was passed, a ChildProcess.
 */
export function exec(command: string, options: ExecOptions): ExecOutputReturnValue | child.ChildProcess;
/**
 * Executes the given command synchronously.
 * @param           command  The command to execute.
 * @param      options  Silence and synchronous options.
 * @param     callback Receives code and output asynchronously.
 */
export function exec(command: string, options: ExecOptions, callback: ExecCallback): child.ChildProcess;
/**
 * Executes the given command synchronously.
 * @param           command  The command to execute.
 * @param     callback Receives code and output asynchronously.
 */
export function exec(command: string, callback: ExecCallback): child.ChildProcess;

export type ExecCallback = (code: number, stdout: string, stderr: string) => any;

export interface ExecOptions extends child.ExecOptions {
    silent?: boolean;
    async?: boolean;
}

export interface ExecOutputReturnValue {
    code: number;
    stdout: string;
    stderr: string;
}

/**
 * Alters the permissions of a file or directory by either specifying the absolute permissions in octal form or expressing the changes in symbols. This command tries to mimic the POSIX behavior as much as possible. Notable exceptions:
 * - In symbolic modes, 'a-r' and '-r' are identical. No consideration is given to the umask.
 * - There is no "quiet" option since default behavior is to run silent.
 * @param octalMode The access mode. Octal.
 * @param file      The file to use.
 */
export function chmod(octalMode: number, file: string): void;

/**
 * Alters the permissions of a file or directory by either specifying the absolute permissions in octal form or expressing the changes in symbols. This command tries to mimic the POSIX behavior as much as possible. Notable exceptions:
 * - In symbolic modes, 'a-r' and '-r' are identical. No consideration is given to the umask.
 * - There is no "quiet" option since default behavior is to run silent.
 * @param mode      The access mode. Can be an octal string or a symbolic mode string.
 * @param file      The file to use.
 */
export function chmod(mode: string, file: string): void;

// Non-Unix commands

/**
 * Searches and returns string containing a writeable, platform-dependent temporary directory. Follows Python's tempfile algorithm.
 * @return The temp file path.
 */
export function tempdir(): string;

/**
 * Tests if error occurred in the last command.
 * @return Returns null if no error occurred, otherwise returns string explaining the error
 */
export function error(): string;

export type TouchOptionsLiteral = "-a" | "-c" | "-m" | "-d" | "-r";

/**
 * Update the access and modification times of each FILE to the current time. A FILE argument that does not exist is created empty, unless -c is supplied
 */
export interface touchOptionsArray {
    '-d'?: string;
    '-r'?: string;
}

export function touch(...files: string[]): void;
export function touch(files: string[]): void;
export function touch(options: TouchOptionsLiteral, ...files: string[]): void;
export function touch(options: TouchOptionsLiteral, files: string[]): void;
export function touch(options: touchOptionsArray, ...files: string[]): void;
export function touch(options: touchOptionsArray, files: string[]): void;

// Configuration

export interface ShellConfig {
    /**
     * Suppresses all command output if true, except for echo() calls. Default is false.
     */
    silent: boolean;

    /**
     * If true the script will die on errors. Default is false.
     */
    fatal: boolean;

    /**
     * Will print each executed command to the screen. Default is true.
     */
    verbose: boolean;

    /**
     * Passed to glob.sync() instead of the default options ({}).
     */
    globOptions: glob.IOptions;

    /**
     * Absolute path of the Node binary. Default is null (inferred).
     */
    execPath: string | null;

    /**
     * Reset shell.config to the defaults.
     */
    reset(): void;
}

/**
 * The shelljs configuration.
 */
export const config: ShellConfig;
