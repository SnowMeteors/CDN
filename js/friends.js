link = {
    init:function() {
        const that=this;
        $.getJSON("https://cdn.jsdelivr.net/gh/SnowMeteors/CDN/js/links.json",
            function(data){
                that.render(data);
            });
    },
    render:function(data){
        let name,site,info,avatar,li="";
        for(let i=0;i<data.length;i++){
            name=data[i].name;
            site=data[i].site;
            info=data[i].info;
            avatar=data[i].avatar;
            li+='<div class="card">' +
                   '<a class="clear" href="'+site+'" target="_blank" >' +
                        '<img alt="' + name + '" title="' + name + '" class="avatar" src="' +avatar+'"/>' +
                        '<span title="' + name + '" class="flink-item-name">' + name + '</span>' +
                        '<span title="' + info + '" class="flink-item-desc">' + info + '</span>' +
                    '</a>' +
                '</div>'
            ;
        }
        $(".link-navigation").append(li);
    }
};
link.init();