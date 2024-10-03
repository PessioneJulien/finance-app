/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
  },
  dark: {
    text: '#dcdbdd',
    background: '#08080a',
    tint: tintColorDark,
    icon: '#dcdbdd',
    componentBackground: '#1f1f1f',
    positiveActionView: '#0c2a1a',
    negativeActionView: '#2a0c0c',
    // textes are green and red but must be seen on the background
    positiveActionText: '#63c67c',
    negativeActionText: '#c66363',
  },
};
