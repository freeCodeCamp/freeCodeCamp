# Bluesky Profile Implementation Analysis

## Existing Social Profile Patterns

### Current Fields
- GitHub: stored as `githubProfile` 
- Twitter: stored as `twitter`
- LinkedIn: stored as `linkedin`

### UI Components
- Located in: `client/src/components/settings/ProfileSettings.jsx`
- Icon components: `client/src/components/icons/`
- Social links: `client/src/components/profile/SocialLinks.jsx`

### Validation Patterns
- URL validation in: `client/src/utils/`
- Server validation in: `server/models/User.js`

### API Endpoints
- Profile update: `PUT /api/users/user-profile`
- Profile get: `GET /api/users/user-profile`

## Implementation Plan
1. Add `blueskyProfile` field to User model
2. Create validation utilities
3. Update UI components
4. Add comprehensive tests