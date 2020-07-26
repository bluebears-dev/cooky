# Cooky

Table of Contents
=================
 * [Environment setup](#environment-setup)
     * [SDK setup and emulator](#sdk-setup-and-emulator)
        * [IntelliJ tips](#intellij-tips)
     * [Install dependencies and configure IDE](#install-dependencies-and-configure-ide)


## Environment setup

To get started you'll have to prepare:
* git (*obviously*)
* IDE of your choice (preferred are IntelliJ or WebStorm),
* [nvm](https://github.com/nvm-sh/nvm) - Node Version Manager,
* Android SDK alongside with [Android Studio](https://developer.android.com/studio),
* [watchman](https://facebook.github.io/watchman/docs/install.html)
* [React Native Debugger](https://github.com/jhen0409/react-native-debugger)

### SDK setup and emulator

Open up the Android Studio, you'll probably be greeted with setup screen. **Install at least SDK for Android 9.0**. After getting through the initial setup, create a device emulator (*Tools > AVD Manager*) using previously downloaded SDK.

#### IntelliJ tips

You might be using the *AVD Manager* option quite frequently. I recommend enabling a toolbar which has it shown by clicking *View > Appearance > Toolbar*.

### Install dependencies and configure IDE

After you navigate to project root directory, you'll want to download everything needed to start developing new features. Run these commands:
* `nvm use` - set the correct version of the NodeJS
    * if doing it for the first time, you might want to `nvm install` before to have the NodeJS version installed
    * you might want to check out the plugin for the shell you're using, which will do it automatically if it detects the `.nvmrc` file
* `npm i` - install dependencies from `package.json`

Now you'll need to integrate ESLint and Prettier with your IDE. For IntelliJ you can open up the `.eslintrc.json` and click *Apply ESLint Code Style Rules*. 

You'll also want to modify the default auto-format shortcut to use *Fix ESLint Problems* as IntelliJ for some reason can't handle the Prettier preset with ESLint (*Settings > Keymap* and search for it).

