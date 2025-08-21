# 🌍 Hello World n8n Node - Testing Guide

## Overview

This is a minimal Hello World node to test n8n Community Node functionality. It helps verify if package loading issues are environmental or specific to complex nodes.

## 🚀 Quick Start

### Option 1: Automated Test
```batch
full-test.bat
```

### Option 2: Manual Steps

**1. Build the package:**
```batch
build-and-test.bat
```

**2. Navigate to test environment:**
```batch
cd test-env
```

**3. Start n8n:**
```batch
npx n8n start
```

**4. Open browser:** http://localhost:5678

## 🔍 What to Test

### Node Visibility
- [ ] "Hello World" node appears in node panel
- [ ] Node has hand-wave icon
- [ ] Node is in "Transform" category

### Node Configuration
- [ ] **Name** field (string input)
- [ ] **Message Type** dropdown with 3 options:
  - Simple Hello
  - Formal Greeting  
  - Enthusiastic
- [ ] **Include Timestamp** checkbox

### Node Execution
- [ ] Node executes without errors
- [ ] Output contains `helloWorld` object
- [ ] Message format changes based on type selection
- [ ] Timestamp appears when enabled

## 📋 Expected Output

### Simple Hello (default):
```json
{
  "helloWorld": {
    "success": true,
    "message": "Hello, World!",
    "name": "World",
    "messageType": "simple",
    "nodeVersion": "1.0.0",
    "timestamp": "2024-01-15T10:30:00.000Z"
  }
}
```

### Formal Greeting:
```json
{
  "helloWorld": {
    "success": true,
    "message": "Good day, John! It's a pleasure to meet you.",
    "name": "John",
    "messageType": "formal",
    "nodeVersion": "1.0.0"
  }
}
```

### Enthusiastic:
```json
{
  "helloWorld": {
    "success": true,
    "message": "Hello there, Sarah! 🎉 Great to see you!",
    "name": "Sarah",
    "messageType": "enthusiastic",
    "nodeVersion": "1.0.0"
  }
}
```

## 🧪 Test Results Analysis

### ✅ If Hello World Works:
- **Package structure is correct**
- **n8n Community Node loading works**
- **Issue is likely with SICS adapter complexity**

**Next Steps:**
1. Use this structure as template
2. Gradually add SICS features
3. Identify which feature causes loading issues

### ❌ If Hello World Fails:
- **Environment issue (n8n version, Node.js, etc.)**
- **General package loading problem**
- **Installation method issue**

**Next Steps:**
1. Check n8n version compatibility
2. Try different installation methods
3. Check Node.js version
4. Verify npm/pnpm configuration

## 🔧 Troubleshooting

### Node Not Visible
1. Check package installed: `npm list n8n-nodes-hello-world`
2. Restart n8n completely
3. Check n8n logs for errors
4. Try manual installation: `npm install -g ./n8n-nodes-hello-world-1.0.0.tgz`

### Build Errors
1. Verify Node.js version (>=16)
2. Clear node_modules: `rm -rf node_modules && npm install`
3. Check TypeScript compilation: `npx tsc`

### Package Creation Fails
1. Check npm version
2. Verify package.json syntax
3. Ensure all required files exist

## 📦 Package Structure

```
n8n-hello-world/
├── src/
│   ├── nodes/
│   │   └── HelloWorld.node.ts    # Main node implementation
│   └── index.ts                  # Package exports
├── test-env/                     # Test environment
├── dist/                         # Compiled output
├── package.json                  # Package configuration
├── tsconfig.json                 # TypeScript config
└── README.md                     # Documentation
```

## 🎯 Success Criteria

- [ ] Package builds without errors
- [ ] Node loads in n8n UI
- [ ] All configuration options work
- [ ] Node executes successfully
- [ ] Output format is correct
- [ ] No console errors

**This test will definitively show if the issue is environmental or code-specific!** 🎯
