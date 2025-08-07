import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'ic:baseline-view-in-ar',
      keepAlive: true,
      order: 1000,
      title: $t('cdata.title'),
    },
    name: 'Cdata',
    path: '/cdata',
    children: [
      {
        meta: {
          title: $t('cdata.expend.title'),
        },
        name: 'CdataExpend',
        path: '/cdata/expend',
        children: [
          {
            meta: {
              title: $t('cdata.expend.bill.title'),
            },
            name: 'CdataExpendBill',
            path: '/cdata/expend/bill',
            component: () => import('#/views/cdata/expends/bill/index.vue'),
          },
          {
            meta: {
              title: $t('cdata.expend.account_book.title'),
            },
            name: 'CdataExpendAccountBook',
            path: '/cdata/expend/account_book',
            component: () =>
              import('#/views/cdata/expends/account_book/index.vue'),
          },
          {
            meta: {
              title: $t('cdata.expend.bill_plan.title'),
            },
            name: 'CdataExpendBillPlan',
            path: '/cdata/expend/bill_plan',
            component: () =>
              import('#/views/cdata/expends/bill_plan/index.vue'),
          },
        ],
      },
    ],
  },
];

export default routes;
