<template>
    <div class="banner">
        <!-- 头部栏 -->
        <div class="top">
            <div class="text">个人信息</div>
            <div class="line"></div>
        </div>
        <!-- 内容表单 -->
        <form action="/">
            <ul>
                <!-- 头像 -->
                <li>
                    <span>头像：</span>
                    <img src="./images/avatar.jpeg" alt="">

                </li>
                <!-- 昵称 -->
                <li>
                    <span>昵称：</span>
                    <el-input style="flex:1" placeholder="请输入您的昵称" v-model="username" clearable>
                    </el-input>
                </li>
                <!-- 性别 -->
                <li>
                    <span>性别：</span>
                    <div class="sex">
                        <el-radio v-model="sex" label="1">男</el-radio>
                        <el-radio v-model="sex" label="2">女</el-radio>
                        <el-radio v-model="sex" label="3">保密</el-radio>
                    </div>
                </li>
                <!-- 生日 -->
                <li>
                    <span>生日：</span>
                    <div class="block" style="flex: 1;">
                        <el-date-picker style="width: 100%;" v-model="birthday" type="date" placeholder="选择日期">
                        </el-date-picker>
                    </div>
                </li>
                <!-- 兴趣 -->
                <li>
                    <span>兴趣：</span>
                    <div class="block" style="flex: 1;">
                        <el-checkbox-group size="medium" v-model="checkboxGroup1" style="line-height: 40px;">
                            <el-checkbox-button v-for="(hobby, index) in hobbies" :label="hobby" :key="index">{{ hobby
                            }}</el-checkbox-button>
                        </el-checkbox-group>
                    </div>
                </li>
                <!-- 提交按钮 -->
                <li>
                    <button class="btn btn-danger" @click="modifySuccess">提交</button>
                </li>
            </ul>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            checkboxGroup1: ["数码"],
            username: "",
            sex: 0,
            birthday: "",
            hobbies: ["数码", "书籍", "个护", "零食"]
        }
    },
    methods: {
        modifySuccess() {
            alert("个人信息修改成功！");
        }
    },
    mounted() {
        let title = document.querySelector("html head title")
        title.innerHTML = "京东-个人中心";
    }
}
</script>

<style lang="scss" scoped>
.banner {
    padding: 20px;
    width: 30vw;
    margin: 20px auto;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

    .top {
        text-align: center;
        font-size: 40px;

        .line {
            background-color: #e93854;
            width: 23vw;
            height: 3px;
            margin: 20px auto;
        }
    }

    ul {
        li {
            display: flex;
            margin: 16px auto;
            width: 24vw;

            span {
                width: 4vw;
                line-height: 40px;
            }

            .sex {
                line-height: 40px;
            }

            button {
                margin: 10px auto 0;
                padding: 6px 20px;
            }
        }

        li:nth-child(1) {
            span {
                line-height: 60px;
            }

            img {
                width: 60px;
                border-radius: 50%;
                box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
            }
        }
    }
}
</style>