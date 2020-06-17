import Layout from "@/views/layout/App.vue";
export default {
  path: "/sys",
  component: Layout,
  name: "History",
  redirect: "/sys/history",
  meta: {
    title: "系统管理"
  },
  children: [
    {
      path: "history",
      name: "history",
      meta: {
        title: "历史事件"
      },
      component: resolve => require(["@/views/sys/history/Index.vue"], resolve)
    }
  ]
};
