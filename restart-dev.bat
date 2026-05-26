@echo off
REM Delete Next.js build cache
echo Clearing Next.js cache...
if exist .next rmdir /s /q .next
if exist node_modules\.cache rmdir /s /q node_modules\.cache
echo Cache cleared!
echo.
echo Starting dev server...
npm run dev
