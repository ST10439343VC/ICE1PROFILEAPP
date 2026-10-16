This is an Expo/React Native application. Prioritize mobile-first patterns, performance, accessibility, and cross-platform compatibility.

## Project structure

- `App.tsx` is the root application component and the current screen implementation.
- `index.ts` registers `App` with Expo; keep it as the app entry point.
- `app.json` contains Expo app identity and platform configuration.
- There is currently no navigation library or `src/app/` route tree. Do not assume Expo Router is installed; follow the existing structure unless navigation is explicitly introduced.
- Keep TypeScript strict and follow the existing React Native style patterns.

## Expo has changed — do not trust your training data

Expo ships breaking changes every SDK release. APIs you remember are likely renamed, moved, or removed. Before writing any code that touches an Expo, EAS, or React Native API:

1. Read the major version of the `expo` package in `package.json`.
2. Fetch the matching versioned docs: `https://docs.expo.dev/versions/v<major>.0.0/`
3. For anything else, fetch https://docs.expo.dev/llms.txt — an index of all Expo docs with corrections to common LLM misconceptions. Follow its links to the specific page you need; never answer from memory.

## Package management and commands

This repository uses npm (`package-lock.json` is present). Use `npx expo install <package>` for Expo and React Native dependencies so versions match the installed SDK; use npm for other packages. Do not switch package managers or create a second lockfile.

Available scripts are `npm start`, `npm run android`, `npm run ios`, and `npm run web`. Validate TypeScript changes with `npx tsc --noEmit`. There is no lint script currently; do not report lint as run unless a lint command has been configured.

Useful Expo checks:

```bash
npx expo-doctor
npx expo install --fix
```

Use `npx expo install --fix` only when checking or repairing SDK package compatibility, not as a routine command.

## Navigation & Routing

No navigation is configured yet. For a request that adds navigation, first confirm the desired navigation approach and consult the matching Expo SDK documentation before installing or using a router.

## Building with EAS

Use EAS to build, sign, and submit the app in the cloud (`eas build`, `eas submit`) and to ship over-the-air updates (`eas update`) when requested. Run EAS CLI as `npx eas-cli@latest <command>` for this npm project; substitute that for bare `eas` in docs examples.
Docs: https://docs.expo.dev/eas/index.md

## Rules

- If `ios/` and `android/` directories do not exist, they are generated (Continuous Native Generation). Never create or edit them by hand — configure native behavior in `app.json` and config plugins.
- Expo Go only includes its bundled native modules. After adding a library with native code, the app needs a development build: `npx expo run:ios|android` locally, or `eas build --profile development`.
- Prefer recommended Expo modules over third-party libraries, and check your available skills before adding dependencies. Docs: https://docs.expo.dev/versions/latest/index.md
