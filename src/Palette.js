import React, { Component } from 'react'
import './Palette.css'
import ColorBox from './ColorBox'
import Navbar from './Navbar'

class Palette extends Component {
    constructor(props){
       super(props);
       this.state = {level : 500 , format : "hex"}
       this.changeLevel=this.changeLevel.bind(this)
       this.changeFormat = this.changeFormat.bind(this)
    }
    
    changeLevel(newLevel){
        this.setState({level : newLevel})
        
    }

    changeFormat(val){
       this.setState({format : val})
    }

    render() {
        const {colors} = this.props.palette
        const {level , format} = this.state


        const colorBoxes = colors[level].map(color => (
            <ColorBox background={color[format]} name={color.name} />
        ))
        return (
            <div className="Palette" >
            
              <Navbar level={level} changeLevel={this.changeLevel} changeFormat={this.changeFormat} />
              
                <div className="Palette-colors" >
                   {colorBoxes}
                </div>
            </div>
        )
    }
}

export default Palette

