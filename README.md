# Issue: Route Redirect in Expo Stack Navigation (Web)

## Issue Description
In the current Expo Stack Navigation setup, navigating directly to specific routes via the browser by pasting the URL results in an automatic redirect to the index page on the web platform. This issue prevents users from accessing deep-linked pages directly, impacting usability in cases where users expect to access specific sub-pages without needing to start from the home (index) page.

## Key Points of the Issue

1. **Route Redirect**: Navigating to a specified route link in the browser defaults to the index page, regardless of the intended path.
2. **Platform Specific**: This issue is isolated to the web environment.
3. **User Experience Impact**: Prevents direct access to sub-pages via the browser, which can disrupt the user journey.
4. **Intended Routing Behavior**: Expected behavior is for the URL to route the user directly to the intended sub-page without manual intervention.

