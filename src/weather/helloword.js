import React, {PureComponent} from 'react';
import {Table, Icon} from 'antd';

const columns = [{
  title: 'html_url',
  dataIndex: 'html_url',
  key: 'html_url',
}, {
  title: 'git_pull_url',
  dataIndex: 'git_pull_url',
  key: 'git_pull_url',
}, {
  title: 'Action',
  key: 'Action',
  dataIndex: 'Action',
  render: (info) => (
    <span>
          <a href="#">Action 一 {info}</a>
        </span>
  ),
}]

const url='https://api.github.com/users/octocat/gists'

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
          rowKey={record => record.id}
          pagination={this.state.pagination}
          loading={this.state.loading}
          columns={columns}
          dataSource={this.state.data}/>
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
