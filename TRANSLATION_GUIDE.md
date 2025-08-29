# Galio Translation Guide

This guide explains how to manage translations for the Galio Docusaurus project.

## Current Setup

The project is configured with:
- **Default locale**: English (`en`)
- **Additional locale**: Spanish (`es`)
- **Translation system**: Custom hook-based translations

## File Structure

```
├── src/
│   ├── i18n/
│   │   └── translations.ts          # Translation keys and values
│   ├── hooks/
│   │   └── useTranslations.ts       # Custom hook for translations
│   ├── pages/                       # Original English pages
│   └── components/                  # Components (shared)
├── i18n/
│   └── es/
│       └── docusaurus-plugin-content-pages/  # Spanish page translations
└── docusaurus.config.ts             # i18n configuration
```

## How to Use Translations

### 1. In Components

```tsx
import { useTranslations } from '../hooks/useTranslations';

export default function MyComponent() {
  const { t } = useTranslations();
  
  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.description')}</p>
    </div>
  );
}
```

### 2. Adding New Translation Keys

1. **Add to `src/i18n/translations.ts`**:

```typescript
export const translations = {
  en: {
    // ... existing translations
    newSection: {
      title: "English Title",
      description: "English description"
    }
  },
  es: {
    // ... existing translations
    newSection: {
      title: "Título en Español",
      description: "Descripción en español"
    }
  }
};
```

2. **Use in components**:

```tsx
{t('newSection.title')}
{t('newSection.description')}
```

### 3. Creating Translated Pages

For each page in `src/pages/`, create a corresponding file in:
`i18n/es/docusaurus-plugin-content-pages/`

Example:
- Original: `src/pages/examples.tsx`
- Spanish: `i18n/es/docusaurus-plugin-content-pages/examples.tsx`

### 4. Adding New Locales

1. **Update `docusaurus.config.ts`**:

```typescript
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'es', 'fr'], // Add new locale
},
```

2. **Create translation structure**:

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-pages
```

3. **Add translations to `translations.ts`**:

```typescript
export const translations = {
  en: { /* English translations */ },
  es: { /* Spanish translations */ },
  fr: { /* French translations */ }
};
```

## Current Translation Keys

### Hero Section (`hero.*`)
- `waitOver` - "The wait is Over."
- `galioHere` - "Galio is Here"
- `description` - Hero description
- `startBuilding` - "Start Building"
- `learnMore` - "Learn More →"

### Examples Page (`examples.*`)
- `title` - "Made with Galio"
- `subtitle` - "Explore Examples made with Galio-framework"
- `github` - "Github"
- `documentation` - "Documentation"
- `releases` - "Releases"
- `stars` - "Stars"
- `fork` - "Fork"
- `sponsor` - "Sponsor"
- `chat` - "Chat"

### Navigation (`nav.*`)
- `getStarted` - "Get Started"
- `starterKit` - "Starter Kit"
- `components` - "Components"
- `examples` - "Examples"

### Footer (`footer.*`)
- `docs` - "Docs"
- `galioDocs` - "Galio Docs"
- `community` - "Community"
- `previewExpo` - "Preview on Expo"
- `downloadExpo` - "Download on Expo Client"
- `scanToView` - "Scan to view on your phone"
- `downloadApp` - "Download App"
- `copyright` - Copyright text
- `communityText` - Community description

## Best Practices

1. **Use descriptive keys**: `hero.title` instead of just `title`
2. **Group related translations**: All hero-related text under `hero.*`
3. **Keep translations consistent**: Use the same terminology across components
4. **Test both languages**: Always test your changes in both English and Spanish
5. **Fallback gracefully**: The system falls back to English if a translation is missing

## Running the Development Server

```bash
# Start development server
npm run start

# Start with Spanish locale
npm run start -- --locale es

# Build for production
npm run build

# Build for specific locale
npm run build -- --locale es
```

## Adding More Components

To translate additional components:

1. **Identify hardcoded text** in the component
2. **Add translation keys** to `translations.ts`
3. **Update the component** to use `useTranslations()`
4. **Test** in both languages

## Common Patterns

### Dynamic Content
```tsx
// For content that includes variables
const { t } = useTranslations();
const year = new Date().getFullYear();
const copyright = t('footer.copyright').replace('{year}', year.toString());
```

### Conditional Translations
```tsx
// For different text based on conditions
const buttonText = isLoggedIn ? t('nav.logout') : t('nav.login');
```

## Troubleshooting

### Translation Not Showing
1. Check if the key exists in `translations.ts`
2. Verify the key path is correct (e.g., `hero.title`)
3. Ensure the component is using `useTranslations()`

### Locale Not Switching
1. Check `docusaurus.config.ts` i18n configuration
2. Verify the locale dropdown is in the navbar
3. Clear browser cache and restart dev server

### Build Errors
1. Ensure all translation keys exist for all locales
2. Check for syntax errors in translation files
3. Verify file paths in i18n directory structure

## Next Steps

1. **Translate remaining components**: Continue adding translations to other components
2. **Add more locales**: Consider adding French, German, or other languages
3. **Translate documentation**: Set up translations for the docs section
4. **Add translation management**: Consider using a translation management system for larger projects 