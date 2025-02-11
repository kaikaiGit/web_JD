<template>
    <div class="banner">
        <!-- 头部logo栏目 -->
        <div class="header">
            <img src="./images/login-jdlogo.png">
            <p>欢迎注册</p>
        </div>
        <!-- 核心注册框 -->
        <div class="register">
            <!-- 头部修饰 -->
            <div class="top">
                <div class="text">
                    register
                    <div class="chinese">注册</div>
                </div>
                <div class="line"></div>
            </div>
            <!-- 注册输入框 -->
            <div class="ipts">
                <el-alert title="用户名格式正确" type="success" show-icon v-if="username.length >= 2 && username.length <= 10">
                </el-alert>
                <el-alert title="请注册长度在2~10之间的用户名" type="error" show-icon v-else :closable="false">
                </el-alert>
                <div class="input">
                    <span>用户 :</span>
                    <el-input placeholder="请输入您的用户名" v-model="username" clearable minlength="2" maxlength="10"
                        show-word-limit>
                    </el-input>
                </div>
                <el-alert title="密码格式正确" type="success" show-icon v-if="regex.test(password)">
                </el-alert>
                <el-alert title="密码需同时包含数字及小写字母" type="error" show-icon v-else :closable="false">
                </el-alert>
                <div class="input">
                    <span>密码 :</span>
                    <el-input placeholder="请输入您的密码" v-model="password" show-password>
                    </el-input>
                </div>
                <el-alert title="输入密码一致" type="success" show-icon v-if="password === repassword && password">
                </el-alert>
                <el-alert title="两次输入的密码不一致" type="error" show-icon v-else :closable="false">
                </el-alert>
                <div class="input">
                    <span>确认 :</span>
                    <el-input placeholder="请确认您的密码" v-model="repassword" show-password
                        :disabled="!password || !regex.test(password) || !(username.length >= 2 && username.length <= 10)">
                    </el-input>
                </div>
            </div>
            <!-- 注册按钮 -->
            <button class="btn btn-danger" :disabled="!check()" @click="saveData">立即注册</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: "",
            repassword: "",
            regex: /[a-z][0-9]|[0-9][a-z]/,
            flag: true,
            data_list: []
        }
    },
    methods: {
        check() {
            this.flag = this.username.length >= 2 && this.username.length <= 10 && this.regex.test(this.password) && this.password === this.repassword && this.password;
            return this.flag;
        },
        saveData() {
            this.data_list = JSON.parse(localStorage.getItem("data")) || [];
            this.data_list.unshift({ username: this.username, password: this.password });
            localStorage.setItem("data", JSON.stringify(this.data_list));
            console.log(this.data_list);
            this.$router.push("/login");//跳转到登录页面
            alert("注册成功！")
        }
    },
    mounted() {
        let title = document.querySelector("html head title")
        title.innerHTML = "京东-个人注册"
    }
}
</script>

<style lang="scss" scoped>
.banner {

    .header {
        height: 60px;
        width: 330px;
        margin: 18px auto;
        display: flex;

        img {
            margin: 0 2vw;
        }

        p {
            margin-bottom: 0;
            line-height: 73px;
            font-size: 24px;
            color: #555;
            text-shadow: 1px 1px 1px #999;
        }
    }

    .register {
        padding: 4px 0;
        width: 27vw;
        margin: 10px auto;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        border-radius: 10px;

        .top {
            text-align: center;
            font-size: 30px;

            .text {
                font-size: 46px;
                color: rgba(0, 0, 0, 0.1);
                position: relative;

                .chinese {
                    position: absolute;
                    font-size: 30px;
                    color: rgb(111, 111, 111);
                    top: 33px;
                    left: 11.4vw;
                }
            }

            .line {
                background-color: #e4393c;
                width: 6vw;
                height: 3px;
                margin: 20px auto 10px;
            }
        }


        .ipts {
            .input {
                color: #888;

                span {
                    width: 4vw;
                    line-height: 40px;
                    margin-right: 4px;
                }

                display: flex;
                width: 23vw;
                margin: 8px auto 18px;
            }
        }

        .btn {
            display: block;
            margin: 0 auto 18px;
            padding: 8px 20px;
        }
    }
}
</style>