import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

const theme = create({
  base: "light",
  colorSecondary: "#D03801",
  appBg: "#F6F9FC",
  appContentBg: "#FFFFFF",
  appBorderColor: "rgba(0,0,0,.1)",
  appBorderRadius: 4,
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",
  textColor: "#333333",
  textInverseColor: "#FFFFFF",
  textMutedColor: "#666666",
  barTextColor: "#999999",
  barSelectedColor: "#D03801",
  barBg: "#FFFFFF",
  inputBg: "#FFFFFF",
  inputBorder: "rgba(0,0,0,.3)",
  inputTextColor: "#333333",
  inputBorderRadius: 4,
  brandTitle: "ZzOzZ Storybook",
  brandUrl: "https://zzozz.github.io",
  brandImage:
    "https://zzozz.github.io/assets/img/face.jpeg",
});

addons.setConfig({
  theme,
});
