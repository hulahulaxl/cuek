import type { VNode } from "./jsx-runtime";
import { renderNode } from "./renderer";

export function render(vnode: VNode, container: HTMLElement = document.body) {
  container.appendChild(renderNode(vnode));
}
