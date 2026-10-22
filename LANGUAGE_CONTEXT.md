# Language switcher and React Context

The language switcher changes the visible page text between English and Hindi.
React Context shares the selected language with the navbar and every route,
without passing it through each component as a prop.

## How it works

1. `LanguageProvider` in `src/context/LanguageProvider.jsx` owns the selected
   language (`en` or `hi`) and provides matching text from
   `src/context/translations.js`.
2. `src/main.jsx` wraps the app in `LanguageProvider`, making that shared value
   available to the navbar and route pages.
3. The navbar in `src/App.jsx` calls `toggleLanguage` when the language button
   is clicked.
4. `Home`, `About`, and `NotFound` call `useLanguage()` and display text from
   the shared translations. React re-renders them when the selected language
   changes.
5. The provider also updates the document's `lang` attribute to `en` or `hi`.

## Add or change translated text

Add the same key to both `en` and `hi` in `src/context/translations.js`. Then
read it in a component with
`const { text } = useLanguage()` from `src/context/useLanguage.js` and render
the matching `text` property.

`useLanguage()` must be called by a component rendered inside
`LanguageProvider`; it reports an error if used outside the provider.
