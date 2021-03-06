# dev-tools-monitor

An package which can be used with any Javascript frameworks such as Angular, React, Vue, Vanilla JS to detect developer console is Opened or listen for opening of the developer console even when it is docked or undocked.

# Installation

    `npm i dev-tools-monitor --save`

# Usage

    ```
    import {isDevToolsOpened} from 'dev-tools-monitor';

    console.log(isDevToolsOpened(), 'Should return true or false');
    ```

# Available Functions

1. `isDevToolsOpened() returns true | false`

   This function just returns `true` if developer tools is opened and returns `false` if not.

2. `startDevToolsListener(onDevToolsOpened: Function) returns undefined`

   This function will start a listener and executes the call back function passed as parameter continuously when developer tools is opened. So, while using this be careful and use `stopDevToolsListener` function with it appropriately.

3. `stopDevToolsListener () returns undefined`

   This function stops the execution of the success callback passed to `startDevToolsListener` and stops the listener. Now when console is opened it will no longer executes the call back passed to `startDevToolsListener`.

Note : startDevToolsListener listener method will clear the console.

# Compatability

1. Microsoft Edge
2. Google Chrome
3. Safari
4. Opera
5. Firefox - Not yet supported
