#!/bin/bash
set -e

cd /app && \
npm install && \
npm run build && \
npm run dev
