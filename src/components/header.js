import { photoArray, filterArray } from "../images/imagelist";
import React, { Component } from "react";

class FilterMenu extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(e) {
        this.props.onFilterChange(e.target.value);  
    };

    render() {
        const filters = filterArray('All');
        const activeFilter = this.props.activeFilter;
        const linkClass = "flex-auto text-xs sm:text-sm lg:text-base text-center text-gray-600 hover:text-gray-900 active:text-black";
        const menu = filters.map((filter) => (
            <button key={filter} className={activeFilter === filter ? `font-normal ${linkClass}` : `font-light ${linkClass}`} value={filter} onClick={this.handleChange} >
                {filter}
            </button>
        ));
        return (
            <header className="container mx-auto flex flex-row justify-between items-center space-x-4 bg-white py-6 px-6">
                <nav className="flex flex-row w-full justify-center content center">
                    {menu}
                </nav>
            </header>
        )
    }
}

export default FilterMenu