export default {
    preset: 'jest-expo',
    transformIgnorePatterns: [
        'node_modules/(?!(jest-)?react-native|@react-native|react-native-.*|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|expo-font|expo-asset|expo-constants|@unimodules/.*|unimodules|sentry-expo|native-base|@react-navigation|@testing-library|@octane-ui|@design-system)',
    ],
}