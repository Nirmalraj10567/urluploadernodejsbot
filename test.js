const { DownloaderHelper } = require("node-downloader-helper");
const q = "https://www.cryptocompare.com/media/19684/doge.png"
const dl = new DownloaderHelper(q,"./downloads");
dl.on("end", () => console.log(dl.getDownloadPath()))
dl.start()
