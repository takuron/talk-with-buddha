// JavaScript Document

$("#error-alert").hide();
$("#copy-alert").hide();

var password = "TakuronDotTop";

String.prototype.replaceAll = function (s1, s2) {
	var reg = new RegExp(s1, "g");
	return this.replace(reg, s2);
}

function encrypt() {
	var msg = $("#text-decryped").val();
	var key = $("#text-key").val();

	if (msg.length < 1) {
		$("#error-alert").show();
		$("#copy-alert").hide();
		$("#error-alert").text("无言者，纵真神再临，亦不可渡。（请输入待加密的明文）");
	} else {
		if (key.length < 1) {
			key = password;
		}

		$("#text-encryped").val(togod(msg, key));
		$("#error-alert").hide();
		$("#copy-alert").hide();
	}

}

function decrypt() {
	var msg = $("#text-decryped").val();
	var key = $("#text-key").val();

	if (msg.length < 1) {
		$("#error-alert").show();
		$("#copy-alert").hide();
		$("#error-alert").text("无言者，纵真神再临，亦不可渡。（请输入待解密的密文）");
	} else {
		if (msg.substring(0, 3) != "佛曰：") {
			$("#error-alert").show();
			$("#copy-alert").hide();
			$("#error-alert").text("施主可曾记得此为何高僧所言？（不是佛语，请确定密文来源本网站并且密文以“佛曰：开头”）");
		} else {
			if (key.length < 1) {
				key = password;
			}

			try {
				$("#error-alert").hide();
				var str = toman(msg, key);
			} catch (err) {
				$("#error-alert").show();
				$("#copy-alert").hide();
				$("#error-alert").text("施主可曾记得此为何高僧所言？（佛语有误，请确定密钥正确并未被篡改）");
			} finally {
				$("#text-encryped").val(str);

			}



		}


	}

}


function copyUrl2() {
	var Url2 = document.getElementById("text-encryped");
	Url2.select();
	document.execCommand("Copy");
	$("#copy-alert").show();
	$("#error-alert").hide();
}

function togod(msg, key) {
	var str = CryptoJS.AES.encrypt(msg, key).toString();

	str = str.substring(10);

	str = str.replaceAll("e", "啰");
	str = str.replaceAll("E", "羯");
	str = str.replaceAll("t", "婆");
	str = str.replaceAll("T", "提");
	str = str.replaceAll("a", "摩");
	str = str.replaceAll("A", "埵");
	str = str.replaceAll("o", "诃");
	str = str.replaceAll("O", "迦");
	str = str.replaceAll("i", "耶");
	str = str.replaceAll("I", "吉");
	str = str.replaceAll("n", "娑");
	str = str.replaceAll("N", "佛");
	str = str.replaceAll("s", "夜");
	str = str.replaceAll("S", "驮");
	str = str.replaceAll("h", "那");
	str = str.replaceAll("H", "谨");
	str = str.replaceAll("r", "悉");
	str = str.replaceAll("R", "墀");
	str = str.replaceAll("d", "阿");
	str = str.replaceAll("D", "呼");
	str = str.replaceAll("l", "萨");
	str = str.replaceAll("L", "尼");
	str = str.replaceAll("c", "陀");
	str = str.replaceAll("C", "唵");
	str = str.replaceAll("u", "唎");
	str = str.replaceAll("U", "伊");
	str = str.replaceAll("m", "卢");
	str = str.replaceAll("M", "喝");
	str = str.replaceAll("w", "帝");
	str = str.replaceAll("W", "烁");
	str = str.replaceAll("f", "醯");
	str = str.replaceAll("F", "蒙");
	str = str.replaceAll("g", "罚");
	str = str.replaceAll("G", "沙");
	str = str.replaceAll("y", "嚧");
	str = str.replaceAll("Y", "他");
	str = str.replaceAll("p", "南");
	str = str.replaceAll("P", "豆");
	str = str.replaceAll("b", "无");
	str = str.replaceAll("B", "孕");
	str = str.replaceAll("v", "菩");
	str = str.replaceAll("V", "伽");
	str = str.replaceAll("k", "怛");
	str = str.replaceAll("K", "俱");
	str = str.replaceAll("j", "哆");
	str = str.replaceAll("J", "度");
	str = str.replaceAll("x", "皤");
	str = str.replaceAll("X", "阇");
	str = str.replaceAll("q", "室");
	str = str.replaceAll("Q", "地");
	str = str.replaceAll("z", "利");
	str = str.replaceAll("Z", "遮");
	str = str.replaceAll("0", "穆");
	str = str.replaceAll("1", "参");
	str = str.replaceAll("2", "舍");
	str = str.replaceAll("3", "苏");
	str = str.replaceAll("4", "钵");
	str = str.replaceAll("5", "曳");
	str = str.replaceAll("6", "数");
	str = str.replaceAll("7", "写");
	str = str.replaceAll("8", "栗");
	str = str.replaceAll("9", "楞");
	str = str.replaceAll("\\+", "咩");
	str = str.replaceAll("/", "输");
	str = str.replaceAll("=", "漫");

	return "佛曰：" + str;
}

