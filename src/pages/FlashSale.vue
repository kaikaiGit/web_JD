<template>
    <div class="body">
        <div class="banner">
            <!-- 头部栏 -->
            <div class="head">
                <img src="./images/header_text.png" alt="">
            </div>
            <!-- 秒杀时段展示导航栏 -->
            <div class="periods">
                <!-- 0点场 -->
                <div v-show="objs[0].showed" :class="{ 'decoration': objs[0].state, 'clickState': objs[0].clicked }"
                    @click="switchTo(infolists[0], 0)">
                    <span class="text">00:00</span>
                    <span class="addition" :class="{ 'add': objs[0].state }">{{ objs[0].state ? "正在进行" : "即将开始" }}</span>
                </div>
                <!-- 12点场 -->
                <div v-show="objs[1].showed" :class="{ 'decoration': objs[1].state, 'clickState': objs[1].clicked }"
                    @click="switchTo(infolists[1], 1)">
                    <span class="text">12:00</span>
                    <span class="addition" :class="{ 'add': objs[1].state }">{{ objs[1].state ? "正在进行" : "即将开始" }}</span>
                </div>
                <!-- 15点场 -->
                <div v-show="objs[2].showed" :class="{ 'decoration': objs[2].state, 'clickState': objs[2].clicked }"
                    @click="switchTo(infolists[2], 2)">
                    <span class="text">15:00</span>
                    <span class="addition" :class="{ 'add': objs[2].state }">{{ objs[2].state ? "正在进行" : "即将开始" }}</span>
                </div>
                <!-- 18点场 -->
                <div v-show="objs[3].showed" :class="{ 'decoration': objs[3].state, 'clickState': objs[3].clicked }"
                    @click="switchTo(infolists[3], 3)">
                    <span class="text">18:00</span>
                    <span class="addition" :class="{ 'add': objs[3].state }">{{ objs[3].state ? "正在进行" : "即将开始" }}</span>
                </div>
                <!-- 21点场 -->
                <div v-show="objs[4].showed" :class="{ 'decoration': objs[4].state, 'clickState': objs[4].clicked }"
                    @click="switchTo(infolists[4], 4)">
                    <span class="text">21:00</span>
                    <span class="addition" :class="{ 'add': objs[4].state }">{{ objs[4].state ? "正在进行" : "即将开始" }}</span>
                </div>
            </div>
            <!-- 秒杀商品内容 -->
            <div class="infoList">
                <!-- 商品盒子 -->
                <div class="info" v-for="(info, index) in showInfo" :key="index">
                    <!-- 商品图 -->
                    <img class="pic" :src="info.src">
                    <!-- 商品标题 -->
                    <p class="content">{{ info.title }}</p>
                    <!-- 修饰文字 -->
                    <p class="text">限时秒杀 抢先提醒</p>
                    <!-- 购买 -->
                    <div class="price">
                        <span>￥<i>{{ info.price }}</i></span>
                        <button class="btn btn-danger"
                            :class="{ 'buttonDecoration': infolists[currentIndex] !== showInfo }">{{
                                infolists[currentIndex] === showInfo ? "抢购" : "即将开始" }}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // 定时器
            timeset: "",
            objs: [{
                showed: true,
                state: false,
                date: ""
            },
            {
                showed: true,
                state: false,
                date: ""
            },
            {
                showed: true,
                state: false,
                date: ""
            },
            {
                showed: true,
                state: false,
                date: ""
            },
            {
                showed: true,
                state: false,
                date: ""
            }],
            currentTime: '',// 用于存储当前时间,
            // 五个时段的商品列表
            infolists: [
                // 第一个时段
                [
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t20261223/245931/30/543/76904/65881321Febf94581/f1c99f04884a0261.jpg',
                        title: '蓝漂 挂式抽纸 1000张*1提',
                        price: '3.95'
                    },
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t1/228973/11/8315/25774/657a5b0aFf489319a/29058a98fe8536e9.jpg',
                        title: 'HUAUWL MatePad 16G+256G',
                        price: '648'
                    },
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t1/169845/10/21586/256676/61713ff9E8d2f7c1a/bdf51c8c7a696a97.jpg',
                        title: '广西农家圆柿饼500g装',
                        price: '9.7'
                    },
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t20261225/245158/38/790/70365/658a2c78F068e6945/7fe94f076737610f.jpg',
                        title: '阿克苏 冰糖心苹果5斤装',
                        price: '18.77'
                    },
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t20261215/237606/9/8525/31803/657d3483F417d341a/2d45867aa6a2f910.jpg',
                        title: '春见 粑粑柑 5斤大果',
                        price: '17.5'
                    },
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t1/166443/28/9487/1038083/6041f1e7Eb4650f0a/65b43a5f90816d80.png',
                        title: '白心板栗红薯5斤中大果',
                        price: '9.9'
                    },
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t1/228126/18/10710/116795/658a88e2F9b08735e/b613da276dbaf5ff.jpg',
                        title: '榄茵 筷子 19.5cm',
                        price: '5.28'
                    },
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t1/196284/30/31418/70950/6387125fE52aec2c0/19fd0cd9d14d1796.jpg',
                        title: '新鲜 牛腩肉 五斤',
                        price: '135'
                    },
                ],
                // 第二个时段
                [
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t1/237817/14/9823/53101/658c09c9Fe4c73a63/11ed090bb161f6f9.jpg',
                        title: '磐璐胧 胶水 60ml',
                        price: '6.12'
                    },
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t1/244658/26/852/26626/658a9af3F18b32deb/10f9e9e888326ebd.jpg',
                        title: 'Apple 苹果14 128G午夜色',
                        price: '3648'
                    },
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t1/238657/9/1335/72772/658c07a2F79f783a6/d184a0538e8b51c1.jpg',
                        title: '爱舒贝 抹布 大号',
                        price: '6.46'
                    },
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t1/238705/37/1462/54053/658c09c8F19dbf364/9c8e927ac89ac611.jpg',
                        title: '赞璐桐 燃气灶支架 防滑',
                        price: '7.41'
                    },
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t1/101610/2/39443/49982/646314b6Ff4d40505/1a07745800bd1f4c.jpg',
                        title: '佑宸 马桶贴坐便垫 2对装',
                        price: '4.9'
                    },
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t1/94034/33/30731/40426/63648b61Eff8d4b13/fa41fc0b8ea20ee8.jpg',
                        title: '永誉 双面胶带 20mm透明',
                        price: '5.42'
                    },
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t20261226/249165/18/730/28917/658b8c0cFe4945e36/ea9e7df526d2f5a6.png',
                        title: '微软 Xbox手柄 浪漫粉',
                        price: '358'
                    },
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t1/237991/20/5326/134523/656f37a2Fd7651cad/11375e14e09776f8.png',
                        title: '爱舒贝 保鲜袋 小号',
                        price: '4.85'
                    }
                ],
                // 第三个时段
                [
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t20261122/193040/21/40593/65284/655efc75Fdb9d10fa/f7324bb2f152228d.png',
                        title: '心相印 抽纸 3层4包',
                        price: '6.01'
                    },
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t1/230553/9/2115/85919/654ae3e9Fc93cb7aa/fe216871f88cf51b.jpg',
                        title: '416页超厚笔记本子',
                        price: '11.9'
                    },
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t20261226/247257/14/952/110529/658be216Fba546f7b/9de00125fbde2e82.jpg',
                        title: '红枣枸杞桂圆茶 30包',
                        price: '8.8'
                    },
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t1/201400/4/9424/86190/6156dae6E17abb151/4a53095bd83f87f5.jpg',
                        title: '罗技 GPW1代轻量化鼠标',
                        price: '434.6'
                    },
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t1/235683/24/8602/110508/657ea956F46c0be2e/bd021e81ea79fe7d.jpg',
                        title: '零趣 原味小麻花 500g*1箱',
                        price: '8.8'
                    },
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t1/210694/37/12768/332762/61b9b7c0Eac1bd022/81d3c86df7159f08.jpg',
                        title: '心相印 抽纸 6包',
                        price: '11.5'
                    },
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t20261224/226507/2/9952/23046/65893c8fF56f8ff66/1803c91103dd27eb.jpg',
                        title: '摩威保 手机支架 可折叠',
                        price: '4.7'
                    },
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t20261226/229720/35/8099/108646/658be232F1ac1596c/23c10e483699209b.jpg',
                        title: '红豆薏米芡实茶 20包',
                        price: '6.2'
                    },
                ],
                // 第四个时段
                [
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t1/70100/23/22109/43010/633e6cd3Eafd1b254/89c57ab346c09130.jpg',
                        title: '罗技 G502星守鼠标',
                        price: '266.3'
                    },
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t1/151439/2/35263/37441/65499596F8d1429ea/43aadcd739e4c2cd.jpg',
                        title: '利达妮 包跟保暖 棉拖鞋',
                        price: '13.76'
                    },
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t20261113/224200/16/3410/44258/65531f95F1327873b/6edd7aa7074f92ce.png',
                        title: '新时达 30个透明文件袋',
                        price: '12.8'
                    },
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t1/88106/26/41633/162769/6497e0b9F48b9a484/dbc13d50c42aa16c.jpg',
                        title: '黑枸杞桑葚玫瑰花茶 50包',
                        price: '10.9'
                    },
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t1/112663/15/33697/246391/64cb17a4F72055f92/88e54f4dec83bd82.png',
                        title: '民法典2023年正版正版',
                        price: '9.6'
                    },
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t1/162768/36/24332/62980/6168dbadE5043e105/69224b2af45a6f7a.jpg',
                        title: '罗技 键鼠套装 MK275',
                        price: '94.05'
                    },
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t1/240617/4/1031/78605/658a3f4dF0a75d4fb/6fc3edf243a5c6b5.jpg',
                        title: '虾皮1斤',
                        price: '12.9'
                    },
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t20261220/241102/23/364/60111/6583a96fF14a0c456/d0748aeee439de63.jpg',
                        title: '离草 信封 20',
                        price: '18.29'
                    }
                ],
                // 第五个时段
                [
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t1/247790/25/765/31076/658a97fdF6ff93f02/80067a5edfbe9d3c.jpg',
                        title: '稚漾 栀子花护手霜 300g',
                        price: '8.8'
                    },
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t1/231482/18/10564/26094/658c46f8F34395394/976afe48ecdcd3e9.jpg',
                        title: '南极人 加绒束脚裤子',
                        price: '45'
                    },
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t1/243850/32/665/120423/65891650F418f5379/fe67a83d09192e45.jpg',
                        title: '鲜闻果草莓 5斤带箱装',
                        price: '129.8'
                    },
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t1/174428/37/24347/259839/6167ce90Eb82788e8/65f72b4fdd1de287.jpg',
                        title: '全棉时代 洗脸巾 80抽*6',
                        price: '63.9'
                    },
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t1/241044/27/691/14265/65892f0bF0b3ba672/bc04e1f0689815ed.jpg',
                        title: '罗马仕 充电宝 20000毫安时',
                        price: '109'
                    },
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t1/70285/19/17097/278570/6145a779Ed6449fae/ab67dce724a18eda.jpg',
                        title: '好侍 咖喱块 原味',
                        price: '10.5'
                    },
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t1/228927/16/9592/57014/65864ad1Fc91ec94a/df43406763bd4dcd.jpg',
                        title: '离草 修正带 迷你渐变色',
                        price: '12.39'
                    },
                    {
                        src: 'https://m.360buyimg.com/seckillcms/s250x250_jfs/t20260817/211482/32/38326/15094/64debd73F20900ea1/85e80edabf337fde.png',
                        title: '苹果 充电器 20W快充套装',
                        price: '28.4'
                    }
                ]
            ],
            //用于展示的商品
            showInfo: [],
            //当前是第几个时间段
            currentIndex: 0
        }
    },
    methods: {
        switchTo(obj, index) {
            this.showInfo = obj;
            // 清空点击状态
            for (let i = 0; i < this.objs.length; ++i) {
                this.objs[i].clicked = false;
            }
            if (this.objs[index].state !== true) { //不是当前时段的商品
                //设置为点击状态
                this.objs[index].clicked = true;
                //清除定时器
                clearInterval(this.timeset);
            }
            else {
                //是当前时段的商品，则重新设置定时器
                this.timeset = setInterval(() => {
                    this.currentTime = new Date(); // 每秒更新一次时间
                    for (let i = 0; i < this.objs.length; i++) {
                        if (i + 1 < this.objs.length && this.objs[i + 1].date < this.currentTime) {
                            this.objs[i].showed = false;
                        }
                        else {
                            this.objs[i].state = true;
                            this.showInfo = this.infolists[i];
                            this.currentIndex = i;
                            localStorage.setItem('currentIndex', i);
                            break;
                        }
                    }
                }, 1000);
            }
        }

    },
    mounted() {
        let title = document.querySelector("html head title")
        title.innerHTML = "京东秒杀-特惠促销";

        // 初始化
        this.objs = [{
            showed: true,
            state: false,
            date: "",
            clicked: false
        },
        {
            showed: true,
            state: false,
            date: "",
            clicked: false
        },
        {
            showed: true,
            state: false,
            date: "",
            clicked: false
        },
        {
            showed: true,
            state: false,
            date: "",
            clicked: false
        },
        {
            showed: true,
            state: false,
            date: "",
            clicked: false
        }];
        // 初始设置当前时间
        this.currentTime = new Date();
        this.currentIndex = 0;
        // 设置时间段对象
        this.objs[0].date = new Date().setHours(0, 0, 0, 0);
        this.objs[1].date = new Date().setHours(12, 0, 0, 0);
        this.objs[2].date = new Date().setHours(15, 0, 0, 0);
        this.objs[3].date = new Date().setHours(18, 0, 0, 0);
        this.objs[4].date = new Date().setHours(21, 0, 0, 0);
        for (let i = 0; i < this.objs.length; i++) {
            if (i + 1 < this.objs.length && this.objs[i + 1].date < this.currentTime) {
                this.objs[i].showed = false;
            }
            else {
                this.objs[i].state = true;
                this.showInfo = this.infolists[i];
                this.currentIndex = i;
                localStorage.setItem('currentIndex', i);
                break;
            }
        }
        // 实时更新当前时间
        this.timeset = setInterval(() => {
            this.currentTime = new Date(); // 每秒更新一次时间
            for (let i = 0; i < this.objs.length; i++) {
                if (i + 1 < this.objs.length && this.objs[i + 1].date < this.currentTime) {
                    this.objs[i].showed = false;
                }
                else {
                    this.objs[i].state = true;
                    this.showInfo = this.infolists[i];
                    this.currentIndex = i;
                    localStorage.setItem('currentIndex', i);
                    break;
                }
            }
        }, 1000);
    },
    destroyed() {
        //清除定时器
        clearInterval(this.timeset)
    }
}

