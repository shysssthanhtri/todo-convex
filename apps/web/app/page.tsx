"use client";

import { Button } from "@workspace/ui/components/button";
import { useQuery } from "convex/react";
import { api } from "@workspace/backend/convex";

/**
 * Renders a centered page with a "Hello World" heading and a small Button.
 *
 * The layout is vertically stacked and centered both horizontally and vertically.
 *
 * @returns The JSX element for this page.
 */
export default function Page() {
  const users = useQuery(api.users.getMany);
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <ul>
          {users?.map((user) => (
            <li key={user._id}>{user.name}</li>
          ))}
        </ul>
        <Button size="sm">Button</Button>
      </div>
    </div>
  );
}
