import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/account")({
  head: () => ({
    meta: [
      { title: "Account — AEON" },
      { name: "description", content: "AEON client account access and order support." },
    ],
  }),
  component: AccountPage,
});

function AccountPage() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setEmail("");
      toast.success("Thank you. We will notify you when client accounts open.");
    }, 300);
  };

  return (
    <main className="bg-paper px-6 py-16 lg:py-24">
      <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div>
          <p className="eyebrow mb-4 text-muted-foreground">Account</p>
          <h1 className="font-display mb-8 text-5xl lg:text-7xl">
            Client accounts are being prepared.
          </h1>
          <p className="max-w-lg leading-relaxed text-muted-foreground">
            AEON account access will bring order history, wishlist continuity, and
            private client-care notes into one place. Until then, orders and sizing
            support are handled directly by our advisors.
          </p>
        </div>

        <div className="border-y border-border py-10 lg:self-start">
          <h2 className="font-display mb-5 text-3xl">Be notified first</h2>
          <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
            Leave your email and we will let you know when account access is available.
          </p>

          <form onSubmit={submit} className="space-y-5">
            <label className="block">
              <span className="mb-1 block text-xs text-muted-foreground">Email *</span>
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-ink"
              />
            </label>

            <button type="submit" disabled={submitting} className="btn-ink w-full disabled:opacity-50">
              {submitting ? "Submitting..." : "Notify me"}
            </button>
          </form>

          <div className="mt-8 flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <Link to="/shop" className="editorial-link text-ink">Continue shopping</Link>
            <Link to="/contact" className="editorial-link text-ink">Contact client care</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
