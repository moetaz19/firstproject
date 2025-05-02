import React, { useState } from 'react';
import style from './style';
import { Card, Tooltip, Typography } from 'antd';
import{useDispatch}from "react-redux"
import { EditOutlined, DeleteTwoTone, HeartTwoTone } from '@ant-design/icons';
import Paragraph from 'antd/es/skeleton/Paragraph';
import moment from 'moment';




const { Meta } = Card;
const { Link, Text } = Typography; 

function Story({ story, setSelectedId }) { 
  const dispatch = useDispatch();
  const [expand, setExpand] = useState(true);

  return (
    <Card
      style={style.card}
      cover={<img src={story.image} alt="Story" />} 
   
    >
      <Meta title={story.username} />
      <Paragraph
        style={{ margin: 0 }}
        ellipsis={{
          rows: 2,
          expandable: true,
          symbol: 'more',
          onExpand: () => {
            setExpand(true);
          },
          onEllipsis: () => {
            setExpand(false);
          },
        }}
      >
        {story.caption}
      </Paragraph>
      {expand ? (
        <Link href='#'>
          {story.tags && story.tags.split(' ').map((nom) => `#${nom}`)} 
        </Link>
      ) : null}
      <br />
      <Text type="secondary">{moment(story.postDate).fromNow()}</Text>
    </Card>
  );
}

export default Story; 
