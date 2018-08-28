import React from 'react';
import html2canvas from 'html2canvas';
import './index.css';
// import domtoimage from 'dom-to-image';
// import {Button} from 'mui-react'
// import mui from 'mui';
// import './html2canvas.css';

function ClickToImage(props) {
    return <button onClick={props.clickToImage}>点我生成图片</button>
}

class Index extends React.Component {
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
        let width = this.refs.copyCardArea.scrollWidth;
        let height = this.refs.copyCardArea.scrollHeight;
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
                width: width,
                height: height
            })
        }).catch(function onRejected(error) {});
    }
    render() {
        return (
            <div>
                <ClickToImage className="save-button" clickToImage={this.toggleButton} />
                {/* <button className="save-button"  onClick={()=>this.cropCard()}>点击保存名片</button>  */}
                <div className="company-card-info center-father-style-align" ref="copyCardArea" id="copyCardArea">
                    <div id="copyArea" className="copyArea" ref="copyArea">
                        {this.props.children}
                        {/* <img src={this.state.url} /> */}
                    </div>
                </div>
                
                <h4>下面是截图部分：</h4>
                
                <div className="img-show"  style={{display: this.state.isDownloadImg ? "block":"none"}}>
                    <img src={this.state.imgUrl} style={{width:this.state.width, height:this.state.height}}/>
                </div>
            </div>
        )
    }
}

export default Index;