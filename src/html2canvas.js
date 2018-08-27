import React from 'react';
import html2canvas from 'html2canvas';
// import domtoimage from 'dom-to-image';
// import {Button} from 'mui-react'
// import mui from 'mui';
import './html2canvas.css';

function ClickToImage(props) {
    return <button onClick={props.clickToImage}>点我生成图片</button>
}

class Html2Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isDownloadImg:false};
        this.toggleButton = this.toggleButton.bind(this);
        // this.longPressSave = this.longPressSave.bind(this);
    }
    toggleButton() {
        let self = this;
        let card_target = this.refs.copyCardArea; 
        // domtoimage组件中，IOS不能截图，并且污染了canvas.toDataUrl会报错，目前没有解决方案
        // 所以目前暂不使用domtoimage  
        let b64;
        html2canvas(card_target, {
            useCORS: true
        }).then(function(canvas) {
            try {
                b64 = canvas.toDataURL("image/png");
            } catch (err) {
                console.log(err)
            }
            self.setState({
                imgUrl: b64,
                isDownloadImg: true,
            })
        }).catch(function onRejected(error) {});
    }
    // longPressSave() {
    //     var imgUrl = this.refs.saveImage.src;
	// 		console.log('图片地址：' + imgUrl);
	// 		var suffix = cutImageSuffix(imgUrl);
	// 		/**
	// 		 * http://dev.dcloud.net.cn/mui/ui/#dialog
	// 		 */
	// 		mui.confirm("是否下载此图片", "确认下载？", ["下载", "不下"], function(event) {
	// 			/**
	// 			 * index从0开始
	// 			 */
	// 			var index = event.index;
	// 			if(index == 0) {
	// 				/**
	// 				 * 创建下载任务
	// 				 * http://www.html5plus.org/doc/zh_cn/downloader.html#plus.downloader.createDownload
	// 				 */
	// 				var downLoader = plus.downloader.createDownload(imgUrl, {
	// 					method: 'GET',
	// 					filename: '_downloads/image' + suffix
	// 				}, function(download, status) {
	// 					var fileName = download.filename;
	// 					console.log('文件名:' + fileName);
	// 					console.log('下载状态：' + status);
	// 					/**
	// 					 * 保存至本地相册
	// 					 * http://www.html5plus.org/doc/zh_cn/gallery.html#plus.gallery.save
	// 					 */
	// 					plus.gallery.save(fileName, function() {
	// 						/**
	// 						 * 保存后，弹出对话框是否查看；
	// 						 * http://dev.dcloud.net.cn/mui/ui/#dialog
	// 						 */
	// 						mui.confirm("打开相册", "打开相册？", ["打开", "不看"], function(event) {
	// 							var gindex = event.index;
	// 							if(gindex == 0) {
	// 								/**
	// 								 * 选择图片
	// 								 * http://www.html5plus.org/doc/zh_cn/gallery.html#plus.gallery.pick
	// 								 */
	// 								plus.gallery.pick(function(file) {
	// 									mui.toast("你选择了图片：" + file);
	// 								}, function(error) {
	// 									console.log(error);
	// 								}, {

	// 								});
	// 							}
	// 						});
	// 					});
	// 				});
	// 				/**
	// 				 * 开始下载任务
	// 				 * http://www.html5plus.org/doc/zh_cn/downloader.html#plus.downloader.Download.start
	// 				 */
	// 				downLoader.start();
	// 			}
	// 		});
    // }
    render() {
        return (
            <div>
                <img src="http://t1.hxzdhn.com/uploads/tu/201603/143/fj5ld2cy1bn.jpg" ref="saveImage" onClick={this.onLongPress} />
                <ClickToImage className="save-button" clickToImage={this.toggleButton} />
                {/* <button className="save-button"  onClick={()=>this.cropCard()}>点击保存名片</button>  */}
                <div className="company-card-info center-father-style-align" ref="copyCardArea" id="copyCardArea">
                    <div id="copyArea" className="copyArea" ref="copyArea">
                        <div className="company-name-short">罗怡</div>
                        <div className="company-name-full">百家号</div>
                        <div className="company-connection">
                        <div className="company-phone">
                            <div className="inline-block company-phone-text">电话：</div>
                            <div className="inline-block company-phone-number">*保密*</div>
                        </div>
                        <div>
                            <div className="inline-block company-webmail-text">邮箱：</div>
                            <div className="inline-block company-webmail-number">luoyi06@baidu.com</div>
                        </div>
                        </div>
                    </div>
                </div>
                
                <h4>下面是截图部分：</h4>
                
                <div className="img-show"  style={{display: this.state.isDownloadImg ? "block":"none"}}>
                    <img src={this.state.imgUrl} style={{width:375, height:166}}/>
                </div>
            </div>
        )
    }
}

export default Html2Canvas;