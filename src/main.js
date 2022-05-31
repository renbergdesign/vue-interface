import { createApp } from "vue";
import App from "./App";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faShoppingCart, faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart, faTrash);

createApp(App).component("fa", FontAwesomeIcon).mount("#app");
