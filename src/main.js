import { createApp } from "vue";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import Search icon only from free solid svg icons */
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import App from "@/App.vue";
import "@/assets/tailwind.css";

library.add(faSearch);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
