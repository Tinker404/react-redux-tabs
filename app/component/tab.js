/**
 * Created by Tinker404 on 16/3/3.
 */
import React,{Component, PropTypes} from 'react'

export default class Tabs extends Component {
    render() {
        const {title, content, tabChange, active} = this.props
        return (
            <div>
                <ul id="tab-navs">
                    {title.map((item, key)=> {
                        return (
                            <li key={key} onClick={() => {tabChange(key)}}>
                                <a className={key === active ? "active" : null} href="#">
                                    {item}
                                </a>
                            </li>
                        )
                    })}
                </ul>

                <div id="tab-content">
                    {content.map((item, key)=> {
                        return (
                            <div style={{display: active === key ? 'block' : 'none'}} key={key}>
                                {item}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

Tabs.propTypes = {
    tabChange: PropTypes.func.isRequired,
    title: PropTypes.array.isRequired,
    content: PropTypes.array.isRequired
}