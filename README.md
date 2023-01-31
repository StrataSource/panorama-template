# Panorama Template
A template for Portal 2: Community Edition that contains everything needed to get panorama up and running for your mod.

## Documentation
For more documentation on how Chaos uses Panorama, please check out the official [documentation](https://chaosinitiative.github.io/Wiki/docs/Panorama).

## Folder Structure
* ``fonts/`` Contains custom fonts. Must be .ttf or .vfont files.
* ``layout/`` This folder contains all xml layout files.
* ``images/`` This folder contains svgs and images.
* ``scripts/`` This folder contains scripts that are loaded by layout files.
* ``styles/`` This folder contains stylesheets loaded by layout files. Can be CSS/SASS/SCSS
* ``media/`` This folder contains media styles such as background videos.


* ``dev_keybinds.cfg`` These keybinds will be loaded when ``-dev`` is set as a startup option
* ``panorama.cfg`` This is a configuration file that defines alias paths for panorama
* ``default_keybinds.cfg`` This file contains default keybinds

## Linting
This project uses ESLint for linting. To install it, first make sure you have NodeJS installed. After running ``npm install`` in your terminal, you have access to the following scripts.
* ``npm run lint`` - This script runs a codestyle check on your project and returns warnings and errors in your terminal.
* ``npm run fix`` - This script attempts to automatically fix any warnings and errors.
