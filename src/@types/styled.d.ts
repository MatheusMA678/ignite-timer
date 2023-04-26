import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      product: {
        greenDark: string;
        green: string;
        greenLight: string;
      };
      feedback: {
        redDark: string;
        red: string;
      };
      base: {
        grayBg: string;
        grayElements: string;
        grayDivider: string;
        grayPlaceholder: string;
        grayLabel: string;
        grayText: string;
        grayTitle: string;
        white: string;
      };
    };
  }
}
