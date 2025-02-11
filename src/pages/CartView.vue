<template>
    <div class="banner">
        <!-- 头部栏 -->
        <div class="top">
            <!-- 左边返回主页面导航 -->
            <a href="/"><i class="iconfont icon-shouye"></i> 返回主页面</a>
            <!-- 京东logo -->
            <img src="./images/login-jdlogo.png" alt="">
            <span>mycart</span>
        </div>
        <!-- 装饰文字标题 -->
        <div class="text">
            All my infos
            <div class="decoration">
                全部商品
            </div>
            <div class="line"></div>
        </div>
        <!-- 商品内容 -->
        <table>
            <!-- 副标题栏 -->
            <tr class="subtitle">
                <th>选择</th>
                <th>图片</th>
                <th>内容</th>
                <th>单价</th>
                <th>数量</th>
                <th>小计</th>
                <th>操作</th>
            </tr>
            <!-- 商品内容详情 -->
            <tr class="content" v-for="(info, index) in infos" :key="index">
                <td><input type="checkbox" v-model="info.isCheck" @change="update"></td>
                <td class="pic">
                    <img :src="info.picurl">
                </td>
                <td style="width: 20vw;">{{ info.content }}</td>
                <td>￥{{ info.price }}</td>
                <td>
                    <div>
                        <button :disabled="info.num <= 1" :class="info.num <= 1 ? 'forbid' : ''"
                            @click="reduce(info.id);">-</button>
                        <span>{{ info.num }}</span>
                        <button @click="add(info.id)">+</button>
                    </div>
                </td>
                <td style="font-weight: 550;">￥{{ info.price * info.num }}</td>
                <td><button class="btn btn-danger" @click="delInfo(info.id)">删除</button></td>
            </tr>
        </table>
        <!-- 汇总操作 -->
        <div v-if="infos.length === 0">
            <el-empty description="~快去搜罗点东西吧" style="margin: 0 auto;"></el-empty>
        </div>
        <div class="bottom" v-else>
            <input type="checkbox" v-model="isChecked" @change="handleChange"> 全选
            <span class="cart" @click="infos = [];"><a>清空购物车</a></span>
            <span>已选择 <i style="color: red;">{{ sum_num }}</i> 件商品</span>
            <span class="sumPrice">总价：<i style="color: red;font-weight: 550;">￥{{ sum_price }}</i></span>
            <button class="btn">结算</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isChecked: false,
            infos: [
                {
                    id: 1,
                    picurl: "https://img14.360buyimg.com/n1/s450x450_jfs/t1/200761/22/36982/74438/6583a31eFefe3fc31/82071e26a2f79243.jpg",
                    content: "荣耀100 Pro 单反级主摄",
                    price: 3399,
                    num: 1,
                    isCheck: false
                },
                {
                    id: 2,
                    picurl: "https://img11.360buyimg.com/n1/s450x450_jfs/t1/247606/18/171/28708/658542dcF680b2922/ad6f7b5b1354f978.jpg",
                    content: "Apple AirPods Apple蓝牙耳机",
                    price: 999,
                    num: 1,
                    isCheck: false
                },
                {
                    id: 3,
                    picurl: "https://img13.360buyimg.com/n1/s450x450_jfs/t1/234598/33/9965/64450/6583a563Ff332fcf7/5ad1d2b705b8307f.jpg",
                    content: "Apple 苹果15 粉色",
                    price: 5249,
                    num: 1,
                    isCheck: false
                },
            ],
            sum_num: 0,
            sum_price: 0,
        }
    },
    methods: {
        delInfo(id) {
            this.infos = this.infos.filter(info => {
                return info.id !== id;
            });
            this.update();
        },
        update() {
            this.sum_num = 0;
            this.sum_price = 0;
            this.infos.forEach(info => {
                if (info.isCheck) {
                    this.sum_num += info.num;
                    this.sum_price += info.num * info.price;
                }
            })
            if (this.sum_num === this.infos.length) this.isChecked = true;
            else this.isChecked = false;
        },
        reduce(id) {
            this.infos.forEach(info => {
                if (info.id === id) {
                    info.num--;
                    if (info.isCheck) this.update();
                }
            })
        },
        add(id) {
            this.infos.forEach(info => {
                if (info.id === id) {
                    info.num++;
                    if (info.isCheck) this.update();
                }
            })
        },
        handleChange() {
            this.infos.forEach(info => {
                info.isCheck = this.isChecked;
            })
            this.update();
        }
    },
    mounted() {
        let title = document.querySelector("html head title")
        title.innerHTML = "京东-我的购物车";
    }
}
</script>

<style lang="scss" scoped>
.forbid {
    cursor: not-allowed;
}

.banner {
    width: 70vw;

    .top {
        margin: 10px 0 10px;
        padding-bottom: 10px;
        font-size: 22px;
        border-bottom: 2px solid #eee;

        a {
            margin-left: 10px;

            i {
                font-size: 22px;
            }
        }

        img {
            margin-left: 18vw;
            margin-right: 20vw;
            vertical-align: bottom;
        }

        span {
            color: #aaa;
            font-size: 30px;
            font-style: italic;
        }
    }

    .text {
        text-align: center;
        font-size: 60px;
        color: #ccc;
        font-style: italic;
        position: relative;

        .decoration {
            font-size: 30px;
            color: #e2231a;
            font-weight: 550;
            font-style: normal;
            position: absolute;
            top: 50px;
            left: 31vw;
        }

        .line {
            width: 12vw;
            height: 3px;
            margin: 18px auto 20px;
            background-color: #ccc;
        }
    }

    table {
        width: 100%;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

        .subtitle {
            th {
                padding: 0.8em 0;
                text-align: center;
            }
        }

        .content {
            text-align: center;

            td {
                padding: 0.5em 10px;
                width: 10vw;
            }

            td:nth-child(1) {
                width: 5vw;
            }

            .pic {
                width: 150px;

                img {
                    width: 100%;
                }
            }

            div {
                height: 25px;

                button {
                    height: 100%;
                    border: none;
                    width: 20px;
                }

                span {
                    line-height: 25px;
                    padding: 1px 10px;
                    border: 1px solid #f0f0f0;
                }
            }
        }
    }

    .bottom {
        margin: 20px 0;
        padding: 0px 0 0 1.8vw;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        color: #777;
        overflow: hidden;
        white-space: nowrap;
        line-height: 38px;

        span.cart {
            margin-left: 3vw;
            cursor: pointer;
        }

        span {
            margin-left: 27vw;
        }

        span.sumPrice {
            display: inline-block;
            margin-left: 3vw;
        }

        .btn {
            float: right;
            padding-left: 2.5vw;
            padding-right: 2.5vw;
            color: white;
            background-color: #dc3545;
            border-radius: 0;
        }
    }
}
</style>