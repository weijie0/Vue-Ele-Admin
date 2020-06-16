<template>
  <div>
    <ToolBar>
      <div>
        <el-input
          placeholder="请输入文章标题"
          size="small"
          style="width: 140px"
          v-model="searchParams.title"
          clearable
        ></el-input>

        <el-button type="success" size="small" @click="refresh()"
          >查询</el-button
        >
        <el-button type="warning" size="small" @click="clearSearchParams()"
          >重置</el-button
        >
      </div>
    </ToolBar>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="title" label="标题"> </el-table-column>
      <el-table-column prop="details" label="详情"></el-table-column>
      <el-table-column prop="flight_number" label="航次"></el-table-column>
      <el-table-column label="访问链接" width="400" show-overflow-tooltip>
        <template slot-scope="scope">
          <a :href="scope.row.links.article" target="_blank" class="buttonText">{{scope.row.links.article}}</a>
        </template>
      </el-table-column>
      <el-table-column prop="event_date_utc" label="时间"></el-table-column>
      <el-table-column fixed="right"   label="操作">
        <div  slot-scope="scope">
          <el-button type="primary" size="small" @click="editDialog(scope.row.id)"
            ><i class="el-icon-edit"></i><span>
            查看
          </span></el-button
          >
        </div>
      </el-table-column>
    </el-table>
       <Pagination
         :params="searchParams"
         :requestFunc="requestFunc"
         ref="pagination"
         @returnData="returnData"
       />
    <Edit :item="item" :showEditDialog="showEditDialog" @close="showEditDialog = false" />
  </div>
</template>

<script>
import { history, getHistoryById } from "@/api/sys/history";
import { exportCvsTable } from "@/utils/cvs";
import { resetObject } from "@/utils/common";
import Edit from "./Edit.vue";
export default {
  data() {
    return {
      searchParams: {
        title: "",
        type: ""
      },
      showEditDialog: false,
      tableData: [],
      item:{}
    };
  },
  methods: {
    requestFunc(param) {
      return history(param);
    },
    routeDemo() {
      this.$message.info("待添加");
    },
    exportTable() {
      exportCvsTable(
        [
          { title: "文章标题", field: "title" },
          { title: "浏览量", field: "visit_count" }
        ],
        this.tableData,
        "文章列表"
      );
    },
    refresh() {
      this.$refs.pagination.Refresh(); //分页刷新
    },
    returnData(pageList) {
      this.tableData = pageList;
    },
    clearSearchParams() {
      resetObject(this.searchParams);
      this.refresh();
    },
    editDialog(id) {
      getHistoryById(id)
      .then(r => {
        this.item = r
        this.showEditDialog = true;
      })
    }
  },
  components: { Edit }
};
</script>
