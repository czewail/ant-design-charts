import type { MindMapOptions } from '@ant-design/graphs';
import { G6, getNodeSide, measureTextSize, MindMap as MindMapComponent, RCNode } from '@ant-design/graphs';
import { Graph, type NodeData } from '@antv/g6';
import React from 'react';
import data from '../datasets/algorithm-category.json';

const { treeToGraphData, idOf } = G6;
const { TextNode } = RCNode;

export const MindMapCustom = () => {
  const options: MindMapOptions = {
    data: treeToGraphData(data),
    node: {
      style: {
        component: (data) => {
          return <TextNode type="outlined" text={data.id} style={{ border: '2px dashed #1783ff' }} />;
        },
        size: (data) => measureTextSize(idOf(data), [24, 16]),
        dx: function (data: NodeData) {
          const side = getNodeSide(this as unknown as Graph, data);
          const size = measureTextSize(idOf(data), [24, 16]);
          return side === 'left' ? -size[0] : side === 'center' ? -size[0] / 2 : 0;
        },
      },
    },
  };

  return <MindMapComponent {...options} />;
};
