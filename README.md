# [Islamic Prayer Times](https://islamic-prayer-time.herokuapp.com/)

[![Mozilla Add-on](https://img.shields.io/amo/users/islamic-prayer-times?style=social&logo=firefox)](https://addons.mozilla.org/en-US/firefox/addon/islamic-prayer-times/)
[![Mozilla Add-on](https://img.shields.io/amo/dw/islamic-prayer-times?style=social&logo=firefox)](https://addons.mozilla.org/en-US/firefox/addon/islamic-prayer-times/)
[![Mozilla Add-on](https://img.shields.io/amo/stars/islamic-prayer-times?style=falt&logo=firefox)](https://addons.mozilla.org/en-US/firefox/addon/islamic-prayer-times/)

[![Docker](https://img.shields.io/badge/-Docker_Image-2497EC?style=for-the-badge&logoColor=fff&logo=docker)](https://hub.docker.com/r/mohamedhafez/islamic_prayer_times)

A web Application that provides You with **Hijri Date**, **Prayer Times**, and **The Remaining Time to the next prayer** depending on your time zone.

Go to [Islamic Prayer Times](https://islamic-prayer-time.herokuapp.com/)

![App preview](https://pbs.twimg.com/media/Fbff2VwXkAQ4knt?format=jpg&name=large)

## Table of Contents

- [General info](#general-info)
- [Features](#features)
- [Clone](#clone)
- [Extension](#extension)
- [Inspiration](#inspiration)
- [License](#license)

## General info

Islamic Prayer Times is a web app that uses **[AlAdhan.com](https://aladhan.com/prayer-times-api)** API to provide the user with **Hijri date**, **Prayers times**;


## Features

1. Current time ( in 12 formats)
2. Hijri Date
3. The prayers times for one day



- Location
  - let the app detect your location to present prayer times for your Time zone.
  - If you block location detecting it will present Loading data for the default location .
  
         press Allow
  
  - To check the used time zone *press the gear icon on the bottom right* corner The time zone will be displayed at the bottom of the app

## Clone

To clone and run this application, you'll need Git and npm (which comes with Node.js) installed on your computer.
From your command line:

1. Clone this repository
  `git clone https://github.com/NatourTech/PrayerTime.git`
2. Go into the repository
  `cd ipt`
3. Install dependencies
  `npm install`
4. Run the app
  `npm start`
5. when it opens in your browser it will ask for detecting your location choose *Allow*

## Extension



### Build for firefox

- Open [package.json](./package.json) and make sure that **homepage** set to **.** the current directory

  ```json
  "homepage": "."
  ```

- Open [manifest.json](./public/manifest.json) in the public directory and make sure that **manifest_version** is set to **2**

  ```json
  "manifest_version": 2,
  ```

- Now run buildextension script

  ```bash
  npm run buildextension
  ```

### Build for Chrome

- Open [package.json](./package.json) and make sure that **homepage** set to **.** the current directory

  ```json
  "homepage": "."
  ```

- Open [manifest.json](./public/manifest.json) in the public directory and make sure that **manifest_version** is set to **3**

  ```json
  "manifest_version": 3,
  ```

- Now run buildextension script

  ```bash
  npm run buildextension
  ```

## Inspiration

- This project was inspired by a chrome extension called **[Islamway Ramadan | ???????? ??????????????](https://chrome.google.com/webstore/detail/islamway-ramadan-%D8%B7%D8%B1%D9%8A%D9%82-%D8%A7%D9%84%D8%A5/mcbgkoikidgnmbekipnnhhhjhcaioflb)** which is powered by **[Islamway](https://ar.islamway.net/)** website.

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- Licensed under the **[MIT license](LICENSE)**
- Copyright (c) 2022 Mohamed Natour
