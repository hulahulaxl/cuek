export const homepageData = {
  hero: {
    title: "Rin",
    description: "The hyper-minimalist JSX framework. Server-rendered, client-hydrated, zero virtual DOM.",
    primaryCta: {
      text: "Get started",
      href: "/guide"
    },
    secondaryCta: {
      text: "View on GitHub",
      href: "https://github.com/hulahulaxl/rin"
    }
  },
  codeSnippet: {
    filename: "Counter.tsx",
    code: `function Counter({}, ctx) {
  let count = 0;

  return () => (
    <div class="counter">
      <p>Count: {count}</p>
      <button onclick={() => { count++; ctx.rerender(); }}>
        Increment
      </button>
    </div>
  );
}`
  },
  features: [
    {
      title: "Zero Virtual DOM",
      description: "Skip the diffing overhead entirely. Rin patches the physical DOM directly — only what changed, nothing more.",
      iconPath: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
    },
    {
      title: "Vanilla HTML Attributes",
      description: "No magic. Use <code class=\"text-xs bg-zinc-100 px-1 py-0.5 rounded font-mono\">class</code> not <code class=\"text-xs bg-zinc-100 px-1 py-0.5 rounded font-mono\">className</code>. Events are lowercase. It works exactly like the browser.",
      iconPath: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
    },
    {
      title: "Astro Native",
      description: "First-party Astro integration with server-side rendering and selective hydration via <code class=\"text-xs bg-zinc-100 px-1 py-0.5 rounded font-mono\">client:load</code>.",
      iconPath: "M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
    }
  ]
};
