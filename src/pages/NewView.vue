<template>
    <div class="news_box">
        <div class="banner">
            <!-- 标题 -->
            <div class="title">
                <h4>科技咨询</h4>
                <p>客户满意度是我们永远的追求</p>
                <div class="line"></div>
            </div>
            <!-- 新闻内容板块 -->
            <div class="new_box">
                <!-- 新闻1 -->
                <div class="new">
                    <div class="pic">
                        <img src="./images/news1.jpg" alt="" />
                    </div>
                    <div class="text">
                        <h5>手机充电100%再拔原来是错的！</h5>
                        <span>2023-10-23 19:39</span>
                        <p>
                            为了保持手机的续航能力，很多人都会养成将手机充电到100%再拔的习惯。然而，最新的研究表明，我们一直以来的做法是错误的。
                        </p>
                    </div>
                </div>
                <!-- 新闻2 -->
                <div class="new">
                    <div class="pic">
                        <img src="./images/news2.jpg" alt="" />
                    </div>
                    <div class="text">
                        <h5>雷军“冰冷的40亿”的传闻</h5>
                        <span>2023-12-01 18:03</span>
                        <p>
                            小米官称: 关于本集团创始人雷军的不实传闻，所谓“冰冷的 40 亿”
                            纯属子虚乌有、完全失实。请大家勿信、勿传。
                        </p>
                    </div>
                </div>
                <!-- 新闻3 -->
                <div class="new">
                    <div class="pic">
                        <img src="./images/news3.jpg" alt="" />
                    </div>
                    <div class="text">
                        <h5>原来微信语音也可以转发</h5>
                        <span>2023-10-27 08:00</span>
                        <p>
                            当我们需要对语音消息进行转发的时候，此时我们打开微信聊天界面，接着找到需要转发的语音消息，然后长按这条消息，长按之后...
                        </p>
                    </div>
                </div>
                <!-- 新闻4 -->
                <div class="new">
                    <div class="pic">
                        <img src="./images/news4.png" alt="" />
                    </div>
                    <div class="text">
                        <h5>扫地机器人为什么卖不动了？</h5>
                        <span>2023-10-23</span>
                        <p>
                            2022年我国的扫地机器人市场，线上销量同比下滑22.58%，线下销量同比下滑26.78%。这不禁让人发问：扫地机器人，为何卖不动了？
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        start() {
            const news_list = document.querySelectorAll(".new_box .new");
            let news_href = ["https://www.toutiao.com/article/7292974004938342921/",
                "https://www.toutiao.com/article/7307564762882654758/",
                "https://www.toutiao.com/article/7294256695495557667/",
                "https://www.toutiao.com/article/7287782533629018678/"
            ];
            for (let i = 0; i < news_list.length; i++) {
                news_list[i].addEventListener("click",
                    function () {
                        window.open(news_href[i]);
                        console.log(i);
                    })
            }
        }
    },
    mounted() {
        this.start();
        let title = document.querySelector("html head title")
        title.innerHTML = "京东快报"
    }
}
</script>

<style>
@import url(../style/new.css);
</style>