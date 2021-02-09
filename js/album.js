window.lazySizesConfig = window.lazySizesConfig || {};
lazySizesConfig.expand = 190;
album = {
    init: function () {
        const that = this;
        $.getJSON("https://cdn.jsdelivr.net/gh/SnowMeteors/CDN@master/js/album.json",
            function (data) {
                that.render(data);
            });
    },
    render: function (data) {
        // 相册数量
        let div = "", name, link, cover;
        let albumCnt = data.album.length;

        for (let i = 0; i < albumCnt; i++) {
            link = data.album[i].link;
            name = data.album[i].name;
            cover = data.album[i].cover;

            // 图片数量
            let photoCnt = 0;
            for (let j = 0; j < data.album[i].photo.length; j++) {

                photoCnt += data.album[i].photo[j].info.length;
            }

            div +=
                '<div class="gallery-group">' +
                '<a href="' + link + '">' + '</a>' +
                '<img alt="loading" id="NoRepeat"  src="' + cover + '" />' +
                '<span class="group-name">' + name + '</span>' +
                '<span class="photoCnt">' + photoCnt + '</span>' +
                '</div>'
            ;
        }
        $("#group-main").append(div)
    }
};

photo = {
    init: function (lazyload) {
        const that = this;
        $.getJSON("https://cdn.jsdelivr.net/gh/SnowMeteors/CDN@master/js/album.json",
            function (data) {
                that.render(data,lazyload);
            });
    },
    render: function (data,lazyload) {
        //获取相册链接
        function photoLink() {

            function find(str, cha, num) {
                var x = str.indexOf(cha);
                for (var i = 0; i < num; i++) {
                    x = str.indexOf(cha, x + 1);
                }
                return x;
            }

            let path = window.location.pathname;
            let second, last;

            second = find(path, '/', '1');
            last = find(path, '/', '2');

            let name = "";
            for (let i = second + 1; i < last; i++) {
                name += path[i];
            }

            return name;
        }

        let albumCnt = data.album.length;

        //获取相册下标
        function albumPos(link) {
            for (let i = 0; i < albumCnt; i++) {
                if (data.album[i].link === link) {
                    return i;
                }
            }
        }

        //得到照片名称
        let link = photoLink();
        // 查找照片名称所对应的相册位置
        let index = albumPos(link);
        //获取照片时间线数量
        let timelineCnt = data.album[index].photo.length;
        let li = "";

        //添加基本框架
        for (let i = 0; i < timelineCnt; i++) {
            let date = data.album[index].photo[i].date;
            li +=
                '<li>' +
                '<span>' + date + '</span>' +
                '<div class="content">' +
                '<div class="content-img">' +
                '</div>' +
                '</div>' +
                '</li>'
        }
        $("ul#photo").append(li);
        for (let i = 0; i < timelineCnt; i++) {
            let img = "";
            let info = data.album[index].photo[i].info;
            for (let j = 0; j < info.length; j++) {
                let des = "",url = info[j].url;
                if (info[j].hasOwnProperty("des")) {
                    des = info[j].des;
                }
                //是否有缩略图
                if(info[j].hasOwnProperty("thumb")){url = info[j].thumb;}
                img += '<a data-fancybox="gallery" data-caption="' + des + '" href="' + info[j].url + '" class="photo">';
                if(lazyload === true){

                    img += '<img lazy="loading" class="lazyload" id="NoRepeat" alt="' + des + '" data-src="' + url + '">';
                    if(des !== ""){
                        img += '<div class="caption">' + des + '</div>'
                    }
                    img += '</a>';

                }else{img += '<img id="NoRepeat" alt="' + des + '" src="' + url + '">' + '</a>';}
            }
            $(".content-img").eq(i).append(img);
        }
        //初始化画廊
        if(lazyload === false){
            $(".content-img").justifiedGallery({
                rowHeight: 250,
                margins: 4,
                lastRow: 'hide',
                randomize: true
            });
        }
    }
};

