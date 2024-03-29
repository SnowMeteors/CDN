// aplayer
const ap = new APlayer({
	container: document.getElementById('aplayer'),
	order: 'random',
	autoplay: false,
	fixed: true,
	preload: 'none',
	audio: [
		{
			name: "風の詩",
			artist: '押尾光太郎',
			url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_28538579&response=res&type=convert_url&',
			cover: 'http://p2.music.126.net/w4mS_DbgBlJLzzkiuQcIBA==/109951163405911243.jpg?param=130y130',
		},
		{
			name: "流行的云",
			artist: '岸部真明',
			url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_322731&response=res&type=convert_url&',
			cover: 'http://p2.music.126.net/fCM0L-lNcdrxwLsyFCSKKA==/109951165068929792.jpg?param=130y130',
		},
		{
			name: "奇迹的山",
			artist: '岸部真明',
			url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_322732&response=res&type=convert_url&',
			cover: 'http://p2.music.126.net/fCM0L-lNcdrxwLsyFCSKKA==/109951165068929792.jpg?param=130y130',
		},
		{
			name: "桜花抄",
			artist: '天門',
			url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_21124423&response=res&type=convert_url&',
			cover: 'http://p2.music.126.net/1sw_ptPeI_GNm58VBW1udQ==/2504687488135369.jpg?param=177y177',
		},
		{
			name: "想い出は遠くの日々",
			artist: '天門',
			url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_13675481&response=res&type=convert_url&',
			cover: 'http://p2.music.126.net/1sw_ptPeI_GNm58VBW1udQ==/2504687488135369.jpg?param=177y177',
		},
		{
			name: "焦燥",
			artist: '天門',
			url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_4259848&response=res&type=convert_url&',
			cover: 'http://p2.music.126.net/1sw_ptPeI_GNm58VBW1udQ==/2504687488135369.jpg?param=177y177',
		},
		{
			name: "雪の駅",
			artist: '天門',
			url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_12876794&response=res&type=convert_url&',
			cover: 'http://p2.music.126.net/1sw_ptPeI_GNm58VBW1udQ==/2504687488135369.jpg?param=177y177',
		},
		{
			name: "Kiss",
			artist: '天門',
			url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_28645140&response=res&type=convert_url&',
			cover: 'http://p2.music.126.net/1sw_ptPeI_GNm58VBW1udQ==/2504687488135369.jpg?param=177y177',
		},
		{
			name: "カナエの気持ち",
			artist: '天門',
			url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_10357907&response=res&type=convert_url&',
			cover: 'http://p2.music.126.net/1sw_ptPeI_GNm58VBW1udQ==/2504687488135369.jpg?param=177y177',
		},
		{
			name: "夢",
			artist: '天門',
			url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_28709088&response=res&type=convert_url&',
			cover: 'http://p2.music.126.net/1sw_ptPeI_GNm58VBW1udQ==/2504687488135369.jpg?param=177y177',
		},
		{
			name: "空と海と詩",
			artist: '天門',
			url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_477701&response=res&type=convert_url&',
			cover: 'http://p2.music.126.net/1sw_ptPeI_GNm58VBW1udQ==/2504687488135369.jpg?param=177y177',
		},
		{
			name: "届かない気持ち",
			artist: '天門',
			url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_28645157&response=res&type=convert_url&',
			cover: 'http://p2.music.126.net/1sw_ptPeI_GNm58VBW1udQ==/2504687488135369.jpg?param=177y177',
		},
		{
			name: "雪之梦",
			artist: 'Bandari',
			url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_332018&response=res&type=convert_url&',
			cover: 'https://img2.kuwo.cn/star/albumcover/500/85/51/738873143.jpg',
		},
		{
			name: "River Flows in You",
			artist: 'Yiruma',
			url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_26038728&response=res&type=convert_url&',
			cover: 'https://img2.kuwo.cn/star/albumcover/500/74/1/3780438763.jpg',
		},
		{
			name: "Kiss The Rain",
			artist: 'Yiruma',
			url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_38887115&response=res&type=convert_url&',
			cover: 'https://img2.kuwo.cn/star/albumcover/500/74/1/3780438763.jpg',
		},
		{
			name: "战争之后",
			artist: '李进',
			url: 'http://music.163.com/song/media/outer/url?id=502238621.mp3',
			cover: 'http://p2.music.126.net/OwXSMDHp_Tjb6nvX25DrIQ==/109951163438422364.jpg?param=130y130',
		},
		//音乐外链脑袋疼，不想注册七牛啊
		{
			name: "初吻",
			artist: '曹蜀',
			url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_41476554&response=res&type=convert_url&',
			cover: 'http://img2.kuwo.cn/star/albumcover/300/62/57/1468702798.jpg',
		},
		{
			name: "诸天降临(S2)",
			artist: '曹蜀',
			url: 'https://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_41476545&response=res&type=convert_url&',
			cover: 'http://img2.kuwo.cn/star/albumcover/300/62/57/1468702798.jpg',
		},
		{
			name: "The Rain",
			artist: '久石让',
			url: 'https://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_1109443&response=res&type=convert_url&',
			cover: 'http://p1.music.126.net/w0X3JcUjELmDWYjPZL0YSg==/109951164728423040.jpg?param=130y130',
		},
		{
			name: "lit(var)",
			artist: '牛尾宪辅',
			url: 'https://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_69107850&response=res&type=convert_url&',
			cover: 'http://p1.music.126.net/ZXF3bBgvrGctmQKXvQx9CQ==/18782957137588160.jpg?param=177y177',
		},
		{
			name: "光よ、ふたたび",
			artist: '矢野立美',
			url: 'https://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_28056355&response=res&type=convert_url&',
			cover: 'http://img1.kuwo.cn/star/albumcover/300/32/37/1392874965.jpg',
		},
		{
			name: "健二",
			artist: '松本晃彦',
			url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_4947723&response=res&type=convert_url&',
			cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001KV63B40amxl_1.jpg?max_age=2592000',
		},
		{
			name: "时代を超える想い",
			artist: '和田薫',
			url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_6533431&response=res&type=convert_url&',
			cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002pXc9C18xe3X_1.jpg?max_age=2592000',
		},
		{
			name: "Cornfield Chase",
			artist: 'Hans Zimmer',
			url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_28412452&response=res&type=convert_url&',
			cover: 'http://p2.music.126.net/Mulz9DNOFEcU6A9lrITGsg==/109951163936014077.jpg?param=130y130',
		},
		{
			name: "沉醉于风中",
			artist: 'S.E.N.S.',
			url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_20530038&response=res&type=convert_url&',
			cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004YkkJ90vvnjx_1.jpg?max_age=2592000',
		},
		{
			name: "神之将至",
			artist: '王朝',
			url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_6572570&response=res&type=convert_url&',
			cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003YeCrE2l9Rm3_1.jpg?max_age=2592000',
		},
		{
			name: "99인의 변호인",
			artist: '曹英沃',
			url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_28087471&response=res&type=convert_url&',
			cover: 'https://img3.kuwo.cn/star/albumcover/500/59/26/2266213065.jpg',
		},
		{
			name: "걱정말아요 그대",
			artist: '全仁权',
			url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_146601752&response=res&type=convert_url&',
			cover: 'https://img3.kuwo.cn/star/albumcover/500/93/54/2300477504.jpg',
		},
		{
			name: "Night Crusing",
			artist: '牛尾宪辅',
			url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_143378666&response=res&type=convert_url&',
			cover: 'https://y.qq.com/music/photo_new/T002R300x300M000002Gmzga45vqPq_1.jpg?max_age=2592000',
		}
	]
});
// dplayer
const PlaneWars = new DPlayer({
	container: document.getElementById('PlaneWars'),
	preload: 'none',
	video: {
		url: 'https://cdn.jsdelivr.net/gh/SnowMeteors/Video/PlaneWars/PlaneWars.m3u8',
		type: 'hls',
		pic: 'https://cdn.jsdelivr.net/gh/SnowMeteors/Video/PlaneWars/PlaneWars.jpg',
	},
});
const CrampPlate = new DPlayer({
	container: document.getElementById('CrampPlate'),
	preload: 'none',
	video: {
		url: 'https://cdn.jsdelivr.net/gh/SnowMeteors/Video/CrampPlate/CrampPlate.m3u8',
		type: 'hls',
		pic: 'https://cdn.jsdelivr.net/gh/SnowMeteors/Video/CrampPlate/CrampPlate.jpg',
	},
});