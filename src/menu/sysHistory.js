export default {
  name: "系统管理",
  permissionsKey: "",
  icon: "fa fa-envelope-open",
  children: {
    courseCardList: {
      name: "历史事件",
      permissionsKey: "",
      path: "/sys/history"
    },
    organCardList: {
      name: "接口信息",
      permissionsKey: "",
      path: "/sys/info"
    }
  }
};
