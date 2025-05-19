import Mock from 'mockjs';
import { resultSuccess } from '../_util';
import { defineMock } from '@alova/mock';

const Random = Mock.Random;

const token = Random.string('upper', 32, 32);

const adminInfo = {
  userId: '1',
  username: 'admin',
  realName: 'Admin',
  avatar: Random.image(),
  desc: 'manager',
  password: Random.string('upper', 4, 16),
  token,
  permissions: [
    {
      label: '主控台',
      value: 'dashboard_console',
    },
    {
      label: '监控页',
      value: 'dashboard_monitor',
    },
    {
      label: '工作台',
      value: 'dashboard_workplace',
    },
    {
      label: '基础列表',
      value: 'basic_list',
    },
    {
      label: '基础列表删除',
      value: 'basic_list_delete',
    },
  ],
};

export default defineMock({
  '[POST]/api/admin/employee/login': () => {
    return {
      code: 1,
      data: {
        "id": 1,
        "userName": "admin",
        "name": null,
        "token": "eyJhbGciOiJIUzI1NiJ9.eyJlbXBJZCI6MSwiZXhwIjoxNzQ3NjQzMDcyfQ.gcb_IwjrBqOR37oWD3QkQ8Z-ZEAWBUmk06P6RdtFn3A"
      },  // 将token放在result对象中
      message: 'ok',
      type: 'success'
    };
  },
  '/api/admin/employee/admin_info': () => resultSuccess(adminInfo),
});
