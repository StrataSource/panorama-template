#!/bin/bash
# Get latest types file and cram it into scripts

wget "https://github.com/panorama-languages-support/panorama-jsdoc-gen/releases/latest/download/types_p2ce.zip"

tar -xvf types_p2ce.zip

rm -v types_p2ce.zip

mv -v __types_p2ce.js ../scripts/

exit
