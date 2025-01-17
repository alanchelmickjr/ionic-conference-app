# Ionic Angular Conference Application

This application is purely a kitchen-sink demo of the Ionic Framework and Angular.

**There is not an actual Ionic Conference at this time.** This project is just to show off Ionic components in a real-world application. Please go through the steps in [CONTRIBUTING](https://github.com/ionic-team/ionic-conference-app/blob/master/.github/CONTRIBUTING.md) before submitting an issue.

## React and Vue Versions

We've built versions of this Conference app in React and Vue for developers that would prefer to use one of those framework options:

[https://github.com/ionic-team/ionic-react-conference-app](https://github.com/ionic-team/ionic-react-conference-app)

[https://github.com/ionic-team/ionic-vue-conference-app](https://github.com/ionic-team/ionic-vue-conference-app)

## Table of Contents
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [App Preview](#app-preview)
- [Deploying](#deploying)
  - [Progressive Web App](#progressive-web-app)
  - [Android](#android)
  - [iOS](#ios)


## Getting Started

* [Download the installer](https://nodejs.org/) for Node LTS.
* Install the ionic CLI globally: `npm install -g ionic`
* Clone this repository: `git clone https://github.com/ionic-team/ionic-conference-app.git`.
* Run `npm install` from the project root.
* Run `ionic serve` in a terminal from the project root.
* Profit. :tada:

_Note: See [How to Prevent Permissions Errors](https://docs.npmjs.com/getting-started/fixing-npm-permissions) if you are running into issues when trying to install packages globally._

## Contributing

See [CONTRIBUTING.md](https://github.com/ionic-team/ionic-conference-app/blob/master/.github/CONTRIBUTING.md) :tada::+1:


## App Preview

### [Menu](https://github.com/ionic-team/ionic-conference-app/blob/master/src/app/pages/menu/menu.html)

| Material Design  | iOS  |
| -----------------| -----|
| ![Android Menu](/resources/screenshots/android-menu.png) | ![iOS Menu](/resources/screenshots/ios-menu.png) |


### [Puzzles Page](https://github.com/ionic-team/ionic-conference-app/blob/master/src/app/pages/puzzles/puzzles.html)

| Material Design  | iOS  |
| -----------------| -----|
| ![Android Puzzles](/resources/screenshots/android-puzzles.png) | ![iOS Puzzles](/resources/screenshots/ios-puzzles.png) |

### [My Puzzles Page](https://github.com/ionic-team/ionic-conference-app/blob/master/src/app/pages/mypuzzles-list/mypuzzles-list.html)

| Material Design  | iOS  |
| -----------------| -----|
| ![Android My Puzzles](/resources/screenshots/android-mypuzzles.png) | ![iOS My Puzzles](/resources/screenshots/ios-mypuzzles.png) |

### [Mypuzzles Detail Page](https://github.com/ionic-team/ionic-conference-app/blob/master/src/app/pages/mypuzzles-detail/mypuzzles-detail.html)

| Material Design  | iOS  |
| -----------------| -----|
| ![Android Mypuzzles Detail](/resources/screenshots/android-mypuzzles-detail.png) | ![iOS Mypuzzles Detail](/resources/screenshots/ios-mypuzzles-detail.png) |

### [About Page](https://github.com/ionic-team/ionic-conference-app/blob/master/src/app/pages/about/about.html)

| Material Design  | iOS  |
| -----------------| -----|
| ![Android About](/resources/screenshots/android-about.png) | ![iOS About](/resources/screenshots/ios-about.png) |


## Deploying

### Progressive Web App

1. Un-comment [these lines](https://github.com/ionic-team/ionic2-app-base/blob/master/src/index.html#L21)
2. Run `ionic build --prod`
3. Push the `www` folder to your hosting service

### Android

1. Run `ionic cordova run android --prod`

### iOS

1. Run `ionic cordova run ios --prod`
