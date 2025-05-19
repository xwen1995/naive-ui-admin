<template>
  <div class="menu-container">
    <div class="breadcrumb">
      {{
        props.selectedPath && props.selectedPath.length
          ? ["根目录", ...props.selectedPath.map(item => `/${item}/`)].join(" ")
          : "/根目录/ /Internal/"
      }}
    </div>
    <div class="folder-list">
      <div
        v-for="folder in folders"
        :key="folder.name"
        class="folder-item"
        :class="{ selected: folder.name === selectedFolder }"
        @click="selectFolder(folder.name)"
      >
        <div class="folder-icon"></div>
        <div class="folder-name">{{ folder.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, defineProps } from "vue";
import { treeData } from "./treeData.config.ts";

const props = defineProps({
  selectedNodeId: String,
  selectedPath: {
    type: Array,
    default: () => []
  }
});

watch(
  () => props.selectedPath,
  newValue => {
    if (newValue) {
      console.log(newValue);
    }
  }
);

const folders = ref([]);
const selectedFolder = ref("");

function selectFolder(name) {
  selectedFolder.value = name;
  // 可在此处触发事件或路由跳转
}
</script>

<style lang="scss" scoped>
.menu-container {
  background: #232428;
  width: 500px;
  padding: 16px 0 0 0;
}
.breadcrumb {
  color: #bdbdbd;
  font-size: 15px;
  margin-left: 24px;
  margin-bottom: 18px;
}
.folder-list {
  display: flex;
  flex-direction: row;
  gap: 32px;
  padding: 0 24px;
}
.folder-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  padding: 4px 0 2px 0;
  cursor: pointer;
  border-radius: 8px;
  padding: 8px 0 4px 0;
  background: transparent;
  transition: background 0.2s;
  &:hover {
    background: #31323a;
  }
  &.selected {
    background: #393a42;
  }
}
.folder-icon {
  width: 48px;
  height: 36px;
  margin-bottom: 6px;
  background: linear-gradient(180deg, #b3d1f7 60%, #7eb6f5 100%);
  border-radius: 8px 8px 6px 6px;
  margin-bottom: 8px;
  position: relative;
  box-shadow: 0 2px 8px 0 rgba(30, 40, 60, 0.08);
  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: -10px;
    width: 32px;
    height: 16px;
    background: #409eff;
    border-radius: 6px 6px 0 0;
  }
}
.folder-name {
  color: #e3e6eb;
  font-size: 14px;
  margin-top: 0;
  font-weight: 500;
}
</style>
