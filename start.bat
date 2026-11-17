@echo off
chcp 65001 >nul
cd /d "%~dp0"
title GESP C++ 知识闯关

rem 查找可用的 Python
set "PY="
where python >nul 2>nul && set "PY=python"
if not defined PY where py >nul 2>nul && set "PY=py"

if not defined PY (
    echo.
    echo   [错误] 未找到 Python，无法启动本地服务。
    echo   请安装 Python 3，安装时勾选 "Add python.exe to PATH"
    echo   下载地址: https://www.python.org/downloads/
    echo.
    pause
    exit /b 1
)

rem 从 8000 开始找一个空闲端口
set "PORT="
for /l %%P in (8000,1,8020) do (
    if not defined PORT (
        netstat -ano | findstr /c:":%%P " | findstr /i "LISTENING" >nul || set "PORT=%%P"
    )
)

if not defined PORT (
    echo.
    echo   [错误] 8000-8020 端口均被占用，请关闭占用端口的程序后重试。
    echo.
    pause
    exit /b 1
)

echo.
echo   GESP C++ 知识闯关
echo   电脑访问: http://127.0.0.1:%PORT%/
echo   手机访问: 与电脑连接同一 Wi-Fi，使用下方 IPv4 地址加 :%PORT%
ipconfig | findstr /i "IPv4"
echo.
echo   服务启动后会自动打开浏览器，按 Ctrl+C 停止服务
echo.

rem 等待服务就绪后自动打开浏览器
start "" /b cmd /c "ping -n 3 127.0.0.1 >nul & start http://127.0.0.1:%PORT%/"

%PY% -m http.server %PORT% --bind 0.0.0.0

echo.
echo   服务已停止。若上方有报错信息，请截图反馈。
pause
