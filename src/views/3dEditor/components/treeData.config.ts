interface TreeNode {
  id: string;
  label: string;
  type?: number;
  uuid?: string;
  parentId?: string;
  meta?: string | Record<string, any>;
  url?: string;
  locked?: boolean;
  children?: TreeNode[];
}

export const treeData: TreeNode[] = [
  {
    id: 'internal',
    label: 'Internal',
    locked: true,
    children: [
      {
        id: 'mesh',
        label: 'Mesh',
        locked: true,
        meta: JSON.stringify({ type: 'Mesh', locked: true })
      },
      {
        id: 'material',
        label: 'Material',
        locked: true,
        meta: JSON.stringify({ type: 'Material', locked: true })
      },
      {
        id: 'ParticleMat',
        label: 'Particle Material',
        type: 0,
        uuid: '0000202',
        parentId: '0000004',
        meta: JSON.stringify({
          type: 'Material',
          id: '0000202',
          version: '0.9.0-beta.81',
          locked: false
        }),
        url: 'https://mdn.alipayobjects.com/oasis_be/afts/file/A*fyDgQIGyzOIAAAAAAAAAAAAADkp5AQ/Material.json'
      },
      {
        id: 'shader',
        label: 'Shader',
        locked: true,
        children: [
          {
            id: 'digitalHuman',
            label: 'DigitalHuman',
            children: [
              { id: 'eye', label: 'Eye' },
              { id: 'hair', label: 'Hair' },
              { id: 'sss', label: 'SSS' },
            ],
          },
        ],
      },
    ],
  },
];

const testdata = [
  {
    "id": "74003572",
    "name": "Internal",
    "type": 1,
    "uuid": "0000002",
    "parentId": null,
    "meta": { "id": "0000001", "type": "Folder", "version": "1.0.1", "locked": true },
    "url": null
  },
  {
    "id": "74003573",
    "name": "Mesh",
    "type": 1,
    "uuid": "0000003",
    "parentId": "0000002",
    "meta": { "id": "0000003", "type": "Folder", "version": "1.0.1", "locked": true },
    "url": null
  },
  {
    "id": "74003574",
    "name": "Material",
    "type": 1,
    "uuid": "0000004",
    "parentId": "0000002",
    "meta": { "id": "0000002", "type": "Folder", "version": "1.0.1", "locked": true },
    "url": null
  }
]