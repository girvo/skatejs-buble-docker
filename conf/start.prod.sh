#!/bin/bash
set -e

cd /app && \
npm install --only=dev && \
npm run build && \
npm run start
