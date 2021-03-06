const React = require('react');
const percentChange2 = (last, current) => {
   if (current > last) {
      return {
         pos: true,
         arrow: <i className="material-icons pos">arrow_drop_up</i>,
         prnct: "+" + String(((current - last) / last) * 100).slice(0, 4) + "%"
      };
   } else {
      return {
         pos: false,
         arrow: <i className="material-icons neg">arrow_drop_down</i>,
         prnct: "-" + String(((last - current) / last) * 100).slice(0, 4) + "%"
      };
   }
}
const returnLiClass = (animate, active) => {
   if (active) {
      return animate ? "li-info-box pos-li-active li-slideup" : "li-info-box pos-li-active";
   }
   return animate ? "li-info-box li-slideup" : "li-info-box";
};
export default class InfoLi extends React.Component {
   constructor(props) {
      super(props);
      this.state = {


      }
      this.whenClicked = this.whenClicked.bind(this);
   };
   whenClicked() {
      this.props.clicked(this.props.pos, this.props.index);
   }
   componentWillMount() {

   }
   render() {

      let liClass = returnLiClass(this.props.animate, this.props.active);
      let ani = this.props.animate ? 'slideUp ' + String(0.08 * this.props.index) + 's ease-out 0.6s 1 forwards' : "";
      let percentage = percentChange2(this.props.pos.pricestart, this.props.pos.priceend);
      let profit = "$" + String(Math.round((this.props.pos.priceend * this.props.pos.volume) - (this.props.pos.pricestart * this.props.pos.volume)));
      let dta = this.props.pos.date.slice(0, -5);
      return (<li className={liClass} style={{animation: ani}} onDragEnd={this.whenClicked.bind(this)} onMouseUp={this.whenClicked.bind(this)} draggable="true">
         
            <div className="li-span-block dt-span">
              {dta}
              </div> 
              <div className="li-span-block span-label-blue th-span">
              {this.props.pos.position}
              </div>
              <div className="li-span-block">
                <span className="big-kahuna">{this.props.pos.priceend}</span>
               {this.props.pos.volume}
              </div>
              <div className="li-span-block">
               <span>{percentage.arrow}</span>
               <span>{percentage.prnct}</span>
              </div>
               <div className="li-span-block">
               <span className={percentage.pos ? "span-green" : "span-red"}>{profit}</span>
              </div>
               
        </li>)

   }
};