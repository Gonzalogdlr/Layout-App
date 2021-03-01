import { Table } from "antd";
import React, { useState } from "react";
import STORE from "../Store";
import { PlusCircleFilled } from "@ant-design/icons";

function ListTable() {
  const [state, setState] = useState({
    filteredInfo: null,
    sortedInfo: null,
    searchText: "",
    searchedColumn: "",
  });

  const FiltersChange = (pagination, filters, sorter) => {
    setState({
      filteredInfo: filters,
      sortedInfo: sorter,
      selectedRowKeys: [],
      loading: false,
    });
  };
  

  const onChange = (selectedRowKeys) => {
    setState({ selectedRowKeys });
  };

  let { sortedInfo, filteredInfo, selectedRowKeys } = state;
  sortedInfo = sortedInfo || {};
  filteredInfo = filteredInfo || {};
  const rowSelection = {
    selectedRowKeys,
    onChange: onChange,
  };
  const columns = [
    {
      title: "Division",
      dataIndex: "division",
      key: "division",
      filters: [
        { text: 'Ceo', value: 'Ceo' },
        { text: 'Strategy', value: 'Strategy' },
        { text: 'Producto', value: 'Producto' },
        { text: 'Direccion general', value: 'Direccion general' },
        { text: 'Operaciones', value: 'Operaciones' },
      ],
      filteredValue: filteredInfo.division || null,
      onFilter: (value, record) => record.division.includes(value),
      sorter: (a, b) => a.division.length - b.division.length,
      sortOrder: sortedInfo.columnKey === "division" && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: "Division superior",
      dataIndex: "divisionSuperior",
      key: "divisionSuperior",
      filters: [
        { text: 'Ceo', value: 'Ceo' },
        { text: 'Strategy', value: 'Strategy' },
        { text: 'Producto', value: 'Producto' },
        { text: 'Direccion general', value: 'Direccion general' },
        { text: 'Operaciones', value: 'Operaciones' },
      ],
      filteredValue: filteredInfo.divisionSuperior || null,
      onFilter: (value, record) => record.divisionSuperior.includes(value),
      sorter: (a, b) => a.divisionSuperior.length - b.divisionSuperior.length,
      sortOrder:
        sortedInfo.columnKey === "divisionSuperior" && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: "Colaboradores",
      dataIndex: "colaboradores",
      key: "colaboradores",
      sorter: (a, b) => a.colaboradores - b.colaboradores,
      sortOrder: sortedInfo.columnKey === "colaboradores" && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: "Nivel",
      dataIndex: "nivel",
      key: "nivel",
      filters: [
        { text: '1', value: '1' },
        { text: '2', value: '2' },
        { text: '3', value: '3' },
        { text: '4', value: '4' },
        { text: '5', value: '5' },
        { text: '6', value: '6' },
        { text: '7', value: '7' },
        { text: '8', value: '8' },
        { text: '9', value: '9' },
        { text: '10', value: '10' },
      ],
      filteredValue: filteredInfo.nivel || null,
      onFilter: (value, record) => record.nivel.includes(value),
      sorter: (a, b) => a.nivel - b.nivel,
      sortOrder: sortedInfo.columnKey === "nivel" && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: "Subdivisiones",
      dataIndex: "subdivisiones",
      key: "subdivisiones",
      render: btns => <div className="table-columns-subdivisiones"> <p>{btns}</p><PlusCircleFilled style={{color: '#49C5A9', marginLeft: '10px'}}/></div>,
      filters: [
        { text: '1', value: '1' },
        { text: '2', value: '2' },
        { text: '3', value: '3' },
        { text: '4', value: '4' },
        { text: '5', value: '5' },
        { text: '6', value: '6' },
        { text: '7', value: '7' },
        { text: '8', value: '8' },
        { text: '9', value: '9' },
        { text: '10', value: '10' },
      ],
      filteredValue: filteredInfo.subdivisiones || null,
      onFilter: (value, record) => record.subdivisiones.includes(value),
      sorter: (a, b) => a.subdivisiones - b.subdivisiones,
      sortOrder: sortedInfo.columnKey === "subdivisiones" && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: "Embajadores",
      dataIndex: "embajadores",
      key: "embajadores",
    },
  ];
  return (
    <>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={STORE}
        onChange={FiltersChange}
      />
    </>
  );
}

export default ListTable;