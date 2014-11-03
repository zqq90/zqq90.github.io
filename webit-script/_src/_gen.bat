chcp 65001

@echo off
cd /d %~dp0

for %%i in (*.md) do (
type _header.html > ../%%~ni.html
kramdown %%i >> ../%%~ni.html
type _footer.html >> ../%%~ni.html
)

