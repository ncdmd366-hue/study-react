import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import ItemList from "./itemList";

// Table に渡された props を保持する
let capturedTableProps: any = null;

// ✅ あなたの import に合わせてモック（antd/es/table）
vi.mock("antd/es/table", async () => {
  const React = await import("react");

  const MockTable = (props: any) => {
    capturedTableProps = props;
    return <div data-testid="mock-table" />;
  };

  return {
    default: MockTable,
  };
});

describe("itemList (buildNameFilters/buildAddressFilters の間接テスト)", () => {
  beforeEach(() => {
    capturedTableProps = null;
  });

  it("Name列の filters に name候補が重複排除されて入る", () => {
    render(<ItemList />);

    expect(capturedTableProps).toBeTruthy();

    const columns = capturedTableProps.columns;
    const nameColumn = columns.find((c: any) => c.dataIndex === "name");

    expect(nameColumn).toBeTruthy();

    // sortなし版（出現順想定）
    expect(nameColumn.filters).toEqual([
      { text: "John Brown", value: "John Brown" },
      { text: "Jim Red", value: "Jim Red" },
      { text: "Joe Black", value: "Joe Black" },
    ]);
  });

  it("Address列の filters に address候補が入る", () => {
    render(<ItemList />);

    expect(capturedTableProps).toBeTruthy();

    const columns = capturedTableProps.columns;
    const addressColumn = columns.find((c: any) => c.dataIndex === "address");

    expect(addressColumn).toBeTruthy();

    // sortなし版（出現順想定）
    expect(addressColumn.filters).toEqual([
      { text: "New York No. 1 Lake Park", value: "New York No. 1 Lake Park" },
      { text: "London No. 1 Lake Park", value: "London No. 1 Lake Park" },
      { text: "Sidney No. 1 Lake Park", value: "Sidney No. 1 Lake Park" },
      { text: "London No. 2 Lake Park", value: "London No. 2 Lake Park" },
    ]);
  });
});