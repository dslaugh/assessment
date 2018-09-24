import React from "react";
import PropTypes from 'prop-types';

const SearchInput = (props) => {
	return <input type="text" id="search" onKeyUp={ props.onKeyUp } placeholder="Search..." />;
};

SearchInput.propTypes = {
	onKeyUp: PropTypes.func.isRequired,
};

export default SearchInput;
