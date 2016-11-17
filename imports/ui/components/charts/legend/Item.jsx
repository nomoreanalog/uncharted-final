import React, {PropTypes, Component} from 'react';
import {observer} from 'mobx-react';

import Dot from '../common/Dot.jsx';

// Item component - item to make up list in each section
@observer(['countryStore', 'indicatorStore', 'recordStore', 'store'])
class Item extends Component {

    constructor() {
        super();
        this._onClick = this._onClick.bind(this);
    }

    _onClick() {
        const {item, itemStore} = {...this.props};
        itemStore.setDraw(item);
    }

    render() {

        const {item} = {...this.props};

        const dotColor = item.type === 'country' ? item.color : '#00adc6',
            className = item.draw ? 'draw item' : 'item',
            style = item.draw ? {color: item.color} : {},
            dot = item.draw ? <Dot createSvg={true} fill={dotColor}/> : <Dot createSvg={true} fill='#636363'/>;

        return (
            <div
                key={item._id}
                className={className}
                onClick={this._onClick}>
                {dot}
                <div className="content" style={style}>{item.name}</div>
            </div>
        )

    }

}

export default Item;

Item.propTypes = {
    itemStore: PropTypes.any.isRequired,
    item: PropTypes.object.isRequired
};

Item.defaultProps = {};