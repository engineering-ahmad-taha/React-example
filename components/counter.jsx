import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count :0,
    };

handleIncrement = (product) => {
console.log(product);
this.setState({count: this.state.count + 1})
};


render() { 

    return  ( <div>
                <span  className={this.getBadgeClasses()} >{this.formateCount()}</span>
                <button onClick={ (product) => this.handleIncrement(product)}  className="btn btn-secondery btn-sm">Increment</button>
            </div>);  
}

getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.state.count === 0) ? "warning" : "primary";
    return classes;
}

formateCount(){
    const { count } = this.state;
    const x = "zero";
    return (count === 0 ? x : count);
}

}
export default Counter;






















































 
//////////////////////////     min  1:15      ////////////////////////////////




// import React, { Component } from 'react';

// class Counter extends Component {
//     state = {
//         count :0,
//     };

// handleIncrement = (product) => {
// console.log(product);
// this.setState({count: this.state.count + 1})
// };

// doHandleIncrement = () => {
//     this.handleIncrement({id :1})
// };


// render() { 

//     return  ( <div>
//                 <span  className={this.getBadgeClasses()} >{this.formateCount()}</span>
//                 <button onClick={this.handleIncrement}  className="btn btn-secondery btn-sm">Increment</button>
//             </div>);  
// }

// getBadgeClasses() {
//     let classes = "badge m-2 badge-";
//     classes += (this.state.count === 0) ? "warning" : "primary";
//     return classes;
// }

// formateCount(){
//     const { count } = this.state;
//     const x = <h1>zero</h1>
//     return (count === 0 ? x : count);
// }

// }
// export default Counter;























































































// import React, { Component } from 'react';

// class Counter extends Component {
//     state = {
//         count :0,
//     };

// handleIncrement = () => {
// this.setState({count: this.state.count + 1})
// };

// render() { 

//     return  ( <div>
//                 <span  className={this.getBadgeClasses()} >{this.formateCount()}</span>
//                 <button onClick={this.handleIncrement}  className="btn btn-secondery btn-sm">Increment</button>
//             </div>);  
// }

// getBadgeClasses() {
//     let classes = "badge m-2 badge-";
//     classes += (this.state.count === 0) ? "warning" : "primary";
//     return classes;
// }

// formateCount(){
//     const { count } = this.state;
//     const x = <h1>zero</h1>
//     return (count === 0 ? x : count);
// }

// }
// export default Counter;





























































// import React, { Component } from 'react';

// class Counter extends Component {
//     state = {
//         count :0,
//     };

// handleIncrement = () => {
//     console.log('Increment Clicked',this);
// }

// render() { 

//     return  ( <div>
//                 <span  className={this.getBadgeClasses()} >{this.formateCount()}</span>
//                 <button onClick={this.handleIncrement}  className="btn btn-secondery btn-sm">Increment</button>
//             </div>);  
// }

// getBadgeClasses() {
//     let classes = "badge m-2 badge-";
//     classes += (this.state.count === 0) ? "warning" : "primary";
//     return classes;
// }

// formateCount(){
//     const { count } = this.state;
//     const x = <h1>zero</h1>
//     return (count === 0 ? x : count);
// }

// }
// export default Counter;


















































































// import React, { Component } from 'react';

// class Counter extends Component {
//     state = {
//         count :0,
//     };





//     constructor(){
//         super();
//       this.handleIncrement = this.handleIncrement.bind(this);
//     }

// handleIncrement() {
//     console.log('Increment Clicked',this);
// }


//     render() { 

//       return  ( <div>
//                    <span  className={this.getBadgeClasses()} >{this.formateCount()}</span>
//                    <button onClick={this.handleIncrement}  className="btn btn-secondery btn-sm">Increment</button>
//                </div>);  
//     }



//     getBadgeClasses() {
//         let classes = "badge m-2 badge-";
//         classes += (this.state.count === 0) ? "warning" : "primary";
//         return classes;
//     }

// formateCount(){
//     const { count } = this.state;
//     const x = <h1>zero</h1>
//     return (count === 0 ? x : count);
// }


// }
// export default Counter;





































































































// import React, { Component } from 'react';

// class Counter extends Component {
//     state = {
//         count :0,
//     };


// handleIncrement(){
//     console.log('Increment Clicked');
// }


//     render() { 

