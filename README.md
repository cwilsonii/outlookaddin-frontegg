# AutoClassifier Add-in for Microsoft Outlook

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.3.

- [AutoClassifier Add-in for Microsoft Outlook](#autoclassifier-add-in-for-microsoft-outlook)
  - [Introduction](#introduction)
  - [Running Locally](#running-locally)
    - [Prerequisites](#prerequisites)
      - [MacOS](#macos)
    - [Installing and Running the Add-in](#installing-and-running-the-add-in)
      - [MacOS](#macos-1)
    - [Debugging](#debugging)
      - [Windows](#windows)
      - [Mac](#mac)
  - [Testing](#testing)
  - [Formatting](#formatting)
  - [Linting](#linting)
  - [Further help](#further-help)

## Introduction

The Frontegg Angular Add-in for Microsoft Outlook is a small web app that integrates Frontegg with Office.js

## Running Locally

### Prerequisites

#### MacOS

1. Install [Outlook for Mac](https://www.microsoft.com/en-us/microsoft-365/outlook/outlook-for-mac)

   a. **NOTE: Debugging add-ins with Office on Mac is possible ONLY if Office is installed from [Office.com](https://portal.office.com/account/?ref=Harmony#installs), NOT the Apple app store. If you do not want to be able to debug using Safari Dev Tools, installing from the Apple app store is fine.**

### Installing and Running the Add-in

#### MacOS

1. In terminal:

   a. Open a terminal in the repository's root directory

   b. Install dependencies using npm:

   ```sh

   npm  install

   ```

   d. Start the development server:

   ```sh

   npm run start

   ```

2. In Outlook for Mac:

   a. Select the ellipsis (…) button in the top ribbon toolbar

   ![image](https://github.com/cwilsonii/softdocsdocprocessing/assets/55599829/60c4c22a-2505-49ba-956d-99aa19822c1f)

   b. From the ellipsis menu, select the _Get Add-ins button_

   ![image](https://github.com/cwilsonii/softdocsdocprocessing/assets/55599829/b18b5a62-1730-4c3a-85a1-831578fb1bff)

   c. From the _Office Add-ins menu_, select _My add-ins_ in the left side bar

   ![image](https://github.com/cwilsonii/softdocsdocprocessing/assets/55599829/8e7d3c2e-ff9c-467a-a214-4f7de1ec8fd6)

   d. Scroll down to the _Custom Addins_ section and select _Add a custom add-in_

   ![image](https://github.com/cwilsonii/softdocsdocprocessing/assets/55599829/ec064a33-2f69-4594-b9e2-f2645de057ae)

   e. _Select Add from File…_

   ![image](https://github.com/cwilsonii/softdocsdocprocessing/assets/55599829/097c40eb-3e94-41cd-aa20-426465032de6)

   f. In Finder, select the add-in’s _manifest.xml_ file and select _Open_. This manifest file will be in the add-in’s root directory

   ![image](https://github.com/cwilsonii/softdocsdocprocessing/assets/55599829/444de86a-bbd5-402f-b3de-c2f7e9e5fd67)

   g. In the _Warning_ pop-up dialog, select _Install_

   ![image](https://github.com/cwilsonii/softdocsdocprocessing/assets/55599829/5aeac232-19ba-431f-a967-31d99833acbe)

   h. The add-in should now be installed and will pop up in the _Custom addins_ list. It should also now be available in Outlook for testing - it can be accessed from the top ribbon toolbar or from the ellipsis menu in the top menu bar

   <img width="529" alt="image" src="https://github.com/cwilsonii/softdocsadd-in/assets/55599829/e3310716-02e6-497b-8080-da3f6750c3d2">

   <img width="1023" alt="image" src="https://github.com/cwilsonii/softdocsadd-in/assets/55599829/ca82b6cc-b80a-4be8-8795-b76f7e149996">

   i. If this is the first install of the add-in, Outlook may ask you to verify the certificate for localhost. If so, trust the certificate and continue.

   <img width="583" alt="image" src="https://github.com/cwilsonii/softdocsadd-in/assets/55599829/d3cb276b-4757-4fac-aca8-250a90b5117b">

3. In Safari:

   a. After following the steps above to sideload the add-in into Outlook for Mac, open Safari and navigate to Outlook on the web

   b. Once signed in, select any email from your inbox

   c. In the top right of the email, select the _Apps_ button

   ![image](https://github.com/cwilsonii/softdocsdocprocessing/assets/55599829/d3001bcc-a8d7-48b3-a03a-081abd81590d)

   d. The add-in that was installed in the previous section should appear in the _Apps_ menu for use. Select it to use it.

   <img width="331" alt="image" src="https://github.com/cwilsonii/softdocsadd-in/assets/55599829/cbe88aad-1aa6-46a9-a1e4-93e3fa7b5632">

### Debugging

#### Windows

https://learn.microsoft.com/en-us/office/dev/add-ins/testing/debug-add-ins-overview#debug-on-windows

- [Use a browser's developer tools](https://learn.microsoft.com/office/dev/add-ins/testing/debug-add-ins-in-office-online)
- [Attach a debugger from the task pane](https://learn.microsoft.com/office/dev/add-ins/testing/attach-debugger-from-task-pane)
- [Use F12 developer tools on Windows 10](https://learn.microsoft.com/office/dev/add-ins/testing/debug-add-ins-using-f12-developer-tools-on-windows-10)

#### Mac

Any add-in that shows UI in a task pane or in a content add-in can be debugged using Safari Web Inspector.

1. In a terminal set `OfficeWebAddinDeveloperExtras` for Outlook to true:

   ```sh
   defaults write com.microsoft.Outlook OfficeWebAddinDeveloperExtras -bool true
   ```

2. Sideload the add-in to Outlook. For more information on sideloading add-ins on Mac, see [Sideload Outlook add-ins for testing](https://learn.microsoft.com/en-us/office/dev/add-ins/outlook/sideload-outlook-add-ins-for-testing?tabs=windows)

3. Right-click the add-in and select _Inspect Element_. This should open the Safari Web Inspector, where you can debug the add-in

**Note:** Debugging add-ins with Office on Mac is possible ONLY if Office is intalled from Office.com, NOT the Apple app store

## Testing

1. Run tests:

```sh
npm run test
```

## Formatting

1. Format the code via [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) by running

```sh
npm run format
```

2. List formatting issues without writing the changes, run:

```sh
npm run format:check
```

## Linting

1. Code linting performed via [ESLint](https://eslint.org/) by running

```sh
npm run lint
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
