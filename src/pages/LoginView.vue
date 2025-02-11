<!-- 登录页面 -->
<template>
    <div class="banner">
        <!-- 头部logo栏目 -->
        <div class="header">
            <img src="./images/login-jdlogo.png">
            <img src="./images/login-welcome.png">
        </div>
        <!-- 中间隐私提醒 -->
        <div class="alert">
            <img src="./images/login-tips.png" alt="">
            <p>
                依据《网络安全法》，为保障您的账户安全和正常使用，请尽快完成手机号验证！ 新版
            </p>
            <a href="https://about.jd.com/privacy/">《京东隐私政策》</a>
            <p>
                已上线，将更有利于保护您的个人隐私。
            </p>
        </div>
        <!-- 核心登录框 -->
        <div class="content">
            <!-- 表单上面的logo图片 -->
            <img src="./images/login-contentLogo.png" class="above">
            <!-- 登录表单 -->
            <div class="form">
                <img src="./images/login-logo.png" alt="">
                <div class="input">
                    <span>用户 :</span>
                    <el-input placeholder="请输入用户名" v-model="username" clearable>
                    </el-input>
                </div>
                <div class="input">
                    <span>密码 :</span>
                    <el-input placeholder="请输入密码" v-model="password" show-password>
                    </el-input>
                </div>
                <div class="btns">
                    <button class="btn-login" :class="username && password ? '' : 'btn-loginblock'"
                        :disabled="!username || !password" @click="login">登录</button>
                    <button class="btn-register" @click="toRegister">注册</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            username: '',
            password: "",
            flag: false
        }
    },
    mounted() {
        let title = document.querySelector("html head title")
        title.innerHTML = "京东-欢迎登陆"
    },
    methods: {
        login() {
            this.flag = false;
            let data_list = JSON.parse(localStorage.getItem("data")) || [];
            data_list.forEach(data => {
                if (data.username === this.username && data.password === this.password) {
                    this.flag = true;
                }
            });
            if (this.flag) {
                alert("登录成功!");
                this.$router.push("/");
            }
            else {
                alert("用户名或密码错误！")
            }
        },
        toRegister() {
            this.$router.push("/register")
        }
    }
}
</script>

<style lang="scss" scoped>
.banner {
    width: 70vw;
    margin: 10px auto;

    .header {
        height: 60px;
        width: 300px;
        margin: 10px auto;
        display: flex;

        img {
            margin: 0 1vw;
        }

        img:nth-child(2) {
            margin-top: 20px;
            height: 40px;
        }
    }

    .alert {
        padding: 10px 0 10px 2vw;
        margin-bottom: 0;
        border-radius: 0;
        background-color: #fff8f0;
        display: flex;
        font-size: 14px;
        color: #999;

        img {
            height: 18px;
            margin: 0 5px;
        }

        p {
            margin-bottom: 0;
            line-height: 20px;
        }

    }

    .content {
        background-color: #e93854;
        border-radius: 0 0 10px 10px;
        height: 440px;

        img.above {
            display: block;
            width: 27vw;
            margin: 0px auto;
            opacity: 0.7;
        }

        .form {
            background-color: #fff;
            margin: 0px auto;
            padding-top: 10px;
            width: 27vw;
            height: 290px;
            border-radius: 10px;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

            img {
                display: block;
                width: 120px;
                margin: 0 auto;
            }

            .input {
                color: #888;

                span {
                    width: 4vw;
                    line-height: 40px;
                    margin-right: 4px;
                }

                display: flex;
                width: 23vw;
                margin: 18px auto;
            }

            .btns {
                width: 18vw;
                margin: 20px auto;
                display: flex;
                justify-content: space-between;

                .btn-login,
                .btn-register {
                    padding: 10px 40px;
                    border: none;
                    color: white;
                    background-color: #e4393c;
                    border-radius: 10px;
                }

                .btn-register {
                    background-color: #0d6efd;
                }

                .btn-loginblock {
                    opacity: 0.5;
                }
            }
        }
    }
}
</style>
