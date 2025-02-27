---
category: Components
type: Graph
usage: flow,relation
title: FlowDirectionGraph 流向图
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*jOEPRKWxPE0AAAAAAAAAAAAADmJ7AQ/original
order: 6
---

用于直观展示流动路径和量值变化。

```js
import { FlowDirectionGraph } from '@ant-design/graphs';
```

## 何时使用

适用于信息繁杂、需要明确逻辑关系或决策支持时，能直观、清晰地展示数据流向和关系，提升理解和决策效率。

## 代码演示

<code id="demo-flow-direction-graph-default" src="./demos/flow-direction-graph/default.tsx" description="简单的展示。<br> 通过交互 `map-edge-line-width` 来调整 `edge.style.lineWidth`。包含以下属性：<br> - `value`（数值或函数，用于计算边的数值）<br> - `minValue` 和 `maxValue`（可选，最小值和最大值，可以是数值或函数）<br> - `minLineWidth` 和 `maxLineWidth`（可选，最小线宽和最大线宽，可以是数值或函数）<br> -  `scale`（可选，插值函数，用于将数值映射到线宽，支持 `'linear`'、'`log'`、`'pow'`、`'sqrt'` 和自定义插值函数）">基本用法</code>

<code id="demo-flow-direction-graph-hover-activate-neighbor" src="./demos/flow-direction-graph/hover-activate-neighbor.tsx" description="通过添加悬浮高亮交互（注册类型：`hover-activate-neighbors`）可以高亮当前元素及其相邻元素。该交互基于 G6 内置交互 `hover-activate` 实现，并继承了其[配置项](https://g6.antv.antgroup.com/api/behaviors/hover-activate)。">高亮相邻元素</code>

<code id="demo-flow-direction-graph-hover-activate-chain" src="./demos/flow-direction-graph/hover-activate-chain.tsx" description="通过添加悬浮高亮交互（注册类型：`hover-activate-chain`）可以高亮显示当前元素及其所在的链路。此交互基于 G6 内置交互 `hover-activate` 实现，并继承了其[配置项](https://g6.antv.antgroup.com/api/behaviors/hover-activate)。">高亮元素及其所在链路</code>

<code id="demo-flow-direction-graph-custom" src="./demos/flow-direction-graph/custom.tsx">自定义</code>

## API

通用配置参考：[图通用属性](./overview#图通用属性)

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| layout | AntV Dagre 布局配置 | [`AntVDagreLayoutOptions`](https://g6.antv.antgroup.com/api/layouts/antv-dagre-layout) | `{ type: 'antv-dagre' }` |
| behaviors | 设置用户交互事件，同样支持 G6 内置交互。关于交互的详细介绍，请查阅[此处](https://g6.antv.antgroup.com/manual/core-concept/behavior) | [`BehaviorOptions[]`](https://g6.antv.antgroup.com/api/behaviors/brush-select) \| `((existingBehaviors: BehaviorOptions[]) => BehaviorOptions[])` | - |
| plugins | 设置画布插件，处理画布的渲染逻辑、额外组件渲染等，同样支持 G6 内置插件。关于插件的详细介绍，请查阅[此处](https://g6.antv.antgroup.com/manual/core-concept/plugin) | [`PluginOptions[]`](https://g6.antv.antgroup.com/api/plugins/background) \| `((existingPlugins: PluginOptions[]) => PluginOptions[])` | - |
| transforms | 设置数据转换器，处理用户输入数据并转换为适合后续处理的内部流转数据，同样支持 G6 内置数据转换器。关于数据转换的详细介绍，请查阅[此处](https://g6.antv.antgroup.com/api/transforms/map-node-size) | [`TransformOptions[]`](https://g6.antv.antgroup.com/api/transforms/map-node-size) \| `((existingTransforms: TransformOptions[]) => TransformOptions[])` | - |
