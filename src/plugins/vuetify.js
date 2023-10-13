/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
import colors from "vuetify/lib/util/colors";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: colors.pink.darken1,
          secondary: colors.pink.lighten1,
        },
      },
      dark: {
        colors: {
          primary: "#111111",
          secondary: "#999111",
        },
      },
    },
  },
});
