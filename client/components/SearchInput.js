import { Component } from 'react'
import PropTypes from 'prop-types'

export default class SearchInput extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	componentDidMount() {
		this.refs.searchInput.focus();
	}
	renderRecentSearches(){
		let recentSearches = this.props.recentSearches;

		return (
			<div className="RecentSearchesContainer">
				<div className="TitleContainer">
					<div className="Title">Recent Searches</div>
					<div className="Clear" 
							 onClick={() => this.context.actions.clearRecentSearches()}>clear</div>
				</div>
				<div className="RecentSearches">
				  {(() => {
				  	if(!recentSearches.length) {
				  		return (
				  			<span className="NoRecent">No recent searches</span>
				  		);
				  	}

					  return recentSearches.map((r, i) => (
					  	<div key={i} 
					  	     className="RecentSearch"
					  			 onClick={() => this.context.actions.updateAndSearch(r)}>{r}</div>
					  ));
				  })()}
			  </div>
			</div>
		);
	}
	render(){
		return (
			<div className="SearchInput">
				<div className="SearchInputContainer">
					<input ref="searchInput"
								 className="Search" 
								 onChange={e => this.context.actions.updateSearch(e.target.value)}
								 value={this.props.searchQuery}
								 placeholder="Search REI, Cabella's, Dick's and more..."/>	
					<div className="SearchButton" onClick={() => this.context.actions.search()}>
						Search
					</div>
				</div>
				{this.renderRecentSearches()}
			</div>
		);
	}
}

SearchInput.contextTypes = {
  actions: PropTypes.object
};
