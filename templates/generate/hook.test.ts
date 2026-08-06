import { renderHook } from "@testing-library/react";
import { use{{HOOK_NAME}} } from "./use{{HOOK_NAME}}";

describe("use{{HOOK_NAME}}", () => {
  it("should initialize with state as null", () => {
    const { result } = renderHook(() => use{{HOOK_NAME}}());
    expect(result.current.state).toBeNull();
  });
});
