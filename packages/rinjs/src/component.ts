import type { VNode } from "./jsx-runtime";

export type Component<P = Record<string, unknown>> = (props: P) => VNode;
