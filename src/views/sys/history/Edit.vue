<template>
  <el-dialog
    @opened="openDialog"
    :width="dialogWidth"
    :title="title"
    :visible.sync="showEditDialog"
    :show-close="false"
    :close-on-click-modal="false"
  >
    <el-form
      :model="forms"
      ref="editForms"
      class="edit-forms"
      label-position="left"
      :label-width="labelWidth"
    >
      <el-form-item label="标题" prop="title">
        <el-input v-model="forms.title"></el-input>
      </el-form-item>
      <el-form-item label="详情" prop="details">
        <el-input v-model="forms.details"></el-input>
      </el-form-item>
      <el-form-item label="航次" prop="flight_number">
        <el-input v-model="forms.flight_number"></el-input>
      </el-form-item>
      <el-form-item label="访问链接" prop="links.article">
        <el-input v-model="forms.links.article"></el-input>
      </el-form-item>
      <el-form-item label="时间" prop="event_date_utc">
        <el-input v-model="forms.event_date_utc"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="$emit('close')">关闭</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { fillerLeft, resetObject } from "@/utils/common";

export default {
  props: {
    title: {
      type: String,
      default: "查看"
    },
    dialogWidth: {
      type: String,
      default: "700px"
    },
    labelWidth: {
      type: String,
      default: "120px"
    },
    showEditDialog: Boolean,
    item:Object
  },
  data() {
    return {
      forms: {
        title: "",
        details: "",
        flight_number: "",
        links: {article:""},
        event_date_utc: ""
      }
    };
  },
  methods: {
    openDialog() {
      resetObject(this.forms);
      this.$set(this.forms, "id", this.item);
      this.$refs.editForms.resetFields();
      fillerLeft(this.forms, this.item);
    },
    FillerFormField(id, data) {
      //可以外部填充回写做编辑用，也可以请求详情接口填充表单
      this.$set(this.forms, "id", id);
      fillerLeft(this.forms, data);
    }
  }
};
</script>
