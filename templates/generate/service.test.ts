import { vi, describe, it, expect, beforeEach } from "vitest";
import { {{SERVICE_NAME}}Service } from "./{{SERVICE_NAME}}Service";

describe("{{SERVICE_NAME}}Service", () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  it("should fetch all items", async () => {
    const mockData = [{ id: "1" }];
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const result = await {{SERVICE_NAME}}Service.getAll();
    expect(result).toEqual(mockData);
    expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining("/api/{{SERVICE_SLUG}}"));
  });
});
