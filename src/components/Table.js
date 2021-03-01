import { Table} from 'antd';
import React from 'react';
import STORE from '../Store.js'

class ListTable extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
    searchText: '',
    searchedColumn: '',
  };
  
  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
      selectedRowKeys: [],
      loading: false,
    });
  };

  start = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };


  render() {
    let { sortedInfo, filteredInfo, selectedRowKeys } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const columns = [
      {
        title: 'Division',
        dataIndex: 'division',
        key: 'division',
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
        sortOrder: sortedInfo.columnKey === 'division' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Division superior',
        dataIndex: 'divisionSuperior',
        key: 'divisionSuperior',
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
        sortOrder: sortedInfo.columnKey === 'divisionSuperior' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Colaboradores',
        dataIndex: 'colaboradores',
        key: 'colaboradores',
        sorter: (a, b) => a.colaboradores - b.colaboradores,
        sortOrder: sortedInfo.columnKey === 'colaboradores' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Nivel',
        dataIndex: 'nivel',
        key: 'nivel',
        filters: [
          { text: 'Ceo', value: 'Ceo' },
          { text: 'Strategy', value: 'Strategy' },
          { text: 'Producto', value: 'Producto' },
          { text: 'Direccion general', value: 'Direccion general' },
          { text: 'Operaciones', value: 'Operaciones' },
        ],
        filteredValue: filteredInfo.nivel || null,
        onFilter: (value, record) => record.nivel.includes(value),
        sorter: (a, b) => a.nivel - b.nivel,
        sortOrder: sortedInfo.columnKey === 'nivel' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Subdivisiones',
        dataIndex: 'subdivisiones',
        key: 'subdivisiones',
        filters: [
          { text: 'Ceo', value: 'Ceo' },
          { text: 'Strategy', value: 'Strategy' },
          { text: 'Producto', value: 'Producto' },
          { text: 'Direccion general', value: 'Direccion general' },
          { text: 'Operaciones', value: 'Operaciones' },
        ],
        filteredValue: filteredInfo.subdivisiones || null,
        onFilter: (value, record) => record.subdivisiones.includes(value),
        sorter: (a, b) => a.subdivisiones - b.subdivisiones,
        sortOrder: sortedInfo.columnKey === 'subdivisiones' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Embajadores',
        dataIndex: 'embajadores',
        key: 'embajadores',
      },
    ];
    return (
      <>
        <Table rowSelection={rowSelection} columns={columns} dataSource={STORE} onChange={this.handleChange} />
      </>
    );
  }
}

export default ListTable