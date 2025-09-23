# Challenge Map API

## Overview

The Challenge Map API provides a hash map of all active challenges in the freeCodeCamp curriculum. This endpoint is designed for FCC Classroom integration to resolve students' completed challenge data against the current curriculum structure.

## Endpoint

### GET /challenge-map

Returns a complete mapping of all active challenges from the curriculum structure.

#### Response Format

```json
{
  "success": true,
  "challengeMap": {
    "challenge-id-1": {
      "title": "Challenge Title",
      "block": "block-name",
      "superblock": "superblock-name"
    },
    "challenge-id-2": {
      "title": "Another Challenge",
      "block": "another-block",
      "superblock": "another-superblock"
    }
  },
  "totalChallenges": 1500,
  "generatedAt": "2024-01-15T10:30:00.000Z"
}
```

#### Response Fields

- `success` (boolean): Indicates if the request was successful
- `challengeMap` (object): Hash map where keys are challenge IDs and values contain:
  - `title` (string): Human-readable challenge title
  - `block` (string): Block name the challenge belongs to
  - `superblock` (string): Superblock name the challenge belongs to
- `totalChallenges` (number): Total number of active challenges
- `generatedAt` (string): ISO timestamp when the map was generated

#### Error Response

```json
{
  "success": false,
  "error": "Failed to build challenge map"
}
```

## Usage for FCC Classroom Integration

### Filtering User Challenge Data

Use the challenge map to filter user's completed challenges against the current curriculum:

```javascript
// Example usage
const response = await fetch('/challenge-map');
const { challengeMap } = await response.json();

// Filter user's completed challenges
const activeCompletedChallenges = userCompletedChallenges.filter(
  challenge => challengeMap.hasOwnProperty(challenge.id)
);
```

### Handling Deprecated Challenges

The API automatically excludes deprecated challenges. Any challenge IDs from user data that don't exist in the current curriculum structure should be filtered out:

- ✅ **Include**: Challenges present in the challenge map
- ❌ **Exclude**: Challenges not present in the challenge map (deprecated)

### Example: Processing Test User Data

```javascript
import { filterActiveUserChallenges } from '../utils/filter-user-challenges.js';

// Get challenge map
const challengeMapResponse = await fetch('/challenge-map');
const { challengeMap } = await challengeMapResponse.json();

// Process user data from user-data.js
const activeCompletedChallenges = filterActiveUserChallenges(
  userData.completedChallenges,
  challengeMap
);

console.log(`Filtered ${userData.completedChallenges.length - activeCompletedChallenges.length} deprecated challenges`);
```

## Performance Considerations

- The challenge map is built from the file system on each request
- Consider caching the response for production use
- The endpoint reads from `/curriculum/structure/` directory
- Response size is approximately 100-200KB depending on curriculum size

## Error Handling

The endpoint handles various error scenarios:

1. **File System Errors**: Missing curriculum files are logged but don't stop processing
2. **JSON Parse Errors**: Invalid JSON files are skipped with warnings
3. **Missing Directories**: Gracefully handles missing superblock/block directories

## Testing

Run the test suite:

```bash
npm test -- challenge-map.test.ts
```

The tests verify:
- Correct response structure
- Presence of known challenge IDs
- Error handling
- Performance characteristics