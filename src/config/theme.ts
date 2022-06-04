export const theme = {
  name: 'HPE 0',
  rounding: 0,
  spacing: 24,
  defaultMode: 'light',
  global: {
    colors: {
      'accent-1': '#2AD2C9',
      'accent-2': '#614767',
      'accent-3': '#ff8d6d',
      brand: '#0096f5',
      background: {
        dark: '#111111',
        light: '#FFFFFF',
      },
      'neutral-1': '#425563',
      'neutral-2': '#5F7A76',
      'neutral-3': '#80746E',
      'neutral-4': '#767676',
      text: {
        dark: '#EEEEEE',
        light: '#333333',
      },
      control: 'brand',
      'status-critical': '#F04953',
      'status-warning': '#FFD144',
      'status-ok': 'brand',
      'status-unknown': '#CCCCCC',
      'status-disabled': '#CCCCCC',
    },
    font: {
      family: '"Roboto"',
      face: "/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu5mxKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7mxKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4WxKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7WxKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7GxKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n",
    },
    control: {
      border: {
        radius: '0px',
      },
    },
    drop: {
      border: {
        radius: '0px',
      },
    },
    active: {
      background: 'active-background',
      color: 'active-text',
    },
    hover: {
      background: 'active-background',
      color: 'active-text',
    },
    selected: {
      background: 'selected-background',
      color: 'selected-text',
    },
  },
  anchor: {
    textDecoration: 'underline',
    color: {
      dark: '#FFFFFF',
      light: '#000000',
    },
  },
  button: {
    border: {
      radius: '0px',
    },
    colors: {
      accent: '#ff8d6d',
      secondary: 'rgba(51,51,51,0.6)',
    },
    extend: 'letter-spacing: 0.04167em;',
  },
  clock: {
    analog: {
      second: {
        color: {
          dark: '#01a982',
          light: '#01a982',
        },
      },
    },
  },
  layer: {
    background: {
      dark: '#111111',
      light: '#FFFFFF',
    },
  },
  chart: {},
  meter: {},
  diagram: {
    line: {},
  },
  email: 'eric.soderberg@hpe.com',
  date: '2020-03-24T17:34:04.000Z',
};
