import {
  IExecuteFunctions,
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
  NodeOperationError,
  NodeConnectionType,
} from "n8n-workflow";

export class HelloWorldNode implements INodeType {
  description: INodeTypeDescription = {
    displayName: "Hello World",
    name: "helloWorld",
    icon: "fa:hand-wave",
    group: ["transform"],
    version: 1,
    description: "Simple Hello World node for testing n8n Community Nodes",
    defaults: {
      name: "Hello World",
    },
    inputs: [NodeConnectionType.Main],
    outputs: [NodeConnectionType.Main],
    properties: [
      {
        displayName: "Name",
        name: "name",
        type: "string",
        default: "World",
        placeholder: "Enter your name",
        description: "The name to greet",
      },
      {
        displayName: "Message Type",
        name: "messageType",
        type: "options",
        options: [
          {
            name: "Simple Hello",
            value: "simple",
          },
          {
            name: "Formal Greeting",
            value: "formal",
          },
          {
            name: "Enthusiastic",
            value: "enthusiastic",
          },
        ],
        default: "simple",
        description: "Type of greeting message",
      },
      {
        displayName: "Include Timestamp",
        name: "includeTimestamp",
        type: "boolean",
        default: true,
        description: "Whether to include timestamp in the response",
      },
    ],
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items = this.getInputData();
    const returnData: INodeExecutionData[] = [];

    for (let i = 0; i < items.length; i++) {
      try {
        const name = this.getNodeParameter("name", i) as string;
        const messageType = this.getNodeParameter("messageType", i) as string;
        const includeTimestamp = this.getNodeParameter(
          "includeTimestamp",
          i
        ) as boolean;

        let message: string;
        switch (messageType) {
          case "formal":
            message = `Good day, ${name}! It's a pleasure to meet you.`;
            break;
          case "enthusiastic":
            message = `Hello there, ${name}! 🎉 Great to see you!`;
            break;
          case "simple":
          default:
            message = `Hello, ${name}!`;
            break;
        }

        const response: any = {
          success: true,
          message,
          name,
          messageType,
          nodeVersion: "1.0.0",
        };

        if (includeTimestamp) {
          response.timestamp = new Date().toISOString();
        }

        // Include original input data
        const newItem: INodeExecutionData = {
          json: {
            ...items[i].json,
            helloWorld: response,
          },
        };

        returnData.push(newItem);
      } catch (error) {
        if (this.continueOnFail()) {
          returnData.push({
            json: {
              error: (error as Error).message,
              success: false,
            },
          });
          continue;
        }
        throw new NodeOperationError(this.getNode(), error as Error, {
          itemIndex: i,
        });
      }
    }

    return [returnData];
  }
}
