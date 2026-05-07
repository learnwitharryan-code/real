@echo off
echo ===================================================
echo     RISHI.MOTION - PORTFOLIO AUTO-SYNC SYSTEM
echo ===================================================
echo.
echo Scanning public folder for new videos...
call node scripts/sync-videos.js

echo.
echo Packaging changes for the live site...
call git add .
call git commit -m "Auto-sync: update showcase videos"

echo.
echo Pushing updates to the live site...
call git push

echo.
echo ===================================================
echo DONE! Your site is currently updating online.
echo It may take up to 60 seconds for the live site to 
echo reflect these changes.
echo ===================================================
echo.
pause
