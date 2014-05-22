#!/bin/bash

set -o errexit

BASE="`dirname \"$0\"`"

bundle install --gemfile $BASE/Gemfile-sass

npm install
