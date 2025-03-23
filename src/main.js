import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'
var script_tag = document.getElementById('page');
var title = script_tag.getAttribute("title");
console.log(title);
const app = mount(App, {
  target: document.getElementById('app'),
  props:{
    page:{
      title:title
    }
  }
})
export default app
