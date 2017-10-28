import { Component, PropTypes } from 'react'
import Layout from '../components/Layout'
import Type from '../components/Type'

export default class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showSlide: false,
			showAbout: false
		}
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState({showSlide: true})
		}, 500);

		setTimeout(() => {
			this.setState({showAbout: true})
		}, 1100);
	}
	renderIntro(){
		return (
			<div className="Intro">
				<Type type="Hi, I'm Sam. I write software and do other cool stuff. I live in Seattle and work at a startup." typeSpeed="75"/>				
			</div>
		);
	}
	render(){
		return (
			<Layout>	
				<div className="Index Page">
					<div className={`Slide ${this.state.showSlide ? 'Open' : ''}`}></div>
					<div className={`About ${this.state.showAbout ? 'Open' : ''}`}>
						{(() => {
							if(this.state.showAbout && this.state.showSlide) {
								return this.renderIntro()
							}
						})()}
					</div>
				</div>
			</Layout>
		);
	}
}

