"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const PROJECT_TYPES = [
  "Web design & development",
  "App / software development",
  "Branding & graphic design",
  "AI automation solutions",
  "AI chat agents",
  "AI voice agents",
  "Menu design",
  "Not sure yet",
];

const BUDGET_RANGES = ["Under £2k", "£2k - £5k", "£5k - £15k", "£15k+", "Not sure yet"];

const fieldClasses =
  "w-full rounded-xl border border-border-hairline bg-bg-raised px-4 py-3 text-sm text-text-primary outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-text-muted focus:border-accent focus:shadow-[0_0_0_3px_rgba(30,163,253,0.15)]";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      projectType: data.get("projectType"),
      budget: data.get("budget"),
      message: data.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.error || "Something went wrong.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="rounded-2xl border border-border-hairline bg-bg-raised p-10 text-center"
      >
        <h3 className="font-display text-2xl font-semibold text-text-primary">
          Message sent.
        </h3>
        <p className="mt-3 text-text-muted">
          We reply to every inquiry within one business day. Talk soon.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm text-text-muted">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={fieldClasses}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm text-text-muted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@business.com"
            className={fieldClasses}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="projectType" className="mb-2 block text-sm text-text-muted">
            Project type
          </label>
          <select id="projectType" name="projectType" className={fieldClasses} defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="mb-2 block text-sm text-text-muted">
            Budget range
          </label>
          <select id="budget" name="budget" className={fieldClasses} defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            {BUDGET_RANGES.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What are you looking to build?"
          className={`${fieldClasses} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400" role="alert">
          {errorMessage}
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        disabled={status === "submitting"}
        className="self-start"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
