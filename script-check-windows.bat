@ECHO OFF

echo "start timeout 7m npm run develop"

if %errorlevel%==124 (echo "npm run develop runs successfully") else (EXIT /B 1)

echo "start npm run build"
