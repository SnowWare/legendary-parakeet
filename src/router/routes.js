export default [
  {
    path: "/",
    component: () => import("layouts/default"),
    children: [
      { path: "", component: () => import("pages/index") },
      {
        path: "/learn",
        component: () => import("pages/learn")
      }
    ]
  },

  {
    // Always leave this as last one
    path: "*",
    component: () => import("pages/404")
  }
];
