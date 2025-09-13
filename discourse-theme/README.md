# Minimal freeCodeCamp Discourse Theme

A minimal, maintainable Discourse theme that provides essential freeCodeCamp branding and navigation while keeping customizations to a minimum.

## Features

✅ **Universal Navigation Bar** - Consistent navigation across the freeCodeCamp ecosystem
✅ **Curriculum Link** - Direct access to freeCodeCamp's learning curriculum
✅ **Complete Logo** - Full freeCodeCamp branding on both desktop and mobile
✅ **freeCodeCamp Color Variables** - Colors mapped to the official design style guide
✅ **Minimal CSS** - Only essential customizations to reduce maintenance burden
✅ **Square Button Design** - Buttons styled to match freeCodeCamp's design system
✅ **Enhanced Hover States** - Improved accessibility and user feedback
✅ **Mobile Responsive** - Works seamlessly across all device sizes

## Installation

1. Go to your Discourse Admin panel
2. Navigate to **Customize** → **Themes**
3. Click **Install** → **From a git repository**
4. Enter the repository URL or upload the theme files
5. Click **Install**
6. **Activate** the theme

## Theme Structure

```
discourse-theme/
├── about.json           # Theme metadata
├── settings.yml         # Customizable theme settings
├── common/
│   ├── common.scss     # Main stylesheet with freeCodeCamp design system
│   └── header.html     # Universal navigation header
├── mobile/
│   └── mobile.scss     # Mobile-specific responsive styles
└── README.md           # This documentation
```

## Customization Options

The theme includes several customizable settings accessible through the Discourse admin panel:

### Navigation Settings
- **Show Curriculum Link** - Toggle curriculum link visibility
- **Show News Link** - Toggle news link visibility  
- **Show Donate Link** - Toggle donate link visibility

### URL Configuration
- **Main Site URL** - URL for the main freeCodeCamp site
- **Curriculum URL** - URL for the curriculum/learn page
- **News URL** - URL for the news page
- **Donate URL** - URL for the donate page

### Branding
- **Custom Logo Text** - Customize the logo text (default: "freeCodeCamp")

## Design System

The theme uses freeCodeCamp's official color palette:

- **Primary Theme Color**: `#0a0a23` (Navy Blue)
- **Accent Color**: `#ffbf00` (Golden Yellow)
- **Typography**: Lato (sans-serif), Hack-ZeroSlash (monospace)
- **Button Style**: Square corners, subtle hover animations
- **Focus States**: Accessible blue outline for keyboard navigation

## Browser Support

- ✅ Chrome/Chromium 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Development

### Making Changes

1. Edit the relevant files in the theme directory
2. Test changes on a staging Discourse instance
3. Update version in `about.json` if making significant changes
4. Document any new customization options in this README

### CSS Architecture

The theme follows a minimal approach:
- Uses CSS custom properties for consistent theming
- Leverages Discourse's existing styles where possible
- Adds only essential customizations
- Maintains mobile-first responsive design

### Performance Considerations

- Minimal CSS footprint
- No external font loading (uses system fonts as fallback)
- Optimized for fast loading on all devices
- Uses efficient CSS selectors

## Troubleshooting

### Universal Navigation Not Showing
1. Ensure the theme is activated
2. Check that the header template is properly loaded
3. Verify no conflicting themes are active

### Styling Issues
1. Clear browser cache
2. Check for CSS conflicts with other themes/plugins
3. Verify theme settings are configured correctly

### Mobile Layout Problems
1. Test on actual mobile devices, not just browser dev tools
2. Check viewport meta tag is present in Discourse
3. Verify mobile.scss is loading correctly

## Contributing

When contributing to this theme:

1. Keep customizations minimal
2. Follow freeCodeCamp's design system
3. Ensure accessibility standards are met
4. Test across multiple browsers and devices
5. Update documentation for any new features

## License

This theme is part of the freeCodeCamp project and follows the same BSD-3-Clause license.

## Support

For theme-related issues:
1. Check this documentation first
2. Search existing GitHub issues
3. Create a new issue with detailed reproduction steps

---

**Note**: This is a minimal theme designed to reduce maintenance overhead while providing essential freeCodeCamp branding. If you need extensive customizations, consider creating a fork rather than modifying the core theme.