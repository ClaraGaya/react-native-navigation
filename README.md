This project aims to be a strong foundation for react-native applications. It provides a clear and organized structure, core dependencies, and boilerplate to jumpstart development.


## Prerequisites

Node.js > 12 and npm (Recommended: Use nvm)
Watchman
Xcode 12
Cocoapods 1.10.1
JDK > 11
Android Studio and Android SDK

## Project template

TypeScript template: npx react-native init ProjectName --template typescript

## Base dependencies

react-native-config to manage envionments.
react-navigation navigation library.

## Installation

```bash
npm i
npx pod-install 
```

## Usage

Running the app with different environments

```bash
npx react-native run-ios --scheme "dev"
npx react-native run-android --variant=devDebug
```
