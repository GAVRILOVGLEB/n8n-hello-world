# n8n-nodes-hello-world

Simple Hello World node for n8n Community Nodes testing.

## Features

- 🌍 **Simple Greeting**: Basic hello world functionality
- 🎭 **Multiple Message Types**: Simple, formal, and enthusiastic greetings
- ⏰ **Optional Timestamp**: Include timestamp in response
- 🔧 **Minimal Dependencies**: Only requires n8n-workflow

## Installation

### Via n8n Community Nodes (Recommended)

1. Open n8n
2. Go to **Settings** → **Community Nodes** → **Install**
3. Enter: `n8n-nodes-hello-world`
4. Click **Install**

### Via npm

```bash
npm install n8n-nodes-hello-world
```

## Usage

1. Add "Hello World" node to your workflow
2. Configure:
   - **Name**: Enter name to greet (default: "World")
   - **Message Type**: Choose greeting style
   - **Include Timestamp**: Toggle timestamp inclusion
3. Execute the workflow

## Example Output

```json
{
  "helloWorld": {
    "success": true,
    "message": "Hello, John!",
    "name": "John",
    "messageType": "simple",
    "nodeVersion": "1.0.0",
    "timestamp": "2024-01-15T10:30:00.000Z"
  }
}
```

## Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Create package
npm run pack
```

## License

MIT