</script>

<style lang="scss" scoped>
.body {
    background-color: #f6f6f6;
    background-image: url(./images//header_bg.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 0 -46px;

    .banner {
        width: 80vw;

        .head {
            img {
                display: block;
                margin: 0 auto;
            }
        }

        .periods {
            display: flex;
            margin-bottom: 10px;

            div {
                display: flex;
                padding: 0px 20px;
                margin: 0 26px;
                height: 60px;
                align-items: center;
                box-sizing: content-box;
                transition: all 0.2s;

                .text {
                    line-height: 60px;
                    font-weight: 600;
                    font-size: 20px;
                }

                .addition {
                    display: inline-block;
                    height: 30px;
                    line-height: 28px;
                    border: 1px solid #777;
                    padding: 0px 10px;
                    margin-left: 10px;
                    border-radius: 1em;
                    font-size: 12px;
                    color: #999;
                }
            }

            div:hover {
                cursor: pointer;
                border-bottom: 4px solid #dc3545;
                box-sizing: border-box;

                .text {
                    color: #dc3545
                }
            }

            .decoration {
                color: white;
                background-color: #e01222;
                border-radius: 10px;

                .add {
                    color: white;
                    border: none;
                    font-weight: 550;
                }
            }

            // 点击选择的状态类
            .clickState {
                background-color: rgb(240, 158, 164);
                color: #fff;
            }
        }

        div.decoration:hover {
            cursor: pointer;
            border-bottom: none;

            .text {
                color: white
            }
        }


    }

    .infoList {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;

        .info {
            background-color: #fff;
            padding: 10px 14px;
            margin-right: 10px;
            margin-bottom: 10px;

            img {
                position: relative;
                display: block;
                width: 90%;
                height: auto;
                margin: 0 auto;
                transition: all 0.3s;
            }

            .content {
                margin-top: 10px;
            }

            .text {
                color: #dc3545;
            }

            .price {
                display: flex;
                justify-content: space-between;

                span {
                    color: #e01222;
                    line-height: 42px;

                    i {
                        font-size: 24px;
                    }
                }

                button {

                    padding: 0.5em 2em;
                }

                .buttonDecoration {
                    background-color: #000;
                    border: none;
                }
            }
        }

        .info:hover {
            img {
                transform: translateY(-10px);
            }
        }
    }
}
</style>