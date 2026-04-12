import type { ComponentContext } from "rin-lib";

export default function Header(
  { title }: { title: string },
  ctx: ComponentContext
) {
  let counter = 0;

  return () => (
    <header class="p-6 bg-blue-500 text-white shadow-lg flex justify-between items-center">
      <div>
        <h1 class="text-3xl font-bold">{title}</h1>
        <p class="mt-2 opacity-80">Built with Rin + Astro</p>
      </div>
      <div>
        <button
          class="bg-white text-blue-500 px-4 py-2 rounded font-bold cursor-pointer"
          onclick={() => {
            counter++;
            ctx.rerender();
          }}
        >
          Clicks: {counter}
        </button>
      </div>
    </header>
  );
}
