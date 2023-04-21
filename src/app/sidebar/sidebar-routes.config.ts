export const ROUTES = [
  { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', children: null },
  { path: 'user-management', title: 'User Management', icon: 'person', children: null },
  { path: '#masters', id: 'masters', title:'Master Data', icon: 'apps', children: [
    {path:"masters/state-master", title:"State Master",icon:"SM"},
    {path:"masters/city-master", title:"City Master",icon:"CM"},
    {path:"masters/product-master", title:'Product Master', icon:"PM"},
    {path:'masters/category-master', title:'Category Master', icon:"CM"},
    {path:'masters/sub-category', title:'Sub Category Master', icon:'Sub'},
    {path:'masters/brand',title:'Brand',icon:'B'},
    {path:'masters/erp-bank-master',title:'ERP Bank',icon:'E'},
    {path:'masters/measuring-unit',title:'Measuring Unit',icon:'MU'},
    {path:'masters/po-master',title:'PO Master',icon:'PO'},
    {path:'masters/vender',title:'Vender',icon:'V'},
    {path:'masters/warehouse',title:'WareHouse',icon:'W'}
  ] },
  { path: '#component', id: 'component', title: 'Component', icon: 'apps', children: [
      {path: 'components/price-table', title: 'Price Table', icon: 'PT'},
      {path: 'components/panels', title: 'Panels', icon: 'P'},
      {path: 'components/wizard', title: 'Wizard', icon: 'W'},
    ]},
  { path: 'notification', title: 'Notification', icon: 'notifications', children: null },
  { path: 'alert', title: 'Sweet Alert', icon: 'warning', children: null },
  { path: 'settings', title: 'Settings', icon: 'settings', children: null },
];
