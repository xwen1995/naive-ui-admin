<template>
  <div class="menu-fixed-root">
    <div class="menu-flex-root">
      <div class="menu-tree-container">
        <n-tree
          :data="treeData"
          :default-expanded-keys="expandedKeys"
          :key-field="'id'"
          :label-field="'label'"
          :children-field="'children'"
          :selectable="true"
          @update:selected-keys="handleNodeClick"
        />
      </div>
      <div class="menu-container">
        <menuContainer :selectedNodeId="selectedNodeId" :selected-path="selectedPath" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { NTree } from 'naive-ui';
import menuContainer from "./menuContainer.vue";
import { treeData } from "./treeData.config.ts";

const selectedNodeId = ref("hair"); // 默认选中的节点
const expandedKeys = ref(["shader", "digitalHuman"]); // 默认展开的节点
const defaultProps = {
  children: "children",
  label: "label"
};

function findNodePath(data, id, path = []) {
  for (const node of data) {
    const currentPath = [...path, node.id];
    if (node.id === id) return currentPath;
    if (node.children) {
      const childPath = findNodePath(node.children, id, currentPath);
      if (childPath) return childPath;
    }
  }
  return null;
}

const selectedPath = ref(findNodePath(treeData, selectedNodeId.value) || []);

function handleNodeClick(keys) {
  if (keys.length > 0) {
    selectedNodeId.value = keys[0];
    selectedPath.value = findNodePath(treeData, keys[0]) || [];
  }
}
</script>

<style lang="scss" scoped>
.menu-tree-container {
  width: 200px;
  height: 100%;
  background: #000000;
  overflow-y: auto;
  padding-left: 0px;
  box-sizing: border-box;
  color: #ffffff; // 修改文字颜色为白色
  padding: 10px;
}
.menu-tree-container::-webkit-scrollbar,
.menu-container::-webkit-scrollbar {
  width: 8px;
  background: #23242a;
}
.menu-tree-container::-webkit-scrollbar-thumb,
.menu-container::-webkit-scrollbar-thumb {
  background: #444857;
  border-radius: 4px;
}
.menu-tree-container::-webkit-scrollbar-thumb:hover,
.menu-container::-webkit-scrollbar-thumb:hover {
  background: #5a5e6b;
}

.menu-container {
  flex: 1;
  height: 500px;
  background: #23242a;
  color: #e6e6e6;
  overflow-y: auto;
}

.menu-fixed-root {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: transparent;
}
.menu-flex-root {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  height: 100%;
}
:deep(.n-tree .n-tree-node-content) {
  color: #9e9797; // 确保树节点文字颜色为白色
  padding-left: 0px; // 减小左侧填充以减少层级间距
}
:deep(.n-tree-node--selected) {
  background-color: #409eff; // 修改选中状态为蓝色
}
</style>
