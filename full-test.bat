@echo off
echo 🌍 Full Hello World Node Test...

echo.
echo ================================
echo Phase 1: Building Package
echo ================================
call build-and-test.bat
if %ERRORLEVEL% neq 0 (
    echo ❌ Build failed
    exit /b 1
)

echo.
echo ================================
echo Phase 2: Setting up Test Environment
echo ================================
cd test-env

echo Installing n8n and dependencies...
npm install
if %ERRORLEVEL% neq 0 (
    echo ❌ Failed to install dependencies
    exit /b 1
)

echo ✅ Test environment ready

echo.
echo ================================
echo Phase 3: Manual Testing Instructions
echo ================================
echo.
echo 🚀 To test the Hello World node:
echo.
echo 1. Start n8n:
echo    npx n8n start
echo.
echo 2. Open browser: http://localhost:5678
echo.
echo 3. Create new workflow
echo.
echo 4. Look for "Hello World" node in the node panel
echo.
echo 5. Add the node and configure:
echo    - Name: Your name
echo    - Message Type: Choose style
echo    - Include Timestamp: true/false
echo.
echo 6. Execute and check output
echo.
echo Expected output structure:
echo {
echo   "helloWorld": {
echo     "success": true,
echo     "message": "Hello, [Name]!",
echo     "name": "[Name]",
echo     "messageType": "[Type]",
echo     "nodeVersion": "1.0.0",
echo     "timestamp": "[ISO Date]"
echo   }
echo }
echo.
echo ================================
echo Ready to start n8n? (Press any key)
echo ================================
pause

echo Starting n8n...
npx n8n start
