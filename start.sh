#!/bin/bash
export $(cat .env | xargs)
node src/bot.js