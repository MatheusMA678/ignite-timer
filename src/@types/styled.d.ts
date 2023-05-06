import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;

      "green-500": string;
      "green-600": string;
      "green-700": string;
      "red-500": string;
      "red-600": string;
      "yellow-500": string;

      "gray-100": string;
      "gray-200": string;
      "gray-300": string;
      "gray-400": string;
      "gray-500": string;
      "gray-600": string;
      "gray-700": string;
      "gray-800": string;
    };
  }
}
