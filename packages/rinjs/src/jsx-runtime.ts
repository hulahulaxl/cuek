import type { VNode } from "./types";

function normalizeChildren(children: unknown[]): (VNode | Node)[] {
  return children.flat().map(c => {
    if (c instanceof Node) return c;
    if (typeof c === "object" && c !== null && "type" in c) return c as VNode;
    return document.createTextNode(String(c));
  });
}

export function jsx(
  type: VNode["type"],
  props: Record<string, unknown> | null
): VNode {
  const { children, ...rest } = props ?? {};

  return {
    type,
    props: rest,
    children: normalizeChildren(
      children === undefined
        ? []
        : Array.isArray(children)
          ? children
          : [children]
    )
  };
}

export { jsx as jsxs };
export { jsx as jsxDEV };

type ElementType = keyof HTMLElementTagNameMap;

type DOMProps<K extends ElementType> = Omit<
  Partial<HTMLElementTagNameMap[K]>,
  "children" | "style"
> & {
  style?: Partial<CSSStyleDeclaration> | string;
};

type Props<K extends ElementType> = DOMProps<K> & {
  children?: JSX.Child | JSX.Child[];
};

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace JSX {
  export type Child =
    | Node
    | Element
    | string
    | number
    | boolean
    | null
    | undefined;

  export interface ElementChildrenAttribute {
    children: {}; // eslint-disable-line @typescript-eslint/no-empty-object-type
  }

  export type Component<P = Record<string, unknown>> = (props: P) => Element;

  export interface Element {
    type: ElementType | Component<Record<string, unknown>>;
    props: Record<string, unknown>;
    children: (VNode | Node)[];
  }

  export type IntrinsicElements = {
    [K in keyof HTMLElementTagNameMap]: Props<K>;
  };
}
