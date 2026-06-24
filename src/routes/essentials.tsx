import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/essentials")({
  beforeLoad: () => {
    throw redirect({
      to: "/shop",
      search: { category: "knitwear" } as never,
    });
  },
});
