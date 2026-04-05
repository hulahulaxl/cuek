import { mount } from "rinjs";

mount(
  <div style={{ background: "black", color: "white" }}>
    <p>Hellow</p>
    <div>First</div>
    <div>
      <span>Second</span>
    </div>
  </div>,
  document.querySelector<HTMLDivElement>("#app")!
);
