import React, { useMemo, useState } from "react";
import Table from "antd/es/table";
import type { ColumnsType, TableProps } from "antd/es/table";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  { key: "2", name: "Jim Red", age: 42, address: "London No. 1 Lake Park" },
  { key: "3", name: "Joe Black", age: 32, address: "Sidney No. 1 Lake Park" },
  { key: "4", name: "Jim Red", age: 32, address: "London No. 2 Lake Park" },
];

const uniq = (arr: string[]) => Array.from(new Set(arr)).filter(Boolean);
const toFilters = (arr: string[]) => arr.map((v) => ({ text: v, value: v }));

export default function App() {
  // ✅ いま表示されてる行（フィルタ後）だけ保持
  const [currentRows, setCurrentRows] = useState<DataType[]>(data);

  // ✅ currentRows から filters を作る（相互に変わる）
  const nameFilters = useMemo(
    () => toFilters(uniq(currentRows.map((r) => r.name)).sort()),
    [currentRows]
  );
  const addressFilters = useMemo(
    () => toFilters(uniq(currentRows.map((r) => r.address)).sort()),
    [currentRows]
  );

  const columns: ColumnsType<DataType> = useMemo(
    () => [
      {
        title: "Name",
        dataIndex: "name",
        filters: nameFilters,
        filterSearch: true,
        onFilter: (value, record) => record.name === String(value),
      },
      {
        title: "Age",
        dataIndex: "age",
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: "Address",
        dataIndex: "address",
        filters: addressFilters,
        filterSearch: true,
        onFilter: (value, record) => record.address === String(value),
      },
    ],
    [nameFilters, addressFilters]
  );

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    // ✅ antd が計算した「フィルタ後の表示行」をそのまま採用
    setCurrentRows((extra.currentDataSource as DataType[]) ?? data);
  };

  return <Table columns={columns} dataSource={data} onChange={onChange} />;
}
