import React, {PureComponent} from 'react';
import {Table} from 'antd';
import moment from "moment"

const columns = [{
    title: '短信内容',
    dataIndex: 'content',
    key: 'content',
}, {
    title: '客户名',
    dataIndex: 'customerName',
    key: 'customerName'
}, {
    title: '客户电话',
    key: 'customerPhone',
    dataIndex: 'customerPhone',
    render: (info) => info.replace(/^(.{3})(.{4})(.{4})$/, "$1****$3")
}, {
    title: 'sendDate',
    key: 'sendDate',
    dataIndex: 'sendDate',
    render: (info) => moment(info).format("YYYY-MM-DD HH:mm:ss"),
}]

const url = 'message/list'

export default class Hello extends PureComponent {
    state = {
        data: [],
        pagination: {},
        loading: false,
    }

    render() {
        return (
            <div>
              <Table
                  pagination={this.state.pagination}
                  loading={this.state.loading}
                  columns={columns}
                  dataSource={this.state.data}
              />
            </div>
        );
    }

    componentDidMount() {
        this.fetch()
    }

    fetch = (params = {}) => {
        fetch(url, {
            method: 'get',
        }).then(function (res) {
            return res.json();
        }).then((json) => {
            this.setState({
                data: json
            })
        })
    }

}