//       return  ( <div>
//                    <span  className={this.getBadgeClasses()} >{this.formateCount()}</span>
//                    <button onClick={this.handleIncrement}  className="btn btn-secondery btn-sm">Increment</button>
//                </div>);  
//     }



//     getBadgeClasses() {
//         let classes = "badge m-2 badge-";
//         classes += (this.state.count === 0) ? "warning" : "primary";
//         return classes;
//     }

// formateCount(){
//     const { count } = this.state;
//     const x = <h1>zero</h1>
//     return (count === 0 ? x : count);
// }


// }
// export default Counter;
















































// import React, { Component } from 'react';

// class Counter extends Component {
//     state = {
//         count :0,
//         tags:["tag1","tag2","tag3"]
//     };

// styles = {
//     fontSize: 50,
//     fontWeight: 'bold',
// };

// renderTags(){
//     if(this.state.tags.length === 0) return <p>There are no tags!</p>;
//     return <ul> {this.state.tags.map(tag => <li key={tag}>{tag}</li>) } </ul>
// }

//     render() { 
//       return  ( <div>
//                     {this.state.length  === 0 &&  "Please create a new tag!"}
//                     { this.renderTags()}
//                </div>);  
//     }
// }
// export default Counter;


































































































// import React, { Component } from 'react';

// class Counter extends Component {
//     state = {
//         count :0,
//         tags:["tag1","tag2","tag3"]
//     };

// styles = {
//     fontSize: 50,
//     fontWeight: 'bold',
// };

// renderTags(){
//     if(this.state.tags.length === 0) return <p>There are no tags!</p>;
//     return <ul> {this.state.tags.map(tag => <li key={tag}>{tag}</li>) } </ul>
// }

//     render() { 
//       return  ( <div>
//                     {this.state.length  === 0 &&  "Please create a new tag!"}
//                     { this.renderTags()}
//                </div>);  
//     }
// }
// export default Counter;
 











































































































// import React, { Component } from 'react';

// class Counter extends Component {
//     state = {
//         count :0,
//         tags:["tag1","tag2","tag3"]
//     };

// styles = {
//     fontSize: 50,
//     fontWeight: 'bold',
// };


//     render() { 

//       return  ( <div>
//                    <span style={this.styles}  className={this.getBadgeClasses()} >{this.formateCount()}</span>
//                    <button  className="btn btn-secondery btn-sm">Increment</button>

//                     <ul>
//                            {this.state.tags.map(tag => <li key={tag}>{tag}</li>) }
//                     </ul>

//                </div>);  
//     }



//     getBadgeClasses() {
//         let classes = "badge m-2 badge-";
//         classes += (this.state.count === 0) ? "warning" : "primary";
//         return classes;
//     }

// formateCount(){
//     const { count } = this.state;
//     const x = <h1>zero</h1>
//     return (count === 0 ? x : count);
// }


// }
// export default Counter;




























































// styles = {
//     fontSize: 50,
//     fontWeight: 'bold'
// };


// <span style={this.styles} className="badge badge-primary m-2">{this.formateCount()}</span>











// {/* <span style={{fontSize:30}}></span> */}







// import React, { Component } from 'react';

// class Counter extends Component {

//     state = {
//         count :0,
//         imageUrl :'https://picsum.photos/200'
//     };

//     render() { 
//       return  ( <div>
//                     <img src={this.state.imageUrl}  alt=""/>
//                    <span className="badge badge-primary m-2">{this.formateCount()}</span>
//                    <button  className="btn btn-secondery btn-sm">Increment</button>
//                </div>);  
//     }

 

// formateCount(){
//     const { count } = this.state;
//     const x = <h1>zero</h1>
//     return (count === 0 ? x : count);
// }


// }
// export default Counter;
































































































// import React, { Component } from 'react';

// class Counter extends Component {

//     state = {
//         count :0,
//     };




// styles = {
//     fontSize: 50,
//     fontWeight: 'bold',
// };



//     render() { 

//       return  ( <div>
//                    <span style={this.styles}  className={this.getBadgeClasses()} >{this.formateCount()}</span>
//                    <button  className="btn btn-secondery btn-sm">Increment</button>
//                </div>);  
//     }

 

//     getBadgeClasses() {
//         let classes = "badge m-2 badge-";
//         classes += (this.state.count === 0) ? "warning" : "primary";
//         return classes;
//     }

// formateCount(){
//     const { count } = this.state;
//     const x = <h1>zero</h1>
//     return (count === 0 ? x : count);
// }


// }
// export default Counter;
