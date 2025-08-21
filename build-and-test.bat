@echo off
echo Building n8n-nodes-hello-world...

echo.
echo Step 1: Installing dependencies...
npm install

echo.
echo Step 2: Building TypeScript...
npm run build

echo.
echo Step 3: Verifying build...
if exist "dist\nodes\HelloWorld.node.js" (
    echo ✅ Node file created successfully
) else (
    echo ❌ Node file not found
    exit /b 1
)

if exist "dist\index.js" (
    echo ✅ Index file created successfully
) else (
    echo ❌ Index file not found
    exit /b 1
)

echo.
echo Step 4: Creating package...
npm pack

echo.
echo Step 5: Verifying package...
if exist "n8n-nodes-hello-world-1.0.0.tgz" (
    echo ✅ Package created: n8n-nodes-hello-world-1.0.0.tgz
    echo.
    echo 🎉 Hello World node is ready!
    echo.
    echo Next steps:
    echo 1. Test locally: npm install -g ./n8n-nodes-hello-world-1.0.0.tgz
    echo 2. Or publish: npm publish
    echo 3. Then install via n8n Community Nodes
    echo.
) else (
    echo ❌ Package creation failed
    exit /b 1
)

pause
