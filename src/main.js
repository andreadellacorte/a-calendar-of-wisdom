import "@babel/polyfill";
import App from "./App.svelte";
import quotes from "./data/quotes.json";
const app = new App({
  target: document.getElementById("main"),
  props: {
    quotes
  }
});