function toman(msg, key) {

	str = msg.substring(3);

	str = str.replaceAll("啰", "e");
	str = str.replaceAll("羯", "E");
	str = str.replaceAll("婆", "t");
	str = str.replaceAll("提", "T");
	str = str.replaceAll("摩", "a");
	str = str.replaceAll("埵", "A");
	str = str.replaceAll("诃", "o");
	str = str.replaceAll("迦", "O");
	str = str.replaceAll("耶", "i");
	str = str.replaceAll("吉", "I");
	str = str.replaceAll("娑", "n");
	str = str.replaceAll("佛", "N");
	str = str.replaceAll("夜", "s");
	str = str.replaceAll("驮", "S");
	str = str.replaceAll("那", "h");
	str = str.replaceAll("谨", "H");
	str = str.replaceAll("悉", "r");
	str = str.replaceAll("墀", "R");
	str = str.replaceAll("阿", "d");
	str = str.replaceAll("呼", "D");
	str = str.replaceAll("萨", "l");
	str = str.replaceAll("尼", "L");
	str = str.replaceAll("陀", "c");
	str = str.replaceAll("唵", "C");
	str = str.replaceAll("唎", "u");
	str = str.replaceAll("伊", "U");
	str = str.replaceAll("卢", "m");
	str = str.replaceAll("喝", "M");
	str = str.replaceAll("帝", "w");
	str = str.replaceAll("烁", "W");
	str = str.replaceAll("醯", "f");
	str = str.replaceAll("蒙", "F");
	str = str.replaceAll("罚", "g");
	str = str.replaceAll("沙", "G");
	str = str.replaceAll("嚧", "y");
	str = str.replaceAll("他", "Y");
	str = str.replaceAll("南", "p");
	str = str.replaceAll("豆", "P");
	str = str.replaceAll("无", "b");
	str = str.replaceAll("孕", "B");
	str = str.replaceAll("菩", "v");
	str = str.replaceAll("伽", "V");
	str = str.replaceAll("怛", "k");
	str = str.replaceAll("俱", "K");
	str = str.replaceAll("哆", "j");
	str = str.replaceAll("度", "J");
	str = str.replaceAll("皤", "x");
	str = str.replaceAll("阇", "X");
	str = str.replaceAll("室", "q");
	str = str.replaceAll("地", "Q");
	str = str.replaceAll("利", "z");
	str = str.replaceAll("遮", "Z");
	str = str.replaceAll("穆", "0");
	str = str.replaceAll("参", "1");
	str = str.replaceAll("舍", "2");
	str = str.replaceAll("苏", "3");
	str = str.replaceAll("钵", "4");
	str = str.replaceAll("曳", "5");
	str = str.replaceAll("数", "6");
	str = str.replaceAll("写", "7");
	str = str.replaceAll("栗", "8");
	str = str.replaceAll("楞", "9");
	str = str.replaceAll("咩", "+");
	str = str.replaceAll("输", "/");
	str = str.replaceAll("漫", "=");

	var st = CryptoJS.AES.decrypt("U2FsdGVkX1" + str, key).toString(CryptoJS.enc.Utf8);


	return st;
}
