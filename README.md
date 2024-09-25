## When JavaScript loads for the first time in Web, all elements are briefly visible without CSS.

## Current Behavior
When the JavaScript is first loaded on a web platform, the page briefly shows the structure of the page (HTML) without applying the CSS for about 1-2 seconds. This issue causes a flash of unstyled content (FOUC), affecting the initial user experience. A video of the issue has been attached for reference.

## Expected Behavior
The page elements should render with CSS applied immediately, without a flash of unstyled content.
