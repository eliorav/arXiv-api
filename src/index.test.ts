import { describe, it, expect, jest } from "@jest/globals";

const mockResponse = {
  feed: {
    entry: [
      {
        id: ["PAPER_ID"],
        updated: ["UPDATED"],
        published: ["PUBLISHED"],
        title: ["TITLE"],
        summary: ["SUMMARY"],
        author: [{ name: ["AUTHOR1"] }, { name: ["AUTHOR2"] }],
        link: [
          { $: { title: "TITLE", href: "URL", rel: "REL", type: "TYPE" } },
        ],
        category: [{ $: "CATEGORY" }],
      },
    ],
  },
};

const mockXmlPromisify = jest.fn(() => Promise.resolve(mockResponse));

jest.mock("fast-xml-parser");
jest.mock("util", () => ({
  promisify: jest.fn(() => mockXmlPromisify),
}));

// import later for mock
import search from "./index";

describe("arXiv search tests", () => {
  it("should throw error - unsupported sortBy", async () => {
    await expect(
      search({
        searchQueryParams: [
          {
            include: [{ name: "GAN" }],
          },
        ],
        sortBy: "SORT_BY",
      }),
    ).rejects.toMatchSnapshot();
  });
  it("should throw error - unsupported sortOrder", async () => {
    await expect(
      search({
        searchQueryParams: [
          {
            include: [{ name: "GAN" }],
          },
        ],
        sortOrder: "SORT_ORDER",
      }),
    ).rejects.toMatchSnapshot();
  });
  it("should throw error - include tags empty", async () => {
    await expect(
      search({
        searchQueryParams: [
          {
            include: [],
          },
        ],
      }),
    ).rejects.toMatchSnapshot();
  });
  it("should throw error - tag name is empty", async () => {
    await expect(
      search({
        searchQueryParams: [
          {
            include: [{ name: "" }],
          },
        ],
      }),
    ).rejects.toMatchSnapshot();
  });
  it("should throw error - unsupported tag prefix", async () => {
    await expect(
      search({
        searchQueryParams: [
          {
            include: [{ name: "GAN", prefix: "pre" }],
          },
        ],
      }),
    ).rejects.toMatchSnapshot();
  });
});
