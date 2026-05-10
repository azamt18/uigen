import { test, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { ToolCallBadge } from "../ToolCallBadge";

afterEach(() => {
  cleanup();
});

test("shows spinner and tool name while running", () => {
  render(<ToolCallBadge toolName="edit_file" state="call" />);
  expect(screen.getByText("edit_file")).toBeDefined();
  expect(document.querySelector(".animate-spin")).toBeDefined();
});

test("shows green dot and tool name when done", () => {
  render(<ToolCallBadge toolName="edit_file" state="result" result="ok" />);
  expect(screen.getByText("edit_file")).toBeDefined();
  expect(document.querySelector(".bg-emerald-500")).toBeDefined();
  expect(document.querySelector(".animate-spin")).toBeNull();
});

test("shows spinner when state is result but result is falsy", () => {
  render(<ToolCallBadge toolName="edit_file" state="result" result={undefined} />);
  expect(document.querySelector(".animate-spin")).toBeDefined();
  expect(document.querySelector(".bg-emerald-500")).toBeNull();
});
