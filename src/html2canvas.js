import React from 'react';
import PropTypes from 'prop-types';
import html2canvas from 'html2canvas';
// import './index.css';

// function ClickToImage(props) {
//     return <div onClick={props.clickToImage}>{props.children}</div>
// }

class Index extends React.Component {
    static propTypes = {
        clickBtn: PropTypes.string,
        executeArea: PropTypes.string,
        renderLayout: PropTypes.func,
        // pref: PropTypes.element
    }
    static defaultProps = {
        clickBtn: '',   // 点击元素的className
        executeArea: '',    // 生成图片的元素的className
        renderLayout: () => null,   // 渲染函数
        // pref: null
    }
    constructor(props) {
        super(props);
        this.state = {isDownloadImg:false};
        this.toggleButton = this.toggleButton.bind(this);
        // this.longPressSave = this.longPressSave.bind(this);
    }
    toggleButton(e) {
        if (this.props.clickBtn && !e.target.className.includes(this.props.clickBtn)) {
            return false;
        }
        console.log(e.target.className);
        console.log(this.props.executeArea);
        console.log(document.getElementsByClassName(this.props.executeArea));
        let self = this;
        // let card_target = this.refs.copyCardArea; 
        let card_target = document.getElementsByClassName(this.props.executeArea)[0];
        // domtoimage组件中，IOS不能截图，并且污染了canvas.toDataUrl会报错，目前没有解决方案
        // 所以目前暂不使用domtoimage 
        let b64;
        let height = document.documentElement.clientHeight;
        let width = card_target.clientWidth * (document.documentElement.clientHeight/card_target.scrollHeight);
        console.log(width,height);
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
        const {renderLayout} = this.props;
        return (
            <div>
                <div
                    className="save-button" 
                    onClick={(e) => this.toggleButton(e)}
                    style={{display: this.state.isDownloadImg ? "none":"block"}}
                >
                    {renderLayout()}
                </div>
                
                <div 
                    className="img-show"
                    style={{display: this.state.isDownloadImg ? "block":"none"}}
                >
                    <img 
                        src={this.state.imgUrl} 
                        style={{
                            width:this.state.width, 
                            height:this.state.height
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default Index;