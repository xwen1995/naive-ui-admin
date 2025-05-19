import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
import { ProjectOutlined } from '@vicons/antd';
import { renderIcon } from '@/utils/index';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/3dEditor',
    name: 'editor',
    component: Layout,
    meta: {
      sort: 3,
      isRoot: true,
      activeMenu: 'editor_index',
      icon: renderIcon(ProjectOutlined),
    },
    children: [
      {
        path: '/index',
        name: `editor_index`,
        meta: {
          title: '编辑器',
          activeMenu: 'editor_index',
        },
        component: () => import('@/views/3dEditor/index.vue'),
      },
    ],
  },
];

export default routes;
