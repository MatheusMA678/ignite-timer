import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      product: {
        green: {
          700: string;
          600: string;
          500: string;
        };
      };
      feedback: {
        red: {
          600: string;
          500: string;
        };
      };
      base: {
        gray: {
          800: string;
          700: string;
          600: string;
          500: string;
          400: string;
          300: string;
          200: string;
          100: string;
        };
        white: string;
      };
    };
  }
}
