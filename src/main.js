import { createApp } from "vue";
import App from "./App.vue";

import BaseCard from "./components/ui/BaseCard.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseSpinner from "./components/ui/BaseSpinner.vue";

import VueClipboards from "vue-clipboards";

// BASE COMPONENT

const app = createApp(App);

app.use(VueClipboards);

app.component("BaseCard", BaseCard);
app.component("BaseButton", BaseButton);
app.component("BaseSpinner", BaseSpinner);

app.mount("#app");
