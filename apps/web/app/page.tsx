import { Button } from "@workspace/ui/components/button";

/**
 * Renders a centered page with a "Hello World" heading and a small Button.
 *
 * The layout is vertically stacked and centered both horizontally and vertically.
 *
 * @returns The JSX element for this page.
 */
export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Button size="sm">Button</Button>
      </div>
    </div>
  );
}
