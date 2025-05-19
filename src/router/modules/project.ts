import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
import { OptionsSharp } from '@vicons/ionicons5';
import { renderIcon } from '@/utils/index';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/project',
    name: 'Project',
    redirect: '/system/project',
    component: Layout,
    meta: {
      title: '项目列表',
      icon: renderIcon(OptionsSharp),
      sort: 2,
    },
    children: [
      {
        path: 'projectList',
        name: 'projectList',
        meta: {
          title: '所有项目',
        },
        component: () => import('@/views/project/projectList.vue'),
      },
      {
        path: 'projectTemplate',
        name: 'projectTemplate',
        meta: {
          title: '项目模板',
        },
        component: () => import('@/views/project/projectTemplate.vue'),
      },
    ],
  },
];

export default routes;
