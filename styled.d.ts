// import original module declarations
import "styled-components/native";

// and extend them!
declare module "styled-components/native" {
  export interface DefaultTheme {
    colors: {
      mainBgColor: string;
      textColor: string;
      highlightColor: string;
    };
  }
}
