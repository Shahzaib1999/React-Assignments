import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';


class App extends Component {
    constructor() {
        super();
        this.state = {
            page: 1,
            data: [],
            condition: true,
            a: false
        };
    }
    // componentDidMount() {
    //     document.addEventListener("scroll", this.checkMore);
    // }

    // isBottom = el => {
    //     console.log('el',el);
    //     // debugger
    //     return el.getBoundingClientRect().bottom <= window.innerHeight;
    // };
    // checkMore = () => {
    //     // debugger
    //     const wrappedElement = document.getElementById("rootDIV");
    //     if (this.isBottom(wrappedElement)) {
    //         console.log("header bottom reached");
    //         this.setState({condition: true})
    //         this.check();
    //     }
    // };
    check = (number) => {
        const { page, condition } = this.state;
        // debugger
        const PATH_BASE = 'https://hn.algolia.com/api/v1';
        const PATH_SEARCH = '/search';
        const PARAM_SEARCH = 'query='; 
        const PARAM_PAGE = 'page='; 

        // fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}<text>&&${PARAM_PAGE}${page}`)
        fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}<text>&&${PARAM_PAGE}${number}`)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                

                const list = res.hits.map((value, index) => {
                    return (
                    <li>{value.title}{value.url}</li>
                ); 
                });
                
                this.setState({ data: list });
                // this.setState({ data: [...this.state.data,...list] });
                // this.setState({ condition: false});
            });
        this.setState({ page: page + 1});
    };

    render() {
        const { data, a } = this.state;
        return (
            <div id="rootDIV">
                {/* <button onClick={this.check}>Fetch Data</button> */}

                <button onClick={()=>this.check(0)}>0</button>
                <button onClick={()=>this.check(1)}>1</button>
                <button onClick={()=>this.check(2)}>2</button>
                <button onClick={()=>this.check(3)}>3</button>
                <button onClick={()=>this.check(4)}>4</button>
                <button onClick={()=>this.check(5)}>5</button>
                <button onClick={()=>this.check(6)}>6</button>
                <button onClick={()=>this.check(7)}>7</button>
                <button onClick={()=>this.check(8)}>8</button>
                <button onClick={()=>this.check(9)}>9</button>
                <button onClick={()=>this.check(10)}>10</button>

                <div>
                    <ul>{data}</ul>
                </div>
            </div>
        );
    }
}

export default App;
