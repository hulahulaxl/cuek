import { renderToString } from "./renderToString";
import { jsx } from "./jsx-runtime";
import type { ComponentContext } from "./types";

function MyComponent({ name, count }: { name: string; count: number }, ctx: ComponentContext) {
  return () =>
    jsx("div", {
      className: "container",
      style: { color: "red", marginTop: "10px" },
      children: [
        jsx("h1", { children: `Hello ${name}` }),
        jsx("p", { children: `Count: ${count}` }),
        jsx("input", { type: "text", disabled: true }),
        jsx("button", { onclick: () => {}, children: "Click me" })
      ]
    });
}

function App() {
  return () =>
    jsx("main", {
      id: "app",
      children: [
        jsx(MyComponent, { name: "Rin", count: 42 })
      ]
    });
}

const vnode = jsx(App, {});
const html = renderToString(vnode);

console.log("--- SSR Output ---");
console.log(html);

const expected = `<main id="app"><div class="container" style="color:red;margin-top:10px"><h1>Hello Rin</h1><p>Count: 42</p><input type="text" disabled><button>Click me</button></div></main>`;

if (html === expected) {
  console.log("✅ SSR matches expected output");
} else {
  console.error("❌ SSR output mismatch");
  console.log("Expected:", expected);
  process.exit(1);
}
