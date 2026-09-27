@echo off
title PureStream - Ad-Free Student Study & Music Hub
echo ========================================================
echo Starting PureStream Ad-Free YouTube Player...
echo ========================================================

start "" /B node server.js
timeout /t 2 /nobreak >nul
start "" http://localhost:3000

echo.
echo PureStream is LIVE at http://localhost:3000
echo Browser has been opened!
echo.
echo Tip: Keep this window open while studying. You can minimize it.
echo ========================================================
pause
