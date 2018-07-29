import React from 'react';
import { Card } from 'antd';
import TimelineChart from '../components/TimelineChart';
import MainLayout from '../Layout/MainLayout';

const { origin1, origin2, origin3, origin4 } = window.origin;

const formatDate = (value) => {
  const arr = [];
  const v = value.toString();
  for (let i = 0; i < v.length; i += 2) {
    arr.push(v.slice(i, i + 2));
  }
  const year = parseInt(`20${arr[0]}`, 10);
  const month = parseInt(arr[1], 10);
  const date = parseInt(arr[2], 10);
  return new Date(year, month, date).getTime();
};
// eslint-disable-next-line
const formatData = (origin, type) => origin.map(item => {
  if (type === 1) {
    return ({
      x: formatDate(item.date),
      y1: parseFloat(item.lateral),
      y2: parseFloat(item.forward),
      y3: parseFloat(item.vertical),
    });
  }
  if (type === 2) {
    return ({
      x: formatDate(item.date),
      y1: parseFloat(item.pitch),
      y2: parseFloat(item.roll),
      y3: parseFloat(item.azimuth),
    });
  }
});

const data1 = formatData(origin1, 1);
const data2 = formatData(origin2, 1);
const data3 = formatData(origin3, 2);
const data4 = formatData(origin4, 2);

const tabList = [{
  key: 0,
  tab: '组合导航',
}, {
  key: 1,
  tab: '紧耦合',
}];

const titleMap1 = { y1: '侧向', y2: '前后', y3: '垂向' };
const titleMap2 = { y1: '俯仰角', y2: '横滚角', y3: '方位角' };


class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key1: 0,
      key2: 0,
    }
  }

  onTabChange = (key, type) => this.setState({ [`key${type}`]: key });

  render() {
    const contentList1 = [
      <TimelineChart data={data1} titleMap={titleMap1} height={400} />,
      <TimelineChart data={data2} titleMap={titleMap1} height={400} />,
    ];
    const contentList2 = [
      <TimelineChart data={data3} titleMap={titleMap2} height={400} />,
      <TimelineChart data={data4} titleMap={titleMap2} height={400} />,
    ];
    const commonProps = {
      style: { marginBottom: 30, background: '#eee' },
      tabList,
      hoverable: true,
      bordered: false,
    };
    return (
      <MainLayout>
        <Card
          {...commonProps}
          title="侧向、垂向、前后/m"
          onTabChange={(key) => this.onTabChange(key, 1)}
        >
          {contentList1[this.state.key1]}
        </Card>
        <Card
          {...commonProps}
          title="俯仰角、横滚角、方位角/°"
          onTabChange={(key) => this.onTabChange(key, 2)}
        >
          {contentList2[this.state.key2]}
        </Card>
      </MainLayout>
    );
  }
}

export default IndexPage;

