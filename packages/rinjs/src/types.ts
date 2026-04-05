export type Component<P = Record<string, unknown>> = (props: P) => VNode;

export type VNode = {
  type: keyof HTMLElementTagNameMap | Component<Record<string, unknown>>;
  props: Record<string, unknown>;
  children: (VNode | Node)[];
};
