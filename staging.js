// staging.js - Configuration and fixes for .dev pointing to staging exam environment

const environment = 'staging';

// Fix exam download URL to use staging '/latest/' release
const EXAM_DOWNLOAD_URL = 'https://staging.freecodecamp.dev/exam/latest/';

// Function to determine if the token widget should be shown
function shouldShowTokenWidget(user) {
  // Assuming user object has isAuthorized flag for permissions
  if (user && user.isAuthorized) {
    return true;  // Show widget for authorized users only
  }
  return false;   // Hide widget for non-authorized users
}

// Example usage:
// Later in your React or front-end code, control rendering of token widget with:
const currentUser = getCurrentUser(); // Fetch current user info from auth

const showTokenWidget = shouldShowTokenWidget(currentUser);

export {
  environment,
  EXAM_DOWNLOAD_URL,
  shouldShowTokenWidget,
};
